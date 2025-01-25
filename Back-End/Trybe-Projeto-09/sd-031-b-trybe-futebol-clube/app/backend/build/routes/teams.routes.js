"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TeamsController_1 = require("../controllers/TeamsController");
const TeamsService_1 = require("../services/TeamsService");
const teamService = new TeamsService_1.default();
const teamController = new TeamsController_1.default(teamService);
const router = (0, express_1.Router)();
router.get('/', (req, res) => teamController.getTeams(req, res));
router.get('/:id', (req, res) => teamController.getTeamById(req, res));
exports.default = router;
//# sourceMappingURL=teams.routes.js.map