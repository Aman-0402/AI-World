import { useEffect } from 'react'

const BLOCKED_KEYS = new Set(['p', 'c', 'x', 'a', 's', 'u'])
const BLOCKED_DEVTOOLS_KEYS = new Set(['i', 'j', 'c'])

export default function DisableShortcuts() {
  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key.toLowerCase()

      if (e.key === 'F12') {
        e.preventDefault()
        return
      }

      if ((e.ctrlKey || e.metaKey) && e.shiftKey && BLOCKED_DEVTOOLS_KEYS.has(key)) {
        e.preventDefault()
        return
      }

      if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && BLOCKED_KEYS.has(key)) {
        e.preventDefault()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return null
}
