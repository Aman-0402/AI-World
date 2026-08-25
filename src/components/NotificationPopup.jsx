import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bell, X } from 'lucide-react'
import { getUnseenNotifications, markAllSeen } from '../data/notifications.js'

export default function NotificationPopup() {
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    const unseen = getUnseenNotifications()
    if (unseen.length > 0) {
      setNotification(unseen[unseen.length - 1])
    }
  }, [])

  function handleClose() {
    markAllSeen()
    setNotification(null)
  }

  if (!notification) return null

  return (
    <div className="fixed inset-0 z-[105] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl border border-violet-100 bg-[#FFFCF5] p-6 shadow-2xl">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close notification"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-white">
          <Bell className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="font-display mt-4 text-lg font-bold text-slate-900">{notification.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{notification.message}</p>
        {notification.steps && (
          <ol className="mt-3 flex flex-col gap-1.5">
            {notification.steps.map((step, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                <span className="shrink-0 font-semibold text-violet-600">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        )}
        {notification.note && (
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{notification.note}</p>
        )}
        {notification.link && notification.link.to && (
          <Link
            to={notification.link.to}
            onClick={handleClose}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
          >
            {notification.link.label}
          </Link>
        )}
        {notification.link && notification.link.href && (
          <a
            href={notification.link.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="mt-5 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
          >
            {notification.link.label}
          </a>
        )}
        <button
          type="button"
          onClick={handleClose}
          className={
            notification.link
              ? 'mt-2 w-full rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50'
              : 'mt-5 w-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md'
          }
        >
          Got it
        </button>
      </div>
    </div>
  )
}
