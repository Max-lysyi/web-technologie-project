import React, { useEffect, useRef, useState } from 'react'
import { useTransitionNavigate } from './TransitionContext'
import AnimatedButton from './AnimatedButton'

const ScrollReveal: React.FC<{
  children: React.ReactNode
  direction: 'left' | 'right'
}> = ({ children, direction }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const translateClass =
    direction === 'left' ? '-translate-x-24' : 'translate-x-24'

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${translateClass}`
      }`}
    >
      {children}
    </div>
  )
}

const PracticalCard: React.FC<{
  title: string
  desc: string
  imgLabel: string
  isEven: boolean
  onDownload: () => void
  onNavigate: () => void
}> = ({ title, desc, imgLabel, isEven, onDownload, onNavigate }) => {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const borderGradient =
    'linear-gradient(90deg, #f59e0b, #fde047, #b45309, #fde047, #f59e0b)'

  return (
    <div
      ref={containerRef}
      className={`relative group p-[3px] rounded-[32px] overflow-hidden transition-all duration-300 ease-out ${
        isHovered
          ? 'shadow-2xl shadow-yellow-500/15'
          : 'shadow-xl shadow-black/30'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: borderGradient,
          backgroundSize: '200% 100%',
          animation: isHovered ? 'smoothColorShift 3s linear infinite' : 'none',
        }}
      />

      <div
        className={`relative z-10 rounded-[29px] bg-gray-800 p-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${
          isEven ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        <div
          onClick={onNavigate}
          className={`w-full md:w-1/2 aspect-video bg-slate-700 rounded-2xl border border-slate-600 flex items-center justify-center overflow-hidden group shadow-inner transition-all duration-300 cursor-pointer ${
            isHovered
              ? 'border-brand-yellow/50 scale-[1.03] shadow-lg shadow-yellow-500/10'
              : ''
          }`}
        >
          <span
            className={`text-slate-400 font-mono text-2xl font-semibold transition-all duration-500 ${
              isHovered ? 'text-brand-yellow scale-110' : ''
            }`}
          >
            {imgLabel}
          </span>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          <h3
            className={`text-4xl font-sans font-bold text-gray-100 tracking-tight transition-colors duration-300 ${
              isHovered ? 'text-white' : ''
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-400 text-xl leading-relaxed font-sans">
            {desc}
          </p>

          <AnimatedButton
            variant="yellow"
            onClick={onDownload}
            className="mt-4 border border-brand-yellow/50 rounded-xl block min-w-[220px]"
            innerClassName="inset-[2px] rounded-[10px] bg-gradient-to-r from-[#d97706] to-[#b45309] transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:from-[#f59e0b] group-hover:to-[#d97706] shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]"
          >
            <div className="px-8 py-3.5 text-white transition-all duration-300 font-sans font-semibold text-lg text-center w-full shadow-sm">
              Завантажити звіт
            </div>
          </AnimatedButton>
        </div>
      </div>
    </div>
  )
}

const PracticalList = () => {
  const { navigateWithAnimation } = useTransitionNavigate() as any
  const practicalData = [
    {
      id: 1,
      title: 'Практична робота №1',
      desc: 'Знайомство зі структурою НТМL-документу. Створення розмітки для персонального сайту-візитки',
      img: 'Prac 1',
    },
    {
      id: 2,
      title: 'Практична робота №2',
      desc: 'Ознайомлення зі каскадними таблицями стилів СSS. Створення та стилізування таблиці за допомогою НТМL та елементів СSS',
      img: 'Prac 2',
    },
    {
      id: 3,
      title: 'Практична робота №3',
      desc: 'Стилізація Веб-сторінки за допомогою елементів СSS. Блоковамодель СSS.',
      img: 'Prac 3',
    },
    {
      id: 4,
      title: 'Практична робота №4',
      desc: 'Ознайомлення з мовою JavaScript для веб-розробки',
      img: 'Prac 4',
    },
  ]

  const handleDownload = (id: number) => {
    const link = document.createElement('a');
    link.href = `/Reports/Practical${id}.pdf`;
    link.download = `Practical${id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="min-h-screen bg-gray-950 font-sans overflow-x-hidden py-24 px-[5%]">
      <h2 className="text-6xl font-extrabold text-center mb-28 text-brand-yellow tracking-tighter drop-shadow-[0_0_15px_rgba(255,193,7,0.2)]">
        Практичні завдання
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col gap-28">
        {practicalData.map((prac, index) => (
          <ScrollReveal
            key={prac.id}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <PracticalCard
              title={prac.title}
              desc={prac.desc}
              imgLabel={prac.img}
              isEven={index % 2 === 0}
              onNavigate={() => navigateWithAnimation(`/practical/${prac.id}`)}
              onDownload={() => handleDownload(prac.id)}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export default PracticalList
