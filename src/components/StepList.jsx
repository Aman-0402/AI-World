import { useRef, useState } from 'react'
import { ExternalLink, FileText, Lightbulb, TriangleAlert } from 'lucide-react'
import DownloadButton from './DownloadButton.jsx'
import ViewButton from './ViewButton.jsx'

const COPY_WARNING = 'aab se Copy krna bnd, typing suru'

function renderStepText(step) {
  const parts = step.split(/"([^"]+)"/g)
  return parts.map((part, i) => {
    if (i % 2 === 0) return part ? <span key={i}>{part}</span> : null
    return (
      <span
        key={i}
        data-text={part}
        aria-label="Quoted AI prompt shown in the box below — ask your teacher to read it aloud if needed"
        className="prompt-text mt-2 block select-none rounded-xl border-l-4 border-blue-600 bg-blue-100 px-4 py-3 font-mono text-base font-semibold leading-snug text-blue-950 shadow-[0_1px_2px_rgba(30,64,175,0.1)]"
      />
    )
  })
}

function ChecklistStep({ intro, checklist, outro }) {
  return (
    <div>
      {intro && <p className="mb-2">{intro}</p>}
      <ul className="flex flex-col gap-1.5 rounded-xl border border-blue-100 bg-blue-50/60 p-3">
        {checklist.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-slate-700">
            <span className="text-blue-500" aria-hidden="true">
              &bull;
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {outro && <p className="mt-2">{outro}</p>}
    </div>
  )
}

function PromptBox({ label, text }) {
  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-blue-200 bg-blue-50">
      <p className="border-b border-blue-200 bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-900">
        {label}
      </p>
      <span
        data-text={text}
        aria-label="Prompt shown in the box. Type it into the AI tool."
        className="prompt-text block select-none px-4 py-3 font-mono text-sm font-semibold leading-relaxed text-blue-950"
      />
    </div>
  )
}

function SectionStep({ step }) {
  return (
    <div>
      <p className="text-base font-bold leading-snug text-slate-900">{step.heading}</p>
      {step.intro && <p className="mt-1.5 leading-relaxed">{step.intro}</p>}
      {step.files && (
        <div className="mt-3 flex flex-col gap-2">
          {step.files.map((file) => (
            <FileStep key={file.file} file={{ name: file.file, downloadUrl: file.downloadUrl }} />
          ))}
        </div>
      )}
      {step.links && (
        <div className="mt-3 flex flex-wrap gap-2">
          {step.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              {link.label}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
      {step.actions && (
        <ol className="mt-3 flex flex-col gap-2">
          {step.actions.map((action, i) => (
            <li key={i} className="flex gap-2.5 leading-relaxed">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                {i + 1}
              </span>
              <span>{action}</span>
            </li>
          ))}
        </ol>
      )}
      {step.prompt && <PromptBox label={step.promptLabel ?? 'Prompt to type in NotebookLM'} text={step.prompt} />}
      {step.purpose && (
        <p className="mt-2 leading-relaxed">
          <span className="font-semibold text-slate-900">Purpose: </span>
          {step.purpose}
        </p>
      )}
      {step.table && (
        <div className="mt-3 overflow-x-auto rounded-xl border border-blue-100">
          <table className="min-w-full divide-y divide-blue-100 text-left text-sm">
            <thead className="bg-blue-50">
              <tr>
                {step.table.columns.map((column) => (
                  <th key={column} scope="col" className="px-3 py-2 font-semibold text-slate-900">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50 bg-white">
              {step.table.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} className="px-3 py-2 align-top leading-relaxed">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {step.checks && (
        <ul className="mt-3 flex flex-col gap-1.5 rounded-xl border border-blue-100 bg-blue-50/60 p-3">
          {step.checks.map((check, i) => (
            <li key={i} className="flex gap-2 leading-relaxed">
              <span className="mt-1 h-4 w-4 shrink-0 rounded border border-blue-400 bg-white" aria-hidden="true" />
              <span>{check}</span>
            </li>
          ))}
        </ul>
      )}
      {step.tip && (
        <div className="mt-3 flex gap-2.5 rounded-xl border-l-4 border-blue-500 bg-blue-50 px-3.5 py-2.5 leading-relaxed">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
          <span>
            <span className="font-semibold text-slate-900">Tip: </span>
            {step.tip}
          </span>
        </div>
      )}
      {step.warning && (
        <div className="mt-3 flex gap-2.5 rounded-xl border-l-4 border-blue-900 bg-slate-100 px-3.5 py-2.5 leading-relaxed">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-blue-900" aria-hidden="true" />
          <span>
            <span className="font-semibold text-slate-900">Important: </span>
            {step.warning}
          </span>
        </div>
      )}
    </div>
  )
}

function FileStep({ file }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <FileText className="h-5 w-5 text-blue-600" aria-hidden="true" />
        <span className="text-sm font-medium text-slate-800">{file.name}</span>
      </div>
      <div className="flex items-center gap-2">
        <ViewButton href={file.downloadUrl} />
        <DownloadButton href={file.downloadUrl} />
      </div>
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
          const isChecklist = typeof step === 'object' && step !== null && step.checklist
          const isSection = typeof step === 'object' && step !== null && step.heading
          return (
            <li key={i} className="flex gap-4 bg-white px-4 py-3 even:bg-blue-50/50">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center self-start rounded-md bg-blue-600 text-xs font-semibold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 py-0.5 text-sm text-slate-700">
                {isSection ? (
                  <SectionStep step={step} />
                ) : isFile ? (
                  <FileStep file={{ name: step.file, downloadUrl: step.downloadUrl }} />
                ) : isChecklist ? (
                  <ChecklistStep intro={step.intro} checklist={step.checklist} outro={step.outro} />
                ) : (
                  renderStepText(step)
                )}
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
