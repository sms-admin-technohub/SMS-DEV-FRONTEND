// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function RoleEdit() {
//   const { id } = useParams(); 
//   const [formData, setFormData] = useState({
//     name: '',
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`https://3963-117-217-84-27.ngrok-free.app/d/roles/${id}`);
//       console.log(i)
//       setFormData(response.data); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.put(`https://3963-117-217-84-27.ngrok-free.app/d/roles/${id}`, formData);
//       console.log('Role updated successfully:', response.data);
//     } catch (error) {
//       console.error('Error updating role:', error);
//     }
//   };

//   return (
//     <div className="w-full">
//       <form onSubmit={handleSubmit}>
//         <div className="">
//           <div className="flex flex-col justify-between mt-10">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-6">
//               <h2 className="text-xl text-left mx-2 font-semibold mb-4 md:col-span-3">Basic Details</h2>
//               <div className="flex flex-col mb-4 firstLine">
//                 <input
//                   type="text"
//                   className="w-full px-4 py-2 rounded border mb-2"
//                   placeholder=" Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
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

// export default RoleEdit;



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const EditRole = () => {
    const { id } = useParams();
    const [roleData, setroleData] = useState({
        name: '',
    
    });
    const navigate = useNavigate();

    useEffect(() => {

      const fetchroleData = async () => {
            try {
                axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any value";
                const response = await axios.get(`https://e654-117-217-38-120.ngrok-free.app/d/role/${id}/`)
                setroleData(response.data);
                console.log(id)
            } catch (error) {
                console.error('Error fetching role data:', error);
            }
        };

        fetchroleData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setroleData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://e654-117-217-38-120.ngrok-free.app/d/role/${id}/`, roleData);
            console.log("Successfully updates")
            navigate('/rolelist');
        } catch (error) {
            console.error('Error updating role data:', error);
        }
    };

    return (
        <div className='container bg-gray-100 h-screen w-full overflow-hidden'>
            <div className='flex justify-between'>
                <h1 className='pl-8 pt-4 font-semibold text-2xl'>Edit Role</h1>
                <div className="flex">
                    <h1 className='pr-2 pt-4 font-semibold text-md'>
                        <Link to='/rolelist'>Role</Link>
                    </h1>
                    <h1 className='flex justify-end mt-4 pr-6 font-semibold text-md'>/ Edit Role</h1>
                </div>
            </div>

            <div className='form bg-white mt-8 mx-6 rounded-lg'>
                <div className='text-start pl-3 pt-4 font-semibold text-xl'>
                    <h1>Role Information</h1>
                </div>

                <form onSubmit={handleSubmit} className="max-w-full mt-5 mx-4">
                    <div className="mb-4">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2"> Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={roleData.name} 
                                    onChange={handleChange} 
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>

                     

                     
                        
                        </div>
                    </div>

                    <div className="flex justify-start mb-4 pb-6">
                        <button 
                            type="submit" 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditRole;