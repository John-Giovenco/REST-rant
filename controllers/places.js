const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        id:0,
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Restaurant_one.jpg'
      }, {
        id:1,
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Restaurant_two.jpg'
      }]      
    res.render('places/index', {places})
})

module.exports = router











