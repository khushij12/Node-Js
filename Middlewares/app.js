const e = require('express')
const express = require('express')
const app = express()

//order does matter here we should use middleware before defining http requests
app.use(loggingMiddleware)

app.get('/', (req, res) => {
  res.send('Home Page')
})


//1
function loggingMiddleware(req, res, next) {
//   console.log('Inside Middleware')
    console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
    next()
}

//2
function authMiddleware(req, res, next) {
    //   console.log('Inside Middleware')
        // console.log("Authorization Middleware")

        if(req.query.admin == 'true'){
            req.admin=true
            next()
        }else{
            res.send("You are not admin");
        }
    }


app.get('/users', authMiddleware,(req, res) => {
    console.log(req.admin)
    res.send('Users Page')
    })

// app.get('/', middlewareTwo, middlewareFour, (req, res) => {
//     console.log('Inside Home Page')
//     res.send('Home Page')
// })


app.listen(3000, () => console.log('Server Started'))

