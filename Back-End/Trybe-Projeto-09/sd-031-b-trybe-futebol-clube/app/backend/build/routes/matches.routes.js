"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MatchesController_1 = require("../controllers/MatchesController");
const matchController = new MatchesController_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => matchController.getMatches(req, res));
router.patch('/:id', (req, res) => matchController.updateMatch(req, res));
exports.default = router;
//# sourceMappingURL=matches.routes.js.map