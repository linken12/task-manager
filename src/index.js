const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app =  express()

const port = process.env.PORT || 3000

// stop working site or any req
app.use((req, res, next) => {
    res.status(503).send('Site is under mantainance')
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('listing on port' + port)
})


// /Users/LENOVO/mongodb/bin/mongod.exe --dbpath=/Users/LENOVO/mongodb-data