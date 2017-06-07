"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const staticServer = require("koa-static");
const index_1 = require("./routes/index");
const users_1 = require("./routes/users");
const app = new Koa();
onerror(app);
app.use(bodyparser());
app.use(json());
app.use(logger());
app.use(staticServer(__dirname + '/public'));
app.use(views(__dirname + '/views', {
    extension: 'jade'
}));
app.use(async (ctx, next) => {
    const start = +new Date();
    await next();
    const ms = +new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(index_1.default.routes(), index_1.default.allowedMethods());
app.use(users_1.default.routes(), users_1.default.allowedMethods());
exports.default = app;
//# sourceMappingURL=app.js.map