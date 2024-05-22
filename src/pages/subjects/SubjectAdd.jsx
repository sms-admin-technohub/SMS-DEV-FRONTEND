import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function SubjectAdd(props) {
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
                  placeholder="Subject Name"
                  {...register('first_name', { required: true })}
                />
                {errors.first_name && <span className="text-red-500">Subject name is required</span>}
              </div>
              <div className="flex flex-col mb-4 thirdLine">
                <select
                  className="w-full px-4 py-2 rounded border mb-2"
                  {...register('department_id', { required: true })}
                >
                  <option value="">Select Department ID</option>
                  <option value="id_111">id_111</option>
                  <option value="id_222">id_222</option>
                  <option value="id_333">id_333</option>
                  <option value="id_444">id_444</option>
                </select>
                {errors.department_id && <span className="text-red-500">Department ID is required</span>}
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

export default SubjectAdd;
