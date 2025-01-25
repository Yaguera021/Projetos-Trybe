"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const Mage_1 = require("./Archetypes/Mage");
const Elf_1 = require("./Races/Elf");
class Character {
    constructor(_name) {
        this._dexterity = (0, utils_1.default)(1, 10);
        this._race = new Elf_1.default(_name, this._dexterity);
        this._archetype = new Mage_1.default(_name);
        this._maxLifePoints = this._race.maxLifePoints / 2;
        this._lifePoints = this._maxLifePoints;
        this._strength = (0, utils_1.default)(1, 10);
        this._defense = (0, utils_1.default)(1, 10);
        this._energy = { type_: 'mana', amount: (0, utils_1.default)(1, 10) };
    }
    get race() { return this._race; }
    get archetype() { return this._archetype; }
    get lifePoints() { return this._lifePoints; }
    get strength() { return this._strength; }
    get defense() { return this._defense; }
    get dexterity() { return this._dexterity; }
    get energy() {
        return { type_: this._energy.type_, amount: this._energy.amount };
    }
    // receiveDamage(attackPoints: number): number {
    //   const damage = attackPoints - this._defense;
    //   this._lifePoints = damage > 0
    //     ? this._lifePoints - damage : this._lifePoints;
    //   this._lifePoints = this._lifePoints < 0 ? -1 : this._lifePoints;
    //   return damage;
    // }
    receiveDamage(attackPoints) {
        const damage = attackPoints - this._defense;
        if (damage > 0) {
            this._lifePoints -= damage;
        }
        else {
            this._lifePoints -= 1;
        }
        if (this._lifePoints <= 0) {
            this._lifePoints = -1;
        }
        return this._lifePoints;
    }
    attack(enemy) {
        enemy.receiveDamage(this._strength);
    }
    levelUp() {
        this._maxLifePoints += (0, utils_1.default)(1, 10);
        this._strength += (0, utils_1.default)(1, 10);
        this._defense += (0, utils_1.default)(1, 10);
        this._dexterity += (0, utils_1.default)(1, 10);
        this._energy.amount = 10;
        // this._maxLifePoints > this._race.maxLifePoints ? this._race.maxLifePoints : this._maxLifePoints;
        if (this._maxLifePoints > this._race.maxLifePoints) {
            this._maxLifePoints = this._race.maxLifePoints;
        }
        this._lifePoints = this._maxLifePoints;
    }
}
exports.default = Character;
