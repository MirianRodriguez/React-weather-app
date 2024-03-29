import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles.css'
import WeatherApp from './WeatherApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <WeatherApp />
    </BrowserRouter>
  // </React.StrictMode>,
)
