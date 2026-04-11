import React from 'react';
import { useNavigate } from 'react-router-dom';

const Practical1_1 = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-8">
            
            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row">
                <main className="w-full md:w-2/3 p-10">
                    <h1 className="text-4xl font-bold mb-8 text-gray-900 border-b pb-4">Thomas Frank <span className="text-sm font-normal text-gray-500 block mt-2">Just another WordPress site</span></h1>
                    
                    <h2 className="text-3xl font-semibold mb-6">About Me</h2>
                    
                    <div className="prose max-w-none text-lg text-gray-700 space-y-6">
                        <p>
                            My name is Thomas and my main hobby is doing circus tricks. I'll usually start each day by firing myself out of a cannon, then follow that up with a healthy breakfast consisting of one 15th-century Ottoman scimitar and one broadsword (I'm not picky on these).
                        </p>
                        
                        <div className="float-right ml-6 mb-4 w-64">
                            <img src="/thomas-bennie-lxziZx-TfSo-unsplash.jpg" alt="Thomas Frank" className="w-full h-auto rounded-lg shadow-md" />
                            <p className="text-xs text-gray-500 mt-2 italic text-center">My beard is the source of my power</p>
                        </div>

                        <p>
                            After that, it's onto six hours of riding a dirt bike inside a spherical metal cage, after which I'll usually puke for about an hour. On Wednesdays, though, I replace this routine with two hours of curling and waxing my mustache and three hours of lifting cartoonishly large barbells.
                        </p>

                        <p>
                            I'm available for birthday parties and funerals, and I offer a 30% discount if you buy both in a package deal.
                        </p>
                        
                        <p className="text-sm text-blue-500 cursor-pointer hover:underline mt-4">Edit</p>
                    </div>
                </main>
                
                <aside className="w-full md:w-1/3 bg-gray-50 p-10 border-l border-gray-200">
                    <div className="mb-8">
                        <div className="flex shadow-sm rounded">
                            <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <button className="bg-gray-800 text-white px-4 py-2 rounded-r hover:bg-gray-700">🔍</button>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4">Recent Comments</h3>
                        <div className="w-full h-px bg-gray-300 mb-4"></div>
                        <p className="text-sm text-gray-500 italic">No recent comments.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4">Archives</h3>
                        <div className="w-full h-px bg-gray-300 mb-4"></div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4">Categories</h3>
                        <div className="w-full h-px bg-gray-300 mb-4"></div>
                        <ul className="text-sm text-blue-600 space-y-2">
                            <li className="hover:underline cursor-pointer">No categories</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase mb-4">Meta</h3>
                        <div className="w-full h-px bg-gray-300 mb-4"></div>
                        <ul className="text-sm text-blue-600 space-y-2">
                            <li className="hover:underline cursor-pointer">Site Admin</li>
                            <li className="hover:underline cursor-pointer">Log out</li>
                            <li className="hover:underline cursor-pointer">Entries RSS</li>
                            <li className="hover:underline cursor-pointer">Comments RSS</li>
                            <li className="hover:underline cursor-pointer">WordPress.org</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};
export default Practical1_1;
