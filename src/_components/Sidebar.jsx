import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGear, faNewspaper, faBook, faTable, faCalendarDay, faCommentDollar, faClipboardList, faChalkboardUser, faHollyBerry, faBuilding, faBookOpenReader, faTableCellsLarge, faFileInvoiceDollar, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    
    const toggleDropdown2 = () => {
        setShowDropdown2(!showDropdown2);
    };

    const toggleDropdown3 = () => {
        setShowDropdown3(!showDropdown3);
    };

    return (
        <>
            <aside className={isOpen ? "sidebar open" : "sidebar"} style={{height:"90vh"}} >
                {/* main menu start */}
                <div className='py-5 pl-5 px-3 text-gray-500'>          
                    Main Menu
                </div>
                <ul className="sidebar-menu space-y-7 pl-6  text-gray-500">
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faTableCellsLarge} />
                            <NavLink
                                to='/dashboard'
                                className=' px-4'
                            >
                                Dashboard
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <NavLink
                                to='/students'
                                className='  px-4 '
                            >
                                Students
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faChalkboardUser} />
                            <NavLink
                                to='/teachers'
                                className='  px-4 '
                            >
                                Teachers
                            </NavLink>          
                        </span>
                    </li>
                    {/* Directors dropdown */}

                    <li className="relative">
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faChalkboardUser} />
                            <NavLink
                                to='/directorList'
                                className='active:text-blue-400 hover:text-blue-700  px-4 flex items-center'
                                onClick={toggleDropdown}
                                
                            >
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
                                    <NavLink to='/directorView' className='pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Director View
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/directorAdd' className='pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Director Add
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/directorEdit' className='pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown(false)}>
                                        Director Edit
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Ending of Directors dropdown */}



                    {/* Department dropdown */}

                    <li className="relative">
                        <span className="flex items-center">
                            <FontAwesomeIcon icon={faChalkboardUser} />
                            <NavLink
                                to='/departmentList'
                                className='active:text-blue-400 hover:text-blue-700  px-4 flex items-center'
                                onClick={toggleDropdown2}
                                
                            >
                                Department
                                 &nbsp;&nbsp;&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faAngleDown} className="ml-1 transition-transform duration-300 transform" style={{ transform: showDropdown2 ? 'rotate(360deg)' : 'rotate(270deg)' }} />
                            </NavLink>
                        </span>
                        {/* Dropdown menu */}
                        {showDropdown2 && (
                            <ul className="dropdown-menu pl-6 mt-2 text-gray-500 bg-white">
                                <li>
                                    <NavLink to='/departmentList' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown2(false)}>
                                        Department List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/departmentView' className='pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown2(false)}>
                                        Department View
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/departmentAdd' className='pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown2(false)}>
                                        Department Add
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/departmentEdit' className='pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown2(false)}>
                                        Department Edit
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>


                    {/* Subject dropdown */}

                    <li className="relative">
                        <span className="flex items-center">
                        <FontAwesomeIcon icon={faBookOpenReader} />
                            <NavLink
                                to='/subjectList'
                                className='active:text-blue-400 hover:text-blue-700  px-4 flex items-center'
                                onClick={toggleDropdown3}
                                
                            >
                                Subject
                                 &nbsp;&nbsp;&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faAngleDown} className="ml-1 transition-transform duration-300 transform" style={{ transform: showDropdown3 ? 'rotate(360deg)' : 'rotate(270deg)' }} />
                            </NavLink>
                        </span>
                        {/* Dropdown menu */}
                        {showDropdown3 && (
                            <ul className="dropdown-menu pl-6 mt-2 text-gray-500 bg-white">
                                <li>
                                    <NavLink to='/subjectlist' className='pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown3(false)}>
                                        Subject List
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/subjectView' className='pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown3(false)}>
                                        Subject View
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/subjectAdd' className='pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown3(false)}>
                                        Subject Add
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/subjectEdit' className='pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600' onClick={() => setShowDropdown3(false)}>
                                        Subject Edit
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                   
                </ul>
                {/* main menu end */}
                  {/* Managment menu start */}
                  <div className='py-5 pl-5 px-3 text-gray-500'>
                    Managment
                </div>
                <ul className="sidebar-menu space-y-7 pl-6  text-gray-500">
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faFileInvoiceDollar} />


                            <NavLink
                                to='/accounts'
                                className=' px-4'
                            >
                                Accounts
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faHollyBerry} />
                            <NavLink
                                to='/holiday'
                                className='  px-4 '
                            >
                                Holiday
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCommentDollar} />
                            <NavLink
                                to='/fees'
                                className='  px-4 '
                            >
                                Fees
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faClipboardList} />
                            <NavLink
                                to='/examlist'
                                className=' px-4'
                            >
                                Exam list
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faCalendarDay} />
                            <NavLink
                                to='/events'
                                className=' px-4'
                            >
                                Events
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faTable} />
                            <NavLink
                                to='/timetable'
                                className=' px-4'
                            >
                                Time table
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faBook} />
                            <NavLink
                                to='/library'
                                className=' px-4'
                            >
                                Library
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faNewspaper} />
                            <NavLink
                                to='/blog'
                                className=' px-4'
                            >
                                Blog
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faGear} />
                            <NavLink
                                to='/settings'
                                className=' px-4'
                            >
                                Settings
                            </NavLink>
                        </span>
                    </li>
                </ul>
                {/* Managment menu end */}
            </aside>
        </>
    );
};

export default Sidebar;
