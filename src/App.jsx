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

}

export default App
