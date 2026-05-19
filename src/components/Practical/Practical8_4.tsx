import React, { useState } from 'react';

const Practical8_4 = () => {
  const [e, setE] = useState('');
  const [f, setF] = useState('');
  const [results, setResults] = useState<{e: string, f: string} | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setResults({ e, f });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-brand-yellow text-center border-b border-gray-800 pb-4">POST Запит (Рядки)</h2>
        
        <p className="text-gray-400 mb-6 text-sm text-center">
          Введіть рядки для обробки (аналог POST запиту).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Рядок $e</label>
              <input 
                type="text" 
                value={e} 
                onChange={(evt) => setE(evt.target.value)} 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-brand-yellow" 
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-400 mb-1">Рядок $f</label>
              <input 
                type="text" 
                value={f} 
                onChange={(evt) => setF(evt.target.value)} 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-brand-yellow" 
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold transition-colors">
            Обробити рядки (POST)
          </button>
        </form>

        {results && (
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 space-y-4">
            <h3 className="text-xl font-bold text-white">Результати:</h3>
            
            <div className="space-y-1">
              <p className="text-sm text-gray-400">а) Перший, потім другий:</p>
              <p className="font-mono text-brand-yellow bg-gray-900 p-2 rounded">
                {results.e} {results.f}
              </p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-gray-400">б) Другий, потім перший:</p>
              <p className="font-mono text-brand-yellow bg-gray-900 p-2 rounded">
                {results.f} {results.e}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Practical8_4;
