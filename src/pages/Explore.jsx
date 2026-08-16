import { Square, Triangle } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import AIShortcuts from '../components/AIShortcuts.jsx'
import ChapterCard from '../components/ChapterCard.jsx'
import HiddenSpot from '../components/HiddenSpot.jsx'
import { chapters } from '../data/chapters.js'
import { getTasksByChapter } from '../data/tasks.js'

export default function Explore() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <Navbar />
      <HiddenSpot icon={Square} className="right-4 top-20 text-slate-300/40 hover:text-violet-500/70" />
      <HiddenSpot icon={Triangle} className="bottom-4 left-4 text-slate-300/40 hover:text-violet-500/70" />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-bold text-slate-900">Explore Chapters</h1>
        <p className="mt-2 text-slate-600">
          Pick a chapter to start learning about AI in Business.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              taskCount={getTasksByChapter(chapter.id).length}
            />
          ))}
        </div>
      </main>
      <AIShortcuts />
    </div>
  )
}
