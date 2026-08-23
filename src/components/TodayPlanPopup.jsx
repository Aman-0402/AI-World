import { useState } from 'react'
import { ArrowRight, CalendarDays, X } from 'lucide-react'
import { todayPlan } from '../data/todayPlan.js'
import { getChapterById } from '../data/chapters.js'
import ConfirmStartChapter from './ConfirmStartChapter.jsx'

export default function TodayPlanPopup() {
  const [dismissed, setDismissed] = useState(false)
  const [confirmChapter, setConfirmChapter] = useState(null)

  if (!todayPlan || !todayPlan.chapterIds?.length || dismissed) return null

  const chapters = todayPlan.chapterIds
    .map((id) => getChapterById(id))
    .filter(Boolean)

  if (chapters.length === 0) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-violet-100 bg-[#FFFCF5] p-6 shadow-2xl sm:p-8">
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
        <div className={`mt-5 grid gap-3 ${chapters.length > 1 ? 'sm:grid-cols-2' : ''}`}>
          {chapters.map((chapter) => (
            <button
              type="button"
              key={chapter.id}
              onClick={() => setConfirmChapter(chapter)}
              className="group flex flex-col justify-between rounded-xl border border-violet-100 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md"
            >
              <span className="font-display text-base font-bold text-slate-900">{chapter.title}</span>
              <span className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-violet-600">
                Start chapter
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {confirmChapter && (
        <ConfirmStartChapter
          chapter={confirmChapter}
          onClose={() => {
            setConfirmChapter(null)
            setDismissed(true)
          }}
        />
      )}
    </div>
  )
}
