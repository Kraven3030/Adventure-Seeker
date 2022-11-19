// Dependencies
const db = require('../models');
const express = require('express');
const router = express.Router();

// All routes on this page are prefixed with "localhost:8000/trail"

// NEW ROUTE: Will render a form that the user will use to create a new trail
router.get('/showTrail', (req, res) => {
    res.render('showTrail', {
        tabTitle: "Trail Creation"
    })
})

// CREATE ROUTE
router.post('/showTrail', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visioted = false
    }
    db.Trail.create(req.body, (err, trails) => {
        res.redirect('/trail/' + trails._id)
    })
})

//SHOW ROUTE
router.get('/showTrail:id', (req, res) => {
    db.Trail.findById(req.params.id, (err, trails) => {
        res.render("showTrail", {
            trails: trails,
            tabTitle: trails.name
        })
    })
})






module.exports = router;