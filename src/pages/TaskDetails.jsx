import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Hexagon, Plus, Minus } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import AIShortcuts from '../components/AIShortcuts.jsx'
import StepList from '../components/StepList.jsx'
import ComparisonTable from '../components/ComparisonTable.jsx'
import ResourceCard from '../components/ResourceCard.jsx'
import LearningOutcome from '../components/LearningOutcome.jsx'
import QuestionCard from '../components/QuestionCard.jsx'
import CompleteButton from '../components/CompleteButton.jsx'
import HiddenSpot from '../components/HiddenSpot.jsx'
import Footer from '../components/Footer.jsx'
import { getTaskById } from '../data/tasks.js'
import { getChapterById } from '../data/chapters.js'

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-200/70 bg-[#FFFCF5] p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_28px_-18px_rgba(109,40,217,0.16)]">
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
  const resources =
    task.resources ?? (task.requiredFile ? [{ name: task.requiredFile, downloadUrl: task.downloadUrl }] : [])

  return (
    <div className="relative flex min-h-screen flex-col bg-[#FAF6EC]">
      <Navbar />
      <HiddenSpot icon={Hexagon} className="left-4 top-20 text-slate-500 hover:text-violet-600" />
      <HiddenSpot icon={Plus} className="right-6 top-40 text-slate-500 hover:text-violet-600" />
      <HiddenSpot icon={Minus} className="bottom-6 right-6 text-slate-500 hover:text-violet-600" />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-white via-white to-violet-50 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_rgba(109,40,217,0.25)] sm:p-8">
          <span
            className="font-display pointer-events-none absolute -right-4 -top-10 select-none text-[8rem] font-bold leading-none text-violet-100/70 sm:text-[10rem]"
            aria-hidden="true"
          >
            {String(task.id).padStart(2, '0')}
          </span>

          <Link
            to={`/chapter/${task.chapterId}`}
            className="relative inline-flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-[#FFFCF5] px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-[#F6F0FF] hover:text-violet-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </Link>

          <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4">
            <h1 className="font-display max-w-xl text-3xl font-bold text-slate-900 sm:text-4xl">{task.title}</h1>
            <CompleteButton taskId={task.id} />
          </div>
        </div>

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

          {task.comparisonTable && (
            <Section title="Comparison Criteria">
              <ComparisonTable {...task.comparisonTable} />
            </Section>
          )}

          <Section title="Required File / Download Resource">
            <ResourceCard resources={resources} />
          </Section>

          <Section title="What You Learn">
            <LearningOutcome outcomes={task.whatYouLearn} />
          </Section>

          <Section title="Questions About It">
            <QuestionCard questions={task.questions} />
          </Section>
        </div>
      </main>
      <Footer />
      <AIShortcuts />
    </div>
  )
}
