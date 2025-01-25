"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchsModel_1 = require("../models/MatchsModel");
class MatchService {
    constructor(matchModel = new MatchsModel_1.default()) {
        this.matchModel = matchModel;
    }
    async getMatches() {
        const allMatches = await this.matchModel.findAll();
        return { status: 'SUCCESSFUL', data: allMatches };
    }
    async getMatchesByProgress(inProgress) {
        const matchesInProgress = await this.matchModel.filterByProgress(inProgress);
        return { status: 'SUCCESSFUL', data: matchesInProgress };
    }
    async updateMatch(id, homeTeamGoals, awayTeamGoals) {
        await this.matchModel.update(id, homeTeamGoals, awayTeamGoals);
        return { status: 'SUCCESSFUL', data: null };
    }
}
exports.default = MatchService;
//# sourceMappingURL=MatchsService.js.map