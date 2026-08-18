import { FileText } from 'lucide-react'
import DownloadButton from './DownloadButton.jsx'

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
          className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-blue-600" aria-hidden="true" />
            <span className="text-sm font-medium text-slate-800">{name}</span>
          </div>
          <DownloadButton href={downloadUrl} />
        </div>
      ))}
    </div>
  )
}
