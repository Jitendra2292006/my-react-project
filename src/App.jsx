<<<<<<< HEAD
import { useState,useCallback, useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [number,setnumber] = useState(false)
  const [character,setcharacter] = useState(false)
  const [password,setpassword] = useState("")
//use ref hooks for dom manipulation
const passwordRef=useRef(null)



  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let pass=""
    if(number) str+="0123456789"
    if(character) str+="!@#$%&*"
        for (let i = 1; i <= length; i++) {
          let charindex=Math.floor(Math.random()*str.length+1)
          pass +=str.charAt(charindex)
        }
  setpassword(pass)
   } ,[length,number,character]);

const copyclipboard=useCallback(()=>{
 navigator.clipboard.writeText(password)
},[[password]])


 useEffect(()=>{
  passwordGenerator()
 },[length,number,character])


  return (
<>
<div className='w-full max-w-md mx-auto shadow-md
rounded-lg px-4 my-8 text-white transparent shadow-black  py-2'>
  <h1 className="text-2xl font-bold  text-center flex justify-center underline  text-white">Password Generator</h1>
  <div className='flex shadow rounded-lg overflow-hidden mb-4 transparent shadow-black'>
    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-3 transparent'
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button className='bg-blue-500 p-3 text-bold text-white rounded outline-none shrink-0'
   onClick={copyclipboard} title="copy">copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex item-center gap-x-1'>
      <input 
      type="range" 
     min={6}
     max={100}
     value={length}
     onChange={(e)=>{
     setLength(e.target.value)
     }}
     className='cursor-pointer'/>
     <label>Length:{length}</label>
    </div>

    <div className='flex items-center gap-x-1'>
          <input 
      type="checkbox" 
     checked={number}
     onChange={()=>{
     setnumber((prev)=>!prev)
     }}/>
     <label>Numbers{number ? " ✓" : " ✗"}</label>
    </div>

    <div className='flex items-center gap-x-1'>
          <input 
      type="checkbox" 
     checked={character}
     onChange={()=>{
     setcharacter((prev)=>!prev)
     }}/>
     <label>Characters{character ? " ✓" : " ✗"}</label>
    </div>
  </div>
</div>
</>
  )
=======
import { useState } from 'react'
import './App.css'
import { InputBox } from './component'
import usecurencyinfo from "./hooks/usecurrencyinfo";
function App() {
const [amount,setamount]= useState(0)
const [from,setfrom]=useState("usd")
const [to,setto]=useState("inr")
const[convertamount,setconvertamount]=useState(0)


const currencyinfo = usecurencyinfo(from)


const options=Object.keys(currencyinfo)


//currencydata type change
const swap=()=>{
  setfrom(to)
  setto(from)
  setconvertamount(amount)
  setamount(convertamount)
}
const Convert=()=>{
  setconvertamount(amount*currencyinfo[to])
}

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/14856618/pexels-photo-14856618.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              Convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                curencyoptions={options}
                selectcurency={from}
                onAMOUNTCHANGE={(amount) => setamount(amount)}
                onCURRENCYCHANGE={(currency) => setfrom(currency)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertamount}
                curencyoptions={options}
                selectcurency={to}
                onCURRENCYCHANGE={(currency)=>
                  setto(currency)
          
                }
               amountdisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

>>>>>>> 103ab2d0cfdadcf000c1d46db62ead8c8b0148f3
}

export default App
