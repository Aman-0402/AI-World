import { FileDown, FileText } from 'lucide-react'

export default function ResourceCard({ resources }) {
  if (!resources || resources.length === 0) {
    return (
      <p className="text-sm text-slate-500">No file required for this task.</p>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {resources.map(({ name, downloadUrl }) => (
        <div
          key={name}
          className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-violet-600" aria-hidden="true" />
            <span className="text-sm font-medium text-slate-800">{name}</span>
          </div>
          <a
            href={downloadUrl}
            download
            className="flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_4px_12px_-4px_rgba(139,92,246,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_18px_-4px_rgba(139,92,246,0.6)]"
          >
            <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
            Download
          </a>
        </div>
      ))}
    </div>
  )
}
