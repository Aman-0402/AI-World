import { CheckCircle2 } from 'lucide-react'

export default function LearningOutcome({ outcomes }) {
  return (
    <ul className="space-y-2">
      {outcomes.map((outcome, i) => (
        <li key={i} className="flex gap-2 text-sm text-slate-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
          <span>{outcome}</span>
        </li>
      ))}
    </ul>
  )
}
