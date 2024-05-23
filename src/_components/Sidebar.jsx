import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faGear,
  faNewspaper,
  faBook,
  faTable,
  faCalendarDay,
  faCommentDollar,
  faClipboardList,
  faChalkboardUser,
  faHollyBerry,
  faBuilding,
  faBookOpenReader,
  faTableCellsLarge,
  faFileInvoiceDollar,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);
  const [showDropdown5, setShowDropdown5] = useState(false);



  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <aside
        className={isOpen ? "sidebar open" : "sidebar"}
        style={{ height: "90vh" }}
      >
        {/* main menu start */}
        <div className="py-5 pl-5 px-3 text-gray-500">Main Menu</div>
        <ul className="sidebar-menu space-y-7 pl-6  text-gray-500">
          <li>
            <span>
              <FontAwesomeIcon icon={faTableCellsLarge} />
              <NavLink to="/dashboard" className=" px-4">
                Dashboards 
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faGraduationCap} />
              <NavLink to="/students" className="  px-4 ">
                Students
              </NavLink>
            </span>
          </li>
         
          {/* Teacher dropdown */}
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span
              className=" px-6 py-2 rounded-sm cursor-pointer"
              onClick={() => setShowDropdown1(!showDropdown1)}
            >
              Teacher
            </span>

            {showDropdown1 && (
              <ul className="space-y-5">
                <li className="mt-2">
                  <NavLink
                    to="/teacherlist"
                    className="space-y-5 mt-2 ml-2 px-8 py-2 rounded-md"
                  >
                    Teacher list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addteacher"
                    className="space-y-3 mt-2 ml-2 px-8 py-2 rounded-sm"
                  >
                    Add teacher
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/editeacher"
                    className="space-y-3 mt-2  ml-2 px-8 py-2 rounded-md"
                  >
                    Edit teacher
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/teacherview"
                    className="space-y-3 mt-2  ml-2 px-8 py-2 rounded-md"
                  >
                    Teacher View
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Classroom dropdown  */}
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span
              className=" px-6 py-2 rounded-sm cursor-pointer"
              onClick={() => setShowDropdown2(!showDropdown2)}
            >
              Classroom
            </span>

            {showDropdown2 && (
              <ul className="space-y-5">
                <li className="mt-2">
                  <NavLink
                    to="/classroomlist"
                    className="space-y-5 mt-2 ml-2 px-6 py-2 rounded-md"
                  >
                    Classroom list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addclassroom"
                    className="space-y-3 mt-2 ml-2 px-6 py-2 rounded-sm"
                  >
                    Add Classroom 
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/editclassroom"
                    className="space-y-3 mt-2  ml-2 px-6 py-2 rounded-md"
                  >
                    Edit Classroom 
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classroomview"
                    className="space-y-3 mt-2  ml-2 px-6 py-2 rounded-md"
                  >
                    Classroom View
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Classes dropdown  */}
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span
              className=" px-6 py-2 rounded-sm cursor-pointer"
              onClick={() => setShowDropdown3(!showDropdown3)}
            >
              Classes 
            </span>

            {showDropdown3 && (
              <ul className="space-y-5">
                <li className="mt-2">
                  <NavLink
                    to="/classlist"
                    className="space-y-5 mt-2 ml-2 px-6 py-2 rounded-md"
                  >
                    Class list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addclass"
                    className="space-y-3 mt-2 ml-2 px-6 py-2 rounded-sm"
                  >
                    Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/editclass"
                    className="space-y-3 mt-2  ml-2 px-6 py-2 rounded-md"
                  >
                    Edit Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classview"
                    className="space-y-3 mt-2  ml-2 px-6 py-2 rounded-md"
                  >
                    Class View
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Classroom table dropdown  */}
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span
              className=" px-6 py-2 rounded-sm cursor-pointer"
              onClick={() => setShowDropdown4(!showDropdown4)}
            >
              Classroom Table
            </span>

            {showDropdown4 && (
              <ul className="space-y-5">
                <li className="mt-2">
                  <NavLink
                    to="/classroomtablelist"
                    className="space-y-5 mt-2 ml-2 px-2 py-2 rounded-md"
                  >
                    Classroom Table List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addclassroomtable"
                    className="space-y-3 mt-2 ml-2 px-2 py-2 rounded-sm"
                  >
                    Add Classroom Table
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/editclassroomtable"
                    className="space-y-3 mt-2  ml-2 px-2 py-2 rounded-md"
                  >
                    Edit Classroom Table
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classroomtableview"
                    className="space-y-3 mt-2  ml-2 px-2 py-2 rounded-md"
                  >
                    Classroom Table View
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Periods dropdown  */}
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span
              className=" px-6 py-2 rounded-sm cursor-pointer"
              onClick={() => setShowDropdown5(!showDropdown5)}
            >
              Periods 
            </span>

            {showDropdown5 && (
              <ul className="space-y-5">
                <li className="mt-2">
                  <NavLink
                    to="/addperiod"
                    className="space-y-3 mt-2 ml-2 px-6 py-2 rounded-sm"
                  >
                    Add Period 
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    to="/periodlist"
                    className="space-y-5 mt-2 ml-2 px-6 py-2 rounded-md"
                  >
                    Period list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/editperiod"
                    className="space-y-3 mt-2  ml-2 px-6 py-2 rounded-md"
                  >
                    Edit Period 
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/periodview"
                    className="space-y-3 mt-2  ml-2 px-6 py-2 rounded-md"
                  >
                    Period View
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          {/* Directors dropdown */}

          <li className="relative">
            <span className="flex items-center">
              <FontAwesomeIcon icon={faChalkboardUser} />
              <NavLink
                to="/"
                className="active:text-blue-400 hover:text-blue-700  px-4 flex items-center"
                onClick={toggleDropdown}
              >
                Directors &nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="ml-1 transition-transform duration-300 transform"
                  style={{
                    transform: showDropdown
                      ? "rotate(360deg)"
                      : "rotate(270deg)",
                  }}
                />
              </NavLink>
            </span>
            {/* Dropdown menu */}
            {showDropdown && (
              <ul className="dropdown-menu pl-6 mt-2 text-gray-500 bg-white">
                <li>
                  <NavLink
                    to="/directorList"
                    className="pl-2 block py-1 rounded-md hover:text-white hover:bg-blue-600"
                    onClick={() => setShowDropdown(false)}
                  >
                    Director List
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/directorView"
                    className="pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600"
                    onClick={() => setShowDropdown(false)}
                  >
                    Director View
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/directorAdd"
                    className="pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600"
                    onClick={() => setShowDropdown(false)}
                  >
                    Director Add
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/directorEdit"
                    className="pl-2 block py-1 rounded-md  hover:text-white hover:bg-blue-600"
                    onClick={() => setShowDropdown(false)}
                  >
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
              <NavLink to="/departments" className=" px-4">
                Departments
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faBookOpenReader} />
              <NavLink to="/subjects" className=" px-4">
                Subjects
              </NavLink>
            </span>
          </li>
        </ul>
        {/* main menu end */}
        {/* Managment menu start */}
        <div className="py-5 pl-5 px-3 text-gray-500">Managment</div>
        <ul className="sidebar-menu space-y-7 pl-6  text-gray-500">
          <li>
            <span>
              <FontAwesomeIcon icon={faFileInvoiceDollar} />

              <NavLink to="/accounts" className=" px-4">
                Accounts
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faHollyBerry} />
              <NavLink to="/holiday" className="  px-4 ">
                Holiday
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCommentDollar} />
              <NavLink to="/fees" className="  px-4 ">
                Fees
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faClipboardList} />
              <NavLink to="/examlist" className=" px-4">
                Exam list
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              <NavLink to="/events" className=" px-4">
                Events
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faTable} />
              <NavLink to="/timetable" className=" px-4">
                Time table
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faBook} />
              <NavLink to="/library" className=" px-4">
                Library
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faNewspaper} />
              <NavLink to="/blog" className=" px-4">
                Blog
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faGear} />
              <NavLink to="/settings" className=" px-4">
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
