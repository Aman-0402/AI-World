import { Eye, FileDown, FileText } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { completeNotes } from '../data/completeNotes.js'

export default function NotesGrid() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#FAF6EC]">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-600 to-cyan-500 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_rgba(109,40,217,0.35)] sm:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white">
            <FileText className="h-5 w-5" aria-hidden="true" />
          </div>
          <h1 className="font-display mt-4 text-2xl font-bold text-white sm:text-3xl">Complete Notes</h1>
          <p className="mt-2 max-w-lg text-sm text-violet-50">
            All available subject notes in one place — view or download any of them below.
          </p>
        </div>

        {completeNotes.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-[#FFFCF5] p-8 text-center text-sm text-slate-500">
            No notes available yet.
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {completeNotes.map((note) => (
              <div
                key={note.filename}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-[#FFFCF5] p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-display text-base font-bold text-slate-900">{note.name}</h2>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={note.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-200/70 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:bg-[#F6F0FF] hover:text-violet-700"
                  >
                    <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                    View
                  </a>
                  <a
                    href={note.url}
                    download
                    className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-3 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
                  >
                    <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
