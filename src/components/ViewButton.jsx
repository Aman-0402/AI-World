import { Eye } from 'lucide-react'

export default function ViewButton({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full border border-blue-200 bg-white px-4 text-xs font-semibold text-blue-700 shadow-[0_1px_2px_rgba(30,64,175,0.06)] transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
    >
      <Eye className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>View</span>
    </a>
  )
}
