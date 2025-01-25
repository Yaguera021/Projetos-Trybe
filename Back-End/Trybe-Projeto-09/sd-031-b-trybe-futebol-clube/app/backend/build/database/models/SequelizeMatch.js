"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const SequelizeTeam_1 = require("./SequelizeTeam");
class SequelizeMatch extends sequelize_1.Model {
}
exports.default = SequelizeMatch;
SequelizeMatch.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    homeTeamId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'home_team_id',
    },
    homeTeamGoals: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'home_team_goals',
    },
    awayTeamId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'away_team_id',
    },
    awayTeamGoals: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'away_team_goals',
    },
    inProgress: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        field: 'in_progress',
        defaultValue: true,
    },
}, {
    sequelize: _1.default,
    modelName: 'matches',
    timestamps: false,
    underscored: true,
});
SequelizeMatch.belongsTo(SequelizeTeam_1.default, {
    foreignKey: 'homeTeamId',
    as: 'homeTeam',
});
SequelizeMatch.belongsTo(SequelizeTeam_1.default, {
    foreignKey: 'awayTeamId',
    as: 'awayTeam',
});
SequelizeTeam_1.default.hasMany(SequelizeMatch, {
    foreignKey: 'homeTeamId',
});
SequelizeTeam_1.default.hasMany(SequelizeMatch, {
    foreignKey: 'awayTeamId',
});
//# sourceMappingURL=SequelizeMatch.js.map