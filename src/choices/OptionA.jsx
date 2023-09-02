import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function OptionA() {
const navigate = useNavigate()
const [choice, setChoice] = useState('')
  return (
    <div>
        Select A1 or A2
        <select onChange={(e)=>setChoice(e.target.value)}>
            <option value='optionA1'>Option A1</option>
            <option value='optionA2'>Option A2</option>
        </select>
        <button onClick={()=>navigate(choice)}>Submit</button>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        <button onClick={()=>navigate('/')}>Go Home</button>
    </div>
  )
}

export default OptionA