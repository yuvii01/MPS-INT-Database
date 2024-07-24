import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDropdown } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { Context } from '../Context/MainContext';
import axios from 'axios';
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {


  const [activeStudent, setActiveStudent] = useState(false);
  const [searchUser, setSearchUser] = useState(false);
  const [searchStaff, setSearchStaff] = useState(false);
  const [searchOthers, setSearchOthers] = useState(false);
  // const [searchuser, setSearchUser] = useState(false);
  const navigator = useNavigate() ;


  const {students, setStudents , logindata , setLogindata , staff , setStaff} = useContext(Context) ;


useEffect(() => {
const data = localStorage.getItem('user') ;
const finaldata = JSON.parse(data) ;

setLogindata(finaldata) ;



} , [])

//search users : students , employee
  const formsubmithandlerStudent = (e) => {
    
    e.preventDefault() ;
    setSearchUser(false)


    if(e.target.select.value == 'student'){
      axios.post('http://www.data.mpsint.in/api/Student/SearchStudent', {
        StName : e.target.name.value ,
        Enroll : e.target.enroll.value ,
        Class : e.target.class.value ,
        Section : e.target.section.value
      })
      .then(
        (success) => {
     console.log(success)

        }
      )
      .catch(
        (err) => {
          console.log("err")
console.log(err)
        }
      )
    }

    else {
      console.log("employee")
      axios.get('http://www.data.mpsint.in/api/Employee/GetDataEmployee' , {})
      .then(
        (success) => {
          console.log("employee")
     console.log(success.data.data)

        }
      )
      .catch(
        (err) => {
          
console.log(err)
        }
      )
    }
    

navigator('/searched_details')
  }




  //viewall 


  const viewAllStudent = () => {
     axios.get('http://www.data.mpsint.in/api/Student/GetDataStudent')
      .then(
        (success) => {
          setStaff(false) ;
localStorage.setItem('student' , success.data.data) ;
       
    

 navigator('/searched')
          
    
    }

    )
    .catch(
      (err) => {

        console.log(err)
      }
    )

  
  }




  const viewAllStaff = () => {

    axios.get('http://www.data.mpsint.in/api/Employee/GetDataEmployee')
     .then(
       (success) => {
  setStaff(true) ;

  localStorage.setItem('student' , success.data.data) ;
    
  
  
    navigator('/searched')
  }
   )
   .catch(
     (err) => {
       console.log(err)
     }
   )

 }



const logoutfn = () => {
  localStorage.removeItem('user') ;
  setLogindata(null) ;
  window.location.reload() ;
 
}

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


const toggleMobileMenu = () => {
  setMobileMenuOpen(!mobileMenuOpen);
}




  return (
    <header className="sticky top-0 bg-white w-full shadow-md z-50 pb-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-4xl font-semibold">
              <img className="h-[110px] w-[475px]" src="/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="hidden md:flex md:items-end md:space-x-4">
            <Link to={'/'} className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <div>
              {logindata == null ? (
                <div className="flex space-x-4">
                  <Link to={'/login'} className="text-gray-600 hover:text-gray-900">
                    Login
                  </Link>
                  <Link to={'/signup'} className="text-gray-600 hover:text-gray-900">
                    SignUp
                  </Link>
                </div>
              ) : (
                <div className="flex gap-3 items-center cursor-pointer">
                  <CgProfile className="text-xl" /> Hi {logindata.UserName}
                  <div onClick={logoutfn} className="text-red-800 font-semibold cursor-pointer">
                    Logout
                  </div>
                </div>
              )}
            </div>
            <div className="rounded-xl border border-black text-lg overflow-hidden w-[250px]">
              <input
                onClick={() => setSearchUser(true)}
                className="px-5 w-full h-full"
                readOnly
                type="text"
                placeholder="Search user..."
              />
            </div>
            <Link onClick={viewAllStudent} className="text-gray-600 hover:text-gray-900">
              Students
            </Link>
            <Link onClick={viewAllStaff} className="text-gray-600 hover:text-gray-900">
              Staff
            </Link>
            <div
              className={`${searchUser ? 'visible' : 'hidden'} absolute h-[400px] top-[100px] left-[250px] bg-white shadow-lg w-[800px] z-[99] rounded-lg border border-black`}
            >
              <div className="flex justify-between border-b border-black px-10 py-3">
                <div className="font-semibold text-2xl">Search User</div>
                <div onClick={() => setSearchUser(false)} className="text-2xl font-bold cursor-pointer">
                  <RxCross1 />
                </div>
              </div>
              <form onSubmit={formsubmithandlerStudent} className="grid grid-cols-2 pt-10 px-10">
                <div className="flex gap-5 col-span-2 pb-5 text-lg items-center">
                  <label htmlFor="">What do you want to Search...</label>
                  <select className="px-10 py-4 rounded-md" name="select" id="">
                    <option value="student" default>
                      Students
                    </option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
                <div className="flex gap-5 text-lg items-center">
                  <label htmlFor="">Enroll No:</label>
                  <input name="enroll" className="text-xl px-3 py-2 border border-black rounded-xl" type="text" />
                </div>
                <div className="flex gap-5 text-lg items-center">
                  <label htmlFor="">Name:</label>
                  <input name="name" className="text-xl px-3 py-2 border border-black rounded-xl" type="text" />
                </div>
                <div className="flex gap-5 pt-5 text-lg items-center">
                  <label htmlFor="">Class:</label>
                  <input name="class" className="text-xl px-3 py-2 border border-black rounded-xl" type="number" />
                </div>
                <div className="flex gap-5 pt-5 text-lg items-center">
                  <label htmlFor="">Section:</label>
                  <input name="section" className="text-xl px-3 py-2 border border-black rounded-xl" type="text" />
                </div>
                <div className="flex items-center justify-center pt-10 w-full">
                  <button type="submit" className="py-3 px-10 rounded-lg bg-slate-500 text-xl">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-between md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-start space-y-4 pt-4">
            <Link to={'/'} className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            {logindata == null ? (
              <div className="flex flex-col space-y-4">
                <Link to={'/login'} className="text-gray-600 hover:text-gray-900">
                  Login
                </Link>
                <Link to={'/signup'} className="text-gray-600 hover:text-gray-900">
                  SignUp
                </Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-4 items-start">
                <div className="flex gap-3 items-center cursor-pointer">
                  <CgProfile className="text-xl" /> Hi {logindata.UserName}
                </div>
                <div onClick={logoutfn} className="text-red-700 font-semibold cursor-pointer">
                  Logout
                </div>
              </div>
            )}
            <Link onClick={viewAllStudent} className="text-gray-600 hover:text-gray-900">
              Students
            </Link>
            <Link onClick={viewAllStaff} className="text-gray-600 hover:text-gray-900">
              Staff
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Others
            </Link>
          </div>
        </div>
      </div>
    </header>
  
  )
}

export default Header