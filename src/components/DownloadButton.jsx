import { useRef, useState } from 'react'
import { FileDown } from 'lucide-react'

export default function DownloadButton({ href }) {
  const [active, setActive] = useState(false)
  const timeoutRef = useRef(null)

  function handleClick() {
    setActive(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setActive(false), 1600)
  }

  return (
    <a
      href={href}
      download
      onClick={handleClick}
      className={`relative inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-blue-700 to-blue-400 text-xs font-semibold text-white shadow-[0_4px_12px_-4px_rgba(29,78,216,0.55)] transition-all duration-500 ease-in-out before:absolute before:inset-[-3px] before:rounded-full before:border-[3px] before:border-transparent before:opacity-0 before:transition-opacity before:duration-300 ${
        active
          ? 'w-11 px-0 shadow-[0_8px_18px_-4px_rgba(29,78,216,0.6)] before:animate-spin before:border-t-white before:border-r-white before:opacity-100'
          : 'w-[132px] px-4'
      }`}
    >
      <FileDown
        className={`shrink-0 transition-all duration-500 ${active ? 'h-5 w-5' : 'h-3.5 w-3.5'}`}
        aria-hidden="true"
      />
      <span className={`transition-opacity duration-200 ${active ? 'hidden' : ''}`}>Download</span>
    </a>
  )
}
