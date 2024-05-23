import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TeacherList = () => {
    //axios Instance---- 
    const Instance = axios.create({
        baseURL: 'http://192.168.29.3:8000'
    });

    const [teachers, setTeachers] = useState([]);
    const { register, handleSubmit } = useForm();
    // below code is responsible for fetching data form server--------
    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await Instance.get('/t/teacher/');
                setTeachers(response.data);
            } catch (error) {
                console.error('Error fetching teachers:', error);
            }
        };

        fetchTeachers();
    }, []);
    //toggle the checkbox---
    const handleCheckboxChange = (teacherId) => {
        const updatedTeachers = teachers.map(teacher =>
            teacher.id === teacherId ? { ...teacher, isChecked: !teacher.isChecked } : teacher
        );
        setTeachers(updatedTeachers);
    };

    // below code is responsible for the form submittion form data is used to filterd out teacher list------   
    const onSubmit = async (data) => {
        try {
            const response = await Instance.get('/t/teacher/', { data: data });
            console.log('Response received successfully:', response.data);
            setTeachers(response.data);
        } catch (error) {
            console.error('Error during search:', error);
        }
    };

    return (
        <div className='container bg-gray-100 h-screen w-full overflow-hidden'>
            <div className='flex justify-between'>
                <h1 className='pl-8 pt-4 font-semibold text-2xl'>Teachers</h1>
                <h1 className='pr-6 pt-4 font-semibold text-md'>Teacher / All Teachers</h1>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w mx-auto flex flex-wrap gap-4 mt-9 ml-5">
                    <div className="w-full md:w-auto md:flex-1 md:flex md:gap-4">
                        <input
                            type="text"
                            placeholder="Search by Name"
                            {...register("name")}
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="w-full md:w-auto md:flex-1 md:flex md:gap-4">
                        <input
                            type="text"
                            placeholder="Search by ID"
                            {...register("id")}
                            className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="w-full md:w-auto md:flex-1 md:flex md:gap-4">
                        <input
                            type="text"
                            placeholder="Search by Phone No."
                            {...register("phone")}
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
                                <path fillRule="evenodd" d="M14 3a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h3a1 1 110 2H6v10h8V5h-1a1 1 110-2h3zM8 11a1 1 100 2h8a1 1 100-2H8zm0-4a1 1 100 2h8a1 1 100-2H8z" clipRule="evenodd" />
                            </svg>
                        </button>

                        <button className="flex text-sm text-white items-center ml-2 bg-blue-500 px-2 mt-2 rounded-md hover:bg-sky-400 focus:outline-none focus:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 000 4z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 01-16 0zm2 0a6 6 0 1112 0 6 6 01-12 0z" clipRule="evenodd" />
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
                                    <th scope="col" className="px-6 py-3 text-left text-sm text-semibold tracking-wider">ID</th>
                                    <th scope="col" className="px-6 py-3 text-left text-sm tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-semibold text-sm uppercase tracking-wider">Class</th>
                                    <th scope="col" className="px-6 py-3 text-left text-semibold text-sm tracking-wider">DOB</th>
                                    <th scope="col" className="px-6 py-3 text-left text-semibold text-sm tracking-wider">Parent Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-semibold text-sm tracking-wider">Mobile Number</th>
                                    <th scope="col" className="px-6 py-3 text-left text-semibold text-sm tracking-wider">Address</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {teachers.map(teacher => (
                                    <tr key={teacher.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <input
                                                type="checkbox"
                                                checked={teacher.isChecked || false}
                                                onChange={() => handleCheckboxChange(teacher.id)}
                                            />
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.id}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.name}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.class}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.dob}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.parentName}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.mobileNumber}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{teacher.address}</td>
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