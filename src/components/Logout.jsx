import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate()
  const logoff = async () => {
    try {
      const response = await axios.post(
        'https://d623-2402-8100-2778-a262-6cdf-2f2d-c0a8-c50a.ngrok-free.app/auth/logout/',
        {
          'refresh_token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxODg3MTYyNywiaWF0IjoxNzE4MjY2ODI3LCJqdGkiOiIyNDZlYWFkZTUwNTc0NTc4YWZkNTc4MDVmMjY3NTkzNSIsInVzZXJfaWQiOjEsInJvbGUiOiJzdHVkZW50In0.Urw7Vq49G2PENh1dJtM4Zodoob6Jwk2IFg4LfQwgZQE'
        }
      );
      console.log('Logout successful', response.data);
    } catch (error) {
      console.log('Error occurred in logout', error.message);
    }
    navigate('/login')
  };
  return (
    <button onClick={() => logoff()} className='bg-blue-600 text-white py-2 px-4 rounded-lg'>
      Log out
    </button>
  );
};

export default Logout;
