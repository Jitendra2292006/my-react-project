import React, { useEffect, useState } from 'react'
import Usercontext from './Usercontext'
// children mean like a div pass as the value
const  Usercontextprovider = ({children})=>{
    const [user,setUser]=useState(null)
return (
  <>
    <Usercontext.Provider value={{user,setUser}}>                  
        {children}
    </Usercontext.Provider>
  </>
);
}


export default Usercontextprovider
