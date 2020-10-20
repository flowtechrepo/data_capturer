const express = require('express')
const expressip = require('express-ip')
const bodyParser = require('body-parser')
const { Factory } = require('winston-simple-wrapper')
const APPLICATION_NODE_PORT = process.argv[2] === 'dev' ? '9099' : 80
const APPLICATION_NODE_HOST = '0.0.0.0'

const app = express()
const logger = new Factory()
const path = require('path')

app.use(expressip().getIpInfoMiddleware)
app.use(express.static('static'));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

function nocache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

app.use('/api/url', require('./routers/url'))

app.use('/', nocache, (req, res) => {
  logger.info('ready to serve html file')
  res.sendFile(path.join(__dirname, '/static/index.html'))
})




app.listen(APPLICATION_NODE_PORT, APPLICATION_NODE_HOST, (err) => {
  if (err) {
    logger.error(err, 'server not setup')
    return
  }
  logger.info(`server is listening on ${APPLICATION_NODE_HOST}:${APPLICATION_NODE_PORT}`)
})
