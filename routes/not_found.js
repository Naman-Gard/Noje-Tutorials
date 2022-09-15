const express=require('express')
const router=express.Router()

router.use((req,res,next)=>{
    res.send(`<html>
    <head><title>404</title></head>
    <body>
    Page Not Found
    </body>
    </html>`)
    return res.end();
})

module.exports=router