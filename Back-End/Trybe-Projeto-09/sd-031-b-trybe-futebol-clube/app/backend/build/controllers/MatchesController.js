"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchsService_1 = require("../services/MatchsService");
const mapStatusHTTP_1 = require("../utils/mapStatusHTTP");
class MatchController {
    constructor(matchService = new MatchsService_1.default()) {
        this.matchService = matchService;
    }
    async getMatches(_req, res) {
        const { inProgress } = _req.query;
        if (inProgress) {
            const serviceResponse = await this.matchService.getMatchesByProgress(inProgress === 'true');
            return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
        }
        const serviceResponse = await this.matchService.getMatches();
        return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async updateMatch(_req, res) {
        const { id } = _req.params;
        const { homeTeamGoals, awayTeamGoals } = _req.body;
        const serviceResponse = await this.matchService
            .updateMatch(Number(id), homeTeamGoals, awayTeamGoals);
        return res.status((0, mapStatusHTTP_1.default)(serviceResponse.status)).json({ message: 'Match updated' });
    }
}
exports.default = MatchController;
//# sourceMappingURL=MatchesController.js.map