// import React, { useState } from 'react';

// function Table({ columns, data }) {
//     const [entries, setEntries] = useState(10);

//     const changeEntry = (event) => {
//         setEntries(+event.target.value);
//     };

    
//     const validData = Array.isArray(data) ? data : [];

//     return (
//         <div className='mx-10 my-10 sm:mx-8 md:mx-14 lg:mx-12 xl:mx-16'>
//             <div className='flex flex-col sm:flex-row justify-between items-center'>
//                 <div className='mb-10 mt-10 sm:mb-0'>
//                     <h1 className='text-3xl font-bold pt-4 py-10'>Roles</h1>
//                     <label htmlFor="entries" className="text-lg">Show </label>
//                     <select id="entries" className="text-lg" value={entries} onChange={changeEntry}>
//                         <option value="10">10</option>
//                         <option value="20">20</option>
//                         <option value="30">30</option>
//                         <option value="40">40</option>
//                         <option value="50">50</option>
//                     </select>
//                     <label htmlFor="entries" className="text-lg"> Entries</label>
//                 </div>
//             </div>
//             <div className='overflow-x-auto'>
//                 <table className="w-full sm:w-auto border-collapse bg-white text-left text-base text-gray-500">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             {columns.map((col, index) => (
//                                 <th key={index} scope="col" className="px-6 py-4 font-medium text-gray-900">{col.toUpperCase()}</th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100 border-t border-gray-100">
//                         {validData.slice(0, entries).map((row, rowIndex) => (
//                             <tr key={rowIndex} className="hover:bg-gray-100 transition-colors">
//                                 {columns.map((col, indOfCol) => (
//                                     <td key={indOfCol} className="px-6 py-4 hover:text-blue-600">{row[col]}</td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Table;
// import React, { useState } from 'react';

// function Table({ columns, data, onEdit, onDelete }) {
//     const [entries, setEntries] = useState(10);

//     const changeEntry = (event) => {
//         setEntries(+event.target.value);
//     };

//     const validData = Array.isArray(data) ? data : [];

//     return (
//         <div className='mx-10 my-10 sm:mx-8 md:mx-14 lg:mx-12 xl:mx-16'>
//             <div className='flex flex-col sm:flex-row justify-between items-center'>
//                 <div className='mb-10 mt-10 sm:mb-0'>
//                     <h1 className='text-3xl font-bold pt-4 py-10'>Roles</h1>
//                     <label htmlFor="entries" className="text-lg">Show </label>
//                     <select id="entries" className="text-lg" value={entries} onChange={changeEntry}>
//                         <option value="10">10</option>
//                         <option value="20">20</option>
//                         <option value="30">30</option>
//                         <option value="40">40</option>
//                         <option value="50">50</option>
//                     </select>
//                     <label htmlFor="entries" className="text-lg"> Entries</label>
//                 </div>
//             </div>
//             <div className='overflow-x-auto'>
//                 <table className="w-full sm:w-auto border-collapse bg-white text-left text-base text-gray-500">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             {columns.map((col, index) => (
//                                 <th key={index} scope="col" className="px-6 py-4 font-medium text-gray-900">{col.toUpperCase()}</th>
//                             ))}
//                             <th scope="col" className="px-6 py-4 font-medium text-gray-900">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100 border-t border-gray-100">
//                         {validData.slice(0, entries).map((row, rowIndex) => (
//                             <tr key={rowIndex} className="hover:bg-gray-100 transition-colors">
//                                 {columns.map((col, indOfCol) => (
//                                     <td key={indOfCol} className="px-6 py-4 hover:text-blue-600">{row[col]}</td>
//                                 ))}
//                                 <td className="px-6 py-4">
//                                     <button onClick={() => onEdit(row)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 r mr-2">Edit</button>
//                                     <button onClick={() => onDelete(row)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 ">Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Table;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Table({ columns, data, onDelete, loading }) {
    const [entries, setEntries] = useState(20);

    const changeEntry = (event) => {
        setEntries(+event.target.value);
    };

    return (
        <div className='mx-10 my-10 sm:mx-8 md:mx-14 lg:mx-12 xl:mx-16'>
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <div className='mb-10 mt-10 sm:mb-0'>
                    <h1 className='text-3xl font-bold pt-4 py-10'>Roles</h1>
                    <label htmlFor="entries" className="text-lg">Show </label>
                    <select id="entries" className="text-lg" value={entries} onChange={changeEntry}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                    <label htmlFor="entries" className="text-lg">Entries </label>
                </div>
            </div>
            <div className='overflow-x-auto'>
                <table className="w-full sm:w-auto border-collapse bg-white text-left text-base text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index} scope="col" className="px-6 py-4 font-medium text-gray-900">{col.toUpperCase()}</th>
                            ))}
                            <th className="px-6 py-4 font-medium text-gray-900">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {data.slice(0, entries).map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-100 transition-colors">
                                {columns.map((col, indOfCol) => (
                                    <td key={indOfCol} className="px-6 py-4 hover:text-blue-600">{row[col]}</td>
                                ))}
                                <td className="px-6 py-4 hover:text-blue-600">
                                    <Link to={`/editrole/${row.id}`}>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 ">Edit</button>
                                    </Link>
                                    <button onClick={() => onDelete(row.id)} disabled={loading[row.id]} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 ">
                                        {loading[row.id] ? 'Deleting...' : 'Delete'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;