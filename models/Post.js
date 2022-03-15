const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: {type: String,
        unique: true
    },
    content: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model("Post", schema)
