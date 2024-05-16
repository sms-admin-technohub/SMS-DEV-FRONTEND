import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';

const DirectorList = () => {
  const [searchId, setSearchId] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/directors/');
      setDirectors(response.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    console.log('Searching...');
  
  };

  const columns = ['id', 'first_name', 'middle_name', 'last_name', 'gender', 'phone_number', 'email'];

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="parentDiv flex flex-col lg:flex-row mt-10">
          <div className="flex flex-col md:flex-row ">
            <input
              type="text"
              placeholder="Search by ID"
              className="p-2 mx-5 border border-gray-500 rounded-md w-80 mb-3 md:mb-0"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <input
              type="text"
              placeholder="Search by Name"
              className="p-2 mx-5 border border-gray-500 rounded-md w-80 mb-3 md:mb-0"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-row xl:mt-0 lg:mt-0 md:mt-5">
            <input
              type="text"
              placeholder="Search by Phone"
              className="p-2 mx-5 border border-gray-500 rounded-md w-80 mb-3 md:mb-0"
              value={searchPhone}
              onChange={(e) => setSearchPhone(e.target.value)}
            />
            <button
              className="py-2 px-10 bg-blue-600 hover:bg-blue-500 font-bold text-white rounded-md"
              onClick={handleSearch}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <Table columns={columns} data={directors} />
      </div>
    </div>
  );
};

export default DirectorList;
