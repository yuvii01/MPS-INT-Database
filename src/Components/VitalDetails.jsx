import React, { useContext } from 'react'
import { Context } from '../Context/MainContext.jsx';

const VitalDetails = () => {
    const {PersonalDetails , ParentDetails , ResidentialDetails , VitalDetails} = useContext(Context) ;
    return (
      <div>
          <div>
              Vital Details
          </div>
  
          <div>
              <ul>
                 {
  VitalDetails?.map(
    (prod , i) => {
      return  <li key={i+1} className='flex justify-between mx-5'>
      
      <div>
      {prod.name}
      </div>
  
      <div>
      <input className='border border-black ' type="text" />
      </div>
  
              </li>
    }
  )
                 }
              </ul>
          </div>
      </div>
    )
  }

export default VitalDetails