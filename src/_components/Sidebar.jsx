import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <aside className='border w-64 h-5/6' style={{ height: "90.7vh" }}>
            <div className='py-5 px-3 text-gray-500'>
                Main Menu
            </div>

            <ul className="sidebar-menu space-y-3 text-gray-500">
                <li>
                    <NavLink to='/dashboard' className='px-4 py-2 rounded-md'>
                        Dashboard  
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profiles' className='px-4 py-2 rounded-md'>
                        Profiles
                    </NavLink>
                </li>
                <li>
                    <span 
                        className='  space-y-3ml-2 px-8 py-2 rounded-sm cursor-pointer hover:bg-blue-700 hover:text-white'
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        Students
                    </span>
                
                    {showDropdown && (
                        <ul className="submenu">
                        
                            <li className='space-y-3'>
                                <NavLink to='/studentlist' className='space-y-3 mt-2 ml-2 px-8 py-2 rounded-md hover:bg-blue-700 hover:text-white'>
                                    Student List
                                </NavLink>
                            </li>
                            <li className='space-y-3'>
                                <NavLink to='/viewstudents' className='space-y-3 mt-2 ml-2 px-8 py-2 rounded-md hover:bg-blue-700 hover:text-white'>
                                    Student View
                                </NavLink>
                            </li>
                            <li className='space-y-3'>
                                <NavLink to='/addstudents' className='space-y-3 mt-2 ml-2 px-8 py-2 rounded-sm hover:bg-blue-700 hover:text-white'>
                                    Add Student
                                </NavLink>
                            </li>
                            <li className='space-y-3'>
                                <NavLink to='/editstudents' className='space-y-3 mt-2  ml-2 px-8 py-2 rounded-md hover:bg-blue-700 hover:text-white'>
                                    Edit Student
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <NavLink to='/teachers' className='px-4 py-2 rounded-md'>
                        Teachers
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/tasks' className='px-4 py-2 rounded-md'>
                        Tasks
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Table' className='px-4 py-2 rounded-md'>
                        Table
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
