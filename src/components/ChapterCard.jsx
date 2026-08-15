import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react'

const STATUS_STYLES = {
  complete: {
    card: 'border-emerald-300 bg-emerald-50',
    badge: 'bg-emerald-600 text-white',
    label: 'Completed',
    icon: CheckCircle2,
  },
  ongoing: {
    card: 'border-amber-300 bg-amber-50',
    badge: 'bg-amber-500 text-white',
    label: 'In Progress',
    icon: Clock,
  },
}

export default function ChapterCard({ chapter, taskCount }) {
  const status = STATUS_STYLES[chapter.status]

  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${
        status ? status.card : 'border-slate-200 bg-white'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium text-violet-600">
            Chapter {String(chapter.id).padStart(2, '0')}
          </p>
          {status && (
            <span className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${status.badge}`}>
              <status.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {status.label}
            </span>
          )}
        </div>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">{chapter.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{chapter.description}</p>
        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
          {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
        </p>
      </div>
      <Link
        to={`/chapter/${chapter.id}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-violet-600"
      >
        Explore Chapter <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  )
}
