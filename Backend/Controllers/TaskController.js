const TaskModel = require("../Models/Taskmodel");



const createtask=async(req,res)=>{
    const data=req.body;
    
    try {
        console.log(data)
        const model=new TaskModel(data);
        await model.save();
        res.status(201).json({message:"task is created",success:true})
    } catch (error) {
        res.status(500).json({message:"Failed to create task",success:false});
        console.log(error)
        
    }
}
const fetchalltask=async(req,res)=>{
   
    
    try {
        
        const data=await TaskModel.find({});
        res.status(200).json({message:"All tasks",success:true,data})
    } catch (error) {
        res.status(500).json({message:"Failed to Read tasks",success:false});
        console.log(error)
        
    }
}
const UpadteById=async(req,res)=>{
   
    
    try {
        const id=req.params.id;
        const body=req.body;
        const obj={$set:{...body}};
        await TaskModel.findByIdAndUpdate(id,obj);
        
        res.status(200).json({message:"updated task",success:true})
    } catch (error) {
        res.status(500).json({message:"Failed to update tasks",success:false});
        console.log(error)
        
    }
}
const DeleteById=async(req,res)=>{
   
    
    try {
        const id=req.params.id;
        await TaskModel.findByIdAndDelete(id);
        
        res.status(200).json({message:"deleted task",success:true})
    } catch (error) {
        res.status(500).json({message:"Failed to delete tasks",success:false});
        console.log(error)
        
    }
}

module.exports={
    createtask,
    fetchalltask,
    UpadteById,
    DeleteById
}