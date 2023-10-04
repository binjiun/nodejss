console.log('start');

const cors = require('cors')
const express = require('express')
const app = express()
const path = require('path')
const reload = require('reload')
const http = require('http')
const fs = require('fs')
const bodyParser = require('body-parser')
const morgan  = require('morgan')

const port = 5053

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(cors());
const portal = require('./router/portal/portal.js')();
const expense = require('./router/portal/expense.js')();
const smart_ary = require('./router/portal/smart_ary.js')();
const material = require('./router/portal/material.js')();
const autocheck = require('./router/portal/autocheck.js')();
const gp_kpi = require('./router/portal/gp_kpi.js')();
const financial  = require('./router/portal/financial.js')();
const exam  = require('./router/portal/exam.js')();
const icenter  = require('./router/portal/icenter.js')();
const fee  = require('./router/portal/fee.js')();
app.use(fee);
app.use(icenter);
app.use(exam);
app.use(financial);
app.use(gp_kpi);
app.use(autocheck);
app.use(material);
app.use(smart_ary);
app.use(portal);
app.use(expense);
app.use('/portal',express.static(__dirname + '/router/portal/'))
app.set('port', port)
app.set('view engine', 'ejs')
app.set('views', './router') 
app.use(bodyParser.json()) 
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))


const server = http.createServer(app)
// Reload code here
reload(app).then(function (reloadReturned) {
  // reloadReturned is documented in the returns API in the README
  // Reload started, start web server
  server.listen(app.get('port'), function () {
    console.log('Web server listening on port ' + app.get('port'))
  })
}).catch(function (err) {
  console.error('Reload could not start, could not start server/sample app', err)
})


