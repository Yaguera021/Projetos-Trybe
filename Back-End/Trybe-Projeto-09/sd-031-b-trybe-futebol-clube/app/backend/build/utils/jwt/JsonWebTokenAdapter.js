"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
class JsonWebTokenAdapter {
    constructor() {
        this.jwt = jwt;
    }
    sign(payload) {
        return this.jwt.sign(payload, JsonWebTokenAdapter.secret, { expiresIn: '1d' });
    }
    verify(token) {
        return this.jwt.verify(token, JsonWebTokenAdapter.secret);
    }
}
exports.default = JsonWebTokenAdapter;
JsonWebTokenAdapter.secret = process.env.JWT_TOKEN || 'secret';
//# sourceMappingURL=JsonWebTokenAdapter.js.map