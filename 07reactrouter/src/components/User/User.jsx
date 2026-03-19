import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id}=useParams()
    // useprams use for show the url data on the interface of website
    return (
        <div className='bg-pink-500 py-3 text-center flex text-2xl py-x-0'>User:{id}</div>
    )
}

export default User
