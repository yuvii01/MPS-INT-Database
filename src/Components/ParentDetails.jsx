import React, { useContext } from 'react'
import { Context } from '../Context/MainContext.jsx';

const ParentDetails = () => {
    const {PersonalDetails , ParentDetails , ResidentialDetails , VitalDetails} = useContext(Context) ;
    return (
      <div>
     <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs  uppercase ">
            <tr>
              <th scope="col" className="px-6 py-3">

              </th>
                <th scope="col" className="px-6 py-3">
                   Father's Detail
                </th>
                <th scope="col" className="px-6 py-3">
                    Mother's Detail
                </th>
                <th scope="col" className="px-6 py-3">
                    Guardian Detail
                </th>
            </tr>
        </thead>
        <tbody>
           {
            ParentDetails.map(
              (parent, i)=>{
return <tr key={i+1} className="">

<th scope="row" class="px-2 py-2 font-medium whitespace-nowrap ">
    { parent.name}
</th>

<th scope="row" class="px-2 py-2 font-medium whitespace-nowrap ">
<input className='border border-black ' type="text" />
</th>
<td className="px-2 py-2">
<input className='border border-black ' type="text" />
</td>
<td className="px-2 py-2">
<input className='border border-black ' type="text" />
</td>




</tr>
              }
            )
           }

         
        </tbody>
    </table>
      </div>
    )
  }
export default ParentDetails







