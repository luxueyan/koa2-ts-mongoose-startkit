"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
router.get('/', async function (ctx, next) {
    ctx.state = {
        title: 'koa2 title'
    };
    await ctx.render('index', {});
});
router.get('/foo', async function (ctx, next) {
    await ctx.render('index', {
        title: 'koa2 foo'
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map