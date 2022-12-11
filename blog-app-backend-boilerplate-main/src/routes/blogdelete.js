const router=require('express').Router();
const Blog=require('../models/Blog');


router.delete('/blog/:id', async (req,res)=>{

    try{
       const users=await Blog.deleteOne({_id:req.params.id});
        res.json({
            status:"success",
            users
        })

    }catch(e){
         res.status(500).json({
            status:'failed',
            message:e.message
         })
    }
});

module.exports=router;