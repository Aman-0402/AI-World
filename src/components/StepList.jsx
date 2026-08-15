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

export default function StepList({ steps }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="flex-1 text-sm text-slate-700">{renderStepText(step)}</span>
        </li>
      ))}
    </ol>
  )
}
