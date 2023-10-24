import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Video3 from './modules/video3.jsx'
import Video4 from './modules/Video4.jsx'
import Video5n6 from './modules/Video5n6.jsx'
import Video7n8n9 from './modules/Video7n8n9.jsx'
import Video10 from './modules/Video10.jsx'
import Video12 from './modules/Video12.jsx'
import Video13 from './modules/Video13.jsx'
import Video14 from './modules/Video14.jsx'
import Video15 from './modules/Video15.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/videos/3' element={<Video3 />} />
      <Route path='/videos/4' element={<Video4 />} />
      <Route path='/videos/5n6' element={<Video5n6 />}/>
      <Route path='/videos/7n8n9' element={<Video7n8n9 />}/>
      <Route path='/videos/10' element={<Video10 />}/>
      <Route path='/videos/12' element={<Video12 />}/>
      <Route path='/videos/13' element={<Video13 />}/>
      <Route path="/videos/14" element={<Video14 />} />
      <Route path="/videos/15" element={<Video15 />}/>
    </Routes>
  </BrowserRouter>
)
