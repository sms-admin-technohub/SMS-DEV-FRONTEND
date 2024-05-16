import React, { useState } from 'react';
import axios from 'axios';

function DirectorAdd(props) {
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-backend-url/api/directors', formData);
      console.log('Director added successfully:', response.data);
    } catch (error) {
      console.error('Error adding director:', error);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="flex flex-col justify-between mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-6">
              <h2 className="text-xl text-left mx-2 font-semibold mb-4 md:col-span-3">Basic Details</h2>
              <div className="flex flex-col mb-4 firstLine">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
                </div>
              <div className="flex flex-col mb-4 secondLine">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Second Name"
                  name="middle_name"
                  value={formData.middle_name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col mb-4 thirdLine">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Last Name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-6">
              <h2 className="text-xl text-left mx-2 font-semibold mb-4 md:col-span-2">Login Details</h2>
              <div className="flex flex-col mb-4 firstLine">
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Enter E-mail ID"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Enter Phone number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col mb-4 secondLine">
                <input
                  type="password"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded border mb-2"
                  placeholder="Enter gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
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

export default DirectorAdd;
