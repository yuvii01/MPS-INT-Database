import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from './Context/MainContext';
import { Link } from 'react-router-dom';

const InsertStudent = () => {


  const [student, setStudent] = useState({
    Enroll: '',
    ExamRollNo: '',
    StName: '',
    StAadhaarNo: '',
    DateOfBirth: '',
    DateOfAdmission: '',
    ClassAdmitted: '',
    Gender: '',
    Height: '',
    Weight: '',
    Age: '',
    IdentificationMark: '',
    Disability: '',
    Class: '',
    Section: '',
    House: '',
    Category: '',
    BloodGroup: '',
    HouseNo: '',
    Street: '',
    Colony: '',
    StImage: '',
    Pincode: '',
    Religion: '',
    MotherTongue: '',
    Nationality: '',
    Status: '',
    FatherName: '',
    MotherName: '',
    GuardianName: '',
    FatherOccupation: '',
    MotherOccupation: '',
    GuardianOccupation: '',
    FatherContact: '',
    MotherContact: '',
    GuardianContact: '',
    FatherAadhaarNo: '',
    MotherAadhaarNo: '',
    GuardianAadhaarNo: '',
    FatherPanCard: '',
    MotherPanCard: '',
    GuardianPanCard: '',
    FatherAnnualIncome: '',
    MotherAnnualIncome: '',
    GuardianAnnualIncome: '',
    FatherImage: '',
    MotherImage: '',
    FatherQualification: '',
    MotherQualification: '',
    GuardianQualification: '',
    FatherEmail: '',
    MotherEmail: '',
    GuardianEmail: '',
    RelationWithSt: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
if(editUser){
  axios.post('http://www.data.mpsint.in/api/Student/UpdateStudent', student)
  .then((success) => {
console.log(success)
    console.log(success.data);
    // Handle success
  })
  .catch(error => {
    console.error('There was an error!', error);
    // Handle error
  })
}
else{
  axios.post('http://www.data.mpsint.in/api/Student/InsertStudent', student)
  .then((success) => {
console.log(success)
    console.log(success.data);
    // Handle success
  })
  .catch(error => {
    console.error('There was an error!', error);
    // Handle error
  })
}
  };

  const {editUser , setEditUser} = useContext(Context) ;

  return (
    <form className='mt-10' onSubmit={handleSubmit}>


      <div className='py-3 px-10 bg-[#62aad0] text-white font-semibold rounded-lg text-2xl flex justify-center'>
      {!editUser ? 'Add New User' : 'Edit User'}
      </div>
     
     <div className='grid grid-cols-3'>
     <input type="text" className='text-lg py-3 px-3' name="Enroll" value={student.Enroll} onChange={handleChange} placeholder="Enroll" />
      <input type="text" className='text-lg py-3 px-3' name="ExamRollNo" value={student.ExamRollNo} onChange={handleChange} placeholder="ExamRollNo" />
      <input type="text" className='text-lg py-3 px-3' name="StName" value={student.StName} onChange={handleChange} placeholder="StName" />
      <input type="text" className='text-lg py-3 px-3' name="StAadhaarNo" value={student.StAadhaarNo} onChange={handleChange} placeholder="StAadhaarNo" />
      <input type="text" className='text-lg py-3 px-3' name="DateOfBirth" value={student.DateOfBirth} onChange={handleChange} placeholder="DateOfBirth" />
      <input type="text" className='text-lg py-3 px-3' name="DateOfAdmission" value={student.DateOfAdmission} onChange={handleChange} placeholder="DateOfAdmission" />
      <input type="text" className='text-lg py-3 px-3' name="ClassAdmitted" value={student.ClassAdmitted} onChange={handleChange} placeholder="ClassAdmitted" />
      <input type="text" className='text-lg py-3 px-3' name="Gender" value={student.Gender} onChange={handleChange} placeholder="Gender" />
      <input type="text" className='text-lg py-3 px-3' name="Height" value={student.Height} onChange={handleChange} placeholder="Height" />
      <input type="text" className='text-lg py-3 px-3' name="Weight" value={student.Weight} onChange={handleChange} placeholder="Weight" />
      <input type="text" className='text-lg py-3 px-3' name="Age" value={student.Age} onChange={handleChange} placeholder="Age" />
      <input type="text" className='text-lg py-3 px-3' name="IdentificationMark" value={student.IdentificationMark} onChange={handleChange} placeholder="IdentificationMark" />
      <input type="text" className='text-lg py-3 px-3' name="Disability" value={student.Disability} onChange={handleChange} placeholder="Disability" />
      <input type="text"className='text-lg py-3 px-3' name="Class" value={student.Class} onChange={handleChange} placeholder="Class" />
      <input type="text" className='text-lg py-3 px-3' name="Section" value={student.Section} onChange={handleChange} placeholder="Section" />
      <input type="text" className='text-lg py-3 px-3' name="House" value={student.House} onChange={handleChange} placeholder="House" />
      <input type="text" className='text-lg py-3 px-3' name="Category" value={student.Category} onChange={handleChange} placeholder="Category" />
      <input type="text" className='text-lg py-3 px-3' name="BloodGroup" value={student.BloodGroup} onChange={handleChange} placeholder="BloodGroup" />
      <input type="text" className='text-lg py-3 px-3' name="HouseNo" value={student.HouseNo} onChange={handleChange} placeholder="HouseNo" />
      <input type="text" className='text-lg py-3 px-3' name="Street" value={student.Street} onChange={handleChange} placeholder="Street" />
      <input type="text" className='text-lg py-3 px-3' name="Colony" value={student.Colony} onChange={handleChange} placeholder="Colony" />
      <input type="text" className='text-lg py-3 px-3' name="StImage" value={student.StImage} onChange={handleChange} placeholder="StImage" />
      <input type="text" className='text-lg py-3 px-3' name="Pincode" value={student.Pincode} onChange={handleChange} placeholder="Pincode" />
      <input type="text" className='text-lg py-3 px-3' name="Religion" value={student.Religion} onChange={handleChange} placeholder="Religion" />
      <input type="text" className='text-lg py-3 px-3' name="MotherTongue" value={student.MotherTongue} onChange={handleChange} placeholder="MotherTongue" />
      <input type="text" className='text-lg py-3 px-3' name="Nationality" value={student.Nationality} onChange={handleChange} placeholder="Nationality" />
      <input type="text" className='text-lg py-3 px-3' name="Status" value={student.Status} onChange={handleChange} placeholder="Status" />
     </div>

      <div className='py-3 px-10 bg-[#62aad0] text-white font-semibold rounded-lg flex justify-center'>
        Parent/Guardian Information
      </div>


<div className='grid grid-cols-3'>
<input type="text" name="FatherName" value={student.FatherName} onChange={handleChange} placeholder="FatherName" />
      <input type="text" className='text-lg py-3 px-3' name="MotherName" value={student.MotherName} onChange={handleChange} placeholder="MotherName" />
      <input type="text" className='text-lg py-3 px-3' name="GuardianName" value={student.GuardianName} onChange={handleChange} placeholder="GuardianName" />
      <input type="text" className='text-lg py-3 px-3' name="FatherOccupation" value={student.FatherOccupation} onChange={handleChange} placeholder="FatherOccupation" />
      <input type="text" className='text-lg py-3 px-3' name="MotherOccupation" value={student.MotherOccupation} onChange={handleChange} placeholder="MotherOccupation" />
      <input type="text" className='text-lg py-3 px-3' name="GuardianOccupation" value={student.GuardianOccupation} onChange={handleChange} placeholder="GuardianOccupation" />
      <input type="text" className='text-lg py-3 px-3' name="FatherContact" value={student.FatherContact} onChange={handleChange} placeholder="FatherContact" />
      <input type="text" className='text-lg py-3 px-3' name="MotherContact" value={student.MotherContact} onChange={handleChange} placeholder="MotherContact" />
      <input type="text" className='text-lg py-3 px-3' name="GuardianContact" value={student.GuardianContact} onChange={handleChange} placeholder="GuardianContact" />
      <input type="text" className='text-lg py-3 px-3' name="FatherAadhaarNo" value={student.FatherAadhaarNo} onChange={handleChange} placeholder="FatherAadhaarNo" />
      <input type="text" className='text-lg py-3 px-3' name="MotherAadhaarNo" value={student.MotherAadhaarNo} onChange={handleChange} placeholder="MotherAadhaarNo" />
      <input type="text" className='text-lg py-3 px-3' name="GuardianAadhaarNo" value={student.GuardianAadhaarNo} onChange={handleChange} placeholder="GuardianAadhaarNo" />
      <input type="text" className='text-lg py-3 px-3' name="FatherPanCard" value={student.FatherPanCard} onChange={handleChange} placeholder="FatherPanCard" />
      <input type="text" className='text-lg py-3 px-3' name="MotherPanCard" value={student.MotherPanCard} onChange={handleChange} placeholder="MotherPanCard" />
      <input type="text" className='text-lg py-3 px-3' name="GuardianPanCard" value={student.GuardianPanCard} onChange={handleChange} placeholder="GuardianPanCard" />
      <input type="text"  className='text-lg py-3 px-3' name="GuardianPanCard" value={student.GuardianPanCard} onChange={handleChange} placeholder="GuardianPanCard" />
      <input type="text"  className='text-lg py-3 px-3'name="FatherAnnualIncome" value={student.FatherAnnualIncome} onChange={handleChange} placeholder="FatherAnnualIncome" />
      <input type="text" className='text-lg py-3 px-3' name="MotherAnnualIncome" value={student.MotherAnnualIncome} onChange={handleChange} placeholder="MotherAnnualIncome" />
      <input type="text"  className='text-lg py-3 px-3' name="GuardianAnnualIncome" value={student.GuardianAnnualIncome} onChange={handleChange} placeholder="GuardianAnnualIncome" />
      <input type="text" className='text-lg py-3 px-3' name="FatherImage" value={student.FatherImage} onChange={handleChange} placeholder="FatherImage" />
      <input type="text" className='text-lg py-3 px-3' name="MotherImage" value={student.MotherImage} onChange={handleChange} placeholder="MotherImage" />
      <input type="text" className='text-lg py-3 px-3' name="FatherQualification" value={student.FatherQualification} onChange={handleChange} placeholder="FatherQualification" />
      <input type="text" className='text-lg py-3 px-3' name="MotherQualification" value={student.MotherQualification} onChange={handleChange} placeholder="MotherQualification" />
      <input type="text" className='text-lg py-3 px-3' name="GuardianQualification" value={student.GuardianQualification} onChange={handleChange} placeholder="GuardianQualification" />
      <input type="text" className='text-lg py-3 px-3' name="FatherEmail" value={student.FatherEmail} onChange={handleChange} placeholder="FatherEmail" />
      <input type="text" className='text-lg py-3 px-3' name="MotherEmail" value={student.MotherEmail} onChange={handleChange} placeholder="MotherEmail" />
      <input type="text" className='text-lg py-3 px-3' name="GuardianEmail" value={student.GuardianEmail} onChange={handleChange} placeholder="GuardianEmail" />
      <input type="text" className='text-lg py-3 px-3' name="RelationWithSt" value={student.RelationWithSt} onChange={handleChange} placeholder="RelationWithSt" />
</div>
  <div className='w-screen flex justify-center'>
 <Link onClick={()=> {
  setEditUser(true)
 }} to={'/'}> <button  className= 'py-3 px-5 bg-[#62aad0] text-white font-semibold rounded-lg  ' type="submit"> {!editUser ? 'Add User' : 'Edit User'} </button></Link>
  </div>
    </form>
  );
};

export default InsertStudent;
