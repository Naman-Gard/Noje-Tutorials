// const http=require('http')
// const routes=require('./routes')
const express=require('express')
const bodyParser=require('body-parser')
const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const notFoundRoute=require('./routes/not_found')
const expressHbs=require('express-handlebars')
const app=express();


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))


/**********  handlebars  ************/
// app.engine('handlebars',expressHbs())
// app.set('view engine','handlebars')

/**********  pug  ************/
// app.set('view engine','pug')


app.set('view engine','ejs')


app.set('views','views')

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(notFoundRoute)

// app.use((req,res,next)=>{
//     res.send('Page Not Found')
// })

app.listen(5000)


/******  create server1  ********/
// const rqListener=(req,res)=>{
//     console.log(req);
// }
// const server=http.createServer(rqListener);

/******  create server2  ********/
// const server=http.createServer(routes.handler);

/******  create server3  ********/
// app.use((req,res,next)=>{
    //     console.log('In the middleware')
    //     res.send('Hii')
    // })
// const server=http.createServer(app);

// server.listen(5000);

