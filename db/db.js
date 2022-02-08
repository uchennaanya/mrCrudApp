
require('dotenv').config()

const mongoose = require('mongoose')

const db = mongoose
.connect(process.env.URI, { useNewUrlParser: true })
.then(() => {

    console.log("Success")

})
.catch(error => console.log('error', error.message) )

module.exports = db
