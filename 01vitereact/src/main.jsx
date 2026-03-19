import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h3>allu le lo</h3>
    </div>
  )
}
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
