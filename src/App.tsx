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

import Practical5 from './components/Practical/Practical5'
import Practical5_1 from './components/Practical/Practical5_1'
import Practical5_2 from './components/Practical/Practical5_2'
import Practical5_3 from './components/Practical/Practical5_3'
import Practical5_4 from './components/Practical/Practical5_4'

import Practical6 from './components/Practical/Practical6'
import Practical6_1 from './components/Practical/Practical6_1'
import Practical6_2 from './components/Practical/Practical6_2'
import Practical6_3 from './components/Practical/Practical6_3'
import Practical6_4 from './components/Practical/Practical6_4'
import Practical6_5 from './components/Practical/Practical6_5'
import Practical6_6 from './components/Practical/Practical6_6'

import Practical7 from './components/Practical/Practical7'

import Practical8 from './components/Practical/Practical8'
import Practical8_1 from './components/Practical/Practical8_1'
import Practical8_2 from './components/Practical/Practical8_2'
import Practical8_3 from './components/Practical/Practical8_3'
import Practical8_4 from './components/Practical/Practical8_4'

import Practical9 from './components/Practical/Practical9'






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

          <Route path="/practical/5" element={<Practical5 />} />
          <Route path="/practical/5/1" element={<Practical5_1 />} />
          <Route path="/practical/5/2" element={<Practical5_2 />} />
          <Route path="/practical/5/3" element={<Practical5_3 />} />
          <Route path="/practical/5/4" element={<Practical5_4 />} />

          <Route path="/practical/6" element={<Practical6 />} />
          <Route path="/practical/6/1" element={<Practical6_1 />} />
          <Route path="/practical/6/2" element={<Practical6_2 />} />
          <Route path="/practical/6/3" element={<Practical6_3 />} />
          <Route path="/practical/6/4" element={<Practical6_4 />} />
          <Route path="/practical/6/5" element={<Practical6_5 />} />
          <Route path="/practical/6/6" element={<Practical6_6 />} />

          <Route path="/practical/7" element={<Practical7 />} />

          <Route path="/practical/8" element={<Practical8 />} />
          <Route path="/practical/8/1" element={<Practical8_1 />} />
          <Route path="/practical/8/2" element={<Practical8_2 />} />
          <Route path="/practical/8/3" element={<Practical8_3 />} />
          <Route path="/practical/8/4" element={<Practical8_4 />} />

          <Route path="/practical/9" element={<Practical9 />} />
        </Routes>
      </TransitionProvider>
    </>
  )
}

export default App
