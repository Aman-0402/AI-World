import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react'

const STATUS_STYLES = {
  complete: {
    card: 'border-emerald-300/70 bg-emerald-50/80',
    badge: 'bg-emerald-600 text-white',
    label: 'Completed',
    icon: CheckCircle2,
  },
  ongoing: {
    card: 'border-amber-300/70 bg-amber-50/80',
    badge: 'bg-amber-500 text-white',
    label: 'In Progress',
    icon: Clock,
  },
}

export default function ChapterCard({ chapter, taskCount }) {
  const status = STATUS_STYLES[chapter.status]

  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_28px_-16px_rgba(109,40,217,0.18)] transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_4px_10px_rgba(15,23,42,0.06),0_20px_36px_-16px_rgba(109,40,217,0.28)] ${
        status ? status.card : 'border-slate-200/70 bg-[#FFFCF5] hover:bg-[#F6F0FF]'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium text-violet-600">
            Chapter {String(chapter.id).padStart(2, '0')}
          </p>
          {status && (
            <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ${status.badge}`}>
              <status.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {status.label}
            </span>
          )}
        </div>
        <h3 className="font-display mt-1 text-lg font-semibold text-slate-900">{chapter.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{chapter.description}</p>
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
          {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
        </p>
      </div>
      <Link
        to={`/chapter/${chapter.id}`}
        className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition hover:text-violet-600"
      >
        Explore Chapter
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 transition group-hover:translate-x-0.5 group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-cyan-400 group-hover:text-white">
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </Link>
    </div>
  )
}
