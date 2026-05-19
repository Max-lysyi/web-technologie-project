import React, { useState } from 'react';

const Practical5_4 = () => {
  const [start, setStart] = useState<number>(-6);
  const [end, setEnd] = useState<number>(6);
  const [step, setStep] = useState<number>(2);
  const [results, setResults] = useState<{ x: number; y: number | string }[]>([]);

  const calculate = () => {
    const res = [];
    for (let x = start; x <= end; x += step) {
      let y: number | string = 0;
      if (x < 0) {
        y = Math.pow(Math.tan(x), 3);
      } else if (x === 0) {
        y = Math.pow(Math.PI, 3);
      } else if (x > 0) {
        y = Math.sqrt(x) - Math.log10(x);
      }
      // Round to 4 decimal places for cleaner output if it's a number
      if (typeof y === 'number' && !isNaN(y)) {
        y = Number(y.toFixed(4));
      }
      res.push({ x, y });
    }
    setResults(res);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-brand-yellow drop-shadow-[0_0_10px_rgba(255,193,7,0.3)]">
        Розгалужений обчислювальний процес (Варіант 7)
      </h2>
      
      <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-800 w-full max-w-2xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="text-gray-400 mb-2">Початок (x від):</label>
            <input 
              type="number" 
              value={start} 
              onChange={e => setStart(Number(e.target.value))}
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded focus:border-brand-yellow focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 mb-2">Кінець (x до):</label>
            <input 
              type="number" 
              value={end} 
              onChange={e => setEnd(Number(e.target.value))}
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded focus:border-brand-yellow focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-400 mb-2">Крок:</label>
            <input 
              type="number" 
              value={step} 
              onChange={e => setStep(Number(e.target.value))}
              className="bg-gray-800 text-white border border-gray-700 p-2 rounded focus:border-brand-yellow focus:outline-none"
            />
          </div>
        </div>
        <button 
          onClick={calculate}
          className="w-full py-3 bg-brand-yellow/20 hover:bg-brand-yellow/40 text-brand-yellow font-semibold rounded-lg border border-brand-yellow/50 transition-colors"
        >
          Обчислити
        </button>
      </div>

      {results.length > 0 && (
        <div className="w-full max-w-2xl bg-white text-black p-6 rounded-xl shadow-2xl">
          <h3 className="text-xl font-bold mb-4 text-center">Результати розрахунків:</h3>
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3">x</th>
                <th className="border border-gray-300 p-3">F(x)</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-3">{r.x}</td>
                  <td className="border border-gray-300 p-3 font-mono">{r.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Practical5_4;
