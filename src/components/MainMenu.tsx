import React from 'react'
import AnimatedButton from './AnimatedButton'
import { useTransitionNavigate } from './TransitionContext'

const MainMenu = () => {
  const { navigateWithAnimation } = useTransitionNavigate() as any;

  return (
    <div className="flex items-center justify-center relative w-full min-h-screen bg-bg">
      <div className="flex items-center flex-col md:flex-row justify-center h-full gap-8 px-[5%]">
        <AnimatedButton
          text="Лабораторні роботи"
          variant="blue"
          className="relative group w-[350px] h-[350px] rounded-[40px] flex items-center justify-center text-white text-3xl font-sans"
          innerClassName="inset-[8px] rounded-[32px] bg-brand-blue"
          onClick={() => navigateWithAnimation('/labs')}
        />
        <AnimatedButton
          text="Практичні роботи"
          variant="yellow"
          className="relative group w-[350px] h-[350px] rounded-[40px] flex items-center justify-center text-white text-3xl font-sans"
          innerClassName="inset-[8px] rounded-[32px] bg-brand-yellow"
          onClick={() => navigateWithAnimation('/practical')}
        />
      </div>
    </div>
  )
}

export default MainMenu