// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create trails schema
const trailSchema = new Schema(
    {
        name: { type: String, required: true },
        time: { type: Number, required: true },
        distance: { type: Number, reuired: true },
        image: { type: String },
        description: { type: String, required: true },
        location: { type: String, required: true }
    }
)

// Creates a Trail model using the trailSchema
const Trail = mongoose.model('Trail', trailSchema)

// Export the Trail model to index.js
module.exports = Trail