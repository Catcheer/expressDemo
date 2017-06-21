var express = require('express')

var router = express.Router()

var UserInfo = require('../Process/userInfo')

router.get('/', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'x-requested-with,content-type'
  })

  const url = req.url
  // let User = UserInfo.getUserInfo(url)
  // let obj = {
  //   'name': User.name,
  //   'age': User.age

  // }
  res.render('index.jade', { title: 'index' })
})


router.post('/', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'x-requested-with,content-type'
  })



  console.log('req body')
  console.log(req.body)
  console.log(res.json(req.body))
  return req.body

})



module.exports = router