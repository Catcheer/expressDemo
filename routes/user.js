
var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('user.jade', { title: 'title', message: 'user' })
})


router.post('/', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'x-requested-with,content-type'
  })



  console.log('req body')
  console.log(req.body)


  const obj = {
    autho: 'Catcheer',
    discription: 'this is user discription'
  }
  res.json(obj)


})

module.exports = router