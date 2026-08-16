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

export default function ChapterDetails() {
  const { chapterId } = useParams()
  const chapter = getChapterById(chapterId)

  if (!chapter) {
    return <Navigate to="/explore" replace />
  }

  const tasks = getTasksByChapter(chapter.id)
  const notesUrl = getChapterNotesUrl(chapter.id)

  return (
    <div className="relative flex min-h-screen flex-col bg-[#FAF6EC]">
      <Navbar />
      <HiddenSpot icon={Circle} className="right-6 top-20 text-slate-300/40 hover:text-violet-500/70" />
      <HiddenSpot icon={Diamond} className="left-6 top-40 text-slate-300/40 hover:text-violet-500/70" />
      <HiddenSpot icon={Heart} className="bottom-4 right-4 text-slate-300/40 hover:text-violet-500/70" />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/explore"
          className="inline-flex items-center gap-1 rounded-full px-1 text-sm font-medium text-slate-500 transition hover:text-violet-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Explore
        </Link>

        <p className="mt-4 text-sm font-medium text-violet-600">
          Chapter {String(chapter.id).padStart(2, '0')}
        </p>
        <h1 className="font-display mt-1 text-3xl font-bold text-slate-900">{chapter.title}</h1>
        <p className="mt-2 text-slate-600">{chapter.description}</p>

        <h2 className="font-display mt-8 text-lg font-semibold text-slate-900">Notes</h2>
        <div className="mt-4">
          {notesUrl ? (
            <a
              href={notesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-slate-200/70 bg-white px-4 py-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_8px_20px_-12px_rgba(109,40,217,0.3)]"
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
