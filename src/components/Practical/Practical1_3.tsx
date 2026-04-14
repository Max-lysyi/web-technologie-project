import React from 'react';

const Practical1_3 = () => {
    return (
      <div className="min-h-screen bg-[#00529F] font-sans p-4 md:p-8">
        <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden">
          
          {/* Header */}
          <header className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 bg-white border-b-4 border-[#EEBF00]">
            <div className="flex flex-col text-center md:text-left mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#00529F]">
                Футбольний <span className="text-[#EEBF00]">Менеджер</span>
              </h1>
              <span className="text-sm italic text-gray-500 mt-1">
                Офіційний сайт
              </span>
            </div>
            
            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 z-10 transition-transform hover:rotate-180 duration-500">
              <img
                src={`${import.meta.env.BASE_URL}ML-FINT.jpg`}
                alt="Футбол"
                className="w-full h-full object-cover rounded-full border-2 border-[#00529F] shadow-md"
              />
            </div>
            
            <div className="flex flex-col text-center md:text-right mt-4 md:mt-0">
              <a
                href="tel:+380975555501"
                className="text-[#00529F] font-bold text-lg hover:text-[#EEBF00] transition-colors"
              >
                +38 (097) 555-55-01
              </a>
              <span className="text-sm text-gray-600 mt-1 flex items-center justify-center md:justify-end gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Працюємо 24/7
              </span>
            </div>
          </header>

          {/* Main Image Banner */}
          <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden group">
            <img
              src={`${import.meta.env.BASE_URL}football-field-goal-net-grass-stadium-night-time-163455.jpg`}
              alt="Футбольне поле і ворота"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 md:p-10">
            
            {/* Main Text Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-[#00529F] uppercase tracking-wide border-b-2 border-gray-200 pb-2 flex items-center gap-3">
                <span className="bg-[#EEBF00] w-1.5 h-8 block"></span>
                Про футбол
              </h2>
              
              <div className="space-y-4 text-justify text-gray-800 leading-relaxed">
                <p>
                  Командний вид спорту, який грається між двома командами по
                  одинадцяти гравців зі сферичним м'ячем. Близько 250 мільйонів
                  чоловіків і жінок із більш ніж 200 країн грають у футбол, що
                  робить його найпопулярнішим в світі видом спорту.
                </p>
                <p>
                  У футбол грають на прямокутному полі з воротами на кожному кінці.
                  Мета гри полягає в тому, щоб забити м'яч в ворота протилежної
                  команди. Гравцям не дозволяється торкатися м'яча своїми руками,
                  поки він знаходиться в грі, якщо вони не є воротарі (і тільки
                  тоді, коли в їхньому штрафному майданчику).
                </p>
                <p className="italic text-gray-600 border-l-4 border-[#EEBF00] bg-gray-50 p-4 rounded-r-md">
                  Або при вкиданні м'яча. Інші гравці в основному використовують
                  свої ноги, щоб нанести удар або передати м'яч, але можуть також
                  використовувати голову і тулуб.
                </p>
              </div>
            </div>

            {/* Sidebar / Partners */}
            <div className="md:col-span-1">
              <div className="bg-[#00529F] text-white p-3 font-bold text-center uppercase tracking-wider shadow-md mb-6 rounded-sm border-l-4 border-[#EEBF00]">
                Футбольні партнери
              </div>
              
              <ul className="flex flex-col space-y-3">
                {[
                  "ОСТАННІ НОВИНИ",
                  "ПАРІ МАТЧ",
                  "ПРИВАТНИЙ МЕНЕДЖЕР ВАСЯ",
                  "ФАНАТИ СЕКТОРУ №48",
                  "ДОСТАВКА ЇЖІ НА СТАДІОН"
                ].map((item, index) => (
                  <li key={index} className="px-2">
                    <a
                      href="#"
                      className="group flex items-center text-sm font-semibold text-gray-700 hover:text-[#00529F] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-sm bg-[#EEBF00] mr-3 group-hover:scale-150 transition-transform"></span>
                      <span className="border-b border-transparent group-hover:border-[#00529F] pb-0.5 transition-all">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-[#00529F] text-white p-6 border-t-4 border-[#EEBF00] flex justify-between items-center text-sm">
            <p className="flex items-center gap-2">
              <span className="text-[#EEBF00] text-lg">&copy;</span> 
              Футбольний менеджер {new Date().getFullYear()}
            </p>
            <p className="opacity-75 italic font-semibold text-[#EEBF00]">Hala Madrid!</p>
          </footer>
          
        </div>
      </div>
    );
};

export default Practical1_3;
