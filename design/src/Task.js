import React, { useContext, useEffect, useState } from "react";
import { FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa";
import { createtask, fecthtask, removetask, updatetask } from "./api";
import { notifyerror, notifysuccess } from "./util";
import { context } from "./contextapi";


const Task = () => {

  const {data,setdata,setupdatetask}=useContext(context);


  useEffect(() => {
    fetchdata();
  }, []);

const fetchdata = async () => {
    const data = await fecthtask();
    setdata(data.data);
  };
 
const remove = async (id)=>{
    try {
        const res =await removetask(id);
        console.log(res)
        fetchdata();
        notifyerror("Removed successfully")
    } catch (error) {
        
    }
   
}
const update = async ({_id,taskName,isDone})=>{
    try {
       const obj={
           taskName:taskName,
           isDone:!isDone
       }
       const data=await updatetask(_id,obj)
       fetchdata();
       notifysuccess("updated successfully")
    } catch (error) {
       console.log(error)
    }
  }
  return (
    <div className="mt-14 flex flex-col gap-3 items-center">
      {data.map((item,index) => {
        return (
          <div key={index} className="flex justify-between w-[45vw] border border-gray-400 rounded-md px-2 py-2">
            <div className={item.isDone?"line-through text-[18px] text-gray-800 py-1":"text-[18px] text-gray-800 py-1"}>
              {item.taskName}
            </div>
            <div className="flex gap-1">
              <button onClick={()=>update(item)} className=" border rounded-md px-3 bg-green-600 py-1">
                <FaCheck size={11} />
              </button>
              <button onClick={()=>setupdatetask(item)} className=" border rounded-md px-3 bg-blue-600 py-1">
                <FaPencilAlt size={11} />
              </button>
              <button onClick={()=>remove(item._id)} className=" border rounded-md px-3 bg-red-600 py-1">
                <FaTrash size={11} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Task;

