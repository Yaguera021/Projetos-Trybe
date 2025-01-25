"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
class JWT {
    static sign(payload) {
        return (0, jsonwebtoken_1.sign)({ ...payload }, this.secret, this.jwtConfig);
    }
    static verify(token) {
        try {
            return (0, jsonwebtoken_1.verify)(token, this.secret);
        }
        catch (error) {
            return 'Token must be a valid token';
        }
    }
}
exports.default = JWT;
JWT.secret = process.env.JWT_SECRET || '';
JWT.jwtConfig = {
    expiresIn: '10d',
    algorithm: 'HS256',
};
//# sourceMappingURL=JWT.js.map