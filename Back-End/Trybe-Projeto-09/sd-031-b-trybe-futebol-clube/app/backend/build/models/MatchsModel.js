"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeTeam_1 = require("../database/models/SequelizeTeam");
const SequelizeMatch_1 = require("../database/models/SequelizeMatch");
class MatchModel {
    constructor() {
        this.model = SequelizeMatch_1.default;
    }
    async findAll() {
        const matches = await this.model.findAll({
            include: [
                { model: SequelizeTeam_1.default, as: 'homeTeam', attributes: ['teamName'] },
                { model: SequelizeTeam_1.default, as: 'awayTeam', attributes: ['teamName'] },
            ],
        });
        return matches;
    }
    async filterByProgress(status) {
        const progressMatches = await this.model.findAll({
            where: { inProgress: status },
            include: [
                { model: SequelizeTeam_1.default, as: 'homeTeam', attributes: ['teamName'] },
                { model: SequelizeTeam_1.default, as: 'awayTeam', attributes: ['teamName'] },
            ],
        });
        console.log(progressMatches);
        return progressMatches;
    }
    async update(id, homeTeamGoals, awayTeamGoals) {
        await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    }
}
exports.default = MatchModel;
//# sourceMappingURL=MatchsModel.js.map