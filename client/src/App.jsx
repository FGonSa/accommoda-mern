import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Login from './pages/Login'
import Registro from './pages/Registro'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/about" element={<About/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Registro/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App