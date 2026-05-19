import React, { useState } from 'react';
import AnimatedButton from '../AnimatedButton';

const Practical5_3 = () => {
  const [randomNum, setRandomNum] = useState<number | null>(null);

  const generateRandom = () => {
    setRandomNum(Math.random());
  };

  const constants = [
    { name: 'Значення константи e', value: Math.E },
    { name: 'Значення константи π', value: Math.PI },
    { name: 'Десятковий логарифм постійної Ейлера (e)', value: Math.LOG10E },
    { name: 'Двійковий логарифм постійної Ейлера (e)', value: Math.LOG2E },
    { name: 'Натуральний логарифм числа 10', value: Math.LN10 },
    { name: 'Натуральний логарифм числа 2', value: Math.LN2 },
    { name: 'Корінь квадратний із двох', value: Math.SQRT2 },
    { name: 'Корінь квадратний з однієї другої', value: Math.SQRT1_2 }
  ];

  const functions = [
    { name: 'Результат обчислення арккосинуса нуля', expression: 'Math.acos(0)', result: Math.acos(0) },
    { name: 'Результат обчислення синуса нуля радіан', expression: 'Math.sin(0)', result: Math.sin(0) },
    { name: 'Синус 90 градусів (π/2 радіан)', expression: 'Math.sin(Math.PI/2)', result: Math.sin(Math.PI / 2) },
    { name: 'Результат обчислення арксинуса одиниці', expression: 'Math.asin(1)', result: Math.asin(1) },
    { name: 'Тангенс 45 градусів (π/4 радіан)', expression: 'Math.tan(Math.PI/4)', result: Math.tan(Math.PI / 4) }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-brand-yellow drop-shadow-[0_0_10px_rgba(255,193,7,0.3)] text-center">
        Математичні функції й константи
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Константі */}
        <div className="flex-1 bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 border-b border-gray-700 pb-2">Константи</h3>
          <ul className="space-y-4">
            {constants.map((c, i) => (
              <li key={i} className="flex flex-col border-b border-gray-800 pb-2">
                <span className="text-gray-300 text-sm">{i + 1}. {c.name}</span>
                <span className="font-mono text-brand-yellow mt-1">{c.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Функції */}
        <div className="flex-1 bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-xl">
          <h3 className="text-2xl font-semibold mb-6 text-green-400 border-b border-gray-700 pb-2">Функції (Варіант 7)</h3>
          <ul className="space-y-4">
            {functions.map((f, i) => (
              <li key={i} className="flex flex-col border-b border-gray-800 pb-2">
                <span className="text-gray-300 text-sm">{i + 7}. {f.name}</span>
                <span className="text-gray-500 font-mono text-xs mt-1">{f.expression}</span>
                <span className="font-mono text-brand-yellow mt-1">y = {f.result}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 bg-gray-800 rounded-xl border border-gray-700 flex flex-col items-center gap-4">
            <h4 className="text-lg font-medium text-white">Генератор випадкових чисел</h4>
            <AnimatedButton
              variant="yellow"
              onClick={generateRandom}
              className="border border-brand-yellow/30 rounded-[10px] w-full max-w-[200px]"
              innerClassName="py-2 rounded-[8px] bg-brand-yellow/10 group-hover:bg-brand-yellow transition-all duration-300"
            >
              <span className="text-brand-yellow group-hover:text-white transition-colors">Згенерувати</span>
            </AnimatedButton>
            
            <div className="h-10 flex items-center justify-center font-mono text-xl text-brand-yellow bg-gray-900 w-full rounded-lg">
              {randomNum !== null ? randomNum : '---'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practical5_3;
