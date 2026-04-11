import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const TransitionContext = createContext()

export const TransitionProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const navigateWithAnimation = (path) => {
    setIsLoading(true) 

    setTimeout(() => {
      navigate(path) 

      setTimeout(() => {
        setIsLoading(false) 
      }, 500)
    }, 1500)
  }

  return (
    <TransitionContext.Provider value={{ navigateWithAnimation }}>
      {children}

      <div
        className={`fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
          isLoading ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-8"></div>
      </div>
    </TransitionContext.Provider>
  )
}

export const useTransitionNavigate = () => useContext(TransitionContext)
