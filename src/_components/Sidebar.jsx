import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGear, faNewspaper, faBook, faTable, faCalendarDay, faCommentDollar, faClipboardList, faChalkboardUser, faHollyBerry, faBuilding, faBookOpenReader, faTableCellsLarge, faFileInvoiceDollar, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>
            <aside className={isOpen ? "sidebar open" : "sidebar"} style={{height: "90vh"}}>
                {/* main menu start */}
                <div className='py-5 pl-5 px-3 text-gray-500'>
                    Main Menu
                </div>
                <ul className="sidebar-menu space-y-7 pl-6 text-gray-500">
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faTableCellsLarge} />
                            <NavLink to='/dashboard' className='px-4'>
                                Dashboard
                            </NavLink>
                        </span>
                    </li>

                    {/* Students Dropdown */}
                    <li className="relative">
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faChalkboardUser} />
                            <NavLink to='/' className='active:text-blue-400 hover:text-blue-700 px-4 flex items-center' onClick={toggleDropdown}>
                                 Students
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faAngleDown} className="ml-1 transition-transform duration-300 transform" style={{ transform: showDropdown ? 'rotate(360deg)' : 'rotate(270deg)' }} />
                            </NavLink>
                        </span>
                        {/* Dropdown menu */}
                        {showDropdown && (
                            <ul className="dropdown-menu pl-6 mt-2 text-gray-500 bg-white">
                                <li>
                                    <NavLink to='/studentlist' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Students List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/viewstudents' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Students View
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/addstudents' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Students Add
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/editstudents' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Students Edit
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faChalkboardUser} />
                            <NavLink to='/teachers' className='px-4'>
                                Teachers
                            </NavLink>
                        </span>
                    </li>
                    {/* Directors dropdown */}
                    <li className="relative">
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faChalkboardUser} />
                            <NavLink to='/' className='active:text-blue-400 hover:text-blue-700 px-4 flex items-center' onClick={toggleDropdown}>
                                Directors
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faAngleDown} className="ml-1 transition-transform duration-300 transform" style={{ transform: showDropdown ? 'rotate(360deg)' : 'rotate(270deg)' }} />
                            </NavLink>
                        </span>
                        {/* Dropdown menu */}
                        {showDropdown && (
                            <ul className="dropdown-menu pl-6 mt-2 text-gray-500 bg-white">
                                <li>
                                    <NavLink to='/directorList' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Director List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/directorView' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Director View
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/directorAdd' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Director Add
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/directorEdit' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Director Edit
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* Ending of Directors dropdown */}
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faBuilding} />
                            <NavLink to='/departments' className='px-4'>
                                Departments
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faBookOpenReader} />
                            <NavLink to='/subjects' className='px-4'>
                                Subjects
                            </NavLink>
                        </span>
                    </li>
                </ul>
                {/* main menu end */}
                {/* Management menu start */}
                <div className='py-5 pl-5 px-3 text-gray-500'>
                    Management
                </div>
                <ul className="sidebar-menu space-y-7 pl-6 text-gray-500">
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faFileInvoiceDollar} />
                            <NavLink to='/accounts' className='px-4'>
                                Accounts
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faHollyBerry} />
                            <NavLink to='/holiday' className='px-4'>
                                Holiday
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCommentDollar} />
                            <NavLink to='/fees' className='px-4'>
                                Fees
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faClipboardList} />
                            <NavLink to='/examlist' className='px-4'>
                                Exam list
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCalendarDay} />
                            <NavLink to='/events' className='px-4'>
                                Events
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faTable} />
                            <NavLink to='/timetable' className='px-4'>
                                Time table
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faBook} />
                            <NavLink to='/library' className='px-4'>
                                Library
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faNewspaper} />
                            <NavLink to='/blog' className='px-4'>
                                Blog
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faGear} />
                            <NavLink to='/settings' className='px-4'>
                                Settings
                            </NavLink>
                        </span>
                    </li>
                </ul>
                {/* Management menu end */}
            </aside>
        </>
    );
};

export default Sidebar;
