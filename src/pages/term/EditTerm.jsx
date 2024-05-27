import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const EditTerm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);

    const onSubmit = (data) => {
        console.log(data);
        console.log(file);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <div className='container bg bg-gray-100 h-screen w-full overflow-hidden'>
            <div className='flex justify-between'>
                <h1 className='pl-8  pt-4 font-semibold text-2xl'> Edit Term</h1>
                <div className="flex">
                    <h1 className='pr-2 pt-4 font-semibold text-md'>
                        <Link to='/studentlist'>Term</Link>
                    </h1>
                    <h1 className='flex justify-end mt-4  pr-6 font-semibold text-md'>/Edit Terms</h1>
                </div>
            </div>

            <div className='form bg-white mt-8  mx-6 rounded-lg'>
                <div className='text text-start pl-3 pt-4 font-semibold text-xl'><h1>Term Information</h1></div>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-full mt-5 mx-4 ">

                    <div className="mb-4  ">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2  ">Teacher's ID</label>
                                <input {...register("teacherId", { required: true })} type="text" placeholder="Enter Teacher ID"
                                    className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.teacherId && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div >
                                <label className="block text-sm font-bold mb-2">Phone</label>
                                <input {...register("phone", { required: true })} type="text" placeholder="Enter Phone Number" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.phone && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-2  ">First Name</label>
                                <input {...register("firstName", { required: true })} type="text" placeholder="Enter First Name"
                                    className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.firstName && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>

                            <div >
                                <label className="block text-sm font-bold mb-2">Middle Name</label>
                                <input {...register("middleName", { required: true })} type="text" placeholder="Enter Middle Name" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.middleName && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div >
                                <label className="block text-sm font-bold mb-2">Last Name</label>
                                <input {...register("lastName", { required: true })} type="text" placeholder="Enter Last Name" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.lastName && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div >
                                <label className="block text-sm font-bold mb-2">E-mail</label>
                                <input {...register("email", { required: true })} type="text" placeholder="Enter Email Address" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start font-bold pt-4">
                        <h1>Upload Student Photo (150px X 150px)</h1>
                    </div>

                    <div className="flex justify-start mb-4 pb-2">
                        <div className="mr-4">
                            <label className="block text-sm font-bold mb-2 "></label>
                            <input onChange={handleFileChange} type="file" />
                        </div>
                    </div>

                    <div className="flex justify-start mb-4 pb-6">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default EditTerm;