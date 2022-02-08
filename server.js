const express = require('express')
const app = express()

const routes = require("./routes/routes")
require('./db/db')

const cors = require('cors')


require('dotenv').config()
const port = process.env.PORT || PORT

app.use(cors())

app.get('/', (req, res) => res.send(`<h1>Welcome!!! </h1>`))

app.use(express.json())
app.use("/api", routes)

app.listen(port, _ => console.log(` Server exterblished at ${port} `))
