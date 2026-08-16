import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function TaskCard({ task, index }) {
  return (
    <Link
      to={`/task/${task.id}`}
      className="group flex items-center justify-between rounded-xl border border-slate-200/70 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_8px_20px_-12px_rgba(109,40,217,0.3)]"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Task {String(index).padStart(2, '0')}
        </p>
        <p className="font-medium text-slate-900">{task.title}</p>
      </div>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:translate-x-0.5 group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-cyan-400 group-hover:text-white">
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  )
}
