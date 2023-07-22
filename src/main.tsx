import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './containers/Homepage/HomePage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
