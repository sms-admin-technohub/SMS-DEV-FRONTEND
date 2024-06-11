import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {
    const { id } = useParams();
    const [studentData, setStudentData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        password: '',
        email: '',
        classes: '',
        date_of_birth: '',
        gender: '',
        enrolment_date: ''
    });
    const navigate = useNavigate();

    useEffect(() => {

      const fetchStudentData = async () => {
            try {
                const response = await axios.get(`https://0e4e-106-76-95-22.ngrok-free.app/s/students/${id}/`);
                setStudentData(response.data);
                console.log(id)
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://0e4e-106-76-95-22.ngrok-free.app/s/students/${id}/`, studentData);
            console.log("Update ho gaya Successfullyyy..!!")
            navigate('/studentlist');
        } catch (error) {
            console.error('Error updating student data:', error);
        }
    };

    return (
        <div className='container bg-gray-100 h-screen w-full overflow-hidden'>
            <div className='flex justify-between'>
                <h1 className='pl-8 pt-4 font-semibold text-2xl'>Edit Student</h1>
                <div className="flex">
                    <h1 className='pr-2 pt-4 font-semibold text-md'>
                        <Link to='/studentlist'>Student</Link>
                    </h1>
                    <h1 className='flex justify-end mt-4 pr-6 font-semibold text-md'>/ Edit Student</h1>
                </div>
            </div>

            <div className='form bg-white mt-8 mx-6 rounded-lg'>
                <div className='text-start pl-3 pt-4 font-semibold text-xl'>
                    <h1>Student Information</h1>
                </div>

                <form onSubmit={handleSubmit} className="max-w-full mt-5 mx-4">
                    <div className="mb-4">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">First Name</label>
                                <input 
                                    type="text" 
                                    name="first_name" 
                                    value={studentData.first_name} 
                                    onChange={handleChange} 
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Middle Name</label>
                                <input 
                                    type="text" 
                                    name="middle_name" 
                                    value={studentData.middle_name} 
                                    onChange={handleChange} 
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Last Name</label>
                                <input 
                                    type="text" 
                                    name="last_name" 
                                    value={studentData.last_name} 
                                    onChange={handleChange} 
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={studentData.password} 
                                    onChange={handleChange} 
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={studentData.email} 
                                    onChange={handleChange} 
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Class</label>
                                <select 
                                    name="classes" 
                                    value={studentData.classes} 
                                    onChange={handleChange} 
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Please select your class</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Date of Birth</label>
                                <input 
                                    type="date" 
                                    name="date_of_birth" 
                                    value={studentData.date_of_birth} 
                                    onChange={handleChange} 
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Gender</label>
                                <select 
                                    name="gender" 
                                    value={studentData.gender} 
                                    onChange={handleChange} 
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Please select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2">Enrolment Date</label>
                                <input 
                                    type="date" 
                                    name="enrolment_date" 
                                    value={studentData.enrolment_date} 
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

export default EditStudent;
