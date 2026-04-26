import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Entry point of the application
// Mounts the App component to the root DOM node
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
