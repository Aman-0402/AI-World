import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, ChevronRight } from 'lucide-react'
import { notifications, getSeenIds, markAllSeen } from '../data/notifications.js'

const PREVIEW_COUNT = 3

export default function NotificationBell() {
  const [open, setOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)
  const [hasUrgentUnread, setHasUrgentUnread] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const seenIds = getSeenIds()
    const unseen = notifications.filter((n) => !seenIds.includes(n.id))
    setUnreadCount(unseen.length)
    setHasUrgentUnread(unseen.some((n) => n.urgent))
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

  const preview = [...notifications].reverse().slice(0, PREVIEW_COUNT)

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
          <span
            className={`absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-bold text-white ${
              hasUrgentUnread ? 'bg-gradient-to-br from-red-600 to-rose-500' : 'bg-gradient-to-br from-violet-600 to-fuchsia-500'
            }`}
          >
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl sm:w-96">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="font-display text-sm font-bold text-slate-900">Notifications</p>
          </div>

          {preview.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-slate-500">No notifications yet.</p>
          ) : (
            <div className="flex flex-col divide-y divide-slate-100">
              {preview.map((n) => (
                <div key={n.id} className="px-4 py-3 transition hover:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-semibold ${n.urgent ? 'text-red-700' : 'text-slate-900'}`}>{n.title}</p>
                    {n.urgent && (
                      <span className="rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-700">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 line-clamp-2 text-sm text-slate-600">{n.message}</p>
                  {n.date && <p className="mt-1 text-xs text-slate-400">{n.date}</p>}
                </div>
              ))}
            </div>
          )}

          <Link
            to="/notifications"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-1 border-t border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-violet-600 transition hover:bg-slate-100"
          >
            Show all notifications
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  )
}
