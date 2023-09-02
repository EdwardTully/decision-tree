import React from 'react'
import { useNavigate } from 'react-router'

function Low() {
    const navigate = useNavigate()
  return (
    <div>Low
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Low