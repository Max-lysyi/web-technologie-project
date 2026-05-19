import React from 'react';
import AnimatedButton from '../AnimatedButton';

const Practical5_2 = () => {
  const quotes = [
    { author: 'Цицерон', text: 'Для нас дорогі батьки, дорогі діти, близькі, родичі; але всі уявлення про любов до чого-небудь поєднані в одному слові «вітчизна».' },
    { author: 'М. Шумило', text: 'Мова — це глибина тисячоліть.' },
    { author: 'Ч. Айтматов', text: 'Той, хто в біді кидає свій народ, стає його ворогом.' },
    { author: 'П. Гольбах', text: 'Де немає свободи, там немає і вітчизни.' },
    { author: 'Т. Шевченко', text: 'В своїй хаті своя й правда, І сила, і воля.' }
  ];

  const handleShowQuote = (author: string, text: string) => {
    alert(`Висловлювання ${author}:\n\n"${text}"`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-brand-yellow drop-shadow-[0_0_10px_rgba(255,193,7,0.3)]">
        Про Батьківщину та патріотизм. Про рідну мову, українську пісню
      </h2>
      <p className="text-gray-400 mb-12 text-lg">Натисніть на кнопку з прізвищем автора, щоб побачити його вислів.</p>
      
      <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
        {quotes.map((quote, index) => (
          <AnimatedButton
            key={index}
            variant="yellow"
            onClick={() => handleShowQuote(quote.author, quote.text)}
            className="border border-brand-yellow/30 rounded-[12px] block px-8 py-4"
            innerClassName="inset-[2px] rounded-[10px] bg-brand-yellow/10 group-hover:bg-brand-yellow transition-all duration-300 shadow-[0_0_15px_rgba(255,193,7,0.1)] group-hover:shadow-[0_0_25px_rgba(255,193,7,0.4)]"
          >
            <div className="text-brand-yellow group-hover:text-white transition-all duration-300 font-sans font-semibold text-lg whitespace-nowrap">
              {quote.author}
            </div>
          </AnimatedButton>
        ))}
      </div>
    </div>
  );
}

export default Practical5_2;
