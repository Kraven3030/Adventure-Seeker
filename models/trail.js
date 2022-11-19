// Dependencies
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create trails schema
const trailSchema = new Schema(
    {
        name: { type: String, required: true },
        distance: { type: String, reuired: true },
        difficulty: { type: String, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true }
    }
)

// Creates a Trail model using the trailSchema
const Trail = mongoose.model('Trail', trailSchema)

// Export the Trail model to index.js
module.exports = Trail