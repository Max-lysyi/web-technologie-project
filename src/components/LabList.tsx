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
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${translateClass}`}`}
    >
      {children}
    </div>
  )
}

const LabCard: React.FC<{
  title: string
  desc: string
  imgLabel: string
  isEven: boolean
  onDownload: () => void
  onNavigate: () => void
}> = ({ title, desc, imgLabel, isEven, onDownload, onNavigate }) => {
  const [isHovered, setIsHovered] = useState(false)
  const borderGradient =
    'linear-gradient(90deg, #3b82f6, #93c5fd, #1d4ed8, #93c5fd, #3b82f6)'

  return (
    <div
      className={`relative group p-[3px] rounded-[32px] overflow-hidden transition-all duration-300 ease-out ${isHovered ? 'shadow-2xl shadow-blue-500/15' : 'shadow-xl shadow-black/30'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: borderGradient,
          backgroundSize: '200% 100%',
          animation: isHovered ? 'smoothColorShift 3s linear infinite' : 'none',
        }}
      />
      <div
        className={`relative z-10 rounded-[29px] bg-gray-800 p-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        <div
          onClick={onNavigate}
          className={`w-full md:w-1/2 aspect-video bg-slate-700 rounded-2xl border border-slate-600 flex items-center justify-center overflow-hidden group shadow-inner transition-all duration-300 cursor-pointer ${isHovered ? 'border-brand-blue/50 scale-[1.03] shadow-lg shadow-blue-500/10' : ''}`}
        >
          <span
            className={`text-slate-400 font-mono text-2xl font-semibold transition-all duration-500 ${isHovered ? 'text-brand-blue scale-110' : ''}`}
          >
            {imgLabel}
          </span>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          <h3
            className={`text-4xl font-sans font-bold text-gray-100 tracking-tight transition-colors duration-300 ${isHovered ? 'text-white' : ''}`}
          >
            {title}
          </h3>
          <p className="text-gray-400 text-xl leading-relaxed font-sans">
            {desc}
          </p>
          <AnimatedButton
            variant="blue"
            onClick={onDownload}
            className="mt-4 border border-brand-blue/50 rounded-xl block min-w-[220px]"
            innerClassName="inset-[2px] rounded-[10px] bg-gradient-to-r from-[#2563eb] to-[#1e40af] transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:from-[#3b82f6] group-hover:to-[#2563eb] shadow-[0_0_15px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
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

const LabList = () => {
  const { navigateWithAnimation } = useTransitionNavigate() as any

  const labData = [
    {
      id: 1,
      title: 'Лабораторна робота №1',
      desc: 'Встановлення та налаштування локального сервера (APACHE +MySQL), інтегрованого середовища розробки та системи контролю версій',
      img: 'Lab 1',
    },
    {
      id: 2,
      title: 'Лабораторна робота №2',
      desc: 'Знайомство зі структурою HTML-документу та основами сучасної верстки ',
      img: 'Lab 2',
    },
    {
      id: 3,
      title: 'Лабораторна робота №3-4',
      desc: 'Основна частина HTML-сторінки',
      img: 'Lab 3-4',
    },
    {
      id: 4,
      title: 'Лабораторна робота №5-6',
      desc: 'Створення форми підписки та футера вебсторінки ',
      img: 'Lab 5-6',
    },
    {
      id: 5,
      title: 'Лабораторна робота №7-8',
      desc: 'Створення сторінки адміністратора та розробка логіки авторизації',
      img: 'Lab 7-8',
    },
  ]

  const handleDownload = (id: number) => {
    const link = document.createElement('a');
    link.href = `/Reports/Lab${id}.pdf`;
    link.download = `Lab${id}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="min-h-screen bg-gray-950 font-sans overflow-x-hidden py-24 px-[5%]">
      <h2 className="text-6xl font-extrabold text-center mb-28 text-brand-blue tracking-tighter drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        Лабораторні роботи
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col gap-28">
        {labData.map((lab, index) => (
          <ScrollReveal
            key={lab.id}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <LabCard
              title={lab.title}
              desc={lab.desc}
              imgLabel={lab.img}
              isEven={index % 2 === 0}
              onNavigate={() => navigateWithAnimation(`/labs/${lab.id}`)}
              onDownload={() => handleDownload(lab.id)}
            />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export default LabList
