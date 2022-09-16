const products=[]

exports.getAddProduct=(req,res,next)=>{
    res.render('add-product')
}

exports.addNewProduct=(req,res,next)=>{
    // console.log(req.body.title)
    products.push({title:req.body.title})
    res.redirect('/')
}

exports.getProducts=(req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','shop.html'))
    res.render('shop',{prods:products})
}