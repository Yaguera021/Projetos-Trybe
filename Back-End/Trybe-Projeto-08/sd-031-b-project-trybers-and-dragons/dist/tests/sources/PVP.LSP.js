"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("../../src/Battle");
const Character_1 = require("../../src/Character");
const fight = (battle) => battle.fight();
const result = () => {
    function newAttack(enemy) {
        enemy.receiveDamage(12);
    }
    jest.spyOn(Character_1.default.prototype, 'attack').mockImplementation(newAttack);
    const player1 = new Character_1.default('');
    // Aqui elevamos o nível de `player1` para o mínimo necessário para vencer, mas sem acabar em um round
    for (let i = 0; i < 10; i++)
        player1.levelUp();
    const player2 = new Character_1.default('');
    const pvp1 = new Battle_1.PVP(player1, player2);
    const player3 = new Character_1.default('');
    // Aqui elevamos o nível de `player3` para o mínimo necessário para vencer, mas sem acabar em um round
    for (let i = 0; i < 10; i++)
        player3.levelUp();
    const player4 = new Character_1.default('');
    const pvp2 = new Battle_1.PVP(player4, player3);
    jest.clearAllMocks();
    return [fight(pvp1), fight(pvp2)];
};
