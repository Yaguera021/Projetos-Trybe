"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('matches', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            homeTeamId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                field: 'home_team_id',
                references: {
                    model: 'teams',
                    key: 'id',
                }
            },
            homeTeamGoals: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'home_team_goals',
            },
            awayTeamId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                field: 'away_team_id',
                references: {
                    model: 'teams',
                    key: 'id',
                }
            },
            awayTeamGoals: {
                type: sequelize_1.DataTypes.INTEGER,
                field: 'away_team_goals',
            },
            inProgress: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                field: 'in_progress',
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('matches');
    },
};
//# sourceMappingURL=03-create-matchs.js.map