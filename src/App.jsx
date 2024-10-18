import React from 'react'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import './index.css';
import { Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <nav className='flex gap-5 w-[990px] mx-5 mt-3 mb-3;'>
        <Link to="/" className='text-4xl'>Home</Link>
        <Link to="/about" className='text-4xl'>About</Link>
        <Link to="/contact" className='text-4xl'>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
