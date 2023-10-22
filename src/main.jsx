import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Video3 from './modules/video3.jsx'
import Video4 from './modules/Video4.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/videos/3' element={<Video3 />} />
      <Route path='/videos/4' element={<Video4 />} />
    </Routes>
  </BrowserRouter>
)
