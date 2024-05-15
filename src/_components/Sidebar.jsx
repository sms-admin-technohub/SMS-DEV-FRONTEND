import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faGear, faNewspaper, faBook, faTable, faCalendarDay, faCommentDollar, faClipboardList, faChalkboardUser, faHollyBerry, faBuilding, faBookOpenReader, faTableCellsLarge, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({isOpen}) => {
    return (
        <>
            <aside className={isOpen ? "sidebar open" : "sidebar close"} style={{height:"90vh"}} >
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
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faBuilding} />
                            <NavLink
                                to='/departments'
                                className=' px-4'
                            >
                                Departments
                            </NavLink>
                        </span>
                    </li>
                    <li>
                        <span>
                            <FontAwesomeIcon icon={faBookOpenReader} />
                            <NavLink
                                to='/subjects'
                                className=' px-4'
                            >
                                Subjects
                            </NavLink>
                        </span>
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
