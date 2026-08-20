import { useCallback, useRef, useState } from 'react'

const BUBBLE_COUNT = 10
const COLORS = ['bg-violet-400/30', 'bg-cyan-400/30', 'bg-fuchsia-400/30', 'bg-sky-400/30']
const SHARD_COUNT = 8

function randomBubble(id) {
  return {
    id,
    left: Math.random() * 90 + 5,
    size: Math.random() * 30 + 18,
    duration: Math.random() * 8 + 11,
    delay: Math.random() * 10,
    drift: Math.random() * 60 - 30,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState(() => Array.from({ length: BUBBLE_COUNT }, (_, i) => randomBubble(i)))
  const [bursts, setBursts] = useState([])
  const nextId = useRef(BUBBLE_COUNT)
  const nextBurstId = useRef(0)

  const popBubble = useCallback((bubble, e) => {
    e.stopPropagation()
    const rect = e.currentTarget.getBoundingClientRect()
    const parentRect = e.currentTarget.parentElement.getBoundingClientRect()
    const cx = rect.left - parentRect.left + rect.width / 2
    const cy = rect.top - parentRect.top + rect.height / 2
    const burstId = nextBurstId.current++
    const shards = Array.from({ length: SHARD_COUNT }, (_, i) => ({
      angle: (i / SHARD_COUNT) * 360 + Math.random() * 24,
      distance: Math.random() * 34 + 26,
    }))

    setBursts((prev) => [...prev, { id: burstId, x: cx, y: cy, size: bubble.size, color: bubble.color, shards }])
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== burstId))
    }, 650)

    setBubbles((prev) => prev.filter((b) => b.id !== bubble.id))
    setTimeout(() => {
      setBubbles((prev) => [...prev, randomBubble(nextId.current++)])
    }, Math.random() * 2000 + 600)
  }, [])

  return (
    <div className="absolute inset-0 z-[5] overflow-hidden">
      {bubbles.map((b) => (
        <button
          key={b.id}
          type="button"
          onClick={(e) => popBubble(b, e)}
          aria-label="Pop bubble"
          className={`hero-bubble pointer-events-auto absolute rounded-full border border-white/20 ${b.color} backdrop-blur-sm`}
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            bottom: '-10%',
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            '--drift': `${b.drift}px`,
          }}
        />
      ))}
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="pointer-events-none absolute"
          style={{ left: burst.x, top: burst.y, width: 0, height: 0 }}
          aria-hidden="true"
        >
          {burst.shards.map((s, i) => (
            <span
              key={i}
              className={`bubble-shard absolute rounded-full ${burst.color}`}
              style={{
                width: burst.size / 5,
                height: burst.size / 5,
                '--angle': `${s.angle}deg`,
                '--dist': `${s.distance}px`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
