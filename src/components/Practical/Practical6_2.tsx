import React, { useState } from 'react';

const Practical6_2 = () => {
  const [answers, setAnswers] = useState([false, false, false, false]);

  const toggleAnswer = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = !newAnswers[index];
    setAnswers(newAnswers);
  };

  const checkResults = () => {
    // NAND truth table: [1, 1, 1, 0] which means [true, true, true, false]
    const correct = [true, true, true, false];
    let isCorrect = true;
    for (let i = 0; i < 4; i++) {
      if (answers[i] !== correct[i]) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      alert('Вірно! Ви добре знаєте таблицю істинності елемента І-НЕ.');
    } else {
      alert('Помилка. Перевірте свої відповіді.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-white text-black p-8 rounded-xl shadow-2xl max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center border-b pb-4">Перевірка знання таблиці істинності</h2>
        <p className="text-center mb-6 font-medium text-gray-700">Логічний елемент І-НЕ (NAND)</p>
        
        <p className="text-sm text-gray-600 mb-6 text-center">
          Для вводу 1 встановіть прапорець (вмикач), для 0 — залиште порожнім.
        </p>

        <table className="w-full mb-8 text-lg border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-left w-1/2">Логічні вирази</th>
              <th className="border-b p-2 text-center w-1/2">Для вводу 1 встановіть прапорець</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b">0 І-НЕ 0 =</td>
              <td className="p-3 border-b text-center">
                <input type="checkbox" className="w-6 h-6 cursor-pointer" checked={answers[0]} onChange={() => toggleAnswer(0)} />
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b">0 І-НЕ 1 =</td>
              <td className="p-3 border-b text-center">
                <input type="checkbox" className="w-6 h-6 cursor-pointer" checked={answers[1]} onChange={() => toggleAnswer(1)} />
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b">1 І-НЕ 0 =</td>
              <td className="p-3 border-b text-center">
                <input type="checkbox" className="w-6 h-6 cursor-pointer" checked={answers[2]} onChange={() => toggleAnswer(2)} />
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b">1 І-НЕ 1 =</td>
              <td className="p-3 border-b text-center">
                <input type="checkbox" className="w-6 h-6 cursor-pointer" checked={answers[3]} onChange={() => toggleAnswer(3)} />
              </td>
            </tr>
          </tbody>
        </table>

        <button 
          onClick={checkResults}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
        >
          Перевірити рішення
        </button>
      </div>
    </div>
  );
}

export default Practical6_2;
