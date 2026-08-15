import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import AIShortcuts from '../components/AIShortcuts.jsx'
import ParticleField from '../components/ParticleField.jsx'

export default function Landing() {
  const heroRef = useRef(null)
  const particleRef = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [hot, setHot] = useState(false)

  function handleMouseMove(e) {
    const rect = heroRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: py * -12, ry: px * 14 })
  }

  function handleEnter(e) {
    setHot(true)
    const rect = heroRef.current.getBoundingClientRect()
    particleRef.current?.burst(e.clientX - rect.left, e.clientY - rect.top)
  }

  function handleLeave() {
    setHot(false)
    setTilt({ rx: 0, ry: 0 })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a12]">
      <Navbar />
      <main
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 text-center"
        style={{ perspective: '1200px' }}
      >
        <div
          className="hero-orb absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-600/30 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="hero-orb hero-orb-delay absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-[110px]"
          aria-hidden="true"
        />
        <ParticleField ref={particleRef} />

        <div
          className="relative z-10 transition-transform duration-150 ease-out"
          style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`, transformStyle: 'preserve-3d' }}
        >
          <h1
            onMouseEnter={handleEnter}
            className={`font-display cursor-default text-5xl font-bold tracking-tight text-white transition-[transform,text-shadow] duration-500 ease-out sm:text-7xl md:text-8xl ${
              hot ? 'scale-110' : 'scale-100'
            }`}
            style={{
              textShadow: hot
                ? '0 0 50px rgba(139,92,246,0.85), 0 0 110px rgba(34,211,238,0.5)'
                : '0 0 0 rgba(0,0,0,0)',
            }}
          >
            AI in Business
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
            Explore, learn, and practice how Artificial Intelligence is transforming business.
          </p>
          <Link
            to="/explore"
            className="mt-8 inline-block rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(139,92,246,0.45)] transition hover:shadow-[0_0_45px_rgba(139,92,246,0.7)]"
          >
            Explore
          </Link>
        </div>
      </main>
      <AIShortcuts />
    </div>
  )
}
