import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { notifications } from '../data/notifications.js'

export default function Notifications() {
  const sorted = [...notifications].reverse()

  return (
    <div className="relative flex min-h-screen flex-col bg-[#FAF6EC]">
      <Navbar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-600 to-cyan-500 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_40px_-24px_rgba(109,40,217,0.35)] sm:p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white">
            <Bell className="h-5 w-5" aria-hidden="true" />
          </div>
          <h1 className="font-display mt-4 text-2xl font-bold text-white sm:text-3xl">Notifications</h1>
          <p className="mt-2 max-w-lg text-sm text-violet-50">
            Everything announced on this course, all in one place.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {sorted.length === 0 ? (
            <div className="rounded-2xl border border-slate-200/70 bg-[#FFFCF5] p-8 text-center text-sm text-slate-500">
              No notifications yet.
            </div>
          ) : (
            sorted.map((n) => (
              <div
                key={n.id}
                className="rounded-2xl border border-slate-200/70 bg-[#FFFCF5] p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-display text-lg font-bold text-slate-900">{n.title}</h2>
                  {n.date && <span className="text-xs font-medium text-slate-400">{n.date}</span>}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{n.message}</p>

                {n.steps && (
                  <ol className="mt-3 flex flex-col gap-2">
                    {n.steps.map((step, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}

                {n.note && (
                  <p className="mt-3 rounded-xl border border-violet-100 bg-violet-50 px-3.5 py-2.5 text-sm leading-relaxed text-violet-900">
                    {n.note}
                  </p>
                )}

                {n.link && n.link.to && (
                  <Link
                    to={n.link.to}
                    className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
                  >
                    {n.link.label}
                  </Link>
                )}
                {n.link && n.link.href && (
                  <a
                    href={n.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
                  >
                    {n.link.label}
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
