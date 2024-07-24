import React, { useContext } from 'react' ;
import MainContext from '../Context/MainContext.jsx';
import { Context } from '../Context/MainContext.jsx';


const PersonalDetails = () => {

  const {PersonalDetails , ParentDetails , ResidentialDetails , VitalDetails} = useContext(Context) ;
  return (
    <div>
        <div>
            Personal Details
        </div>

        <div>
            <ul>
               {
PersonalDetails?.map(
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

export default PersonalDetails