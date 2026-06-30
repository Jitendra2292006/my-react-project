import React,{useState,useEffect} from 'react';
import { useLoaderData } from 'react-router-dom';   
function Github() {
  const data=  useLoaderData()
//     const [data,setData]=useState([])
// useEffect(()=>{
//     //api study is imp
//    fetch('http://api.github.com/users/jitendra2292006')
//    .then(response=>response.json())
//    .then(data=>{
//     console.log(data)
//     setData(data)                      
//    })
// },[])

    return (
        <div className='bg-gray-500 text-center m-4 text-white text-3xl'>Github follower:{data.followers}
                 <img  src={data.avatar_url} alt="git picture" width={250}/>
              
               </div>
    )
}

export default Github
 
export const githubinfolouder= async()=>{
 const response= await fetch("https://api.github.com/users/jitendra2292006");
 return response.json()
}