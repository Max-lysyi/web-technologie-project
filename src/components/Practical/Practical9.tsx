import React, { useState } from 'react';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  desc: string;
};

const productsData: Product[] = [
  // Туші
  { id: 1, category: 'М\'ясо (туші)', name: 'Півтуша свиняча (охолоджена)', price: 145, image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Вищий сорт, ідеально для гуртових закупівель. Ціна за 1 кг.' },
  { id: 2, category: 'М\'ясо (туші)', name: 'Чверть яловича (передня)', price: 180, image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Свіжа фермерська яловичина. Ціна за 1 кг.' },
  
  // М'ясна продукція
  { id: 3, category: 'М\'ясна продукція', name: 'Фарш "Домашній"', price: 155, image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: '50% свинина, 50% яловичина. Без домішок.' },
  { id: 4, category: 'М\'ясна продукція', name: 'Бекон сирокопчений', price: 290, image: 'https://images.unsplash.com/photo-1628268909376-e8c44bb3153f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Натуральне копчення на вишневих дровах.' },
  { id: 5, category: 'М\'ясна продукція', name: 'Ковбаски "Баварські" для гриля', price: 195, image: 'https://images.unsplash.com/photo-1595777314545-0210214eb1de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Ідеальні для смаження на відкритому вогні.' },
  
  // Преміум
  { id: 6, category: 'Преміум сегмент', name: 'Стейк Рібай (Ribeye)', price: 650, image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Мармурова яловичина сухої витримки (21 день).' },
  { id: 7, category: 'Преміум сегмент', name: 'Стейк Тібоун (T-Bone)', price: 720, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', desc: 'Поєднання ніжного філе та насиченого стріплойну.' },
];

const Practical9 = () => {
  const [cart, setCart] = useState<{product: Product, quantity: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Всі');

  const categories = ['Всі', 'М\'ясо (туші)', 'М\'ясна продукція', 'Преміум сегмент'];

  const filteredProducts = activeCategory === 'Всі' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-stone-950/90 backdrop-blur-md border-b border-red-900/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center font-bold text-white text-xl">
              EM
            </div>
            <span className="text-2xl font-black text-white tracking-wider uppercase">Eat <span className="text-red-600">Meat</span></span>
          </div>
          
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#hero" className="hover:text-red-500 transition-colors">Головна</a>
            <a href="#about" className="hover:text-red-500 transition-colors">Про нас</a>
            <a href="#products" className="hover:text-red-500 transition-colors">Продукція</a>
            <a href="#contacts" className="hover:text-red-500 transition-colors">Контакти</a>
          </nav>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-stone-300 hover:text-white transition-colors"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center transform translate-x-1 -translate-y-1">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              СВІЖЕ М'ЯСО <br/><span className="text-red-600">ВІД ВИРОБНИКА</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 mb-10 leading-relaxed">
              Ми розширюємося і виходимо на всеукраїнський рівень! Гурт та роздріб найвищої якості від компанії Eat Meat.
            </p>
            <div className="flex gap-4">
              <a href="#products" className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors">
                Переглянути асортимент
              </a>
              <a href="#about" className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-colors">
                Більше про нас
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-900 border-y border-stone-800 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Butcher" className="rounded-2xl shadow-2xl border-4 border-stone-800" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">Директор: Петро</h2>
            <p className="text-lg text-stone-400 mb-6 leading-relaxed">
              «Привіт! Мене звуть Петро, я директор компанії "Eat Meat". Наша компанія є великим виробником м'яса і м'ясної продукції в регіоні. Вся наша продукція проходить суворий контроль якості на всіх етапах виробництва.»
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-stone-950 p-6 rounded-xl border border-stone-800">
                <div className="text-red-500 text-3xl font-black mb-2">100%</div>
                <div className="text-stone-300 font-medium">Контроль якості</div>
              </div>
              <div className="bg-stone-950 p-6 rounded-xl border border-stone-800">
                <div className="text-red-500 text-3xl font-black mb-2">Гурт</div>
                <div className="text-stone-300 font-medium">Та роздрібні мережі</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-wider">Наша продукція</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-red-700 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                  : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 group hover:border-red-900/50 transition-colors">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur text-xs font-bold text-stone-300 px-3 py-1 rounded-full z-10">
                  {product.category}
                </div>
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-stone-400 text-sm mb-6 h-10 line-clamp-2">{product.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-2xl font-black text-red-500">{product.price} <span className="text-sm text-stone-500 font-normal">грн/кг</span></div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-stone-800 hover:bg-red-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-black py-12 px-6 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center font-bold text-white">EM</div>
            <span className="text-xl font-black text-white tracking-wider uppercase">Eat <span className="text-red-600">Meat</span></span>
          </div>
          <div className="text-stone-500 text-sm text-center md:text-left">
            <p>Телефон для гуртових замовлень: +38 (099) 123-45-67</p>
            <p>Email: sales@eatmeat.ua</p>
          </div>
          <div className="text-stone-600 text-sm">
            &copy; 2026 Eat Meat. Всі права захищено. Практична робота 9.
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-stone-900 h-full flex flex-col shadow-2xl border-l border-stone-800 animate-slide-in-right">
            
            <div className="p-6 border-b border-stone-800 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Кошик</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-stone-400 hover:text-white">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-stone-500">
                  <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="mb-4 opacity-50"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  <p>Кошик порожній</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.product.id} className="flex gap-4 items-center bg-stone-950 p-3 rounded-xl border border-stone-800">
                    <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="text-white font-medium line-clamp-1">{item.product.name}</h4>
                      <div className="text-red-500 font-bold text-sm mt-1">{item.product.price} грн/кг</div>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.product.id, -1)} className="w-6 h-6 bg-stone-800 rounded flex items-center justify-center hover:bg-stone-700">-</button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, 1)} className="w-6 h-6 bg-stone-800 rounded flex items-center justify-center hover:bg-stone-700">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.product.id)} className="p-2 text-stone-600 hover:text-red-500 transition-colors">
                      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-stone-800 bg-stone-950">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-stone-400">Загальна сума:</span>
                  <span className="text-2xl font-black text-white">{cartTotal} <span className="text-sm text-red-500">грн</span></span>
                </div>
                <button 
                  onClick={() => {
                    alert('Дякуємо за замовлення! З вами зв\'яжеться менеджер для уточнення деталей доставки.');
                    setCart([]);
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-4 rounded-xl uppercase tracking-wider transition-colors"
                >
                  Оформити замовлення
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global CSS for animation */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Practical9;
