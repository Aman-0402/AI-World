import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'
import { notifications, getSeenIds, markAllSeen } from '../data/notifications.js'

export default function NotificationBell() {
  const [open, setOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const seenIds = getSeenIds()
    setUnreadCount(notifications.filter((n) => !seenIds.includes(n.id)).length)
  }, [])

  useEffect(() => {
    if (!open) return
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  function handleToggle() {
    setOpen((v) => !v)
    if (unreadCount > 0) {
      markAllSeen()
      setUnreadCount(0)
    }
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={handleToggle}
        aria-label={open ? 'Close notifications' : 'Open notifications'}
        aria-expanded={open}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/70 bg-[#FFFCF5] text-slate-600 transition hover:border-violet-200 hover:bg-[#F6F0FF] hover:text-violet-700"
      >
        <Bell className="h-4.5 w-4.5" aria-hidden="true" />
        {unreadCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 px-1 text-[10px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg sm:w-80">
          {notifications.length === 0 ? (
            <p className="px-3 py-6 text-center text-sm text-slate-500">No notifications yet.</p>
          ) : (
            <div className="flex max-h-80 flex-col gap-1 overflow-y-auto">
              {[...notifications].reverse().map((n) => (
                <div key={n.id} className="rounded-xl px-3 py-2.5 transition hover:bg-slate-50">
                  <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{n.message}</p>
                  {n.steps && (
                    <ol className="mt-1.5 flex flex-col gap-1">
                      {n.steps.map((step, i) => (
                        <li key={i} className="flex gap-1.5 text-sm text-slate-600">
                          <span className="shrink-0 font-semibold text-violet-600">{i + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {n.note && <p className="mt-1.5 text-sm text-slate-600">{n.note}</p>}
                  {n.link && n.link.to && (
                    <Link
                      to={n.link.to}
                      className="mt-1.5 inline-block text-sm font-semibold text-violet-600 hover:underline"
                    >
                      {n.link.label}
                    </Link>
                  )}
                  {n.link && n.link.href && (
                    <a
                      href={n.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-block text-sm font-semibold text-violet-600 hover:underline"
                    >
                      {n.link.label}
                    </a>
                  )}
                  {n.date && <p className="mt-1 text-xs text-slate-400">{n.date}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
