const Sequelize = require('sequelize')

const env = process.argv[2]

const configMysql = env === 'dev' ? {
    username: 'flow',
    password: 'S7SYnPPqHUNUBqxk389K',
    host: 'data-capturer-dev.cmzd72ujizrl.ap-southeast-1.rds.amazonaws.com',
    port: 3306,
    database: 'd_capturer_dev'
} : {
    username: 'flow',
    password: 'daisong1234%',
    host: '178.128.62.35',
    port: 3306,
    database: 'data_capture'
}

const connection = new Sequelize(configMysql.database, configMysql.username, configMysql.password, {
    host: configMysql.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    }
})



const UrlMeta = require('./models/Url.js')
const UrlResultMeta = require('./models/UrlResult.js')


module.exports.Url = connection.define('urls', UrlMeta.attributes, UrlMeta.options)
module.exports.UrlResult = connection.define('url_result', UrlResultMeta.attributes, UrlResultMeta.options)

