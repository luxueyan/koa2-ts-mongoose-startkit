"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("../src/app");
const env_config_1 = require("../config/env.config");
const Log4js = require("koa-log4");
const logger = Log4js.getLogger('main');
const port = normalizePort(env_config_1.default.listenPort || process.env.PORT || '3000');
const server = http.createServer(app_1.default.callback());
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            logger.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    logger.info('Listening on ' + bind);
}
//# sourceMappingURL=main.js.map