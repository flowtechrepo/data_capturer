const Koa = require('koa')
const path = require('path')
const koaStatic = require('koa-static')

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 34567
const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = '../dist'

app.use(koaStatic(
  path.join(__dirname, staticPath)
))

app.use(async (ctx) => {
  ctx.body = 'hello world'
})

app.listen(port, host, () => {
  console.log(`starting at port ${port}`)
})
