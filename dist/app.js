"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("./users");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    console.log(users_1.users);
    res.end();
});
app.listen(5500, () => {
    console.log('Server has started');
    console.log('S3');
});
//# sourceMappingURL=app.js.map