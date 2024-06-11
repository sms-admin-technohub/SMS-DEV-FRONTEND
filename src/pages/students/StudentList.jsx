import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
    const [searchId, setSearchId] = useState('');
    const [searchName, setSearchName] = useState('');
    const [searchPhone, setSearchPhone] = useState('');
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEdit = (studentId) => {
        navigate(`/editstudents/${studentId}`);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any value";
            const response = await axios.get('https://0e4e-106-76-95-22.ngrok-free.app/s/students/');
            console.log('Response =>', response);
            console.log('Data of Response =>', response.data);
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching data => ', error);
            setError(error.message);
            if (error.response) {
                console.error('Response error => ', error.response.data);
            }
        }
    };

    const handleDelete = async (id) => {
        setLoading(prev => ({ ...prev, [id]: true }));
        try {
            await axios.delete(`https://0e4e-106-76-95-22.ngrok-free.app/s/students/${id}/`);
            setStudents(students.filter(student => student.id !== id));
        } catch (error) {
            console.error('Error aa rha h delete hone mein:', error);
        }
        setLoading(prev => ({ ...prev, [id]: false }));
    };

    const handleSearch = () => {
        console.log('Searching...');
    };

    const columns = ['id', 'first_name', 'middle_name', 'last_name', 'date_of_birth', 'gender', 'enrolment_date', 'email'];

    return (
        <>
            <div className='mx-auto max-w-7xl'>
                <div className='flex justify-between'>
                    <h1 className='pl-8 pt-4 font-semibold text-2xl'>Students</h1>
                    <h1 className='pr-6 pt-4 font-semibold text-md'>Student / All Students</h1>
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
               
                <Table columns={columns} data={students} onEdit={handleEdit} onDelete={handleDelete} loading={loading} />
            </div>
        </>
    );
};

export default StudentList;
