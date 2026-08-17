import { FileDown } from 'lucide-react'

export default function DownloadButton({ href }) {
  return (
    <a
      href={href}
      download
      className="group relative inline-flex h-11 w-[132px] shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-to-br from-violet-600 to-cyan-400 px-4 text-xs font-semibold text-white shadow-[0_4px_12px_-4px_rgba(139,92,246,0.55)] transition-all duration-500 ease-in-out before:absolute before:inset-[-3px] before:rounded-full before:border-[3px] before:border-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:w-11 hover:px-0 hover:shadow-[0_8px_18px_-4px_rgba(139,92,246,0.6)] hover:before:animate-spin hover:before:border-t-white hover:before:border-r-white hover:before:opacity-100"
    >
      <FileDown className="h-3.5 w-3.5 shrink-0 transition-all duration-500 group-hover:h-5 group-hover:w-5" aria-hidden="true" />
      <span className="transition-opacity duration-200 group-hover:hidden">Download</span>
    </a>
  )
}
