import React, { useState } from 'react';

const Practical6_1 = () => {
  const [bgColor, setBgColor] = useState<string>('#030712'); // default gray-950

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBgColor(e.target.value);
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-500 p-8 flex flex-col items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="bg-white/90 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Кольори фону</h2>
        <p className="text-gray-600 mb-6">Варіант 7: Зелений, Жовтий, Червоний</p>
        
        <select 
          onChange={handleColorChange}
          className="w-full p-4 border-2 border-gray-300 rounded-xl text-lg focus:border-blue-500 focus:outline-none appearance-none bg-white cursor-pointer"
        >
          <option value="#030712">Оберіть колір...</option>
          <option value="#22c55e">Зелений</option>
          <option value="#eab308">Жовтий</option>
          <option value="#ef4444">Червоний</option>
        </select>
      </div>
    </div>
  );
}

export default Practical6_1;
