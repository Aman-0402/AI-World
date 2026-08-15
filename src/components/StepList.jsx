import { FileDown, FileText } from 'lucide-react'

function renderStepText(step) {
  const parts = step.split(/"([^"]+)"/g)
  return parts.map((part, i) => {
    if (i % 2 === 0) return part ? <span key={i}>{part}</span> : null
    return (
      <span
        key={i}
        className="prompt-text mt-2 block select-none rounded-xl border-l-4 border-violet-500 bg-violet-100 px-4 py-3 font-mono text-base font-semibold leading-snug text-violet-900"
        onCopy={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        &ldquo;{part}&rdquo;
      </span>
    )
  })
}

function FileStep({ file }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <FileText className="h-5 w-5 text-violet-600" aria-hidden="true" />
        <span className="text-sm font-medium text-slate-800">{file.name}</span>
      </div>
      <a
        href={file.downloadUrl}
        download
        className="flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-700"
      >
        <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
        Download
      </a>
    </div>
  )
}

export default function StepList({ steps }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => {
        const isFile = typeof step === 'object' && step !== null && step.file
        return (
          <li key={i} className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="flex-1 text-sm text-slate-700">
              {isFile ? <FileStep file={{ name: step.file, downloadUrl: step.downloadUrl }} /> : renderStepText(step)}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
