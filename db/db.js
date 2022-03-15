
require('dotenv').config()

const mongoose = require('mongoose')
const conn = async () => {
    try {
        await mongoose.connect(process.env.URI, { useNewUrlParser: true })
    } catch (err){
    console.log(err)
    }
}

conn()
