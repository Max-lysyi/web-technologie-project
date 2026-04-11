import React from 'react';
import { useNavigate } from 'react-router-dom';

const Practical1_2 = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fde047] to-[#b45309] flex items-center justify-center p-4 font-['Montserrat']">

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-2xl text-center max-w-sm w-full transition-transform duration-300">
                <img 
                    src="/thomas-bennie-lxziZx-TfSo-unsplash.jpg" 
                    alt="Coder" 
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20 shadow-lg"
                />
                <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">Max Lysyi</h1>
                <h5 className="text-xs text-indigo-300 font-semibold mb-6 uppercase tracking-widest">Web Developer - Web Designer</h5>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications, or applications that are run over HTTP from a web server to a web browser.
                </p>
                <ul className="flex justify-center gap-6">
                    <li>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.325V1.325C24 .597 23.403 0 22.675 0z"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 text-white hover:bg-sky-400 transition-colors shadow-lg">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-500 transition-colors shadow-lg">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a5.952 5.952 0 110-11.904c1.464 0 2.753.518 3.791 1.413l2.827-2.827C17.436 3.13 15.228 2.062 12.545 2.062 7.021 2.062 2.544 6.539 2.544 12s4.477 9.938 10.001 9.938c5.445 0 9.456-3.844 9.456-9.67 0-.726-.067-1.428-.194-2.029H12.545z"/></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Practical1_2;
