import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, FileText, ExternalLink, Circle, Diamond, Heart } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import AIShortcuts from '../components/AIShortcuts.jsx'
import TaskCard from '../components/TaskCard.jsx'
import HiddenSpot from '../components/HiddenSpot.jsx'
import Footer from '../components/Footer.jsx'
import { getChapterById } from '../data/chapters.js'
import { getTasksByChapter } from '../data/tasks.js'
import { getChapterNotesUrl } from '../data/notes.js'

const HERO_PALETTES = [
  {
    border: 'border-red-200',
    gradient: 'from-red-300 via-rose-200 to-orange-100',
    shadow: 'shadow-[0_1px_2px_rgba(153,27,27,0.06),0_20px_40px_-24px_rgba(153,27,27,0.35)]',
    orb1: 'bg-red-400/40',
    orb2: 'bg-rose-300/40',
    orb3: 'bg-orange-300/50',
    label: 'text-red-900',
    heading: 'text-red-950',
    desc: 'text-red-950/80',
    backShadow: 'shadow-[0_1px_2px_rgba(153,27,27,0.06)]',
    backHover: 'hover:text-red-700',
  },
  {
    border: 'border-indigo-200',
    gradient: 'from-indigo-300 via-blue-200 to-sky-100',
    shadow: 'shadow-[0_1px_2px_rgba(55,48,163,0.06),0_20px_40px_-24px_rgba(55,48,163,0.35)]',
    orb1: 'bg-indigo-400/40',
    orb2: 'bg-blue-300/40',
    orb3: 'bg-sky-300/50',
    label: 'text-indigo-900',
    heading: 'text-indigo-950',
    desc: 'text-indigo-950/80',
    backShadow: 'shadow-[0_1px_2px_rgba(55,48,163,0.06)]',
    backHover: 'hover:text-indigo-700',
  },
  {
    border: 'border-teal-200',
    gradient: 'from-teal-300 via-emerald-200 to-lime-100',
    shadow: 'shadow-[0_1px_2px_rgba(15,118,110,0.06),0_20px_40px_-24px_rgba(15,118,110,0.35)]',
    orb1: 'bg-teal-400/40',
    orb2: 'bg-emerald-300/40',
    orb3: 'bg-lime-300/50',
    label: 'text-teal-900',
    heading: 'text-teal-950',
    desc: 'text-teal-950/80',
    backShadow: 'shadow-[0_1px_2px_rgba(15,118,110,0.06)]',
    backHover: 'hover:text-teal-700',
  },
  {
    border: 'border-amber-200',
    gradient: 'from-amber-300 via-yellow-200 to-orange-100',
    shadow: 'shadow-[0_1px_2px_rgba(180,83,9,0.06),0_20px_40px_-24px_rgba(180,83,9,0.35)]',
    orb1: 'bg-amber-400/40',
    orb2: 'bg-yellow-300/40',
    orb3: 'bg-orange-300/50',
    label: 'text-amber-900',
    heading: 'text-amber-950',
    desc: 'text-amber-950/80',
    backShadow: 'shadow-[0_1px_2px_rgba(180,83,9,0.06)]',
    backHover: 'hover:text-amber-700',
  },
  {
    border: 'border-fuchsia-200',
    gradient: 'from-fuchsia-300 via-pink-200 to-rose-100',
    shadow: 'shadow-[0_1px_2px_rgba(157,23,77,0.06),0_20px_40px_-24px_rgba(157,23,77,0.35)]',
    orb1: 'bg-fuchsia-400/40',
    orb2: 'bg-pink-300/40',
    orb3: 'bg-rose-300/50',
    label: 'text-fuchsia-900',
    heading: 'text-fuchsia-950',
    desc: 'text-fuchsia-950/80',
    backShadow: 'shadow-[0_1px_2px_rgba(157,23,77,0.06)]',
    backHover: 'hover:text-fuchsia-700',
  },
]

export default function ChapterDetails() {
  const { chapterId } = useParams()
  const chapter = getChapterById(chapterId)
  const [hero] = useState(() => HERO_PALETTES[Math.floor(Math.random() * HERO_PALETTES.length)])

  if (!chapter || chapter.locked) {
    return <Navigate to="/explore" replace />
  }

  const tasks = getTasksByChapter(chapter.id)
  const notesUrl = getChapterNotesUrl(chapter.id)

  return (
    <div className="relative flex min-h-screen flex-col bg-[#FAF6EC]">
      <Navbar />
      <HiddenSpot icon={Circle} className="right-6 top-20 text-slate-500 hover:text-violet-600" />
      <HiddenSpot icon={Diamond} className="left-6 top-40 text-slate-500 hover:text-violet-600" />
      <HiddenSpot icon={Heart} className="bottom-4 right-4 text-slate-500 hover:text-violet-600" />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-3xl border ${hero.border} bg-gradient-to-br ${hero.gradient} p-6 ${hero.shadow} sm:p-8`}>
          <div
            className={`hero-orb pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full ${hero.orb1} blur-3xl`}
            aria-hidden="true"
          />
          <div
            className={`hero-orb pointer-events-none absolute bottom-[-3rem] left-1/3 h-32 w-32 rounded-full ${hero.orb2} blur-3xl`}
            style={{ animationDelay: '-4s' }}
            aria-hidden="true"
          />
          <div
            className={`hero-orb pointer-events-none absolute -bottom-8 right-10 h-24 w-24 rounded-full ${hero.orb3} blur-2xl`}
            style={{ animationDelay: '-9s' }}
            aria-hidden="true"
          />

          <span
            className="font-display pointer-events-none absolute -right-4 -top-8 select-none text-[9rem] font-bold leading-none text-white/30 sm:text-[11rem]"
            aria-hidden="true"
          >
            {String(chapter.id).padStart(2, '0')}
          </span>

          <Link
            to="/explore"
            className={`relative inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 ${hero.backShadow} backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white ${hero.backHover}`}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </Link>

          <p className={`relative mt-6 text-sm font-semibold uppercase tracking-wide ${hero.label}`}>
            Chapter {String(chapter.id).padStart(2, '0')}
          </p>
          <h1 className={`font-display relative mt-1 max-w-xl text-3xl font-bold ${hero.heading} sm:text-4xl`}>
            {chapter.title}
          </h1>
          <p className={`relative mt-3 max-w-xl ${hero.desc}`}>{chapter.description}</p>
        </div>

        <h2 className="font-display mt-10 text-lg font-semibold text-slate-900">Notes</h2>
        <div className="mt-4">
          {notesUrl ? (
            <a
              href={notesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-200/70 bg-[#FFFCF5] px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-[#F6F0FF] hover:shadow-[0_8px_20px_-12px_rgba(109,40,217,0.3)]"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-violet-600" aria-hidden="true" />
                <span className="font-medium text-slate-900">Chapter {String(chapter.id).padStart(2, '0')} Notes (PDF)</span>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-gradient-to-br group-hover:from-violet-500 group-hover:to-cyan-400 group-hover:text-white">
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          ) : (
            <p className="text-sm text-slate-500">No notes available for this chapter yet.</p>
          )}
        </div>

        <h2 className="font-display mt-8 text-lg font-semibold text-slate-900">Tasks</h2>
        <div className="mt-4 flex flex-col gap-3">
          {tasks.map((task, i) => (
            <TaskCard key={task.id} task={task} index={i + 1} />
          ))}
        </div>
      </main>
      <Footer />
      <AIShortcuts />
    </div>
  )
}
