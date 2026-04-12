import React from 'react';
import { useNavigate } from 'react-router-dom';

const Practical1_3 = () => {
    const navigate = useNavigate();
    return (
      <div className="min-h-screen bg-slate-50 font-serif text-gray-900 p-8 pt-12">
        <div className="max-w-6xl mx-auto bg-white p-12 shadow-md rounded border border-gray-100">
          <div className="mb-6"></div>

          <header className="mb-6 flex flex-col md:flex-row md:items-baseline md:gap-2">
            <h1 className="text-2xl font-bold tracking-tight">
              Футбольний Менеджер
            </h1>
            <span className="text-sm italic text-gray-600 font-normal">
              Офіційний сайт
            </span>
          </header>

          <div className="flex flex-col gap-2 mb-6">
            <div className="w-20 h-20">
              <img
                src={`${import.meta.env.BASE_URL}ML-FINT.jpg`}
                alt="Футбол"
                className="w-full h-full object-cover rounded-full border border-gray-200 shadow-sm"
              />
            </div>
          </div>

          <div className="mb-8 text-[15px]">
            <a
              href="tel:+380975555501"
              className="text-blue-700 hover:underline hover:text-blue-800 transition-colors mr-2"
            >
              +38 (097) 555-55-01
            </a>
            <span className="italic text-gray-700">Працюємо 24/7</span>
          </div>

          <div className="w-full h-[400px] overflow-hidden mb-12">
            <img
              src={`${import.meta.env.BASE_URL}football-field-goal-net-grass-stadium-night-time-163455.jpg`}
              alt="Футбольне поле і ворота"
              className="w-full  h-full "
            />
          </div>

          <h2 className="text-2xl font-bold mb-6 font-sans">Про футбол</h2>

          <div className="space-y-5 text-justify leading-[1.8] text-[15.5px] mb-12">
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
            <p className="italic text-gray-700">
              Або при вкиданні м'яча. Інші гравці в основному використовують
              свої ноги, щоб нанести удар або передати м'яч, але можуть також
              використовувати голову і тулуб.
            </p>
          </div>

          <h3 className="font-bold mb-4 text-[15px]">Футбольні партнери</h3>

          <ul className="list-disc list-inside text-blue-700 font-sans space-y-1.5 mb-12 text-sm uppercase font-semibold pl-2">
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-900 transition-colors"
              >
                ОСТАННІ НОВИНИ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-900 transition-colors"
              >
                ПАРІ МАТЧ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-900 transition-colors"
              >
                ПРИВАТНИЙ МЕНЕДЖЕР ВАСЯ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-900 transition-colors"
              >
                ФАНАТИ СЕКТОРУ №48
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:text-blue-900 transition-colors"
              >
                ДОСТАВКА ЇЖІ НА СТАДІОН
              </a>
            </li>
          </ul>

          <footer className="text-sm text-gray-800 pt-6">
            &copy; Футбольний менеджер 2023.
          </footer>
        </div>
      </div>
    )
};
export default Practical1_3;
