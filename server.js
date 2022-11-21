// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const express = require('express')
const app = express()
const port = 8000
const methodOverride = require('method-override');

// access models
const db = require('./models')

// access controllers
const trailsCtrl = require('./controllers/trails')
const campsCtrl = require('./controllers/camps')

// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+
// set folder for static files
app.use(express.static('public'))
// sets the view engine to EJS for our app 
app.set('view engine', 'ejs')
// method-override allows us to interpret POST requests from the browser as another request
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

// an example function that shows how middleware will be run every time a route is accessed
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// +-+-+-+-+-+-+
// |R|O|U|T|E|S|
// +-+-+-+-+-+-+
app.get('/', (req, res) => {
    db.Trail.find({}, (err, trails) => {
        db.Camp.find({}, (err, camps) => {
            res.render('index', {
                tabTitle: "Adventure Seeker"
            })
        })
    })
})

app.get('/showtrail', (req, res) => {
    db.Trail.find({}, (err, trails) => {
        res.render('showtrail', {
            trails: trails,
            tabTitle: "Trails"
        })
    })
})

app.get('/showcamp', (req, res) => {
    db.Camp.find({}, (err, camps) => {
        res.render('showcamp', {
            camps: camps,
            tabTitle: "Camps"
        })
    })
})




app.use('/trails', trailsCtrl)

app.use('/camps', campsCtrl)

// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+
// `app.listen()` binds and listens for the connections on the specified host and port
app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})