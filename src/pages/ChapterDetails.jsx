import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import AIShortcuts from '../components/AIShortcuts.jsx'
import TaskCard from '../components/TaskCard.jsx'
import { getChapterById } from '../data/chapters.js'
import { getTasksByChapter } from '../data/tasks.js'

export default function ChapterDetails() {
  const { chapterId } = useParams()
  const chapter = getChapterById(chapterId)

  if (!chapter) {
    return <Navigate to="/explore" replace />
  }

  const tasks = getTasksByChapter(chapter.id)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link
          to="/explore"
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Explore
        </Link>

        <p className="mt-4 text-sm font-medium text-violet-600">
          Chapter {String(chapter.id).padStart(2, '0')}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-slate-900">{chapter.title}</h1>
        <p className="mt-2 text-slate-600">{chapter.description}</p>

        <h2 className="mt-8 text-lg font-semibold text-slate-900">Tasks</h2>
        <div className="mt-4 flex flex-col gap-3">
          {tasks.map((task, i) => (
            <TaskCard key={task.id} task={task} index={i + 1} />
          ))}
        </div>
      </main>
      <AIShortcuts />
    </div>
  )
}
