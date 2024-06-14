// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from '../../components/Table'; 

// const RoleList = () => {
//   const [searchId, setSearchId] = useState('');
//   const [searchName, setSearchName] = useState('');
//   const [searchPhone, setSearchPhone] = useState('');
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any value";

//       const response = await axios.get('https://3963-117-217-84-27.ngrok-free.app/d/roles/');
//       console.log(response)
//       console.log(response.data)
//       setRoles(response.data); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSearch = () => {
//     console.log('Searching...');
//   };

//   const columns = ['id', 'name'];

//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center">
//         <div className="parentDiv flex flex-col lg:flex-row mt-10">
//           <div className="flex flex-col md:flex-row ">
//             <input
//               type="text"
//               placeholder="Search by ID"
//               className="p-2 mx-5 border border-gray-500 rounded-md w-80 mb-3 md:mb-0"
//               value={searchId}
//               onChange={(e) => setSearchId(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Search by Name"
//               className="p-2 mx-5 border border-gray-500 rounded-md w-80 mb-3 md:mb-0"
//               value={searchName}
//               onChange={(e) => setSearchName(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col md:flex-row xl:mt-0 lg:mt-0 md:mt-5">
//             <input
//               type="text"
//               placeholder="Search by Phone"
//               className="p-2 mx-5 border border-gray-500 rounded-md w-80 mb-3 md:mb-0"
//               value={searchPhone}
//               onChange={(e) => setSearchPhone(e.target.value)}
//             />
//             <button
//               className="py-2 px-10 bg-blue-600 hover:bg-blue-500 font-bold text-white rounded-md"
//               onClick={handleSearch}
//             >
//               SEARCH
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className='mt-5'>
//         <Table columns={columns} data={roles} />
//       </div>
//     </div>
//   );
// };

// export default RoleList;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Table from '../../components/Table'; 

// const RoleList = () => {
//   const [searchId, setSearchId] = useState('');
//   const [searchName, setSearchName] = useState('');
//   const [searchPhone, setSearchPhone] = useState('');
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any value";

//       const response = await axios.get('https://3963-117-217-84-27.ngrok-free.app/d/roles/');
//       console.log(response)
//       console.log(response.data)
//       setRoles(response.data); 
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSearch = () => {
//     console.log('Searching...');
//   };

//   const handleEdit = (id) => {
//     console.log('Edit clicked for role with id:', id);
//     // Navigate to the edit form or perform any edit action here
//   };

//   const handleDelete = (id) => {
//     console.log('Delete clicked for role with id:', id);
//     // Perform delete action and update roles state accordingly
//     const updatedRoles = roles.filter(role => role.id !== id);
//     setRoles(updatedRoles);
//   };

//   const columns = ['id', 'name', 'action'];

//   const dataWithActions = roles.map(role => ({
//     ...role,
//     action: (
//       <>
//         <button onClick={() => handleEdit(role.id)}>Edit</button>
//         <button onClick={() => handleDelete(role.id)}>Delete</button>
//       </>
//     )
//   }));


//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center">
//         <div className="parentDiv flex flex-col lg:flex-row mt-10">
//           <div className="flex flex-col md:flex-row ">
//             <input
//               type="text"
//               placeholder="Search by ID"
//               className="p-2 mx-5 border border-gray-500 rounded-md w-80 mb-3 md:mb-0"
//               value={searchId}
//               onChange={(e) => setSearchId(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Search by Name"
//               className="p-2 mx-5 border border-gray-500 rounded-md w-80 mb-3 md:mb-0"
//               value={searchName}
//               onChange={(e) => setSearchName(e.target.value)}
//             />
//           </div>
//           <div className="flex flex-col md:flex-row xl:mt-0 lg:mt-0 md:mt-5">
//             <input
//               type="text"
//               placeholder="Search by Phone"
//               className="p-2 mx-5 border border-gray-500 rounded-md w-80 mb-3 md:mb-0"
//               value={searchPhone}
//               onChange={(e) => setSearchPhone(e.target.value)}
//             />
//             <button
//               className="py-2 px-10 bg-blue-600 hover:bg-blue-500 font-bold text-white rounded-md"
//               onClick={handleSearch}
//             >
//               SEARCH
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className='mt-5'>
//         <Table columns={columns} data={dataWithActions} onEdit={handleEdit}  onDelete={handleDelete}/>
//       </div>
//     </div>
//   );
// };

// export default RoleList;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { useNavigate } from 'react-router-dom';

const RoleList = () => {
    const [searchId, setSearchId] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchPhone, setSearchPhone] = useState('');
    const [roles, setroles] = useState([]);
    const [loading, setLoading] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEdit = (roleId) => {
        navigate(`/editroles/${roleId}`);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any value";
            const response = await axios.get('https://e654-117-217-38-120.ngrok-free.app/d/roles/');
            console.log('Response ', response);
            console.log('Data of Response', response.data);
            setroles(response.data);
        } catch (error) {
            console.error('Error fetching data', error);
            setError(error.message);
            if (error.response) {
                console.error('Response error ', error.response.data);
            }
        }
    };

    const handleDelete = async (id) => {
        setLoading(prev => ({ ...prev, [id]: true }));
        try {
            await axios.delete(`https://e654-117-217-38-120.ngrok-free.app/d/role/${id}/`);
            setroles(roles.filter(role => role.id !== id));
        } catch (error) {
            console.error('Error on deleting', error);
        }
        setLoading(prev => ({ ...prev, [id]: false }));
    };

    const handleSearch = () => {
        console.log('Searching...');
    };

    const columns = ['id', 'name'];

    return (
        <>
            <div className='mx-auto max-w-7xl'>
                <div className='flex justify-between'>
                    <h1 className='pl-8 pt-4 font-semibold text-2xl'>Roles</h1>
                    <h1 className='pr-6 pt-4 font-semibold text-md'>Role / All Roles</h1>
                </div>
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="parentDiv flex flex-col lg:flex-row">
                        <div className="flex flex-col md:flex-row">
                            <input
                                type="text"
                                placeholder="Search by ID"
                                className="p-2 mx-3 mb-3 md:mb-0 w-full md:w-80 border border-gray-500 rounded-md"
                                value={searchId}
                                onChange={(e) => setSearchId(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Search by Name"
                                className="p-2 mx-3 mb-3 md:mb-0 w-full md:w-80 border border-gray-500 rounded-md"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row mt-3 md:mt-0">
                            <input
                                type="text"
                                placeholder="Search by Phone"
                                className="p-2 mx-3 mb-3 md:mb-0 w-full md:w-80 border border-gray-500 rounded-md"
                                value={searchPhone}
                                onChange={(e) => setSearchPhone(e.target.value)}
                            />
                            <button
                                className="py-2 px-6 md:px-10 bg-blue-600 hover:bg-blue-500 font-bold text-white rounded-md"
                                onClick={handleSearch}
                            >
                                SEARCH
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    {/* Handle errors if needed */}
                </div>
                <Table columns={columns} data={roles} onEdit={handleEdit} onDelete={handleDelete} loading={loading} />
            </div>
        </>
    );
};

export default RoleList;