import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <>
            <Header toggleSideBar={toggleSidebar} />
            <div className='flex'>
                <div className={`w-64 bg-white ${isSidebarOpen ? 'visible ' : ' hidden'} overflow-x-hidden`} style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 transparent' }}>
                    <Sidebar isOpen={isSidebarOpen} />
                </div>
                <div className='w-full mx-auto py-4 px-2 bg-gray-100  text-center' style={{ height: "90vh" }} >
                    <div className=' bg-white h-full mx-2 overflow-x-hidden' style={{ scrollbarWidth: 'thin', scrollbarColor: '#888 transparent' }} >
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};
export default DefaultLayout;