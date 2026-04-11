import React from 'react';
import { useNavigate } from 'react-router-dom';

const Practical3_2 = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-white font-serif pb-20">

            <div className="max-w-[1000px] mx-auto mt-6">
                <h1 className="text-center text-3xl font-bold mb-8">Website Development Process</h1>
                

                <div className="border border-[#eeb7b4] text-[0px] w-full shadow-sm">
                    

                    <div className="inline-block align-top w-1/2 h-[40vh] border border-[#eeb7b4] p-8 text-base overflow-y-auto box-border">
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="inline-flex justify-center items-center w-7 h-7 rounded-full border border-red-800 text-red-800 text-sm mr-3 flex-shrink-0">1</span>
                            Idea of Website. Creating a psd layout
                        </h2>
                        <ul className="list-disc list-outside pl-6 space-y-2 text-sm text-red-800 ml-4 marker:text-[#eeb7b4]">
                            <li><span className="text-gray-800">Creating an idea</span></li>
                            <li><span className="text-gray-800">Development of a project structure</span></li>
                            <li><span className="text-gray-800">Working out a project layout</span></li>
                            <li><span className="text-gray-800">Creating a psd layout</span></li>
                        </ul>
                    </div>

                    <div className="inline-block align-top w-1/2 h-[40vh] border border-[#eeb7b4] p-8 text-base overflow-y-auto box-border">
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="inline-flex justify-center items-center w-7 h-7 rounded-full border border-red-800 text-red-800 text-sm mr-3 flex-shrink-0">2</span>
                            Website layout
                        </h2>
                        <ul className="list-disc list-outside pl-6 space-y-2 text-sm text-red-800 ml-4 marker:text-[#eeb7b4]">
                            <li><span className="text-gray-800">Choice of a layout template</span></li>
                            <li><span className="text-gray-800">Using a modular grid and frameworks that provide it</span></li>
                            <li><span className="text-gray-800">Adaptive layout of the website for different screen resolutions</span></li>
                            <li><span className="text-gray-800">Using the principles of Mobile First, Progressive Enhancement or Graceful Degradation</span></li>
                        </ul>
                    </div>


                    <div className="inline-block align-top w-1/2 h-[40vh] border border-[#eeb7b4] p-8 text-base overflow-y-auto box-border">
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="inline-flex justify-center items-center w-7 h-7 rounded-full border border-red-800 text-red-800 text-sm mr-3 flex-shrink-0">3</span>
                            Choosing a CMS for the Website
                        </h2>
                        <ul className="list-disc list-outside pl-6 space-y-2 text-sm text-red-800 ml-4 marker:text-[#eeb7b4]">
                            <li><span className="text-gray-800">Evaluation of the need to transfer the html-layout to one of the CMS</span></li>
                            <li><span className="text-gray-800">Converting html-files to php, sharing files for reuse</span></li>
                            <li><span className="text-gray-800">Adding functionality to the template</span></li>
                        </ul>
                    </div>


                    <div className="inline-block align-top w-1/2 h-[40vh] border border-[#eeb7b4] p-8 text-base overflow-y-auto box-border">
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <span className="inline-flex justify-center items-center w-7 h-7 rounded-full border border-red-800 text-red-800 text-sm mr-3 flex-shrink-0">4</span>
                            Hosting the Website
                        </h2>
                        <ul className="list-disc list-outside pl-6 space-y-2 text-sm text-red-800 ml-4 marker:text-[#eeb7b4]">
                            <li><span className="text-gray-800">Choosing a site for hosting</span></li>
                            <li><span className="text-gray-800">Choosing the correct hosting plan</span></li>
                            <li><span className="text-gray-800">Selecting and registering a domain name</span></li>
                            <li><span className="text-gray-800">Transferring files from the local computer to the hosting</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Practical3_2;
