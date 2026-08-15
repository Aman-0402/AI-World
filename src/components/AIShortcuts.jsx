import { Bot, Sparkles, MessageCircleMore, FolderOpenDot } from 'lucide-react'

const tools = [
  { name: 'ChatGPT', href: 'https://chat.openai.com', icon: MessageCircleMore },
  { name: 'Google Gemini', href: 'https://gemini.google.com', icon: Sparkles },
  { name: 'Claude', href: 'https://claude.ai', icon: Bot },
  { name: 'Google Drive', href: 'https://drive.google.com', icon: FolderOpenDot },
]

export default function AIShortcuts() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
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
            <span className="hidden sm:inline">{name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
