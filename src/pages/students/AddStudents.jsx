

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddStudentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [file, setFile] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });

      const response = await axios.post('URL', formData);

      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }

      // Handle succes
      console.log('Form data submitted successfully');

    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('URL');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = response.data;
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container bg bg-gray-100 h-screen w-full overflow-hidden'>
    <div className='flex justify-between'>
      <h1 className='pl-8  pt-4 font-semibold text-2xl'> Add Students</h1>
      <div className="flex">
    <h1 className='pr-2 pt-4 font-semibold text-md'>
      <Link to='/studentlist'>Student</Link>
    </h1>    
    <h1 className='flex justify-end mt-4  pr-6 font-semibold text-md'>/Add Students</h1>
  </div>
  </div>
   
    <div className='form bg-white mt-8  mx-6 rounded-lg'>
      <div className='text text-start pl-3 pt-4 font-semibold text-xl'><h1>Student Information</h1></div>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-full mt-5 mx-4 ">

        <div className="mb-4  ">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2 focus:out  ">First Name</label>
              <input {...register("firstName", { required: true })} type="text"placeholder="Enter First Name"
                className="  focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.firstName && <span className="text-red-500 text-xs">This field is required</span>}
            </div>

            <div >
              <label className="block text-sm font-bold mb-2">Middle Name</label>
              <input {...register("middle_name", { required: true })} type="text"placeholder="Enter Middle Name" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.middle_name && <span className="text-red-500 text-xs">This field is required</span>}
            </div>

            <div >
              <label className="block text-sm font-bold mb-2">Last Name</label>
              <input {...register("last_name", { required: true })} type="text"placeholder="Enter Last Name" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.last_name && <span className="text-red-500 text-xs">This field is required</span>}
            </div>

       
          </div>
        </div>

        
       
        <div className="mb-4  ">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          <div >
              <label className="block text-sm font-bold mb-2">Password</label>
              <input {...register("password", { required: true })} type="text"placeholder="Enter Email Address" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.password && <span className="text-red-500 text-xs">This field is required</span>}
            </div>

            <div >
              <label className="block text-sm font-bold mb-2">E-mail</label>
              <input {...register("email", { required: true })} type="text"placeholder="Enter Email Address" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
            </div>

            <div >
              <label className="block text-sm font-bold mb-2">Class</label>
              <select {...register("classes", { required: true })} className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="">Please select your class</option>
            <option value="12">12</option>
            <option value="11">11</option>
            <option value="10">10</option>
              </select>
              {errors.classes && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            
            
            <div>
              <label className="block text-sm font-bold mb-2  ">Date of Birth</label>
              <input {...register("date_of_birth", { required: true })} type="date" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.date_of_birth && <span className="text-red-500 text-xs">This field is required</span>}
            </div>

            <div >
              <label className="block text-sm font-bold mb-2">Gender</label>
              <select {...register("gender", { required: true })} className="  focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                
              <option value="">Please select your gender</option>
               <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="text-red-500 text-xs">This field is required</span>}
              </div>

              <div>
              <label className="block text-sm font-bold mb-2  ">Enrolment Date</label>
              <input {...register("enrolment_date", { required: true })} type="date" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              {errors.enrolment_date && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
           </div>
        </div>
      
        <div className="flex justify-start font-bold pt-4">
          <h1>Upload Student Photo (150px X 150px)</h1>
        </div>

        <div className="flex justify-start mb-4 pb-2">
          <div className="mr-4">
            <label className="block text-sm font-bold mb-2 "></label>
            <input onChange={handleFileChange} type="file" />
          </div>
        </div>

        <div className="flex justify-start mb-4 pb-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>

    </div>
  </div>
  );
}

export default AddStudentForm;







