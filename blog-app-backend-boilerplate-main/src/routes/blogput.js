const router=require('express').Router();
const Blog=require('../models/Blog')



router.put('/blog/:id', async (req,res)=>{

    try{
        const users = await Blog.updateOne({_id: req.params.id},req.body);
        res.json({
            status:"success",
            users:users
        })

    }catch(e){
         res.status(500).json({
            status:'failed',
            message:e.message
         })
    }
});

module.exports=router;