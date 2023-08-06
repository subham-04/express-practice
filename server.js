const express = require('express')
const path = require('path')
const mainRouter = require('./routes/index')
const productRouter = require('./routes/products');
const ErrorHandler = require('./errors/ErrorHandler');
const PORT = process.env.PORT || 3000;
const app = express()



// app.set takes 2 parameters one is key (view engine) another is value (ejs)
app.set('view engine','ejs')

// The app. use() function is used to mount the specified middleware function(s) at the path which is being specified
app.use(express.json())
app.use(express.static('public'))
app.use(mainRouter)
app.use(productRouter)

// all these routes ↓ are defined in routes folder and here u can see the previous implementation

// app.get('/',(req,res)=>{
//     // render has 2 parameter 1st is the view name and the next is the data/object

//     res.render('index',{
//         title:"Home page"
//     });

// })

// app.get('/about',(req,res)=>{
//     res.render('about',{
//         title:"About page"
//     })
// })

// app.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname+'/concepts.txt'))
// })


// this is handling error ↓
app.use((req,res,next)=>{
    
    return res.json({message:'page not found'})
})

app.use((err,req,res,next)=>{

    if(err instanceof ErrorHandler){
        res.status(err.status).json({
            error:{
                message:err.message,
                status:err.status
            }
        })
    }else{
        res.status(500).json({
            error:{
                message:err.message,
                status:err.status
            }
        })
    }
    
})


app.listen(PORT,()=>{
    console.log('Listening on port ',PORT);
})