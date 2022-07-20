const connection = require('./db-config')
const express = require('express')
const app = express()

const port = process.env.DB_PORT || 5000

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack)
    } else {
        console.log(
            'connected to database with threadId :  ' + connection.threadId
        )
    }
})

app.use(express.json())

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})