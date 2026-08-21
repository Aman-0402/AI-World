import { useEffect, useState } from 'react'
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
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
        <button
          type="button"
          onClick={handleClose}
          className="mt-5 w-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
