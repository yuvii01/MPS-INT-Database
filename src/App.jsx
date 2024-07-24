import React from 'react'
import PersonalDetails from './Components/PersonalDetails'
import ParentDetails from './Components/ParentDetails'
import ResidentialDetails from './Components/ResidentialDetails'
import VitalDetails from './Components/VitalDetails'
import FeeDetails from './Components/FeeDetails'
import InsertStudent from './InsertStudent.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from './Pages/Main.jsx'
import FirstPage from './FirstPage.jsx'
import Searched from './Pages/Searched.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import SearchedDetails from './SearchedDetails.jsx'
import MainContext from './Context/MainContext.jsx'
import Temp from './Pages/Temp.jsx'


const App = () => {

   

  const routes = createBrowserRouter(
    [

   {
    path: '/' ,
    element : <Main/> ,
    children : [
      {
        path : '/',
        element : <FirstPage/>
      },
      {
        path : "adduser" ,
        element : <InsertStudent/>
      } , 
      {
        path : '/searched' ,
        element : <Searched/>
      } , 
      {
        path : '/searched_details' ,
        element : <SearchedDetails/>
      }

    ]
   },   

            {
          path : "/login",
          element : <Login/>
        } ,
        {
          path : "/signup" ,
          element : <Signup/>
        },
        {
          path : "/temp" ,
          element : <Temp/>
        }
    ]
  )


  return (
   <div>
   
    <RouterProvider router={routes}/>
 
   </div>
  )
}

export default App




