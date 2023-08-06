const router = require('express').Router();
const path = require('path')
const apiKeyMiddleware = require('../middlewares/apiKey')


// to create a router level middleware(means middleware will be applied to every route in our system) we can write this ↓ and then we dont need to write the middleware in routes
// router.use(apiKeyMiddleware)

router.get("/",(req,res)=>{
    res.render('index',{
        title:"index page"

    })
})


router.get("/about",(req,res)=>{
    res.render('about',{
        title:"about page"
    })
})

router.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname+'../../concepts.txt'))
})

// router.get('/api/products',apiKeyMiddleware,(req,res)=>{
//     res.json([
//         {
//             id: '123',
//             name: 'Chrome'
//         },
//         {
//             id: '124',
//             name: 'Firefox'
//         }
//     ])
// })




module.exports=router