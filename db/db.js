
require('dotenv').config()

const mongoose = require('mongoose')
const conn = async () => {
    try {
        const db = await mongoose.connect(process.env.URI, { useNewUrlParser: true })
        console.log(db.connection.modelNames())
    } catch (err){

        console.log(err)
    }
}

conn()
