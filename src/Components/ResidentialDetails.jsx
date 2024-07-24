import React, { useContext } from 'react'
import { Context } from '../Context/MainContext.jsx';

const ResidentialDetails = () => {
    const {PersonalDetails , ParentDetails , ResidentialDetails , VitalDetails} = useContext(Context) ;
    return (
      <div>
          <div>
              Residential Details
          </div>
  
          <div>
              <ul>
                 {
  ResidentialDetails?.map(
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

export default ResidentialDetails