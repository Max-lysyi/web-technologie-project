import React, { useState } from 'react';

const Practical6_6 = () => {
  const [recipient, setRecipient] = useState('example@mail.com');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-gray-900 text-gray-200 p-8 rounded-2xl shadow-xl border border-gray-800 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-brand-yellow text-center border-b border-gray-800 pb-4">Надіслати E-mail</h2>
        
        {/* Форма з action mailto */}
        <form action={`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} method="post" encType="text/plain" className="space-y-6">
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Одержувач (E-mail)</label>
            <input 
              type="email" 
              value={recipient} 
              onChange={(e) => setRecipient(e.target.value)} 
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" 
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Тема листа</label>
            <input 
              type="text" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" 
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Текст повідомлення</label>
            <textarea 
              rows={4}
              value={body} 
              onChange={(e) => setBody(e.target.value)} 
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all resize-none" 
            ></textarea>
          </div>
          
          <button type="submit" className="w-full py-3 bg-brand-yellow/20 hover:bg-brand-yellow/30 text-brand-yellow font-bold text-lg rounded-xl border border-brand-yellow/40 transition-colors shadow-[0_0_15px_rgba(255,193,7,0.1)]">
            Відкрити поштовий клієнт
          </button>
        </form>
      </div>
    </div>
  );
};

export default Practical6_6;
