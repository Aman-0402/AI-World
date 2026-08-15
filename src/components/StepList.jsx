export default function StepList({ steps }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-sm text-slate-700">{step}</span>
        </li>
      ))}
    </ol>
  )
}
