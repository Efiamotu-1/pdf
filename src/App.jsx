import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact-me" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
