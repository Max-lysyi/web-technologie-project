import React from 'react';
import { useTransitionNavigate } from '../TransitionContext';
import AnimatedButton from '../AnimatedButton';

const Practical6 = () => {
  const { navigateWithAnimation } = useTransitionNavigate() as any;

  return (
    <section className="flex flex-col items-center justify-center relative w-full min-h-screen bg-gray-950 px-4">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-brand-yellow drop-shadow-[0_0_15px_rgba(255,193,7,0.2)]">
        Практична робота 6
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full max-w-5xl gap-10">
        <AnimatedButton
            variant="yellow"
            onClick={() => navigateWithAnimation('/practical/6/1')}
            className="border border-brand-yellow/30 rounded-[20px] block w-[300px] h-[100px]"
            innerClassName="inset-[2px] rounded-[18px] bg-brand-yellow/10 group-hover:bg-brand-yellow transition-all duration-300 shadow-[0_0_15px_rgba(255,193,7,0.1)] group-hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
          >
            <div className="text-brand-yellow group-hover:text-white transition-all duration-300 font-sans font-semibold text-xl">
              Завдання 1
            </div>
        </AnimatedButton>
        <AnimatedButton
            variant="yellow"
            onClick={() => navigateWithAnimation('/practical/6/2')}
            className="border border-brand-yellow/30 rounded-[20px] block w-[300px] h-[100px]"
            innerClassName="inset-[2px] rounded-[18px] bg-brand-yellow/10 group-hover:bg-brand-yellow transition-all duration-300 shadow-[0_0_15px_rgba(255,193,7,0.1)] group-hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
          >
            <div className="text-brand-yellow group-hover:text-white transition-all duration-300 font-sans font-semibold text-xl">
              Завдання 2
            </div>
        </AnimatedButton>
        <AnimatedButton
            variant="yellow"
            onClick={() => navigateWithAnimation('/practical/6/3')}
            className="border border-brand-yellow/30 rounded-[20px] block w-[300px] h-[100px]"
            innerClassName="inset-[2px] rounded-[18px] bg-brand-yellow/10 group-hover:bg-brand-yellow transition-all duration-300 shadow-[0_0_15px_rgba(255,193,7,0.1)] group-hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
          >
            <div className="text-brand-yellow group-hover:text-white transition-all duration-300 font-sans font-semibold text-xl">
              Завдання 3
            </div>
        </AnimatedButton>
        <AnimatedButton
            variant="yellow"
            onClick={() => navigateWithAnimation('/practical/6/4')}
            className="border border-brand-yellow/30 rounded-[20px] block w-[300px] h-[100px]"
            innerClassName="inset-[2px] rounded-[18px] bg-brand-yellow/10 group-hover:bg-brand-yellow transition-all duration-300 shadow-[0_0_15px_rgba(255,193,7,0.1)] group-hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
          >
            <div className="text-brand-yellow group-hover:text-white transition-all duration-300 font-sans font-semibold text-xl">
              Завдання 4
            </div>
        </AnimatedButton>
        <AnimatedButton
            variant="yellow"
            onClick={() => navigateWithAnimation('/practical/6/5')}
            className="border border-brand-yellow/30 rounded-[20px] block w-[300px] h-[100px]"
            innerClassName="inset-[2px] rounded-[18px] bg-brand-yellow/10 group-hover:bg-brand-yellow transition-all duration-300 shadow-[0_0_15px_rgba(255,193,7,0.1)] group-hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
          >
            <div className="text-brand-yellow group-hover:text-white transition-all duration-300 font-sans font-semibold text-xl">
              Завдання 5
            </div>
        </AnimatedButton>
        <AnimatedButton
            variant="yellow"
            onClick={() => navigateWithAnimation('/practical/6/6')}
            className="border border-brand-yellow/30 rounded-[20px] block w-[300px] h-[100px]"
            innerClassName="inset-[2px] rounded-[18px] bg-brand-yellow/10 group-hover:bg-brand-yellow transition-all duration-300 shadow-[0_0_15px_rgba(255,193,7,0.1)] group-hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
          >
            <div className="text-brand-yellow group-hover:text-white transition-all duration-300 font-sans font-semibold text-xl">
              Завдання 6
            </div>
        </AnimatedButton>
      </div>
    </section>
  )
}

export default Practical6;
