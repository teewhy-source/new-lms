import React from "react";

const CourseUpload = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl text-[#08538C] font-semibold text-center mb-6">
          Upload a New Course
        </h2>
        <form className="grid grid-cols-1 text-[#08538C] md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="courseTitle"
             className="text-lg text-[#08538C] border-[#08538C] font-medium">
              Course Title
            </label>
            <input
              type="text"
              id="courseTitle"
              className="w-[20rem] h-[3rem] text-[#08538C] border-[#08538C] border-[5px] rounded-[2rem]"
              placeholder="Enter Course Title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="courseDescription" 
            className="text-lg text-[#08538C] font-medium">
              Course Description
            </label>
            <input
              type="text"
              id="courseDescription"
              className="w-[20rem] text-[#08538C] h-[3rem] border-[#08538C] border-[5px] rounded-[2rem]"
              placeholder="Enter Course Description"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="courseDuration" className="text-lg border-[#08538C] text-[#08538C] font-medium">
              Course Duration
            </label>
            <input
              type="text"
              id="courseDuration"
              className="w-[20rem] text-[#08538C] h-[3rem] border-[#08538C] border-[5px] rounded-[2rem]"
              placeholder="Enter Course Duration"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="learningObjectives" className="text-lg text-[#08538C] font-medium">
              Learning Objectives
            </label>
            <input
              type="text"
              id="learningObjectives"
              className="w-[20rem] text-[#08538C] h-[3rem] border-[#08538C] border-[5px] rounded-[2rem]"
              placeholder="Enter Learning Objectives"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dateCreated" className="text-lg text-[#08538C] font-medium">
              Date Created
            </label>
            <input
              type="date"
              id="dateCreated"
              className="w-[20rem] h-[3rem] text-[#08538C] border-[#08538C] border-[5px] rounded-[2rem]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="createdBy" className="text-lg text-[#08538C] font-medium">
              Created By
            </label>
            <input
              type="text"
              id="createdBy"
              className="w-[20rem] h-[3rem] text-[#08538C] border-[#08538C] border-[5px] rounded-[2rem]"
              placeholder="Enter Creator's Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dateUpdated" className="text-lg text-[#08538C] font-medium">
              Date Updated
            </label>
            <input
              type="date"
              id="dateUpdated"
              className="w-[20rem] h-[3rem] border-[5px] border-[#08538C] text-[#08538C] rounded-[2rem]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="updatedBy" className="text-lg text-[#08538C] font-medium">
              Updated By
            </label>
            <input
              type="text"
              id="updatedBy"
              className="w-[20rem] h-[3rem] border-[5px] border-[#08538C] text-[#08538C] rounded-[2rem]"
              placeholder="Enter Updater's Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="courseFile" className="text-lg text-[#08538C] font-medium">
              Upload Course
            </label>
            <input
              type="file"
              id="courseFile"
              className="w-[20rem] h-[3rem] border-[5px] border-[#08538C] text-[#08538C] rounded-[2rem]"
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseUpload;
