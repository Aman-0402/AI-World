import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <Sparkles className="h-5 w-5 text-violet-600" aria-hidden="true" />
          <span>AI in Business</span>
        </Link>
        <Link
          to="/explore"
          className="rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Explore
        </Link>
      </nav>
    </header>
  )
}
