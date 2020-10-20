const Sequelize = require('sequelize')

const env = process.argv[2]

const configMysql = env === 'dev' ? {
    username: 'root',
    password: 'daisong1234%',
    host: '127.0.0.1',
    port: 3306,
    database: 'data_capture'
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

