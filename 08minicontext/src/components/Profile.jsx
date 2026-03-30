import React,{useContext} from 'react'
import Usercontext from '../context/Usercontext'

function Profile() {
      const { user } = useContext(Usercontext);
     if (!user) return <div className='text-center '> please login</div>
     
     return <div className='text-center m-4'>Welcome {user.username}</div>
}

export default Profile
