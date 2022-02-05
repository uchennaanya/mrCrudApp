const express = require('express')
const mongoose = require('mongoose')

const routes = require("./routes")

require('dotenv').config()
const port = process.env.PORT || PORT

const app = express()

app.get('/', (req, res) => res.send(`<h1>Welcome!!! </h1>`))

mongoose
.connect(process.env.URI, { useNewUrlParser: true })
.then(() => {
    app.use(express.json())
    app.use("/api", routes)
})

app.listen(port, _ => console.log(` Server exterblished at ${port} `))
