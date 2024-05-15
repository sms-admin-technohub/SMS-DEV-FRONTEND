// Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faExpand } from '@fortawesome/free-solid-svg-icons';

const Header = ({ toggleSideBar }) => {
    return (
        <header className="sticky top-0 z-50 shadow-sm">
            <nav className="border-gray-200 px-2 lg:px-6 py-2">
                <div className="flex items-center justify-between mx-auto max-w-screen-2xl">
                    <div className='flex items-center'>
                        {/* Logo */}
                        <span className="flex items-center ">
                            <img
                                src="https://thumbs.dreamstime.com/b/globe-world-education-logo-kids-bright-children-school-books-kids-icon-globe-world-education-bright-logo-children-school-home-roof-168110808.jpg"
                                className="h-10 mix rounded-lg"
                                alt="Logo"
                            />
                            <h2 className='text-2xl cursor-pointer hidden lg:block md:block'>
                                <span className='font-bold'>
                                    My
                                </span>
                                School
                            </h2>
                        </span>
                        {/* Bars Icon */}
                        <div className='ml-16 '>
                            <button onClick={toggleSideBar}>
                                <FontAwesomeIcon className='h-5 w-5 bg-blue-600 text-white rounded-lg p-2' icon={faBars} />
                            </button>
                        </div>
                        {/* Search bar */}
                        <div className="hidden lg:block ml-4">
                            <div className="group relative">
                                <input type="text" className="border py-2 block w-full rounded-lg bg-slate-100 px-10" placeholder="Search here..." />
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Navigation Icons */}
                    <ul className='flex space-x-6 items-center'>
                        {/* Avatar */}
                        <li className="hidden lg:block  md:block">
                            <div className='w-10 h-8'>
                                <img className='h-10 rounded-full bg-slate-100 p-2' src="https://i.pinimg.com/736x/04/fd/25/04fd255a777fa3a6361574f0ee2f1f8e.jpg" alt="" />
                            </div>
                        </li>
                        {/* Bell Icon */}
                        <li>
                            <div className='w-8 h-8'>
                                <FontAwesomeIcon className='rounded-full bg-slate-100 p-2 cursor-pointer text-white h-6' style={{ color: '#050505' }} icon={faBell} />
                            </div>
                        </li>
                        {/* Expand Icon */}
                        <li className="hidden lg:block  md:block ">
                            <div className='w-8 h-8'>
                                <FontAwesomeIcon className='rounded-full bg-slate-100 p-2 cursor-pointer text-white h-6' style={{ color: '#050505' }} icon={faExpand} />
                            </div>
                        </li>
                        {/* User Avatar and Dropdown */}
                        <li>
                            <div className='h-10 flex items-center space-x-2'>
                                <img className="h-full w-full rounded-full object-contain   " src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div className='text-sm hidden lg:block  md:block '>
                                    <h1 className='font-bold'>Armaan Ali</h1>
                                    {/* Dropdown */}
                                    <select className='text-blue-700'>
                                        <option value="administrator">Administrator</option>
                                        <option value="profile">Profile</option>
                                        <option value="input">Input</option>
                                        <option value="logout">Logout</option>
                                    </select>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
