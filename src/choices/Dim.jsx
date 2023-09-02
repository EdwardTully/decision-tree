import React from 'react'
import { useNavigate } from 'react-router'

function Dim() {
    const navigate= useNavigate()
  return (
    <div>Dim
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Dim