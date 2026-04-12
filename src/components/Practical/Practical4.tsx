import React, { useState, useEffect } from 'react';

const Practical4 = () => {
  const [headingText, setHeadingText] = useState('Hello world!');
  const [userName, setUserName] = useState<string | null>('');
  
  
  const opera1 = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='%23FF1B2D' stroke-width='15' fill='none'/><ellipse cx='50' cy='50' rx='20' ry='35' fill='%23FF1B2D'/></svg>";
  const opera2 = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' stroke='%23AA0000' stroke-width='15' fill='none'/><ellipse cx='50' cy='50' rx='20' ry='35' fill='%23AA0000'/></svg>";
  
  const [currentImage, setCurrentImage] = useState(opera1);

  useEffect(() => {

    const storedName = localStorage.getItem('name');
    if (!storedName) {
      setUserNamePrompt();
    } else {
      setUserName(storedName);
      setHeadingText(`Opera is cool, ${storedName}`);
    }
  }, []);

  const setUserNamePrompt = () => {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserNamePrompt();
    } else {
      localStorage.setItem('name', myName);
      setUserName(myName);
      setHeadingText(`Opera is cool, ${myName}`);
    }
  };

  const handleImageClick = () => {
    if (currentImage === opera1) {
      setCurrentImage(opera2);
    } else {
      setCurrentImage(opera1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1D1D1B] font-sans flex items-center justify-center py-10 px-4">
      <div className="bg-white max-w-2xl w-full border-t-8 border-[#FF1B2D] shadow-2xl rounded-b-lg overflow-hidden">
        <header className="bg-[#1D1D1B] text-white p-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
            {headingText}
          </h1>
        </header>

        <div className="p-8 pb-10 flex flex-col items-center">
          <img 
            src={currentImage} 
            alt="Opera Logo" 
            onClick={handleImageClick}
            className="w-48 h-48 cursor-pointer drop-shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out mb-8 object-contain"
            title="Click to change image!"
          />

          <div className="text-lg text-gray-700 leading-relaxed mb-6 w-full text-left">
            <p className="mb-4">At Opera, we're a global community of</p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4 marker:text-[#FF1B2D] font-medium text-gray-800">
              <li>technologists</li>
              <li>thinkers</li>
              <li>builders</li>
            </ul>
            <p className="mb-4">
              working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of the Web. We believe this act of human collaboration across an open platform is essential to individual growth and our collective future.
            </p>
            <p>
              Read the <strong className="text-[#FF1B2D] hover:underline cursor-pointer">Opera Manifesto</strong> to learn even more about the values and principles that guide the pursuit of our mission.
            </p>
          </div>

          <button 
            onClick={setUserNamePrompt}
            className="mt-4 px-6 py-3 bg-[#FF1B2D] hover:bg-[#D5001C] text-white font-semibold rounded shadow-md transition-colors duration-200 active:scale-95"
          >
            Change user
          </button>
        </div>
      </div>
    </div>
  );
};

export default Practical4;
