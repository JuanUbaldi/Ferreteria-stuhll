import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import './utils/styles/_fonts.css'
import { Home } from './pages/home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={< Navigate to='/' />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
