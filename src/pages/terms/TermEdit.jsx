import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function TermsEdit(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/terms/', data);
      console.log('Director added successfully:', response.data);
    } catch (error) {
      console.error('Error adding director:', error);
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
                  placeholder="Edit Start Date"
                  {...register('start_date', { required: 'Start Date is required' })}
                />
                {errors.start_date && <span className="text-red-500">{errors.start_date.message}</span>}
              </div>
              <div className="flex flex-col mb-4 secondLine">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Edit End Date"
                  {...register('end_date', { required: 'End Date is required' })}
                />
                {errors.end_date && <span className="text-red-500">{errors.end_date.message}</span>}
              </div>
              <div className="flex flex-col mb-4 thirdLine">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Edit Term number"
                  {...register('term_number', { required: 'Term number is required' })}
                />
                {errors.term_number && <span className="text-red-500">{errors.term_number.message}</span>}
              </div>
              <div className="flex flex-col mb-4 thirdLine">
                <select
                  className="w-full px-4 py-2 rounded border mb-2"
                  {...register('year_id', { required: 'Year ID is required' })}
                >
                  <option value="id_111">Select Year ID</option>
                  <option value="id_111">id_111</option>
                  <option value="id_222">id_222</option>
                  <option value="id_333">id_333</option>
                  <option value="id_444">id_444</option>
                </select>
                {errors.year_id && <span className="text-red-500">{errors.year_id.message}</span>}
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

export default TermsEdit;
