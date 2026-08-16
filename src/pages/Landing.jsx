import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import AIShortcuts from '../components/AIShortcuts.jsx'
import ParticleField from '../components/ParticleField.jsx'

const HEADLINE = 'AI in Business'
const NBSP = ' '

export default function Landing() {
  const heroRef = useRef(null)
  const tiltRef = useRef(null)
  const particleRef = useRef(null)
  const rafRef = useRef(null)
  const [playCounts, setPlayCounts] = useState(() => new Array(HEADLINE.length).fill(0))

  function handleMouseMove(e) {
    if (rafRef.current) return
    const { clientX, clientY } = e
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const rect = heroRef.current.getBoundingClientRect()
      const px = (clientX - rect.left) / rect.width - 0.5
      const py = (clientY - rect.top) / rect.height - 0.5
      if (tiltRef.current) {
        tiltRef.current.style.transform = `rotateX(${py * -12}deg) rotateY(${px * 14}deg)`
      }
    })
  }

  function handleLeave() {
    if (tiltRef.current) {
      tiltRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }
  }

  function handleLetterEnter(index, e) {
    if (HEADLINE[index] === ' ') return
    const rect = heroRef.current.getBoundingClientRect()
    particleRef.current?.burst(e.clientX - rect.left, e.clientY - rect.top)
    setPlayCounts((prev) => {
      const next = [...prev]
      next[index] += 1
      return next
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a12]">
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

        <Link
          to="/psst"
          aria-label="???"
          className="absolute bottom-6 left-6 z-10 h-3 w-3 rounded-full bg-white/5 transition hover:bg-white/40"
        />

        <div
          ref={tiltRef}
          className="relative z-10 will-change-transform"
          style={{ transformStyle: 'preserve-3d', transition: 'transform 150ms ease-out' }}
        >
          <h1 className="font-display cursor-default text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
            {HEADLINE.split('').map((ch, i) => (
              <span
                key={`${i}-${playCounts[i]}`}
                onMouseEnter={(e) => handleLetterEnter(i, e)}
                className="letter-pop inline-block"
                style={playCounts[i] ? { animation: 'letterPop 2.4s cubic-bezier(0.16, 1, 0.3, 1)' } : undefined}
              >
                {ch === ' ' ? NBSP : ch}
              </span>
            ))}
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
