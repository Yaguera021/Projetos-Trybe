"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TeamsModel_1 = require("../models/TeamsModel");
class TeamService {
    constructor(teamModel = new TeamsModel_1.default()) {
        this.teamModel = teamModel;
    }
    async getTeams() {
        const allTeams = await this.teamModel.findAll();
        return { status: 'SUCCESSFUL', data: allTeams };
    }
    async getTeamById(id) {
        const team = await this.teamModel.findById(id);
        if (!team) {
            return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };
        }
        return { status: 'SUCCESSFUL', data: team };
    }
}
exports.default = TeamService;
//# sourceMappingURL=TeamsService.js.map