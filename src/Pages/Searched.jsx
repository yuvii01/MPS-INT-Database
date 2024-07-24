import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Context } from '../Context/MainContext';


const Searched = () => {

  const { editUser, setEditUser , students, setStudents , logindata , setLogindata , staff , setStaff} = useContext(Context);


const navigator = useNavigate('/') ;

useEffect(
    () => {
// navigator('/')
const response = localStorage.getItem('student') ;
const finalresponse = JSON.parse(response) ;
setStudents(finalresponse.Table) ;
    }, []
)
    




  const DeleteUser = () => {
    axios.post('http://www.data.mpsint.in/api/Student/DeleteStudent')
        .then((success) => {
           
            // Handle success
        })
        .catch(error => {
            console.error('There was an error!', error);
            // Handle error
        })
}


const [searchTerm, setSearchTerm] = useState('');



const handleSearch = (event) => {
    setSearchTerm(event.target.value);
};

let filteredData = null


if(students.length < 1000 || staff == true){
    console.log("stafffffffffffff ", students)
    

    // console.log(students[0].Employee_Name ,students[0].Employee_Code , students[0].Mobile_number)

    filteredData = students.filter(item => 
        item && item.Employee_Name && item.Employee_Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item && item.Employee_Code && item.Employee_Code.toString().includes(searchTerm) ||
        item && item.Mobile_number && item.Mobile_number.toLowerCase().includes(searchTerm.toLowerCase())
  
    );
}
else{


  filteredData = students.filter(item =>
        item.StName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.HouseNo.toString().includes(searchTerm) ||
        item.FatherContact.toLowerCase().includes(searchTerm.toLowerCase())
    );
}





// const filterStud = students.filter(
//     (stud , i) 
// stud.StName.toLowerCase().includes(searchTerm.toLowerCase())
//     }
// )

// setFilterStudents(filterStud) ;

  return (
    <div className="py-10 mx-10">
    <div className="search-container mx-auto my-10 max-w-lg">
      <input
        className="py-2 px-5 border border-black rounded-lg text-lg w-full"
        type="text"
        placeholder={`Search ${students.length < 1000 || staff ? 'Staff' : 'Student'}........`}
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  
    <div className="flex justify-between w-full overflow-auto">
      <div className="relative w-full">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Sr</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">
                {students.length < 1000 || staff ? 'Employee Code' : "Father's Name"}
              </th>
              <th scope="col" className="px-6 py-3">
                {students.length < 1000 || staff ? 'Date of Joining' : "Mother's Name"}
              </th>
              <th scope="col" className="px-6 py-3">
                {students.length < 1000 || staff ? 'Date of Active' : "Class Admitted"}
              </th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">
                {students.length < 1000 || staff ? 'Contact Details' : "Parent's Contact Details"}
              </th>
              <th scope="col" className="px-6 py-3">DOB</th>
              <th scope="col" className="px-6 py-3">
                {students.length < 1000 || staff ? 'Email-Address' : "Address"}
              </th>
              {logindata != null && (
                <th scope="col" className="px-6 py-3">Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((stud, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{students.length < 1000 || staff ? stud.Employee_Name : stud.StName}</td>
                <td>{students.length < 1000 || staff ? stud.Employee_Code : stud.FatherName}</td>
                <td>{students.length < 1000 || staff ? stud.Date_of_Joining : stud.MotherName}</td>
                <td>{students.length < 1000 || staff ? stud.Date_of_Confirm : stud.Class_sec}</td>
                <td>
                  <img src={stud.ImageURL || '/images/placeholder.png'} alt="Image" className="w-10 h-10" />
                </td>
                <td>{students.length < 1000 || staff ? stud.Mobile_number : stud.FatherContact}</td>
                <td>{students.length < 1000 || staff ? stud.Date_of_Birth : stud.DateOfBirth}</td>
                <td>{students.length < 1000 || staff ? stud.Email_Address : stud.HouseNo}</td>
                {logindata != null && (
                  <td className="flex gap-5 pt-10">
                    <Link to={'/adduser'} onClick={() => setEditUser(true)}>
                      <MdModeEdit onClick={() => DeleteUser()} />
                    </Link>
                    <MdDelete />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  
  )
}

export default Searched









