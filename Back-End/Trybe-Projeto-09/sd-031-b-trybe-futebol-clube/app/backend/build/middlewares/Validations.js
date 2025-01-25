"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validations {
    static validateUser(req, res, next) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields must be filled' });
        }
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email) || password.length < 6) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        next();
    }
}
exports.default = Validations;
//# sourceMappingURL=Validations.js.map