"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isProdEnv = process.env.NODE_ENV === 'production';
let listenPort = 3000;
let jwtSecret = 'kt-pano-jwt-secret';
let redis = {
    port: 6379,
    host: '127.0.0.1',
    db: 8
};
let mysql = {
    host: '127.0.0.1',
    database: 'nodeweb',
    user: 'root',
    password: '',
    protocol: 'mysql',
    port: '3306'
};
let mongo = {
    uri: 'mongodb://10.132.1.246:47017/compass_production',
    options: {
        promiseLibrary: global.Promise,
        db: {
            safe: true
        }
    }
};
if (isProdEnv) {
    listenPort = 3000;
    redis = {
        port: 6379,
        host: '127.0.0.1',
        db: 9
    };
    mysql = {
        host: '127.0.0.1',
        database: 'nodeweb',
        user: 'root',
        password: 'mysql123',
        protocol: 'mysql',
        port: '3306'
    };
}
exports.default = {
    listenPort,
    jwtSecret,
    redis,
    mysql,
    mongo
};
//# sourceMappingURL=env.config.js.map