import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/* import './index.css'
import App from './App.jsx' */
import Board from './TicTacToe.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Board />
  </StrictMode>,
)
