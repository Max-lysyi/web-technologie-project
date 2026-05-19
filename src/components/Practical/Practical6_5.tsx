import React, { useState } from 'react';

const Practical6_5 = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | string>('');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert('Будь ласка, введіть коректні числа.');
      setResult('Помилка вводу');
      return;
    }

    const sum = n1 + n2;
    setResult(sum);
    alert(`Результат додавання: ${n1} + ${n2} = ${sum}`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-gray-900 text-gray-200 p-8 rounded-2xl shadow-xl border border-gray-800 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-brand-yellow text-center border-b border-gray-800 pb-4">Сума двох чисел</h2>
        
        <form onSubmit={handleCalculate} className="space-y-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Перше число</label>
            <input 
              type="number" 
              step="any"
              value={num1} 
              onChange={(e) => setNum1(e.target.value)} 
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" 
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Друге число</label>
            <input 
              type="number" 
              step="any"
              value={num2} 
              onChange={(e) => setNum2(e.target.value)} 
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" 
              required
            />
          </div>
          
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
            Обчислити
          </button>

          <div className="flex flex-col pt-4 border-t border-gray-800">
            <label className="mb-2 text-sm text-gray-400">Результат</label>
            <input 
              type="text" 
              readOnly 
              value={result} 
              className="p-3 bg-gray-950 border border-gray-700 rounded-lg text-brand-yellow font-mono text-xl cursor-not-allowed" 
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Practical6_5;
