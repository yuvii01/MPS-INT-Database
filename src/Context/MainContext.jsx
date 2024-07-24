import React, { createContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Context = createContext() ;
const MainContext = (props) => {


  const openToast =(msg, flag)=>{
    toast(msg, {type: flag})
        }


  const PersonalDetails = [

    {
      name : 'Enrollment'
    },
    {
      name : 'ExamRollNo'
    }, 
    {
      name : 'Student Name'
    },
    {
      name : 'Date of Birth'
    },
    {
      name : 'Date of Admission'
    },
    {
      name : 'Class Admitted'
    },
    {
      name : 'House'
    },
    {
      name : 'Category'
    },
    {
      name : 'Blood Group'
    },
    {
      name : 'Gender'
    }
  ]


  const ParentDetails = [
    {
      name : 'Name'
    },
    {
      name : 'Occupation'
    }, 
    {
      name : 'Occupation Type'
    },
    {
      name : 'Occupation Area'
    },
    {
      name : 'Annual Income'
    },
    {
      name : 'Office Phone No'
    },
    {
      name : 'Mobile Number'
    },
    {
      name : 'Qualification'
    },
    {
      name : 'Pan Number'
    }
  ]


  const ResidentialDetails = [
    {
      name : 'House No'
    },
    {
      name : 'Street '
    }, 
    {
      name : 'Colony'
    },
    {
      name : 'Pin Code'
    },
    {
      name : 'Landline'
    },
    {
      name : 'Email'
    },
    {
      name : 'Religion'
    },
    {
      name : 'Mother Tongue'
    },
    {
      name : 'Nationality'
    },
  ]


  const VitalDetails = [
    {
      name : 'Height'
    },
    {
      name : 'Weight'
    }, 
    {
      name : 'Eye Sight'
    },
    {
      name : 'Identification Mark'
    },
    {
      name : 'Disability'
    },
    {
      name : 'Status'
    }
  ]


  const FormPersonalDetails = [

  {
    name : 'Enrollment'
  },
  {
    name : 'ExamRollNo'
  }, 
  {
    name : 'Student Name'
  },
  {
name : 'Student Addhar Number'
  },
  {
    name : 'Date of Birth'
  },
  {
    name : 'Date of Admission'
  },
  {
    name : 'Class Admitted'
  },
  {
    name : 'Gender'
  },
  {
    name : 'Height'
  },
  {
    name : 'Weight'
  },
  {
    name : 'Age'
  },
  {
    name : 'Identification Mark'
  },
  {
    name : 'Disability'
  },
  {
    name : 'Class'
  },
  {
    name : 'Section'
  },

  {
    name : 'House'
  },
  {
    name : 'Category'
  },
  {
    name : 'Blood Group'
  },
  {
    name : 'HouseNo'
  },
  {
    name : 'Street'
  },
  {
    name : 'Colony'
  },
  {
    name : 'StImage'
  },
  {
    name : 'PinCode'
  },
  {
    name : 'Religion'
  },
  {
    name : 'Mother Tongue'
  },
  {
    name : 'Nationality'
  },
  {
    name : 'Status'
  },

  ]  


const FormParentDetails = [
  {
    name : 'FatherName'
  },
  {
    name : 'MotherName'
  },
  {
    name : 'GuardianName'
  },
  {
    name : 'FatherOccupation'
  }, 
  {
    name : 'MotherOccupation'
  },
  {
    name : 'GuardianOccupation'
  },
  {
    name : 'FatherContact'
  },
  {
    name : 'MotherContact'
  },
  {
    name : 'GuardianContact'
  },
  {
    name : 'FatherAadharNo'
  },
  {
    name : 'MotherAadharNo'
  },
  {
    name : 'GuardianAadharNo'
  },
  {
    name : 'FatherPanCard'
  },
  {
    name : 'MotherPanCard'
  },
  {
    name : 'GuardianPanCard'
  },
  {
    name : 'FatherAnnualIncome'
  },
  {
    name : 'MotherAnnualIncome'
  },
  {
    name : 'GuardianAnnualIncome'
  },
  {
    name : 'FatherImage'
  },
  {
    name : 'MotherImage'
  },
  {
    name : 'GuardianImage'
  },
  {
    name : 'FatherQualification'
  },
  {
    name : 'MotherQualification'
  },
  {
    name : 'GuardianQualification'
  },
  {
    name : 'FatherEmail'
  },
  {
    name : 'MotherEmail'
  },
  {
    name : 'GuardianEmail'
  },
]

const [logindata , setLogindata] = useState([]) ;
const [editUser , setEditUser] = useState(false) ;
const [ students, setStudents ] = useState([]);

const [staff , setStaff] = useState(false) ;

  return (
    <Context.Provider value={{staff , setStaff ,logindata , setLogindata , openToast ,students, setStudents ,editUser , setEditUser , PersonalDetails , ParentDetails , ResidentialDetails , VitalDetails  , FormPersonalDetails , FormParentDetails}}>
         <ToastContainer/>
      { 
       props.children
      }
      </Context.Provider>
  )
}

export {Context} ;

export default MainContext; 