"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
class TeamController {
    constructor(teamService) {
        this.teamService = teamService;
    }
    async getTeams(_req, res) {
        const serviceResponse = await this.teamService.getTeams();
        res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async getTeamById(req, res) {
        const serviceResponse = await this.teamService.getTeamById(Number(req.params.id));
        res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = TeamController;
//# sourceMappingURL=TeamsController.js.map