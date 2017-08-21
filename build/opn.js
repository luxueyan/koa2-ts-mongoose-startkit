"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const opn = require("opn");
const parser = require("minimist");
const args = parser(process.argv.slice(2));
opn(args.host);
//# sourceMappingURL=opn.js.map