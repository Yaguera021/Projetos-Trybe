"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsonWebTokenAdapter_1 = require("../utils/jwt/JsonWebTokenAdapter");
class LoginValidation {
    static validateLogin(req, res, next) {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ message: 'Token not found' });
        }
        const [, token] = authorization.split(' ');
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }
        try {
            const decoded = LoginValidation.jwt.verify(token);
            res.locals.user = decoded;
            return next();
        }
        catch (err) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
    }
}
exports.default = LoginValidation;
LoginValidation.jwt = new JsonWebTokenAdapter_1.default();
//# sourceMappingURL=LoginValidation.js.map