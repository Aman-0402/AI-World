import { FileDown, FileText } from 'lucide-react'

export default function ResourceCard({ fileName, downloadUrl }) {
  if (!fileName) {
    return (
      <p className="text-sm text-slate-500">No file required for this task.</p>
    )
  }

  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <FileText className="h-5 w-5 text-violet-600" aria-hidden="true" />
        <span className="text-sm font-medium text-slate-800">{fileName}</span>
      </div>
      <a
        href={downloadUrl}
        download
        className="flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-700"
      >
        <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
        Download
      </a>
    </div>
  )
}
