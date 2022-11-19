const db = require('./')

const seed_trails = [
    {
        name: "Slacker Hill",
        distance: "1.0mi",
        difficulty: "Moderate",
        image: "/assets/slackerhill.jpeg",
        description: "Generally considered a moderately challenging route, it takes an average of 38 min to complete. Slacker Hill is a very popular area for birding, hiking, and running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime.",
        location: "Golden Gate National Recreation Area"
    },
    {
        name: "Rodeo Lagoon",
        distance: "4.2mi loop",
        difficulty: "Moderate",
        image: "/assets/rodeolagoon.jpeg",
        description: "Generally considered a moderately challenging route, it takes an average of 1 h 40 min to complete. This is a popular trail for hiking, running, and walking, but you can still enjoy some solitude during quieter times of day.",
        location: "Marin Headlands"
    },
    {
        name: "Point Bonita Lighthouse",
        distance: "1.0mi",
        difficulty: "Easy",
        image: "/assets/pointbonitalighthouse.jpeg",
        description: "Generally considered an easy route, it takes an average of 25 min to complete. The trail is open year-round and is beautiful to visit anytime.",
        location: "Golden Gate National Recreation Area"
    },
    {
        name: "Rodeo Beach Coastal Trail",
        distance: "4.3mi loop",
        difficulty: "Hard",
        image: "/assets/rbtomuirbeach.jpeg",
        description: "Generally considered a challenging route, it takes an average of 2 h 47 min to complete. This is a popular trail for hiking and running, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime.",
        location: "Marin Headlands"
    },
    {
        name: "South Rodeo Beach",
        distance: "0.6mi",
        difficulty: "Easy",
        image: "/assets/southrodeobeach.jpeg",
        description: "Enjoy this 0.6-mile out-and-back trail near Sausalito, California. Generally considered an easy route, it takes an average of 16 min to complete. Youll see stunning views of the ocean some wildlife such as coyotes and exotic birds.",
        location: "Marin Headlands"
    }
]

const seed_campsites = [
    {
        name: "Finnon Lake Recreation Area",
        description: "The night skies above Finnon Lake will reveal stars unseen in most parts of California. Enjoy searching for bullfrogs, and watch the flock of Canadian Geese flies in right at sunset as the horizon blends into the watercolor sky. This lovely lake offers serenity in a beautifully unique setting, nestled deep into the forest. Enjoy the scenic and exhilarating drive to our hidden gem along the South Fork of the American River",
        location: "Placerville, California",
        image: "/assets/finnonlake.webp"
    },
    {
        name: "Heartwood Mendocino",
        description: "Just minutes from Mendocino's beaches, parks and sweet town, yet private and quiet as it is surrounded by 50,000 acre state forest with world class hiking and biking trails directly accessed from your campsite. Around the giant redwoods and meadows sprinkled in the most amazing little cabins and deluxe bath houses.",
        location: "Mendocino, California",
        image: "/assets/mendocino.webp"
    },
    {
        name: "Pine Grove Cobb  Resort",
        description: "The historic Pine Grove Cobb Resort offers a unique lodging and event location in the beautiful Northern California Mountains, 30 minutes from California’s wine country. Ideal for family reunions, group retreats and relaxing private getaways, we offer sleeping accommodations for up to 50 people and room for many more to gather and celebrate.",
        location: "Cobb, California",
        image: "/assets/pinegrove.webp"
    },
    {
        name: "Rockwater Cove",
        description: "If you’re looking for a quiet getaway with a few close friends or your family, this option is for you. Tucked in along the South Fork of the American River, this beautiful campsite features picnic benches, a propane fire pit with propane included, and a prep table for fixing up those tasty fireside meals.",
        location: "Lotus, California",
        image: "/assets/rockwater.webp"
    },
    {
        name: "Sierra Sol Camp",
        description: "Based between the middle fork of the Yuba river right where it meets up with Oregon Creek. This camp site is a great getaway from the hustle and bustle of the city world. Bring the family to make precious memories that will last a lifetime.",
        location: "Camptonville California",
        image: "/assets/sierrasol.webp"
    }
]

db.Trail.deleteMany({}, (err, trails) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all trails')

        db.Trail.insertMany(seed_trails, (err, trails) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', trails.length, "trails")
                process.exit()
            }
        })
    }
})

db.Camp.deleteMany({}, (err, camps) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all camps')

        db.Camp.insertMany(seed_campsites, (err, camps) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', camps.length, "camps")
            }
        })
    }
})

