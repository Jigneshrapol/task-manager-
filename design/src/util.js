import { toast } from "react-hot-toast";

export const BASE_URL="https://task-manager-api-liart.vercel.app";
export const notifysuccess = (message,type)=>{
    toast.success(message,{duration:3000,position:'top-right'});
}
export const notifyerror = (message,type)=>{
    toast.error(message,{duration:3000,position:'top-right'});
}
