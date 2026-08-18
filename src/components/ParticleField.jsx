import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

const NODE_COUNT = 130
const LINK_DIST = 120
const PARALLAX = 26

function rand(min, max) {
  return min + Math.random() * (max - min)
}

const ParticleField = forwardRef(function ParticleField(_, ref) {
  const canvasRef = useRef(null)
  const nodesRef = useRef([])
  const burstsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 })
  const sizeRef = useRef({ w: 0, h: 0 })

  useImperativeHandle(ref, () => ({
    burst(x, y) {
      const colors = ['139, 92, 246', '34, 211, 238', '244, 242, 255']
      for (let i = 0; i < 46; i++) {
        const angle = rand(0, Math.PI * 2)
        const speed = rand(1.2, 5.5)
        burstsRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: rand(1, 3),
          life: 1,
          decay: rand(0.008, 0.02),
          color: colors[i % colors.length],
        })
      }
    },
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frame

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const { clientWidth: w, clientHeight: h } = canvas.parentElement
      sizeRef.current = { w, h }
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      nodesRef.current = Array.from({ length: NODE_COUNT }, () => ({
        x: rand(0, w),
        y: rand(0, h),
        z: rand(0.2, 1),
        vx: rand(-0.9, 0.9),
        vy: rand(-0.9, 0.9),
      }))
    }

    function onMove(e) {
      const rect = canvas.parentElement.getBoundingClientRect()
      mouseRef.current.tx = (e.clientX - rect.left) / rect.width - 0.5
      mouseRef.current.ty = (e.clientY - rect.top) / rect.height - 0.5
    }

    function draw() {
      const { w, h } = sizeRef.current
      const m = mouseRef.current
      m.x += (m.tx - m.x) * 0.06
      m.y += (m.ty - m.y) * 0.06

      ctx.clearRect(0, 0, w, h)

      const nodes = nodesRef.current
      const drawn = []
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > w) n.vx *= -1
        if (n.y < 0 || n.y > h) n.vy *= -1
        const px = n.x + m.x * PARALLAX * n.z
        const py = n.y + m.y * PARALLAX * n.z
        drawn.push({ px, py, z: n.z })
      }

      for (let i = 0; i < drawn.length; i++) {
        for (let j = i + 1; j < drawn.length; j++) {
          const a = drawn[i]
          const b = drawn[j]
          const dx = a.px - b.px
          const dy = a.py - b.py
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.16 * Math.min(a.z, b.z)
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.px, a.py)
            ctx.lineTo(b.px, b.py)
            ctx.stroke()
          }
        }
      }

      for (const d of drawn) {
        ctx.beginPath()
        ctx.arc(d.px, d.py, 1.2 + d.z * 1.6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(196, 181, 253, ${0.25 + d.z * 0.5})`
        ctx.fill()
      }

      const bursts = burstsRef.current
      for (let i = bursts.length - 1; i >= 0; i--) {
        const p = bursts[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.97
        p.vy *= 0.97
        p.life -= p.decay
        if (p.life <= 0) {
          bursts.splice(i, 1)
          continue
        }
        const r = p.r * p.life * 2
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 2.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.life * 0.18})`
        ctx.fill()
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.life})`
        ctx.fill()
      }

      frame = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.parentElement.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      canvas.parentElement.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
})

export default ParticleField
