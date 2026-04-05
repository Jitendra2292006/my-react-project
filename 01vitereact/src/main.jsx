import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Jitu from './jitu.jsx'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h3 >hello vite </h3>
    </div>
  )
}
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <Jitu/>
  </StrictMode>,
)
