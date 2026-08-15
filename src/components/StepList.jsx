function renderStepText(step) {
  const parts = step.split(/"([^"]+)"/g)
  return parts.map((part, i) => {
    if (i % 2 === 0) return part
    return (
      <span
        key={i}
        className="prompt-text mx-1 inline-block select-none rounded-lg bg-violet-50 px-2 py-0.5 font-mono text-[0.85em] italic text-violet-800"
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
          <span className="text-sm text-slate-700">{renderStepText(step)}</span>
        </li>
      ))}
    </ol>
  )
}
