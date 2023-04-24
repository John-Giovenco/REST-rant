const router = require('express').Router()

router.get('/new', (req, res) => {
  console.log(req.body)
  res.render('places/new')
})
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

module.exports = router











