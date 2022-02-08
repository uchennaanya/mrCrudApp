const express = require('express')
const mongoose = require('mongoose')

const routes = require("./routes")

var cors = require('cors')


require('dotenv').config()
const port = process.env.PORT || PORT

const app = express()

app.get('/', (req, res) => res.send(`<h1>Welcome!!! </h1>`))

mongoose
.connect(process.env.URI, { useNewUrlParser: true })
.then(() => {

    app.use(cors())

    app.use(express.json())
    app.use("/api", routes)

})
.catch(error => console.log('error', error.message) )

app.listen(port, _ => console.log(` Server exterblished at ${port} `))
