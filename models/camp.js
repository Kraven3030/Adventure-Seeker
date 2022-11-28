const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creates Campsite schema
const campsiteSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        image: { type: String, default: "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png" }
    }
)

//create a Camp model using the campsiteSchema
const Camp = mongoose.model('Camp', campsiteSchema)

// Exports the Camp model to index.js
module.exports = Camp