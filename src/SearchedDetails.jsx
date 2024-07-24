import React, { useContext } from 'react'
import { Context } from './Context/MainContext';
import FeeDetails from './Components/FeeDetails';
import PersonalDetails from './Components/PersonalDetails';
import ParentDetails from './Components/ParentDetails';
import ResidentialDetails from './Components/ResidentialDetails';
import VitalDetails from './Components/VitalDetails';

const SearchedDetails = () => {
    // const {PersonalDetails , ParentDetails , ResidentialDetails , VitalDetails} = useContext(Context) ;
  return (
    <div>
        
<div className='grid grid-cols-5'>
<div>
<PersonalDetails/>
 </div>
   <div className='col-span-3'>
  <ParentDetails/>
  </div>
  <div>
   
  </div>
 </div>


 <div className='grid grid-cols-5'>
 <div>
 <ResidentialDetails/>
 </div>
 <div>
 <VitalDetails/>
</div>

 <div className='col-span-3'>
 <FeeDetails/>
 </div>
 </div>
    </div>
  )
}

export default SearchedDetails