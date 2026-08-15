import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ChapterCard({ chapter, taskCount }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div>
        <p className="text-sm font-medium text-violet-600">
          Chapter {String(chapter.id).padStart(2, '0')}
        </p>
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
