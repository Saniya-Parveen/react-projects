import React, { useState } from 'react'

export default function NumberSelector() {
    const arrNumber = [
        1,2,3,4,5,6
    ]
    const [selectedNumber, setSelectedNumber] = useState()
  return (
    <div className='number-selector'>
        <div className='dicebox-content'>
        {
            arrNumber.map((val, index)=>{
                return <div key={index} className='dice' onClick={()=> setSelectedNumber(val)}>{val}</div>
            })
        }
       
       </div> 
       <p>Select Number</p>

    </div>
  )
}
