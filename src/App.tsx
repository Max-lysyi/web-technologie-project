import { Route, Routes } from 'react-router-dom'
import { TransitionProvider } from './components/TransitionContext'
import MainMenu from './components/MainMenu'
import LabList from './components/LabList'
import Lab1 from './components/Labs/Lab1'
import Lab2 from './components/Labs/Lab2'
import ScrollToTop from './components/ScrollToTop'
import PracticalList from './components/PracticalList'
import Practical1 from './components/Practical/Practical1'
import Practical1_1 from './components/Practical/Practical1_1'
import Practical1_2 from './components/Practical/Practical1_2'
import Practical1_3 from './components/Practical/Practical1_3'
import Practical4 from './components/Practical/Practical4'

import Practical3 from './components/Practical/Practical3'
import Practical3_1 from './components/Practical/Practical3_1'
import Practical3_2 from './components/Practical/Practical3_2'

import './App.css'


function App() {
  

  return (
    <>
      <ScrollToTop />
      <TransitionProvider>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/labs" element={<LabList />} />
          <Route path="/labs/1" element={<Lab1 />} />
          <Route path="/labs/2" element={<Lab2 />} />
          <Route path="/practical" element={<PracticalList />} />
          <Route path="/practical/1" element={<Practical1 />} />
          <Route path="/practical/1/1" element={<Practical1_1 />} />
          <Route path="/practical/1/2" element={<Practical1_2 />} />
          <Route path="/practical/1/3" element={<Practical1_3 />} />
          <Route path="/practical/4" element={<Practical4 />} />

          <Route path="/practical/3" element={<Practical3 />} />
          <Route path="/practical/3/1" element={<Practical3_1 />} />
          <Route path="/practical/3/2" element={<Practical3_2 />} />
        </Routes>
      </TransitionProvider>
    </>
  )
}

export default App
