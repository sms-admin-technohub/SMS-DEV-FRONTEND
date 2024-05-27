import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddTerm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container bg bg-gray-100 h-screen w-full overflow-hidden">
      <div className="flex justify-between">
        <h1 className="pl-8  pt-4 font-semibold text-2xl"> Add Term</h1>
        <div className="flex">
          <h1 className="pr-2 pt-4 font-semibold text-md">Term</h1>
          <h1 className="flex justify-end mt-4  pr-6 font-semibold text-md">
            /Add Terms
          </h1>
        </div>
      </div>

      <div className="form bg-white mt-8  mx-6 rounded-lg">
        <div className="text text-start pl-3 pt-4 font-semibold text-xl">
          <h1>Term Information</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-full mt-5 mx-4 "
        >
          <div className="mb-4  ">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 focus:out  ">
                  Term Year
                </label>
                <input
                  {...register("year_id", { required: true })}
                  type="number"
                  placeholder="Enter Term Year"
                  className="  focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.year_id && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Term Number
                </label>
                <input
                  {...register("term_number", { required: true })}
                  type="number"
                  placeholder="Enter Term Number"
                  className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.term_number && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 focus:out  ">
                  Term Start Date
                </label>
                <input
                  {...register("start_date", { required: true })}
                  type="date"
                  placeholder="Enter Term Start Date"
                  className="  focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.start_date && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 focus:out  ">
                  Term End Date
                </label>
                <input
                  {...register("end_date", { required: true })}
                  type="date"
                  placeholder="Enter Term Start Date"
                  className="  focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.end_date && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div
                className="relative inline-block text-left"
                ref={dropdownRef}
              >
                <label className="block text-sm font-bold mb-2 text-center">
                  Term ID
                </label>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    onClick={toggleDropdown}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    Types
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {isOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                      >
                        Option 1
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        Option 2
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        Option 3
                      </a>
                      <form method="POST" action="#" role="none">
                        <button
                          type="submit"
                          className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-3"
                        >
                          Option 4
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-start mb-4 pb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTerm;
