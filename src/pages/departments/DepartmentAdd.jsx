import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function DirectorAdd(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/d/directors/', data);
      console.log('Director has been added SUCCESSFULLYY \n ', response.data);
    } catch (error) {
      console.error('Error is being encountered \n ', error);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="flex flex-col justify-between mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-6">
              <h2 className="text-xl text-left mx-2 font-semibold mb-4 md:col-span-3">Basic Details</h2>
              <div className="flex flex-col mb-4 firstLine">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="First Name"
                  {...register('first_name', { required: true })}
                />
                {errors.first_name && <span className="text-red-500">First name is required</span>}
              </div>
              <div className="flex flex-col mb-4 secondLine">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Middle Name"
                  {...register('middle_name', { required: 'Middle name is required' })}
                />
                {errors.middle_name && <span className="text-red-500">{errors.middle_name.message}</span>}
              </div>
              <div className="flex flex-col mb-4 thirdLine">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Last Name"
                  {...register('last_name', { required: true })}
                />
                {errors.last_name && <span className="text-red-500">Last name is required</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-6">
              <h2 className="text-xl text-left mx-2 font-semibold mb-4 md:col-span-2">Login Details</h2>
              <div className="flex flex-col mb-4 firstLine">
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Enter E-mail ID"
                  {...register('email', { required: true })}
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Enter Phone number"
                  {...register('phone_number', { required: true })}
                />
                {errors.phone_number && <span className="text-red-500">Phone number is required</span>}
              </div>
              <div className="flex flex-col mb-4 secondLine">
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Enter Password"
                  {...register('password', { required: true })}
                />
                {errors.password && <span className="text-red-500">Password is required</span>}
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Enter gender"
                  {...register('gender', { required: true })}
                />
                {errors.gender && <span className="text-red-500">Gender is required</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="text-left mx-6 mb-10">
          <button type="submit" className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-1.5 px-12 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default DirectorAdd;
