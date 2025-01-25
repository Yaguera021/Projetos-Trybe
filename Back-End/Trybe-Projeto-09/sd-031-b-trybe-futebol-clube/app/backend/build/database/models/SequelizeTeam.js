"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class SequelizeTeam extends sequelize_1.Model {
}
exports.default = SequelizeTeam;
SequelizeTeam.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    teamName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'teams',
    timestamps: false,
    underscored: true,
});
//# sourceMappingURL=SequelizeTeam.js.map