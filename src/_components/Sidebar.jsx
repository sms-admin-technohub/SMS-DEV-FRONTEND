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
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen }) => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  return (
    <>
      <aside
        className={isOpen ? "sidebar open" : "sidebar close"}
        style={{ height: "90vh" }}
      >
        {/* main menu start */}
        <div className="py-5 pl-5 px-3 text-gray-500">Main Menu</div>
        <ul className="sidebar-menu space-y-7 pl-6  text-gray-500">
          <li>
            <span>
              <FontAwesomeIcon icon={faTableCellsLarge} />

              <NavLink to="/dashboard" className=" px-4">
                Dashboard
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

          {/* Class dropdown */}
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span
              className=" px-6 py-2 rounded-sm cursor-pointer"
              onClick={() => setShowDropdown2(!showDropdown2)}
            >
              Classes
            </span>

            {showDropdown2 && (
              <ul className="space-y-5">
                <li className="mt-2">
                  <NavLink
                    to="/classlist"
                    className="space-y-5 mt-2 ml-2 px-8 py-2 rounded-md"
                  >
                    Class list
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addclass"
                    className="space-y-3 mt-2 ml-2 px-8 py-2 rounded-sm"
                  >
                    Add class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/editclass"
                    className="space-y-3 mt-2  ml-2 px-8 py-2 rounded-md"
                  >
                    Edit class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classview"
                    className="space-y-3 mt-2  ml-2 px-8 py-2 rounded-md"
                  >
                    Class View
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

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
