import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import NotificationBell from './NotificationBell.jsx'
import InstallAppButton from './InstallAppButton.jsx'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#FAF6EC]/80 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-display flex items-center gap-2 font-semibold text-slate-900">
          <img src={logo} alt="AI in Business" className="h-8 w-8 rounded-lg object-cover shadow-sm ring-1 ring-slate-200" />
          <span>AI in Business</span>
        </Link>
        <div className="flex items-center gap-2">
          <InstallAppButton />
          <a
            href="https://arxinfo.info"
            className="flex h-9 items-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-4 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
          >
            Login
          </a>
          <NotificationBell />
        </div>
      </nav>
    </header>
  )
}
