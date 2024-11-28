import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/biocron/screens/home-screen.tsx'
import BioScreen from './components/biocron/screens/bio-screen.tsx';
import PortfolioScreen from './components/biocron/screens/portfolio-screen.tsx';
import ContactScreen from './components/biocron/screens/contact-screen.tsx';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/bio' element={<BioScreen />} />
        <Route path='/portfolio' element={<PortfolioScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
