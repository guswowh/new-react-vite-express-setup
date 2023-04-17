const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

app.set('trust proxy', 1)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

process.env.PORT = 1500

app.use(`/api`, require('./router/app'))
app.use(`/api`, require('./router/upload'))
app.use(`/api`, require('./router/build'))

const hostname = '127.0.0.1'
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
})
