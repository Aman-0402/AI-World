import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <img src={logo} alt="AI in Business" className="h-8 w-8 rounded-md object-cover" />
          <span>AI in Business</span>
        </Link>
      </nav>
    </header>
  )
}
