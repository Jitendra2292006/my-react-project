import { useState } from 'react'
import './App.css'

function App() {
//let counter=14
let [counter,setCounter]=useState(15)

const addValue=()=>{
 console.log("clicked",counter)
 setCounter(counter+1)
}

const removeValue = () => {
  console.log("clicked", counter);
  setCounter(counter-1);
};
  return (
    <div>
      <h1>jitu aur code</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={removeValue}>remove value </button>
      <br />
      <br />
      <button onClick={addValue}>add value</button>
    </div>
  );
}
export default App
