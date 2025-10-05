import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './Routes/Routing'
import '../src/Global/styles/Global.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing/>
  </StrictMode>,
)
