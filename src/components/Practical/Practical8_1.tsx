import React, { useEffect, useState } from 'react';

const Practical8_1 = () => {
  const [userAgent, setUserAgent] = useState('');
  const [url, setUrl] = useState('');
  const [cookie, setCookie] = useState('');

  useEffect(() => {
    setUserAgent(navigator.userAgent);
    setUrl(window.location.href);
    setCookie(document.cookie || 'Немає cookies');
  }, []);

  const data = [
    {
      variable: '$_GLOBALS',
      desc: 'Містить посилання на всі змінні глобальної області видимості.',
      value: 'В React: window (глобальний об\'єкт браузера)'
    },
    {
      variable: '$_SERVER',
      desc: 'Змінна містить інформацію про заголовки, шляхи і розташування скриптів.',
      value: `HTTP_USER_AGENT = ${userAgent}`
    },
    {
      variable: '$_GET',
      desc: 'Асоціативний масив змінних, переданих скрипту через URL параметри.',
      value: `В React: URLSearchParams. Поточний URL: ${url}`
    },
    {
      variable: '$_POST',
      desc: 'Асоціативний масив змінних, переданих скрипту через HTTP POST запит.',
      value: 'В React: Дані форм (FormData, State).'
    },
    {
      variable: '$_FILES',
      desc: 'Асоціативний масив елементів, завантажених в поточний скрипт через HTTP POST.',
      value: 'В React: об\'єкти FileList з <input type="file">'
    },
    {
      variable: '$_COOKIE',
      desc: 'Асоціативний масив змінних, переданих скрипту через HTTP Cookies.',
      value: `document.cookie: ${cookie}`
    },
    {
      variable: '$_SESSION',
      desc: 'Асоціативний масив змінних сесії.',
      value: 'В React: sessionStorage або стан застосунку (Redux, Context)'
    },
    {
      variable: '$_REQUEST',
      desc: 'Асоціативний масив, який містить вміст $_GET, $_POST і $_COOKIE.',
      value: 'Комбінація параметрів URL, тіла запиту та cookies.'
    },
    {
      variable: '$_ENV',
      desc: 'Асоціативний масив змінних, переданих скрипту через середовище.',
      value: 'В React: import.meta.env (змінні середовища Vite)'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-brand-yellow">Суперглобальні змінні PHP (Адаптовано під React)</h2>
      
      <div className="w-full max-w-6xl bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-gray-200">
              <th className="p-4 border-b border-gray-700 w-1/4">Позначення змінної</th>
              <th className="p-4 border-b border-gray-700 w-1/3">Характеристика</th>
              <th className="p-4 border-b border-gray-700">Отримане значення (Аналог)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-800/50 transition-colors border-b border-gray-800 last:border-0">
                <td className="p-4 font-mono text-brand-yellow">{row.variable}</td>
                <td className="p-4 text-gray-300 text-sm">{row.desc}</td>
                <td className="p-4 text-gray-400 text-sm font-mono break-words">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Practical8_1;
