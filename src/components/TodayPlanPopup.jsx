import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarDays, X } from 'lucide-react'
import { todayPlan } from '../data/todayPlan.js'
import { getChapterById } from '../data/chapters.js'

export default function TodayPlanPopup() {
  const [dismissed, setDismissed] = useState(false)

  if (!todayPlan || !todayPlan.chapterIds?.length || dismissed) return null

  const chapters = todayPlan.chapterIds
    .map((id) => getChapterById(id))
    .filter(Boolean)

  if (chapters.length === 0) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl border border-violet-100 bg-[#FFFCF5] p-6 shadow-2xl">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 text-white">
          <CalendarDays className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="font-display mt-4 text-lg font-bold text-slate-900">{todayPlan.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Today's session covers {chapters.length === 1 ? 'this chapter' : 'these chapters'}. Pick one to jump in.
        </p>
        <div className="mt-5 flex flex-col gap-2.5">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/chapter/${chapter.id}`}
              onClick={() => setDismissed(true)}
              className="flex items-center justify-between rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
            >
              <span>Start Chapter {String(chapter.id).padStart(2, '0')}</span>
              <span className="text-xs font-normal text-white/80">{chapter.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
