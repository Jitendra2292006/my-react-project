import React from 'react'

function Card({username="Deepak sharma"}) {
    return (
        
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
            <p className="text-gray-600">This is a sample card component.</p>
        </div>
    )
}

export default Card
