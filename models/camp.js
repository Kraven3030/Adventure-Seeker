const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Creates Campsite schema
const campsiteSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        image: { type: String, default: "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available-570x570.jpg" }
    }
)

//create a Camp model using the campsiteSchema
const Camp = mongoose.model('Camp', campsiteSchema)

// Exports the Camp model to index.js
module.exports = Camp