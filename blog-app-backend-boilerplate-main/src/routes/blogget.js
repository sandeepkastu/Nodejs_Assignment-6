const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog',async(req,res)=>{

    try{
        //const {page=1,pagesize=5, /* search */ }=req.query;
        console.log(req.query);
        const users=await Blog.find( /* {topic:search} */ )//.skip((page-1)*pagesize).limit(Number(pagesize));
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


    //res.json({ok:'blog'})
})


module.exports = router;