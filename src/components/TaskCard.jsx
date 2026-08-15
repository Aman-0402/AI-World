import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TaskCard({ task, index }) {
  return (
    <Link
      to={`/task/${task.id}`}
      className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-violet-300 hover:shadow-sm"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Task {String(index).padStart(2, '0')}
        </p>
        <p className="font-medium text-slate-900">{task.title}</p>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
    </Link>
  )
}
