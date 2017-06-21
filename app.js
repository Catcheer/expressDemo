var express = require('express')
var bodyParser = require('body-parser');

console.log(express)

var path = require('path')
const app = express()
const viewIndex = require('./routes/index')
const viewUser = require('./routes/user')

app.use(express.static('public'))
// app.use(bodyParser.urlencoded()); 
app.use(bodyParser.json()); // for parsing application/json

app.set('views', path.join(__dirname, 'views'))
app.set('views engine', 'jade')



app.use('/index', viewIndex)
// app.use('/', viewIndex)
app.use('/user', viewUser)

// 错误处理中间件
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(4000, () => {
  console.log('listening in 4000')
})

