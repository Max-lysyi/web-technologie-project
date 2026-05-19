import React, { useState } from 'react';

const Practical8_3 = () => {
  const [c, setC] = useState('');
  const [d, setD] = useState('');
  const [results, setResults] = useState<{c: number, d: number} | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valC = parseInt(c, 10);
    const valD = parseInt(d, 10);
    if (!isNaN(valC) && !isNaN(valD)) {
      setResults({ c: valC, d: valD });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-brand-yellow text-center border-b border-gray-800 pb-4">POST Запит (Математика)</h2>
        
        <p className="text-gray-400 mb-6 text-sm text-center">
          Введіть числа, вони будуть оброблені з форми (аналог POST запиту).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Змінна $c</label>
              <input 
                type="number" 
                value={c} 
                onChange={(e) => setC(e.target.value)} 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-brand-yellow" 
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Змінна $d</label>
              <input 
                type="number" 
                value={d} 
                onChange={(e) => setD(e.target.value)} 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-brand-yellow" 
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold transition-colors">
            Обчислити (POST)
          </button>
        </form>

        {results && (
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">Результати обчислень:</h3>
            <ul className="space-y-2 font-mono text-lg text-brand-yellow">
              <li>Сума: {results.c} + {results.d} = {results.c + results.d}</li>
              <li>Добуток: {results.c} * {results.d} = {results.c * results.d}</li>
              <li>Різниця: {results.c} - {results.d} = {results.c - results.d}</li>
              <li>Частка: {results.d !== 0 ? `${results.c} / ${results.d} = ${(results.c / results.d).toFixed(2)}` : 'Ділення на нуль!'}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practical8_3;
