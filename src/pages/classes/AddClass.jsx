import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const AddClass = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = (data) => {
        console.log(data);
       
    };

    


    return (
        <div className='container bg bg-gray-100 h-screen w-full overflow-hidden'>
            <div className='flex justify-between'>
                <h1 className='pl-8  pt-4 font-semibold text-2xl'> Add Classes</h1>
                <div className="flex">
                    <h1 className='pr-2 pt-4 font-semibold text-md'>
                        <Link to='/classlist'>Class</Link>
                    </h1>
                    <h1 className='flex justify-end mt-4  pr-6 font-semibold text-md'>/Add Classes</h1>
                </div>
            </div>

            <div className='form bg-white mt-8  mx-6 rounded-lg'>
                <div className='text text-start pl-3 pt-4 font-semibold text-xl'><h1>Classes Information</h1></div>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-full mt-5 mx-4 ">

                    <div className="mb-4  ">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2 focus:out  ">Class Name</label>
                                <input {...register("level_name", { required: true })} type="text" placeholder="Enter Class Name"
                                    className="  focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.level_name && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div >
                                <label className="block text-sm font-bold mb-2">Class Order</label>
                                <input {...register("level_order", { required: true })} type="number" placeholder="Enter Class Order" className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.level_order && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>

                          

                         
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

export default AddClass;