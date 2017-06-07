//Web Environment
const isProdEnv: boolean = process.env.NODE_ENV === 'production'

//Development Env Config
//listen port
let listenPort: Number = 3000

let jwtSecret: String = 'kt-pano-jwt-secret'

//Redis Config
let redis = {
  port: 6379,
  host: '127.0.0.1',
  db: 8
}

//Mysql Config
let mysql = {
  host: '127.0.0.1',
  database: 'nodeweb',
  user: 'root',
  password: '',
  protocol: 'mysql',
  port: '3306'
}

// mongoose config
let mongo = {
  uri: 'mongodb://10.132.1.246:47017/compass_production',
  options: {
    promiseLibrary: global.Promise,
    db: {
      safe: true
    }
  }
}

//Production Env Config
if (isProdEnv) {
  //listen port
  listenPort = 3000

  //redis config
  redis = {
    port: 6379,
    host: '127.0.0.1',
    db: 9
  }

  //mysql config
  mysql = {
    host: '127.0.0.1',
    database: 'nodeweb',
    user: 'root',
    password: 'mysql123',
    protocol: 'mysql',
    port: '3306'
  }
}

export default {
  listenPort,
  jwtSecret,
  redis,
  mysql,
  mongo
}
