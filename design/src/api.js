import axios from 'axios';
import { BASE_URL } from './util';


const createtask =async(obj)=>{
    const url=`${BASE_URL}/tasks`
  try {
     const data = await axios.post(url,obj);
   return data;
   
    if(data){
console.log(data)
    }
    else{

    }
  } catch (error) {
    console.log(error)
  }
  
}
const fecthtask = async()=>{
   const url=`${BASE_URL}/tasks`;
   try{
    const data = await axios.get(url);
    console.log(data.data)
    return data.data;
   }catch(error){
    console.log(error)
   }
   
}

const removetask=async(id)=>{
    const url=`${BASE_URL}/tasks/${id}`;
    try{
     const data= await axios.delete(url);
     console.log(data.data)
     return data;
    }catch(error)
    {
      console.log(error)
    }
}
const updatetask=async(id,obj)=>{
    const url=`${BASE_URL}/tasks/${id}`;
    try {
        const data=await axios.put(url,obj)
        console.log(data.data)
        return data;
    } catch (error) {
        console.log(error)
    }
}
export {
    createtask,
    fecthtask,
    removetask,
    updatetask
} ;

