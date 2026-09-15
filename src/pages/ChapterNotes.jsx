import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, CalendarDays, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import AIShortcuts from '../components/AIShortcuts.jsx'
import Footer from '../components/Footer.jsx'
import { getChapterById } from '../data/chapters.js'
import { getChapterNoteById } from '../data/chapterNotes.js'

function NoteSection({ icon: Icon, title, children }) {
  return (
    <section className="rounded-2xl border border-violet-100 bg-[#FFFCF5] p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_14px_30px_-20px_rgba(109,40,217,0.2)] transition hover:-translate-y-0.5 hover:border-violet-200">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white shadow-[0_10px_22px_-14px_rgba(109,40,217,0.8)]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="font-display text-lg font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="mt-4 text-sm leading-6 text-slate-700">{children}</div>
    </section>
  )
}

function DetailSection({ section }) {
  return (
    <section className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_34px_-22px_rgba(15,23,42,0.22)] transition hover:border-violet-200 sm:p-6">
      <h2 className="font-display text-xl font-semibold leading-snug text-slate-950">{section.heading}</h2>
      {section.body && <p className="mt-3 text-[0.95rem] leading-7 text-slate-700">{section.body}</p>}
      {section.bullets && (
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2 text-sm leading-6 text-slate-700">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-violet-600" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {section.example && (
        <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50/80 p-4 text-sm leading-7 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
          <span className="font-semibold text-cyan-900">Example: </span>
          {section.example.replace(/^Example: /, '')}
        </div>
      )}
      {section.prompt && (
        <div className="mt-4 overflow-hidden rounded-2xl border border-violet-200 bg-violet-50">
          <div className="border-b border-violet-200 bg-violet-100/80 px-4 py-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-800">Prompt to write in AI tool</p>
          </div>
          <p className="select-none px-4 py-4 font-mono text-sm leading-7 text-violet-950">{section.prompt}</p>
        </div>
      )}
      {section.table && (
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_8px_18px_-16px_rgba(15,23,42,0.35)]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-gradient-to-r from-violet-50 to-cyan-50">
                <tr>
                  {section.table.columns.map((column) => (
                    <th key={column} scope="col" className="px-4 py-3 text-left font-semibold text-slate-800">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {section.table.rows.map((row) => (
                  <tr key={row.join('-')}>
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 leading-6 text-slate-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  )
}

export default function ChapterNotes() {
  const { chapterId } = useParams()
  const chapter = getChapterById(chapterId)
  const note = getChapterNoteById(chapterId)

  if (!chapter || chapter.locked || !note) {
    return <Navigate to="/explore" replace />
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF6EC]">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-100 via-cyan-50 to-[#FFFCF5] p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_40px_-24px_rgba(109,40,217,0.25)] sm:p-8">
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-200/40 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-violet-200/50 blur-3xl" aria-hidden="true" />
          <Link
            to={`/chapter/${chapter.id}`}
            className="relative inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:text-violet-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back
          </Link>

          <p className="relative mt-6 text-sm font-semibold uppercase tracking-wide text-violet-700">
            Chapter {String(chapter.id).padStart(2, '0')} Notes
          </p>
          <h1 className="font-display relative mt-1 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            {note.title}
          </h1>
          <p className="relative mt-3 max-w-2xl leading-7 text-slate-700">{chapter.description}</p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <NoteSection icon={BookOpen} title="Objective">
            <p>{note.objective}</p>
          </NoteSection>

          <NoteSection icon={CheckCircle2} title="Topics">
            <ul className="space-y-2">
              {note.topics.map((topic) => (
                <li key={topic} className="flex gap-2">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-violet-600" aria-hidden="true" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </NoteSection>

          <NoteSection icon={CalendarDays} title="Activity">
            <p>{note.activity}</p>
          </NoteSection>

          <NoteSection icon={MessageCircle} title="Discussion">
            <p>{note.discussion}</p>
          </NoteSection>
        </div>

        <section className="mt-4 rounded-2xl border border-cyan-100 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_14px_30px_-20px_rgba(14,116,144,0.22)]">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 text-white">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-slate-900">Key Takeaway</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700">{note.keyTakeaway}</p>
            </div>
          </div>
        </section>

        {note.sections && (
          <div className="mt-6 flex flex-col gap-4">
            {note.sections.map((section) => (
              <DetailSection key={section.heading} section={section} />
            ))}
          </div>
        )}
      </main>
      <Footer />
      <AIShortcuts />
    </div>
  )
}
