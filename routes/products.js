const router = require('express').Router()
const ErrorHandler = require('../errors/ErrorHandler')
const apiKey = require('../middlewares/apiKey')
let products = require('../productsData')


router.get('/products',(req,res)=>{
    res.render('products',{
        title: "products page"
    })
})

router.get('/api/products',(req,res)=>{
    res.json(products)
})

router.post('/api/products',apiKey,(req,res,next)=>{


    
    const {name, price} = req.body
    
    if(!name || !price){
        next(ErrorHandler.validationError('Name and Price fields are reuired'))
        // return res.status(422).json({error: 'All fields are required'})
        // throw new Error('All  fields are needed')
    }
    
    const product = {
        name,
        price,
        id: new Date().getTime().toString()
    }

    products.push(product)
    
    res.json(product)
})

router.delete('/api/products/:productId',(req,res)=>{
    products = products.filter((product) => req.params.productId !== product.id)
    res.json(products)
})


module.exports=router;