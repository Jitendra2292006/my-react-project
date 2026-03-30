import React,{useState,useContext} from 'react'
import Usercontext from '../context/Usercontext'
// usecontext hook use in the project
function Login() {

   const [username,setUsername]=useState('')
   const [password,setpassword]=useState('')
   const {setUser}=useContext(Usercontext)
    
       const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
       }


    return (
      <div className='text-center bg-gray-500 flex-wrap justify-center '>
        <h2 >Login</h2>
        <input
          type="text" 

          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          required
        />
        {" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
          required
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
}

export default Login
