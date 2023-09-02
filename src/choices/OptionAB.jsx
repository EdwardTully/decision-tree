import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function OptionAB() {
const navigate = useNavigate()
const [choice, setChoice] = useState('')
console.log(choice)
  return (
    <div>
        Select A or B
        <select onChange={(e)=>setChoice(e.target.value)}>
            <option value='optionA'>Option A</option>
            <option value='optionB'>Option B</option>
        </select>
        <button onClick={()=>navigate(choice)}>Submit</button>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        <button onClick={()=>navigate('/')}>Go Home</button>
    </div>
  )
}

export default OptionAB