const express=require('express')
const path=require('path')
const router=express.Router()
const rootDir=require('../helpers/helper') 

const productController=require('../controllers/products')

router.get('/add-product',productController.getAddProduct)

router.post('/add-product',productController.addNewProduct)

module.exports=router