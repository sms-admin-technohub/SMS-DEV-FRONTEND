import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddStudentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Convert classes field to an array
      data.classes = Array.isArray(data.classes) ? data.classes : [data.classes];

      const response = await axios.post('https://0e4e-106-76-95-22.ngrok-free.app/s/students/', data);

      if (response.status !== 201) {
        throw new Error('Failed to submit form data');
      }

      console.log('Data submitted successfully', response.data);
    } catch (error) {
      console.error('Error occurred while submitting data:', error);
    }
  };

  return (
    <div className='container bg-gray-100 h-screen w-full overflow-hidden'>
      <div className='flex justify-between'>
        <h1 className='pl-8 pt-4 font-semibold text-2xl'>Add Students</h1>
        <div className="flex">
          <h1 className='pr-2 pt-4 font-semibold text-md'>
            <Link to='/studentlist'>Student</Link>
          </h1>
          <h1 className='flex justify-end mt-4 pr-6 font-semibold text-md'>/Add Students</h1>
        </div>
      </div>

      <div className='form bg-white mt-8 mx-6 rounded-lg'>
        <div className='text-start pl-3 pt-4 font-semibold text-xl'>
          <h1>Student Information</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-full mt-5 mx-4">
          <div className="mb-4">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">First Name</label>
                <input {...register("first_name", { required: true })} type="text" placeholder="Enter First Name"
                  className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.firstName && <span className="text-red-500 text-xs">This field is required</span>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Middle Name</label>
                <input {...register("middle_name", { required: true })} type="text" placeholder="Enter Middle Name"
                  className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.middle_name && <span className="text-red-500 text-xs">This field is required</span>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Last Name</label>
                <input {...register("last_name", { required: true })} type="text" placeholder="Enter Last Name"
                  className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.last_name && <span className="text-red-500 text-xs">This field is required</span>}
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Password</label>
                <input {...register("password", { required: true })} type="password" placeholder="Enter Password"
                  className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.password && <span className="text-red-500 text-xs">This field is required</span>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">E-mail</label>
                <input {...register("email", { required: true })} type="email" placeholder="Enter Email Address"
                  className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Class</label>
                <select {...register("classes", { required: false })} className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="">Please select your class</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                {/* {errors.classes && <span className="text-red-500 text-xs">This field is required</span>} */}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Date of Birth</label>
                <input {...register("date_of_birth", { required: true })} type="date"
                  className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.date_of_birth && <span className="text-red-500 text-xs">This field is required</span>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Gender</label>
                <select {...register("gender", { required: true })} className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="">Please select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <span className="text-red-500 text-xs">This field is required</span>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Enrolment Date</label>
                <input {...register("enrolment_date", { required: true })} type="date"
                  className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.enrolment_date && <span className="text-red-500 text-xs">This field is required</span>}
              </div>
            </div>
          </div>

          <div className="flex justify-start mb-4 pb-6">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudentForm;

