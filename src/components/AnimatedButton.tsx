import React, { useState, useRef } from 'react'

interface AnimatedButtonProps {
  children?: React.ReactNode
  text?: string
  variant: 'blue' | 'yellow'
  onClick?: () => void
  onHoldComplete?: () => void
  className?: string
  innerClassName?: string
}

type Particle = {
  id: number
  x: number
  y: number
  tx: string
  ty: string
  size: number
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  text,
  variant,
  onClick,
  onHoldComplete,
  className = '',
  innerClassName = '',
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])

  const containerRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const particleIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const bgClass = variant === 'blue' ? 'bg-brand-blue' : 'bg-brand-yellow'

  const borderGradient =
    variant === 'blue'
      ? 'linear-gradient(90deg, #466985, #6592B0, #A0BCD6, #6592B0, #466985)'
      : 'linear-gradient(90deg, #C38D3C, #D9AD52, #F0CB82, #D9AD52, #C38D3C)'

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const createParticle = () => {
    const newParticle: Particle = {
      id: Date.now() + Math.random(),
      x: mousePos.current.x,
      y: mousePos.current.y,
      tx: `${(Math.random() - 0.5) * 200}px`,
      ty: `${(Math.random() - 0.5) * 200}px`,
      size: Math.random() * 10 + 4,
    }
    setParticles((prev) => [...prev, newParticle])
    setTimeout(
      () => setParticles((prev) => prev.filter((p) => p.id !== newParticle.id)),
      1000
    )
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPressed(true)
    handleMouseMove(e)
    createParticle()
    
    particleIntervalRef.current = setInterval(createParticle, 50)

    if (onHoldComplete) {
      holdTimerRef.current = setTimeout(() => {
        onHoldComplete()
        handleMouseUpOrLeave()
      }, 5000)
    }
  }

  const handleMouseUpOrLeave = () => {
    setIsPressed(false)
    if (particleIntervalRef.current) clearInterval(particleIntervalRef.current)
    if (holdTimerRef.current) clearTimeout(holdTimerRef.current)
  }

  const handleClick = () => {
    if (onClick) onClick()
  }

  const defaultContainerClass = "relative group min-w-[350px] min-h-[100px] aspect-square flex items-center justify-center text-white text-2xl md:text-4xl font-sans"
  
  return (
    <div
      ref={containerRef}
      className={`${className || defaultContainerClass} duration-300 ease-out cursor-pointer transition-all ${
        isPressed
          ? 'scale-[0.98] z-50 shadow-2xl shadow-black/60'
          : 'scale-100 z-10 shadow-none'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        handleMouseUpOrLeave()
      }}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onClick={handleClick}
    >
      <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: borderGradient,
            backgroundSize: '200% 100%',
            animation: isHovered
              ? 'smoothColorShift 3s linear infinite'
              : 'none',
          }}
        />
        <div
          className={`absolute ${innerClassName || 'inset-[10px] rounded-[29px] ' + bgClass} transition-colors duration-300 md:group-hover:opacity-90`}
        ></div>
      </div>

      <div className="absolute inset-0 overflow-visible pointer-events-none z-20">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full opacity-80 ${variant === 'blue' ? 'bg-blue-300' : 'bg-yellow-400'}`}
            style={
              {
                left: p.x,
                top: p.y,
                width: p.size,
                height: p.size,
                '--tx': p.tx,
                '--ty': p.ty,
                animation: 'particleFloat 1s ease-out forwards',
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div
        className="relative z-30 flex w-full h-full items-center justify-center pointer-events-none"
      >
        {children || text}
      </div>
    </div>
  )
}

export default AnimatedButton
