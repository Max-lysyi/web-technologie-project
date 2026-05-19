import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Practical8_2 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const aParam = searchParams.get('a');
  const bParam = searchParams.get('b');
  
  const [inputA, setInputA] = useState(aParam || '');
  const [inputB, setInputB] = useState(bParam || '');

  const a = parseInt(aParam || '', 10);
  const b = parseInt(bParam || '', 10);
  const isValid = !isNaN(a) && !isNaN(b);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ a: inputA, b: inputB });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-brand-yellow text-center border-b border-gray-800 pb-4">GET Запит (Математика)</h2>
        
        <p className="text-gray-400 mb-6 text-sm text-center">
          Введіть числа, вони будуть передані через URL (аналог GET запиту).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Змінна $a</label>
              <input 
                type="number" 
                value={inputA} 
                onChange={(e) => setInputA(e.target.value)} 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-brand-yellow" 
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Змінна $b</label>
              <input 
                type="number" 
                value={inputB} 
                onChange={(e) => setInputB(e.target.value)} 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-brand-yellow" 
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors">
            Відправити GET запит
          </button>
        </form>

        {isValid && (
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Результати обчислень:</h3>
            <ul className="space-y-2 font-mono text-lg text-brand-yellow">
              <li>Сума: {a} + {b} = {a + b}</li>
              <li>Добуток: {a} * {b} = {a * b}</li>
              <li>Різниця: {a} - {b} = {a - b}</li>
              <li>Частка: {b !== 0 ? `${a} / ${b} = ${(a / b).toFixed(2)}` : 'Ділення на нуль!'}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practical8_2;
