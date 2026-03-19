import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componants/card'   
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold tracking-tight text-black sm:text-4xl bg-amber-300 p-4 rounded-md mb-4">
        jitu sharma
      </h1>
      <Card username="Jitendra sharma" />
      <Card  />
    </>
  );
}

export default App
