import { toast } from "react-hot-toast";

export const BASE_URL="http://localhost:8081";
export const notifysuccess = (message,type)=>{
    toast.success(message,{duration:3000,position:'top-right'});
}
export const notifyerror = (message,type)=>{
    toast.error(message,{duration:3000,position:'top-right'});
}