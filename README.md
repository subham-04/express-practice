⨀ static middleware
⨀ to use a middleware we use app.use(express.static('give the nameof the static folder here'))
⨀ template engine ejs
⨀ app.set takes 2 parameters one is key (view engine) another is value (ejs)
⨀ with the template engine we can dynamically change the data in ejs file where we can write html 
⨀ render has 2 parameter 1st is the view name and the next is the data/object
⨀ to display something in ejs we need to write it like this <%=  means after the <% we need to add a =
⨀ to render something in ejs we need to write it like this <%-  means after the <% we need to add a -
⨀ if we have too many routes in the server.js file then complexity will increase and hard to maintain thats why express provides "Express router"
⨀ middleware stays in the middle of request and response.. middleware is just a simple functions in js
⨀ The app.use() function is used to mount the specified middleware function(s) at the path which is being specified
⨀ we must need to add a next() in the middleware otherwise the system will hang
⨀ if we wish to pass multiple middleware then we can use array of middleware router.get('/api/products',[apiKeyMiddleware, apiMiddleware2, apiMiddleware3],(req,res)=>{})

⨀