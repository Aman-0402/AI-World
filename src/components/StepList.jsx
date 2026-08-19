import { useRef, useState } from 'react'
import { FileText } from 'lucide-react'
import DownloadButton from './DownloadButton.jsx'

const COPY_WARNING = 'aab se Copy krna bnd, typing suru'

function renderStepText(step) {
  const parts = step.split(/"([^"]+)"/g)
  return parts.map((part, i) => {
    if (i % 2 === 0) return part ? <span key={i}>{part}</span> : null
    return (
      <span
        key={i}
        className="prompt-text mt-2 block select-none rounded-xl border-l-4 border-blue-600 bg-blue-100 px-4 py-3 font-mono text-base font-semibold leading-snug text-blue-950 shadow-[0_1px_2px_rgba(30,64,175,0.1)]"
      >
        &ldquo;{part}&rdquo;
      </span>
    )
  })
}

function FileStep({ file }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <FileText className="h-5 w-5 text-blue-600" aria-hidden="true" />
        <span className="text-sm font-medium text-slate-800">{file.name}</span>
      </div>
      <DownloadButton href={file.downloadUrl} />
    </div>
  )
}

export default function StepList({ steps }) {
  const [toast, setToast] = useState(false)
  const timeoutRef = useRef(null)

  function handleCopy(e) {
    const target = window.getSelection()?.anchorNode?.parentElement?.closest('.prompt-text')
    if (!target) return
    e.preventDefault()
    e.clipboardData.setData('text/plain', COPY_WARNING)
    setToast(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setToast(false), 2500)
  }

  return (
    <div className="relative">
      <ol
        className="overflow-hidden rounded-xl border border-blue-100 divide-y divide-blue-100"
        onCopy={handleCopy}
      >
        {steps.map((step, i) => {
          const isFile = typeof step === 'object' && step !== null && step.file
          return (
            <li key={i} className="flex gap-4 bg-white px-4 py-3 even:bg-blue-50/50">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center self-start rounded-md bg-blue-600 text-xs font-semibold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 py-0.5 text-sm text-slate-700">
                {isFile ? <FileStep file={{ name: step.file, downloadUrl: step.downloadUrl }} /> : renderStepText(step)}
              </span>
            </li>
          )
        })}
      </ol>
      {toast && (
        <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
          <div className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg">
            {COPY_WARNING}
          </div>
        </div>
      )}
    </div>
  )
}
