// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import './index.css'
import AOS from 'aos'
import { useEffect } from 'react'

const Kain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Kain/>
  </React.StrictMode>
)
