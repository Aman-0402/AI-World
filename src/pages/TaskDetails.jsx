import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import AIShortcuts from '../components/AIShortcuts.jsx'
import StepList from '../components/StepList.jsx'
import ResourceCard from '../components/ResourceCard.jsx'
import LearningOutcome from '../components/LearningOutcome.jsx'
import QuestionCard from '../components/QuestionCard.jsx'
import { getTaskById } from '../data/tasks.js'
import { getChapterById } from '../data/chapters.js'

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}

export default function TaskDetails() {
  const { taskId } = useParams()
  const task = getTaskById(taskId)

  if (!task) {
    return <Navigate to="/explore" replace />
  }

  const chapter = getChapterById(task.chapterId)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link
          to={`/chapter/${task.chapterId}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to {chapter?.title ?? 'Chapter'}
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">{task.title}</h1>

        <div className="mt-6 flex flex-col gap-4">
          <Section title="Question">
            <p className="text-slate-800">{task.question}</p>
          </Section>

          <Section title="What to Do">
            <p className="text-slate-700">{task.whatToDo}</p>
          </Section>

          <Section title="Steps">
            <StepList steps={task.steps} />
          </Section>

          <Section title="Required File / Download Resource">
            <ResourceCard fileName={task.requiredFile} downloadUrl={task.downloadUrl} />
          </Section>

          <Section title="What You Learn">
            <LearningOutcome outcomes={task.whatYouLearn} />
          </Section>

          <Section title="Questions About It">
            <QuestionCard questions={task.questions} />
          </Section>
        </div>
      </main>
      <AIShortcuts />
    </div>
  )
}
