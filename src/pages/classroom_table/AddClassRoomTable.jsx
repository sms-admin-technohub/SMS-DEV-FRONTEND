import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddClassRoomTable = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    console.log(file);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="container bg bg-gray-100 h-screen w-full overflow-hidden">
      <div className="flex justify-between">
        <h1 className="pl-8  pt-4 font-semibold text-2xl">
          {" "}
          Add Classroom Tables
        </h1>
        <div className="flex">
          <h1 className="pr-2 pt-4 font-semibold text-md">Classroom Table</h1>
          <h1 className="flex justify-end mt-4  pr-6 font-semibold text-md">
            /Add Classroom Tables
          </h1>
        </div>
      </div>

      <div className="form bg-white mt-8  mx-6 rounded-lg">
        <div className="text text-start pl-3 pt-4 font-semibold text-xl">
          <h1>Classroom Information</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-full mt-5 mx-4 "
        >
          <div className="mb-4  ">
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 focus:out  ">
                  Classroom Name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  placeholder="Enter Classroom Name"
                  className="  focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Classroom Type{" "}
                </label>
                <input
                  {...register("middleName", { required: true })}
                  type="text"
                  placeholder="Enter Classroom Type"
                  className=" focus:border-blue-500 shadow appearance-none border rounded w-full   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.middleName && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex justify-start mb-4 pb-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClassRoomTable;
