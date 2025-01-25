"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JsonWebTokenAdapter_1 = require("../utils/jwt/JsonWebTokenAdapter");
const jwtService = new JsonWebTokenAdapter_1.default();
function TokenValidation(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth) {
        return res.status(401).json({ message: 'Token not found' });
    }
    const [, token] = auth.split(' ');
    if (!token) {
        return res.status(401).json({ message: 'Token must be a valid token' });
    }
    try {
        const decoded = jwtService.verify(token);
        res.locals.user = decoded;
        return next();
    }
    catch {
        return res.status(401).json({ message: 'Token must be a valid token' });
    }
}
exports.default = TokenValidation;
//# sourceMappingURL=TokenValidation.js.map