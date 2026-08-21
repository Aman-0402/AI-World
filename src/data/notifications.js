export const notifications = [
  // { id: 1, title: 'Welcome', message: '...', date: '2026-08-21' },
]

const STORAGE_KEY = 'ai-world-seen-notifications'

export function getSeenIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

export function markAllSeen() {
  const ids = notifications.map((n) => n.id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

export function getUnseenNotifications() {
  const seenIds = getSeenIds()
  return notifications.filter((n) => !seenIds.includes(n.id))
}
