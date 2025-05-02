"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create stars
    const stars: { x: number; y: number; radius: number; color: string; velocity: number }[] = []

    for (let i = 0; i < 150; i++) {
      const radius = Math.random() * 1.5
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: `rgba(255, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.random() * 0.8 + 0.2})`,
        velocity: Math.random() * 0.05 + 0.02,
      })
    }

    // Create particles
    const particles: {
      x: number
      y: number
      size: number
      color: string
      vx: number
      vy: number
      life: number
      maxLife: number
    }[] = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        color: `rgba(${Math.floor(Math.random() * 255)}, 0, 0, ${Math.random() * 0.5 + 0.2})`,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      })
    }

    // Create hexagon grid
    const hexagons: { x: number; y: number; size: number; color: string }[] = []
    const hexSize = 40
    const hexHeight = hexSize * Math.sqrt(3)

    for (let y = -hexHeight; y < canvas.height + hexHeight; y += hexHeight) {
      for (let x = -hexSize * 1.5; x < canvas.width + hexSize * 1.5; x += hexSize * 3) {
        const offset = (Math.floor(y / hexHeight) % 2) * hexSize * 1.5
        hexagons.push({
          x: x + offset,
          y,
          size: hexSize,
          color: `rgba(255, 0, 0, ${Math.random() * 0.03 + 0.01})`,
        })
      }
    }

    // Animation
    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width,
      )
      gradient.addColorStop(0, "rgba(20, 0, 0, 1)")
      gradient.addColorStop(0.5, "rgba(10, 0, 0, 1)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw hexagons
      hexagons.forEach((hex) => {
        drawHexagon(ctx, hex.x, hex.y, hex.size, hex.color)
      })

      // Draw and update stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = star.color
        ctx.fill()

        // Move star
        star.y += star.velocity

        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })

      // Draw and update particles
      particles.forEach((particle, index) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * (1 - particle.life / particle.maxLife), 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Move particle
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Reset particle if it's "dead"
        if (particle.life >= particle.maxLife) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            color: `rgba(${Math.floor(Math.random() * 255)}, 0, 0, ${Math.random() * 0.5 + 0.2})`,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            life: 0,
            maxLife: Math.random() * 200 + 100,
          }
        }
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    // Function to draw hexagon
    function drawHexagon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = ((2 * Math.PI) / 6) * i
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()
      ctx.strokeStyle = color
      ctx.stroke()
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}
