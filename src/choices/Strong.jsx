import React from 'react'
import { useNavigate } from 'react-router'

function Strong() {
    const navigate = useNavigate()
  return (
    <div>Strong
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Strong