// Dependencies
const db = require('../models');
const express = require('express');
const router = express.Router();

// All routes on this page are prefixed with "localhost:8000/trail"

// NEW ROUTE: Will render a form that the user will use to create a new trail
router.get('/showtrail', (req, res) => {
    res.render('showtrail', {
        tabTitle: "Trail Creation"
    })
})

// CREATE ROUTE
router.post('/showtrail/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.Trail.create(req.body, (err, trails) => {
        res.redirect('/showtrail/' + trails._id)
    })
})

//SHOW ROUTE
router.get('/showtrail:id', (req, res) => {
    db.Trail.findById(req.params.id, (err, trails) => {
        res.render("showtrail", {
            trails: trails,
            tabTitle: trails.name
        })
    })
})

//Delete route
router.delete('/showtrail:id', (req, res) => {
    db.Trail.findByIdAndRemove(req.params.id, (err, products) => {
        res.redirect('/showtrail/')
    })

})

//Update route
router.put('/showTrail.ejs:id', (req, res) => {
    db.Trail.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, products) => {
        // res.send(entry)
        res.redirect('/showtrail/' + products._id)
    })
    // res.send(req.params.id)
})

//Edit route
router.get('/:id/edit', (req, res) => {
    db.Trail.findById(req.params.id, (err, products) => {
        res.render("edittrail", {
            products: products,
            tabTitle: "Edit"
        })
    })
})


// router.put('/:id/buy', (req, res) => {
//     db.Trail.findById(req.params.id, (err, products) => {
//         db.Product.findByIdAndUpdate(req.params.id, { qty: products.qty - 1 }, { new: true }, (err, products) => {
//             res.redirect('/product/' + products._id)
//         })
//     })
// })





module.exports = router;