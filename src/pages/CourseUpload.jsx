import React from "react";


const CourseUpload = () => {
  return (
    <div className=" h-[100vh] justify-center  items-center  bgImg bg-no-repeat bg-cover text-white  ">
      <form
        method="post"
        className="grid grid-cols-2 gap-[2rem] grid-rows-5 place-content-center place-items-center "
      >
      
<div className=" flex flex-col gap-1 ">
<label htmlFor="" className=" text-[1.1rem] font-medium" >Course title</label>
        <input
          type="text"
          placeholder="Course title"
          className="w-[24rem] h-16 text-black  rounded-lg font-extralight border border-zinc-300 pl-5 bg-white "
        />
</div>
<div className=" flex flex-col gap-1 ">
<label htmlFor="" className=" text-[1.1rem] font-medium" >Course Description</label>
        <input
          type="text"
          placeholder="Course Description"
          className="w-[24rem] tracking-tight h-16 rounded-lg font-extralight border border-zinc-300  bg-white pl-5  "
        />

</div>

<div className=" flex flex-col gap-1 ">
<label htmlFor="" className=" text-[1.1rem] font-medium" >Course Duration</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Course Duration"
          className="w-[24rem] font-extralight h-16 rounded-lg border border-zinc-300  bg-white pl-5 "
        />

</div>
<div className=" flex flex-col gap-1 ">
<label htmlFor="" className=" text-[1.1rem] font-medium" >Learning Objectives</label>
        <input
          type="text"
          placeholder="Learnin Objectives"
          className="w-[24rem] h-16 rounded-lg font-extralight border border-zinc-300  bg-white  pl-5 "
        />
</div>

<div className=" flex flex-col gap-1 ">
       <label htmlFor="" className=" text-[1.1rem] font-medium" >Date Created</label>
        <input
          type="date"
          name=""
          id=""
          placeholder="DateCreated"
          className="w-[24rem] font-extralight h-16 rounded-lg border border-zinc-300 pl-5  bg-white  text-zinc-400 "
        />
</div>       

<div className="flex flex-col gap-1  ">
<label htmlFor="" className=" text-[1.1rem] font-medium" >Created By</label>
        <input
          type="text"
          placeholder="CreatedBy"
          className="w-[24rem] h-16 font-extralight rounded-lg border border-zinc-300  bg-white pl-5 "
        />
</div>

<div className="flex flex-col gap-1  ">
<label htmlFor="" className=" text-[1.1rem] font-medium" >Date Updated</label>
        <input
          type="date"
          name=""
          id=""
          placeholder="Date Updated"
          className="w-[24rem] font-extralight h-16 rounded-lg border border-zinc-300 pl-5  bg-white   "
        />
</div>

<div className="flex flex-col gap-1  ">
<label htmlFor="" className=" text-[1.1rem] font-medium" >Updated By</label>
        <input
          type="text"
          placeholder="Updated By"
          className="w-[24rem] font-extralight h-16 rounded-lg border border-zinc-300  bg-white pl-5 "
        />
        
</div>
<div className="flex flex-col gap-1   ">
       <label htmlFor="" className=" text-[1.1rem] font-medium" >Upload Course</label>
        <input
          type="file"
          src=""
          alt=""
          placeholder="Upload Course I"
          className=" rounded-lg border border-zinc-300 bg-white pl-5  "
        />
       </div>

       <button type="submit" className="  w-[24rem] h-16  rounded-lg  bg-black bg-opacity-50 hover:bg-[#5bbcb3]">Submit</button>

     
      </form>
    </div>
  );
};

export default CourseUpload;
