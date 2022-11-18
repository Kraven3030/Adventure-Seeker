// Dependencies
const db = require('../models')
const express = require('express')
const router = express.Router()

// All routes on this page are prefixed with "localhost:8000/trail"

// NEW ROUTE: Will render a form that the user will use to create a new trail
router.get('/new', (req, res) => {
    res.render('index.ejs', {
        tabTitle: "Trail Creation"
    })
})






module.exports = router