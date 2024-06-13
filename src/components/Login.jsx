import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate =useNavigate()

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://af3d-2402-8100-2774-de86-8c38-afb1-2248-1515.ngrok-free.app/auth/Login/', data)
            console.log(response.data)
        } catch (error) {
            console.log('error occur', error.message)
        }
        reset();
        navigate('/')
    }
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="container mx-auto px-4">
                <section className="flex flex-col items-center justify-center py-4">
                    <div className="w-full max-w-md">
                        <div className="flex justify-center py-4">
                            <a href="index.html" className="flex items-center space-x-2">
                                <span className="text-2xl font-semibold hidden lg:block">Welcome to SM</span>
                            </a>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-6">
                            <div className="mb-4 ">
                                <h5 className="text-center text-xl font-semibold">Login to Your Account</h5>
                                <p className="text-center text-sm text-gray-600">Enter your username & password to login</p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input
                                            {...register('email', { required: true })}
                                            type="email"
                                            placeholder='Enter your Email'
                                            className="py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 pr-12 sm:text-sm border-gray-300 rounded-md border-2"
                                        />
                                        {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <input
                                        {...register('password', { required: true })}

                                        type="password"
                                        placeholder='Enter your Password'
                                        className="py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 pr-12 sm:text-sm border-gray-300 rounded-md border-2"
                                    />
                                    {errors.password && <span className="text-red-500 text-xs">This field is required</span>}
                                </div>

                                <div className="">

                                    <label className="ml-2 block text-sm text-gray-900">Role</label>
                                    <input
                                        {...register('role', { required: true })}
                                        type="text"
                                        placeholder='Enter your role'
                                        className="py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 pr-12 sm:text-sm border-gray-300 rounded-md border-2"
                                    />
                                    {errors.role && <span className="text-red-500 text-xs">This field is required</span>}
                                </div>

                                <div>
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm">Don't have an account?
                                        <a href="pages-register.html" className="font-medium text-indigo-600 hover:text-indigo-500">Create an account</a>
                                    </p>
                                    <NavLink to='/emailotp' className='text-blue-800'>Forgot password</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Login;
