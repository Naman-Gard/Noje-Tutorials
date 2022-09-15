const fs=require('fs')

const requestHandler=(req,res)=>{

    const url=req.url
    const method=req.method

    if(url==='/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text" required name="message"/><button>send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url==='/message' && method==="POST"){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk)
        })
    
        // let text=`{
        //     "key":"value"
        // }`
    
        return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            const message=parsedBody.split('=')[1]
            console.log(message)
            fs.writeFile('temp.txt',message,(err)=>{
                res.statusCode=302
                res.setHeader('Location','/')
                return res.end()
            })
        })
    }
}

exports.handler = requestHandler;