import React, { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  FaPlus,
  FaSearch
} from "react-icons/fa";
import { createtask } from "./api";
import { notifyerror, notifysuccess } from "./util";
import Task from "./Task";
import { context } from "./contextapi";
import axios from "axios";
import { BASE_URL } from "./util";

const TaskManager = () => {
  const [input, setinput] = useState("");
  const {fetch,updatetask,data,setdata}=useContext(context);

  const handletask=async()=>{
    if(updatetask && input)
    {
      const url=`${BASE_URL}/tasks/${updatetask._id}`;
      const obj={taskName:input,
      isDone:updatetask.isDone}
    try {
      console.log(updatetask)
        await axios.put(url,obj)
        await fetch();
        notifysuccess("Updated Successfully")
    } catch (error) {
        console.log(error)
    }
    }else if(updatetask===null && input)
    {
      try{
       handleaddtask();
      }catch(error){
        console.log(error)
      }
    }
    setinput('')
  }

 useEffect(()=>{
  if(updatetask){
    setinput(updatetask.taskName)
  }
  
 },[updatetask])
  
  const obj = {
    taskName: input,
    isDone: false,
  };

 const handleaddtask = async () => {
    try {
      const res = await createtask(obj);
      const message = res.data.message;
      const success = res.data.success;
      if (success) {
        notifysuccess(message, "success");
        await fetch();
      } else {
        notifyerror(message, "error");
      }
    } catch (error) {
      console.log(error);
      notifyerror("failed to create task", "error");
    }
  };
  const handlesearch=(e)=>{
    const term= e.target.value.toLowerCase();
    const copytask=[...data]
    const value= copytask.filter((item)=>item.taskName.toLowerCase().includes(term));
    if(term){
      setdata(value)
    }else if(term==="") {
      fetch();
    } 
    
  }
  
  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </div>

      <div className="flex flex-col justify-center items-center w-[100vw] pt-7">
        <div>
          <h1 className="text-[45px] font-semibold">Task Manager App</h1>
        </div>
        <div className="flex justify-around h-10 w-[45vw] gap-4 pt-6">
          <div className=" w-auto flex h-10">
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              placeholder="Add Task Name"
              className="  px-1 w-[18vw] py-1 rounded-l-md outline-none border text-gray-800 border-gray-400  text-black"
            />
            <button
              className=" border-gray-400 rounded-r-md bg-green-600 p-[10px] px-5  "
              onClick={() => handletask()}
            >
              <FaPlus size={13} />
            </button>
          </div>
          <div className="h-10 flex w-auto">
            <button  className="ml-1 border border-gray-400 rounded-l-md bg-slate-100 p-[10px] px-5 ">
              <FaSearch size={13} />
            </button>
            <input onChange={handlesearch}
              type="text"
              placeholder="Add Task Name"
              className="px-1 w-[18vw] py-1 rounded-r-md outline-none border text-gray-800 border-gray-400  text-black"
            />
          </div>
        </div>
        <Task />
      </div>
    </div>
  );
};

export default TaskManager;
