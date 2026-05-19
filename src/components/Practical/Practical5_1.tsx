import React, { useState, useEffect } from 'react';

const Practical5_1 = () => {
  const [userData, setUserData] = useState<{name: string, position: string, phone: string} | null>(null);

  const generateCards = () => {
    const name = prompt('Input name:', 'Pavlo Bondar') || 'Pavlo Bondar';
    const position = prompt('Input position:', 'computer engineering') || 'computer engineering';
    const phone = prompt('Input phone:', '067-888-88-88') || '067-888-88-88';
    
    setUserData({ name, position, phone });
  };

  useEffect(() => {
    // Generate automatically on mount or wait for user? Let's just prompt immediately like in the original task.
    // However, React strict mode might fire it twice, so we check if it's already set or just provide a button.
    // To strictly follow "script that forms in the browser window", providing a button is safer in React to avoid double prompts.
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-brand-yellow">Генерація візитних карток</h2>
      
      {!userData ? (
        <button 
          onClick={generateCards}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors"
        >
          Ввести дані та згенерувати
        </button>
      ) : (
        <div className="w-full max-w-6xl bg-white p-4 rounded shadow-2xl overflow-auto">
          <table className="w-full border-collapse">
            <tbody>
              {Array.from({ length: 12 }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 3 }).map((_, colIndex) => (
                    <td 
                      key={colIndex} 
                      className="border border-dashed border-gray-400 p-4 w-1/3"
                    >
                      <div className="flex items-center gap-4">
                        {/* Logo representation */}
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <div className="absolute top-1 left-1 w-6 h-6 bg-cyan-400 border border-black shadow-sm"></div>
                          <div className="absolute top-4 left-4 w-6 h-6 bg-blue-600 border border-black shadow-sm"></div>
                        </div>
                        {/* Text representation */}
                        <div className="flex flex-col text-black">
                          <span className="font-bold text-lg">{userData.name}</span>
                          <span className="italic text-gray-700">{userData.position}</span>
                          <span className="text-blue-600 font-medium">{userData.phone}</span>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 flex justify-center">
             <button 
                onClick={() => setUserData(null)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded transition-colors"
             >
                Скинути
             </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Practical5_1;
