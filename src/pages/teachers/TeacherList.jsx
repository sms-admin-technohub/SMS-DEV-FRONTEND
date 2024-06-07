import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const TeacherList = () => {
    axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any value";
    //states-----
    const [teachers, setTeachers] = useState([]);
    const [findTeacher, setFindTeacher] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get(`https://4cb1-2409-40c4-d-52d5-58ca-6992-f9d6-d9e0.ngrok-free.app/t/teacher/`);
                setTeachers(response.data);
                setFindTeacher(response.data);
            } catch (error) {
                console.error('Error fetching teachers:', error.message);
            }
        };

        fetchTeachers();
    }, []);

    const handleCheckboxChange = (teacherId) => {
        const updatedTeachers = findTeacher.map(teacher =>
            teacher.id === teacherId ? { ...teacher, isChecked: !teacher.isChecked } : teacher
        );
        setFindTeacher(updatedTeachers);
    };

    const onSubmit = (data) => {
        const filtered = teachers.filter(teacher =>
            (!data.First_name || teacher.first_name.toLowerCase().includes(data.First_name.toLowerCase())) &&
            (!data.Phone_number || teacher.phone_no.includes(data.Phone_number)) &&
            (!data.email || teacher.email.toLowerCase().includes(data.email.toLowerCase()))
        );
        setFindTeacher(filtered);
        reset();
    };

    const deleteTecherById = async (teacherId) => {
        try {
            await axios.delete(`https://4cb1-2409-40c4-d-52d5-58ca-6992-f9d6-d9e0.ngrok-free.app/t/teacher/${teacherId}/`);
            setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
            setFindTeacher(findTeacher.filter(teacher => teacher.id !== teacherId));
            console.log('teacher record deleted');
        } catch (error) {
            console.log('error in delete', error.message);
        }
    };

    const editTeacherById = (teacherId) => {
        navigate(`/editeacher?id=${teacherId}`);
    };

    return (
        <div className='container bg-gray-100 h-screen w-full overflow-x-hidden'>
            <div className='flex justify-between'>
                <h1 className='pl-8 pt-4 font-semibold text-2xl'>Teachers List</h1>
                <h1 className='pr-6 pt-4 font-semibold text-md'>Teacher / All Teachers</h1>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w mx-auto flex flex-wrap gap-4 mt-9 ml-5">
                    <div className="w-full md:w-auto md:flex-1 md:flex md:gap-4">
                        <input
                            type="text"
                            placeholder="Search by First Name"
                            {...register("First_name")}
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="w-full md:w-auto md:flex-1 md:flex md:gap-4">
                        <input
                            type="text"
                            placeholder="Search by Phone Number"
                            {...register("Phone_number")}
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="w-full md:w-auto md:flex-1 md:flex md:gap-4">
                        <input
                            type="text"
                            placeholder="Search by Email"
                            {...register("email")}
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="w-full md:w-auto md:flex-1">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className='form bg-white mt-8 mx-6 rounded-lg'>
                <div className="flex justify-between pt-6 mx-6">
                    <div className='text text-start pl-3 pt-4 font-bold text-2xl'><h1>Teachers</h1></div>
                    <div className="flex">
                        <button className="flex items-center px-2 mt-2 text-gray-700 bg-blue-500 rounded-md hover:bg-sky-400 focus:outline-none focus:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2 4a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <button className="ml-2 bg-white text-black px-2 mt-2 rounded-md hover:bg-sky-400 border border-black focus:bg-sky-400 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14 3a2 2 0 012 2v10a2 2 01-2 2H6a2 2 01-2-2V5a2 2 01-2-2h3a1 1 110 2H6v10h8V5h-1a1 1 110-2h3zM8 11a1 1 100 2h8a1 1 100-2H8zm0-4a1 1 100 2h8a1 1 100-2H8z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <button className="flex text-sm text-white items-center ml-2 bg-blue-500 px-2 mt-2 rounded-md hover:bg-sky-400 focus:outline-none focus:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 000 4z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 01-16 0zm2 0a6 6 0112 0 6 6 01-12 0z" clipRule="evenodd" />
                                <path d="M10 3v10h2V3h-2z" />
                                <path d="M8 11l4 4 4-4h-8z" />
                            </svg>
                            Download
                        </button>

                        <button className="ml-2 bg-blue-500 text-white px-2 mt-2 rounded-md hover:bg-sky-400 focus:outline-none focus:bg-green-600">
                            <Link to="/addstudents">+</Link>
                        </button>
                    </div>
                </div>
                <div className="container mx-auto mt-6">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-semibold text-sm tracking-wider">CheckBox</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Teacher's Id</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">First Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Middle Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Last Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Mobile Number</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Gender</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Adhaar Number</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Pan Number</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Qualification</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Email</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">Operations</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {findTeacher.map((teacher) => (
                                    <tr key={teacher.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                checked={teacher.isChecked || false}
                                                onChange={() => handleCheckboxChange(teacher.id)}
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.id}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.first_name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.middle_name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.last_name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.phone_no}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.gender}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.adhaar_no}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.pan_no}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.qualification}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                                            <button onClick={() => deleteTecherById(teacher.id)} className='bg-red-800 text-white p-3 rounded-lg'>Delete</button>
                                            <button onClick={() => editTeacherById(teacher.id)} className='bg-blue-800 text-white p-3 rounded-lg ml-2'>Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherList;
