import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StudentView() {
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-2xl font-semibold'>Student Details</h1>
          <div className="flex">
            <h1 className='pr-2 font-semibold text-md'>
              <Link to='/studentlist'>Student</Link>
            </h1>    
            <h1 className='flex justify-end font-semibold text-md'>/Students Details</h1>
          </div>
        </div>
        {/* ================ */}


        <div className='main '>

        <div className="grid grid-cols-5 grid-rows-5 gap-4">
         <div className="col-span-2 bg-white ml-10 h-[550px] w-[400px] row-span-5">
         <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
              
              <p className='font font-bold text-lg'>Name</p>
              <p className='text-gray-600 font-medium pb-3'> Sameera</p>

              <p className='font font-bold text-lg'>Department</p>
              <p className='text-gray-600 font-medium pb-3'>EC</p>

              <p className='font font-bold text-lg'>Mobile</p>
              <p className='text-gray-600 font-medium pb-3'>6768937973</p>

              <p className='font font-bold text-lg'>Email</p>
              <p className='text-gray-600 font-medium pb-3'>sameeramansoori08@gmail.com</p>

              <p className='font font-bold text-lg'>Gender</p>
              <p className='text-gray-600 font-medium pb-3'>female</p>

              <p className='font font-bold text-lg'>Date of Birth</p>
              <p className='text-gray-600 font-medium pb-3'>2 aug 2004</p>

              <p className='font font-bold text-lg'>Language</p>
              <p className='text-gray-600 font-medium pb-3'>English</p>

              <p className='font font-bold text-lg'>Address</p>
              <p className='text-gray-600 font-medium pb-3'>Bhopal</p>
    </div>
    <div className="col-span-3 bg-white mr-20 h-[550px] w-[800px] row-span-5 col-start-3">2</div>
</div>
    



        </div>

        {/* ============== */}
        {/* <div className='bg-white rounded-lg shadow-md px-6 py-8 md:py-12'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-2xl font-semibold'>Profile</h1>
            <h1 className='text-xl'>...</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white w-[350px] rounded-lg border border-gray-300 text text-start pl-10 py-4">
              <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
              <p className='font font-bold text-lg'>Name</p>
              <p className='text-gray-600 font-medium pb-3'> Sameera</p>

              <p className='font font-bold text-lg'>Department</p>
              <p className='text-gray-600 font-medium pb-3'>EC</p>

              <p className='font font-bold text-lg'>Mobile</p>
              <p className='text-gray-600 font-medium pb-3'>6768937973</p>

              <p className='font font-bold text-lg'>Email</p>
              <p className='text-gray-600 font-medium pb-3'>sameeramansoori08@gmail.com</p>

              <p className='font font-bold text-lg'>Gender</p>
              <p className='text-gray-600 font-medium pb-3'>female</p>

              <p className='font font-bold text-lg'>Date of Birth</p>
              <p className='text-gray-600 font-medium pb-3'>2 aug 2004</p>

              <p className='font font-bold text-lg'>Language</p>
              <p className='text-gray-600 font-medium pb-3'>English</p>

              <p className='font font-bold text-lg'>Address</p>
              <p className='text-gray-600 font-medium pb-3'>Bhopal</p>
              
            </div>
            <div className="bg-white rounded-lg border border-gray-300 px-6 py-4">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tincidunt justo id ex pulvinar, et placerat arcu vestibulum. Duis
                sed leo vitae ligula tincidunt malesuada. Phasellus ut nibh nec urna dictum
                ultrices. Integer nec dictum risus.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default StudentView;
