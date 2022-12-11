const router = require('express').Router();
const Blog = require('../models/Blog')


router.post('/blog', async (req,res)=>{

    try{
       const users=await Blog.create(req.body)
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