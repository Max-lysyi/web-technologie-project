import React, { useState } from 'react';

const Practical6_4 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    dob: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Паролі не співпадають!");
      return;
    }
    alert(`Реєстрація успішна!\nКористувач: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-gray-900 text-gray-200 p-8 rounded-2xl shadow-xl border border-gray-800 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-brand-yellow text-center border-b border-gray-800 pb-4">Форма реєстрації</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Персональні дані */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Персональні дані</h3>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-400">Ім'я</label>
                <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-400">Прізвище</label>
                <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-400">Дата народження</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all text-white" />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-400">Телефон</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" />
              </div>
            </div>

            {/* Реєстраційні дані */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2">Реєстраційні дані</h3>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-400">Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-400">Пароль</label>
                <input required type="password" name="password" value={formData.password} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm text-gray-400">Підтвердження пароля</label>
                <input required type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow outline-none transition-all" />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button type="submit" className="w-full py-4 bg-brand-yellow/20 hover:bg-brand-yellow/30 text-brand-yellow font-bold text-lg rounded-xl border border-brand-yellow/40 transition-colors shadow-[0_0_15px_rgba(255,193,7,0.1)] hover:shadow-[0_0_20px_rgba(255,193,7,0.3)]">
              Зареєструватися
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Practical6_4;
