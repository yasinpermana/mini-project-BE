const express = require('express');
const indexRouter = require('./app/routes')
const merchantRouter = require('./app/route/merchantRoutes')
const productRouter = require('./app/route/productRoutes')
const app = express()
const port = 3306

app.use(express.json())
app.use('/', indexRouter)
app.use('/', merchantRouter)
app.use('/', productRouter)

app.listen(port, () => {
    console.log(`server running at port ${port}`)
})

