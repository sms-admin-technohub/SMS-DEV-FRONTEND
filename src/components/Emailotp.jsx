import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const EmailOtp = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    const navigate =useNavigate()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://46a4-2402-8100-2778-a262-6cdf-2f2d-c0a8-c50a.ngrok-free.app/auth/otp/', { email: data.email });
            console.log('OTP sent successfully', response.data);
        } catch (error) {
            console.error('Error occurred', error.message);
        }
        reset();
        };
        navigate('/forgot');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Enter user email"
                        {...register('email', { required: true })}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send OTP
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EmailOtp;
