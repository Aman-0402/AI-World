import { useEffect, useRef, useState } from 'react'
import { Bot, Sparkles, MessageCircleMore, FolderOpenDot, Keyboard, X } from 'lucide-react'

const tools = [
  { name: 'ChatGPT', href: 'https://chat.openai.com', icon: MessageCircleMore },
  { name: 'Google Gemini', href: 'https://gemini.google.com', icon: Sparkles },
  { name: 'Claude', href: 'https://claude.ai', icon: Bot },
  {
    name: 'Google Drive',
    href: 'https://drive.google.com/drive/u/2/folders/10BkVkBvrbZATsUh5czV_mQxoV8iVkLGL',
    icon: FolderOpenDot,
  },
  { name: 'Typing Practice', href: 'https://www.typing.com', icon: Keyboard },
]

export default function AIShortcuts() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

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

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6" ref={containerRef}>
      {open && (
        <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur">
          {tools.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              <Icon className="h-4 w-4 text-violet-600" aria-hidden="true" />
              <span>{name}</span>
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close AI tool shortcuts' : 'Open AI tool shortcuts'}
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-violet-600 shadow-lg backdrop-blur transition hover:bg-slate-100"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Sparkles className="h-5 w-5" aria-hidden="true" />}
      </button>
    </div>
  )
}
