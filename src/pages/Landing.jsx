import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import AIShortcuts from '../components/AIShortcuts.jsx'

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          AI in Business
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
          Explore, learn, and practice how Artificial Intelligence is transforming business —
          one chapter and one task at a time.
        </p>
        <Link
          to="/explore"
          className="mt-8 rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
        >
          Explore
        </Link>
      </main>
      <AIShortcuts />
    </div>
  )
}
