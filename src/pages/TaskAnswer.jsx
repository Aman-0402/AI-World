import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { getTaskById } from '../data/tasks.js'

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_1px_2px_rgba(30,64,175,0.04),0_12px_28px_-18px_rgba(30,64,175,0.18)]">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-600">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  )
}

export default function TaskAnswer() {
  const { taskId } = useParams()
  const task = getTaskById(taskId)

  if (!task || !task.answer) {
    return <Navigate to="/explore" replace />
  }

  const { answer } = task

  return (
    <div className="relative flex min-h-screen flex-col bg-blue-50">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-700 to-blue-400 p-6 shadow-[0_1px_2px_rgba(30,64,175,0.06),0_20px_40px_-24px_rgba(30,64,175,0.35)] sm:p-8">
          <Link
            to={`/task/${task.id}`}
            className="relative inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_1px_2px_rgba(30,64,175,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Task
          </Link>
          <h1 className="font-display relative mt-6 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
            Model Answer: {task.title}
          </h1>
          <p className="relative mt-2 max-w-2xl text-sm text-blue-50">
            A reference solution — compare it against your own attempt, don't submit it as-is.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <Section title="The Prompt">
            <p
              data-text={answer.prompt}
              className="prompt-text select-none rounded-xl border-l-4 border-blue-600 bg-blue-100 px-4 py-3 font-mono text-sm font-semibold leading-relaxed text-blue-950 shadow-[0_1px_2px_rgba(30,64,175,0.1)]"
            />
          </Section>

          {answer.sections.map((section) => (
            <Section key={section.heading} title={section.heading}>
              {section.body && <p className="text-slate-700">{section.body}</p>}
              {section.bullets && (
                <ul className="flex flex-col gap-1.5">
                  {section.bullets.map((line, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-blue-400" aria-hidden="true">
                        &bull;
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Section>
          ))}

          {answer.alternativePrompt && (
            <Section title="Alternative Prompt">
              <p
                data-text={answer.alternativePrompt}
                className="prompt-text select-none rounded-xl border-l-4 border-blue-600 bg-blue-100 px-4 py-3 font-mono text-sm font-semibold leading-relaxed text-blue-950 shadow-[0_1px_2px_rgba(30,64,175,0.1)]"
              />
            </Section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
