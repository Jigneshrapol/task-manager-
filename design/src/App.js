import { useState } from "react";
import "./App.css";
import TaskManager from "./TaskManager";
import { context } from "./contextapi";
import { fecthtask } from "./api";

function App() {
  const [data,setdata]=useState([]);
  const [dupdata,setdupdata]=useState([]);
  const [updatetask,setupdatetask]=useState(null);

  const fetchdata=async()=>{
    try {
      const data=await fecthtask();
      setdata(data.data)
      setdupdata(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <context.Provider value={{data:data,setdata:setdata,fetch:fetchdata,updatetask:updatetask,setupdatetask:setupdatetask,setdupdata:setdupdata,dupdata:dupdata}} >
        <div className="App">
          <TaskManager />
        </div>
      </context.Provider>
    </>
  );
}

export default App;
