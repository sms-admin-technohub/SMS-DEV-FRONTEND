import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://46a4-2402-8100-2778-a262-6cdf-2f2d-c0a8-c50a.ngrok-free.app/auth/reset_password/', data);
            console.log(response.data);
            alert('Password reset successfully');
            reset();
        } catch (error) {
            console.error(error);
            alert('An error occurred while resetting the password');
        }
        navigate('/login')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

                

                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Enter New Password"
                        {...register('new_password', { required: true })}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.newPassword ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {errors.new_password && <span className="text-red-500 text-sm">New Password is required</span>}
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register('confirm_password', { required: true })}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {errors.confirm_password && <span className="text-red-500 text-sm">Confirm Password is required</span>}
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        {...register('email', { required: true })}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                </div>
                <div className="mb-6">
                    <input
                        type="number"
                        placeholder="Enter OTP"
                        {...register('otp', { required: true })}
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                    />
                    {errors.otp && <span className="text-red-500 text-sm">Otp is required</span>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Set New Password
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;
