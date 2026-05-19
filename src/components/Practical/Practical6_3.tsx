import React, { useState } from 'react';

const Practical6_3 = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const checkAnswer = () => {
    if (!selectedAnswer) {
      alert('Будь ласка, оберіть відповідь.');
      return;
    }

    if (selectedAnswer === 'Корова') {
      alert('Вірно! Корови кажуть му-му.');
    } else {
      alert('Невірно. Спробуйте ще раз.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-white text-black p-8 rounded-xl shadow-2xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center border-b pb-4">Завдання для самостійного виконання</h2>
        
        <div className="mb-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="text-xl font-medium text-center text-blue-900 mb-6">Запитання: Хто сказав му-му?</p>
          
          <div className="flex flex-col items-center gap-4">
            <select 
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded text-lg focus:border-blue-500 focus:outline-none appearance-none cursor-pointer bg-white"
            >
              <option value="" disabled>-- Оберіть відповідь --</option>
              <option value="Собака">Собака</option>
              <option value="Корова">Корова</option>
              <option value="Кіт">Кіт</option>
            </select>
          </div>
        </div>

        <button 
          onClick={checkAnswer}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
        >
          Перевірити рішення
        </button>
      </div>
    </div>
  );
}

export default Practical6_3;
