import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function OptionB() {
const navigate = useNavigate()
const [choice, setChoice] = useState('')
const sendChoice=(choice)=>navigate(choice)
console.log(choice)
  return (
    <div>
        Select B1 or B2
        <select onChange={(e)=>setChoice(e.target.value)}>
            <option value='optionB1'>Option B1</option>
            <option value='optionB2'>Option B2</option>
        </select>
        <button onClick={()=>sendChoice(choice)}>Submit</button>
        <button onClick={()=>navigate(choice)}>Submit2</button>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        <button onClick={()=>navigate('/')}>Go Home</button>
    </div>
  )
}

export default OptionB