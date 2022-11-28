// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create trails schema
const trailSchema = new Schema(
    {
        name: { type: String, required: true },
        distance: { type: String, required: true },
        difficulty: { type: String },
        image: { type: String, default: "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png" },
        description: { type: String, required: true },
        location: { type: String, required: true }
    }
)

// Creates a Trail model using the trailSchema
const Trail = mongoose.model('Trail', trailSchema)

// Export the Trail model to index.js
module.exports = Trail


