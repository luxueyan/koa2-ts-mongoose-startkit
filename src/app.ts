import * as Koa from 'koa'
import * as views from 'koa-views'
import * as json from 'koa-json'
import * as onerror from 'koa-onerror'
import * as bodyparser from 'koa-bodyparser'
import * as logger from 'koa-logger'
import * as staticServer from 'koa-static'
import * as koaJwt from 'koa-jwt'
import * as Log4js from 'koa-log4'
import * as mongoose from 'mongoose'

import index from './routes/index'
import users from './routes/users'
import config from '../config/env.config'
import log4Config from '../log4js'

Log4js.configure(log4Config)
const logger4 = Log4js.getLogger('console')

logger4.info('---------Wellcome to kaitong pano----------')
logger4.info('                        _ooOoo_')
logger4.info('                       o8888888o')
logger4.info('                       88" . "88')
logger4.info('                       (| -_- |)')
logger4.info('                       O\  =  /O')
logger4.info('                    ____/`---\'\____')
logger4.info('                  .\'  \\|     |  `.')
logger4.info('                 /  \\|||  :  |||  \\')
logger4.info('                /  _||||| -:- |||||-  \\')
logger4.info('                |   | \\\  -  / |   |')
logger4.info('                | \_|  \'\'\---/\'\'  |   |')
logger4.info('                \  .-\__  `-`  ___/-. /')
logger4.info('              ___`. .\'  /--.--\  `. . __')
logger4.info('           ."" \'<  `.___\_<|>_/___.\'  >\'"".')
logger4.info('          | | :  `- \`.;`\ _ /`;.`/ - ` : | |')
logger4.info('          \  \ `-.   \_ __\ /__ _/   .-` /  /')
logger4.info('     ======`-.____`-.___\_____/___.-`____.-\'======')
logger4.info('                        `=---=\'')
logger4.info('    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
logger4.info('                  佛祖保佑       永无BUG')

const app = new Koa()

// error handler
onerror(app)

// connect mongo
mongoose.Promise = global.Promise;
const db = mongoose.createConnection(config.mongo.uri, config.mongo.options)
db.on('error', err => {
  const logger = Log4js.getLogger('error')
  logger.error('连接出错了：' + err)
})

db.on('open', () => logger4.info('成功连接数据库：' + config.mongo.uri))

// middlewares
app.use(bodyparser())
app.use(json())
app.use(logger())
app.use(staticServer(__dirname + '/public'))
  // app.use(koaJwt({ secret: config.jwtSecret }))

app.use(views(__dirname + '/views', {
  extension: 'jade'
}))

//http logs
app.use(Log4js.koaLogger(Log4js.getLogger('http'), { level: 'auto' }))

// logger
app.use(async(ctx, next) => {
  const start = +new Date()
  await next()
  const ms = +new Date() - start
  logger4.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

export default app
