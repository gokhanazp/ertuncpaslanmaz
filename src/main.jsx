import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Uygulama Giriş Noktası - Application Entry Point
 * React uygulamasını DOM'a bağlar
 * Mounts React application to DOM
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

