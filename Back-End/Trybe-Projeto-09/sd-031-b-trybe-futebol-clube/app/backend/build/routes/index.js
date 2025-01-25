"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teams_routes_1 = require("./teams.routes");
const login_routes_1 = require("./login.routes");
const matches_routes_1 = require("./matches.routes");
const router = (0, express_1.Router)();
router.use('/teams', teams_routes_1.default);
router.use('/login', login_routes_1.default);
router.use('/matches', matches_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map