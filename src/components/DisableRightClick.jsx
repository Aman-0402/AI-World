import { useEffect } from 'react'

export default function DisableRightClick() {
  useEffect(() => {
    function handleContextMenu(e) {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextMenu)
    return () => document.removeEventListener('contextmenu', handleContextMenu)
  }, [])

  return null
}
