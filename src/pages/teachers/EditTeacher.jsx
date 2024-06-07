import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
const EditTeacher = () => {
    axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any value";
    //states------------
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const queryParams = new URLSearchParams(window.location.search);
    const teacherId = queryParams.get('id');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchTeacherData = async () => {
            try {
                const response = await axios.get(`https://4cb1-2409-40c4-d-52d5-58ca-6992-f9d6-d9e0.ngrok-free.app/t/teacher/${teacherId}`);
                const data = response.data;
                for (const key in data) {
                    setValue(key, data[key]);
                }
            } catch (error) {
                console.log('Error fetching teacher data', error);
            }
        };

        if (teacherId) {
            fetchTeacherData();
        }
    }, [teacherId, setValue]);

    const onSubmit = async (data) => {
        try {
            const response = await axios.put(`https://4cb1-2409-40c4-d-52d5-58ca-6992-f9d6-d9e0.ngrok-free.app/t/teacher/${teacherId}/`, data);
            console.log('Data submitted successfully via PUT request', response.data);
        } catch (error) {
            console.log('Error occurred in edit', error);
        }
        navigate('/teacherlist')
        reset();
    };
    return (
        <div className='container bg-gray-100 h-screen w-full overflow-hidden'>
            <div className='flex justify-between'>
                <h1 className='pl-8 pt-4 font-semibold text-2xl'> Edit Teachers</h1>
                <div className="flex">
                    <h1 className='pr-2 pt-4 font-semibold text-md'>
                        <Link to='/teacherlist'>Teacher</Link>
                    </h1>
                    <h1 className='flex justify-end mt-4 pr-6 font-semibold text-md'>/Edit Teachers</h1>
                </div>
            </div>

            <div className='form bg-white mt-8 mx-6 rounded-lg'>
                <div className='text-start pl-3 pt-4 font-semibold text-xl'><h1>Teachers Information</h1></div>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-full mt-5 mx-4 ">
                    {/* row-1 */}
                    <div className="mb-4">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Teacher's Id</label>
                                <input {...register("id", { required: true })} type="text" placeholder="Enter Teacher's Id"
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.id && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">First Name</label>
                                <input {...register("first_name", { required: true })} type="text" placeholder="Enter First Name"
                                    className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.first_name && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Middle Name</label>
                                <input {...register("middle_name", { required: true })} type="text" placeholder="Enter Middle Name" className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.middle_name && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                        </div>
                    </div>
                    {/* row-1 */}
                    {/* row-2 */}
                    <div className="mb-4">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Last Name</label>
                                <input {...register("last_name", { required: true })} type="text" placeholder="Enter Last Name" className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.last_name && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Password</label>
                                <input {...register("password", { required: true })} type="text" placeholder="Enter Password" className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.password && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Phone Number</label>
                                <input {...register("phone_no", { required: true })} type="text" placeholder="Enter Phone Number" className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.phone_no && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                        </div>
                    </div>
                    {/* row-2 */}
                    {/* row-3 */}
                    <div className="mb-4">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">E-mail</label>
                                <input {...register("email", { required: true })} type="text" placeholder="Enter Email Address" className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Adhaar Number</label>
                                <input {...register("adhaar_no", { required: true })} type="text" placeholder="Enter Adhaar Number" className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.adhaar_no && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Pan Number</label>
                                <input {...register("pan_no", { required: true })} type="text" placeholder="Enter Pan Number" className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.pan_no && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                        </div>
                    </div>
                    {/* row-3 */}
                    {/* row-4 */}
                    <div className="mb-4">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2">Gender</label>
                                <input {...register("gender", { required: true })} type="text" placeholder="Enter Gender" className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.gender && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Qualification</label>
                                <input {...register("qualification", { required: true })} type="text" placeholder="Enter Qualification" className="focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                {errors.qualification && <span className="text-red-500 text-xs">This field is required</span>}
                            </div>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div className="flex justify-start mb-4 pb-6">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditTeacher;
