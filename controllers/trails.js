// Dependencies
const db = require('../models');
const express = require('express');
const router = express.Router();

// All routes on this page are prefixed with "localhost:8000"

// NEW ROUTE: Will render a form that the user will use to create a new trail
router.get('/', (req, res) => {
    res.render('/showtrail/', {
        tabTitle: "Trail"
    })
})

// CREATE ROUTE
router.post('/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.Trail.create(req.body, (err, trails) => {
        res.redirect('/showtrail')
    })
})

//SHOW ROUTE
router.get('/:id', (req, res) => {
    db.Trail.findById(req.params.id, (err, trails) => {
        res.render("showtrail", {
            trails: trails,
            tabTitle: trails.name
        })
    })
})

//Delete route
router.delete('/:id', (req, res) => {
    db.Trail.findByIdAndRemove(req.params.id, (err, trails) => {
        res.redirect('/showtrail/')
    })

})

//Update route
router.put('/', (req, res) => {
    db.Trail.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, trails) => {
        // res.send(entry)
        res.redirect('/showtrail/' + trails._id)
    })
    // res.send(req.params.id)
})

//Edit route
router.get('/:id/edit', (req, res) => {
    db.Trail.findById(req.params.id, (err, trails) => {
        res.render("edittrail", {
            trails: trails,
        })
    })
})


// router.put('/', (req, res) => {
//     db.Trail.findById(req.params.id, (err, trails) => {
//         db.Product.findByIdAndUpdate(req.params.id, { new: true }, (err, trails) => {
//             res.redirect('/showtrail/' + trails._id)
//         })
//     })
// })


module.exports = router;