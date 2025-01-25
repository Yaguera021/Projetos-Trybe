"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('teams', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            teamName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'team_name',
            },
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('teams');
    }
};
//# sourceMappingURL=01-create-teams.js.map