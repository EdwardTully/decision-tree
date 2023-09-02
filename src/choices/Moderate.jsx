import React from 'react'
import { useNavigate } from 'react-router'

function Moderate() {
    const navigate = useNavigate()
  return (
    <div>Moderate
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>

  )
}

export default Moderate