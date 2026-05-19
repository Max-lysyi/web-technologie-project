import React from 'react';

const AterinLogo = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 50C50 50 20 20 20 50C20 80 50 50 50 50ZM50 50C50 50 80 80 80 50C80 20 50 50 50 50ZM50 50C50 50 20 80 50 80C80 80 50 50 50 50ZM50 50C50 50 80 20 50 20C20 20 50 50 50 50Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Practical7 = () => {
  return (
    <div className="flex h-screen bg-gray-950 text-gray-200 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 border-r border-gray-800 flex flex-col flex-shrink-0">
        
        {/* Header */}
        <div className="p-6 flex items-center gap-3">
          <div className="text-brand-yellow">
            <AterinLogo />
          </div>
          <h1 className="text-xl font-bold tracking-widest text-white uppercase">Aterin</h1>
        </div>

        {/* New Chat Button */}
        <div className="px-6 pb-6 flex gap-3">
          <button className="flex-1 bg-brand-yellow hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
            <span>+</span> New chat
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-xl transition-colors">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
          <div className="flex justify-between items-center px-2 mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase">Your conversations</span>
            <button className="text-xs text-brand-yellow hover:text-yellow-400">Clear All</button>
          </div>

          <ul className="space-y-1 mb-8">
            {['Create Html Game Environment...', 'Apply To Leave For Emergency', 'What Is UI UX Design?', 'Create POS System', 'What Is UX Audit?'].map((chat, idx) => (
              <li key={idx}>
                <button className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-colors flex items-center gap-3">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  <span className="truncate">{chat}</span>
                </button>
              </li>
            ))}
            
            <li>
              <button className="w-full text-left px-3 py-2.5 rounded-lg text-sm bg-brand-yellow/10 text-brand-yellow flex items-center justify-between group">
                <div className="flex items-center gap-3 truncate">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  <span className="truncate">Create Chatbot GPT...</span>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
              </button>
            </li>
          </ul>

          <div className="px-2 mb-4">
            <span className="text-xs font-semibold text-gray-500 uppercase">Last 7 Days</span>
          </div>
          <ul className="space-y-1">
            {['Crypto Lending App Name', 'Operator Grammar Types', 'Min States For Binary DFA'].map((chat, idx) => (
              <li key={idx}>
                <button className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-colors flex items-center gap-3">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  <span className="truncate">{chat}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Settings & Profile */}
        <div className="p-4 border-t border-gray-800 space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="font-medium text-sm">Settings</span>
          </button>
          
          <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-800 rounded-lg transition-colors">
            <div className="w-8 h-8 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow font-bold text-sm">
              AN
            </div>
            <span className="font-medium text-sm text-gray-200">Andrew Neilson</span>
          </div>
        </div>

      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative bg-gray-950">
        
        {/* Right side floating banner */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-brand-yellow text-gray-900 rounded-l-xl px-2 py-6 shadow-lg shadow-yellow-500/20 cursor-pointer hover:pl-3 transition-all flex items-center justify-center">
           <span className="writing-vertical font-semibold text-sm tracking-wider flex items-center gap-2">
             <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"></path></svg>
             Upgrade to Pro
           </span>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-8 lg:px-32 xl:px-48 space-y-10 custom-scrollbar pb-32">
          
          {/* User Message */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0 flex items-center justify-center overflow-hidden">
               <img src={`https://ui-avatars.com/api/?name=Andrew+Neilson&background=random`} alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between group">
                <p className="text-gray-300 text-lg">Create a chatbot gpt using python language what will be step for that</p>
                <button className="text-gray-600 hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                </button>
              </div>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex-shrink-0 flex items-center justify-center text-brand-yellow">
              <AterinLogo />
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-brand-yellow text-sm font-semibold">
                <span>ATERIN</span>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.118 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z"></path></svg>
              </div>
              
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>Sure, I can help you get started with creating a chatbot using GPT in Python. Here are the basic steps you'll need to follow:</p>
                
                <ol className="list-decimal pl-5 space-y-4 marker:text-gray-500">
                  <li>
                    <span className="font-semibold text-gray-200">Install the required libraries:</span> You'll need to install the transformers library from Hugging Face to use GPT. You can install it using pip.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">Load the pre-trained model:</span> GPT comes in several sizes and versions, so you'll need to choose the one that fits your needs. You can load a pre-trained GPT model. This loads the 1.3B parameter version of GPT-Neo, which is a powerful and relatively recent model.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">Create a chatbot loop:</span> You'll need to create a loop that takes user input, generates a response using the GPT model, and outputs it to the user. Here's an example loop that uses the input() function to get user input and the gpt() function to generate a response. This loop will keep running until the user exits the program or the loop is interrupted.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">Add some personality to the chatbot:</span> While GPT can generate text, it doesn't have any inherent personality or style. You can make your chatbot more interesting by adding custom prompts or responses that reflect your desired personality. You can then modify the chatbot loop to use these prompts and responses when appropriate. This will make the chatbot seem more human-like and engaging.
                  </li>
                </ol>
                
                <p>These are just the basic steps to get started with a GPT chatbot in Python. Depending on your requirements, you may need to add more features or complexity to the chatbot. Good luck!</p>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-1 text-gray-500">
                  <button className="p-2 hover:bg-gray-800 hover:text-gray-300 rounded-lg transition-colors"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg></button>
                  <button className="p-2 hover:bg-gray-800 hover:text-gray-300 rounded-lg transition-colors"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"></path></svg></button>
                  <button className="p-2 hover:bg-gray-800 hover:text-gray-300 rounded-lg transition-colors"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></button>
                </div>
                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors">
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                  Regenerate
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:px-32 xl:px-48 bg-gradient-to-t from-gray-950 via-gray-950/90 to-transparent">
          <div className="relative flex items-center bg-gray-900 border border-gray-800 rounded-2xl shadow-xl shadow-black/50 overflow-hidden focus-within:border-brand-yellow/50 focus-within:ring-1 focus-within:ring-brand-yellow/50 transition-all">
            <button className="p-4 text-gray-400 hover:text-brand-yellow transition-colors">
               <AterinLogo />
            </button>
            <input 
              type="text" 
              placeholder="What's in your mind?..." 
              className="flex-1 bg-transparent border-none text-gray-200 placeholder-gray-500 focus:outline-none py-4"
            />
            <button className="m-2 w-10 h-10 rounded-xl bg-brand-yellow text-gray-900 flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-sm">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V5m0 0l-7 7m7-7l7 7"></path></svg>
            </button>
          </div>
          <p className="text-center text-xs text-gray-600 mt-3">Aterin can make mistakes. Consider verifying important information.</p>
        </div>

      </main>

      {/* Global CSS for vertical text */}
      <style>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #374151;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Practical7;
