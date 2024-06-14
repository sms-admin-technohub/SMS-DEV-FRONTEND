// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// function AddRole() {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post('https://401d-117-217-84-27.ngrok-free.app/d/roles/', data);
//       console.log('Roles added successfully:', response.data);
//     } catch (error) {
//       if (error.response) {
       
//         console.error('Error response:', error.response.data);
//         console.error('Error status:', error.response.status);
//         console.error('Error headers:', error.response.headers);
//       } else if (error.request) {
      
//         console.error('Error request:', error.request);
//       } else {
    
//         console.error('Error message:', error.message);
//       }
//     }
//   };

//   return (
//     <div className="w-full">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="">
//           <div className="flex flex-col justify-between mt-10">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-6">
//               <h2 className="text-xl text-left mx-2 font-semibold mb-4 md:col-span-3">Basic Details</h2>
//               <div className="flex flex-col mb-4">
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 rounded border mb-2"
//                   placeholder="Name"
//                   {...register('name', { required: true })}
//                 />
//                 {errors.name && <span className="text-red-500">Name is required</span>}
//               </div>
        
//             </div>
//           </div>
//         </div>

//         <div className="text-left mx-6 mb-10">
//           <button type="submit" className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-1.5 px-12 rounded-lg">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddRole;


import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddRole() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Convert classes field to an array
      data.classes = Array.isArray(data.classes) ? data.classes : [data.classes];

      const response = await axios.post('https://e654-117-217-38-120.ngrok-free.app/d/roles/', data);

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
        <h1 className='pl-8 pt-4 font-semibold text-2xl'>Add Role</h1>
        <div className="flex">
          <h1 className='pr-2 pt-4 font-semibold text-md'>
            <Link to='/studentlist'>Role</Link>
          </h1>
          <h1 className='flex justify-end mt-4 pr-6 font-semibold text-md'>/Add Role</h1>
        </div>
      </div>

      <div className='form bg-white mt-8 mx-6 rounded-lg'>
        <div className='text-start pl-3 pt-4 font-semibold text-xl'>
          <h1>Role Information</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-full mt-5 mx-4">
          <div className="mb-4">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Name</label>
                <input {...register("name", { required: true })} type="text" placeholder="Enter First Name"
                  className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
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

export default AddRole;