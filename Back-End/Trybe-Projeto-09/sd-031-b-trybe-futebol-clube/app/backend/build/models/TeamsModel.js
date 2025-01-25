"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeTeam_1 = require("../database/models/SequelizeTeam");
class TeamModel {
    constructor() {
        this.model = SequelizeTeam_1.default;
    }
    async findAll() {
        const teams = await this.model.findAll();
        return teams.map(({ id, teamName }) => ({ id, teamName }));
    }
    async findById(id) {
        const dbData = await this.model.findByPk(id);
        if (dbData === null)
            return null;
        const { teamName } = dbData;
        return { id, teamName };
    }
}
exports.default = TeamModel;
//# sourceMappingURL=TeamsModel.js.map