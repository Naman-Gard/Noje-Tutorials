const express=require('express')
const router=express.Router()

router.use((req,res,next)=>{
    res.render('404')
})

module.exports=router