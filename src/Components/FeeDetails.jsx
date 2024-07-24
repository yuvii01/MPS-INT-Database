import React, { useState } from 'react'

const FeeDetails = () => {
    const [active , setActive ] = useState(true) ;
  return (
    <div>


<div>
<div>
    <ul className='flex '>
        <li onClick={()=> {
            setActive(true)
        }} className={` ${active ? "font-semibold  bg-white " : "  bg-gray-400 "} px-5 py-2 border border-black `}>
            Fee Details
        </li>
        <li className={` ${active == false ? "font-semibold  bg-white " : "  bg-gray-400 "} px-5 py-2 border border-black`} onClick={
            ()=> {
                setActive(false)
            }
        }>
            Exam Details
        </li>
    </ul>
</div>

<div className='bg-gray-500 h-[300px] w-[600px] '>
    
</div>
</div>
        
    </div>
  )
}

export default FeeDetails





















