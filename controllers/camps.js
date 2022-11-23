const db = require('../models');
const express = require('express');
const router = express.Router();

// All routes on this page are prefixed with "localhost:8000"

// NEW ROUTE: Will render a form that the user will use to create a new trail
router.get('/', (req, res) => {
    res.render('/showcamp/', {
        tabTitle: "Camp"
    })
})

// CREATE ROUTE
router.post('/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.Camp.create(req.body, (err, camps) => {
        res.redirect('/showcamp')
    })
})

//SHOW ROUTE
router.get('/:id', (req, res) => {
    db.Camp.findById(req.params.id, (err, camps) => {
        res.render("individualCamp", {
            camps: camps,
            tabTitle: "Camp: "
        })
    })
})

//Delete route
router.delete('/:id', (req, res) => {
    db.Camp.findByIdAndRemove(req.params.id, (err, camps) => {
        res.redirect('/showcamp/')
    })

})

//Edit route
router.get('/:id/edit', (req, res) => {
    db.Camp.findById(req.params.id, (err, camps) => {
        res.render("editcamp", {
            camps: camps
        })
    })
})


//Update route
router.put('/:id', (req, res) => {
    db.Camp.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, camps) => {
        res.redirect('/showcamp/')
    })
})




module.exports = router;