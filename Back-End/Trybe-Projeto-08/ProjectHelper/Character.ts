import Archetype from './Archetypes/Archetype';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race from './Races'
import randomStats from './Utils/randomStats';
import Mage from './Archetypes/Mage';
import Elf from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;


  constructor(_name: string) {
    this._dexterity = randomStats(1, 10);
    this._race = new Elf(_name, this._dexterity);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randomStats(1, 10);
    this._defense = randomStats(1, 10);
    this._energy = { type_: 'mana', amount: randomStats(1, 10) };
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }

  get defense(): number { return this._defense; }

  get dexterity(): number { return this._dexterity; }

  get energy(): Energy {
    return { type_: this._energy.type_, amount: this._energy.amount };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    this._lifePoints = damage > 0 ? this._lifePoints - damage : this._lifePoints;
    this._lifePoints = this._lifePoints < 0 ? -1 : this._lifePoints;
    return damage;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += randomStats(1, 10);
    this._strength += randomStats(1, 10);
    this._defense += randomStats(1, 10);
    this._dexterity += randomStats(1, 10);
    this._energy.amount = 10;

    this._maxLifePoints > this._race.maxLifePoints ? this._race.maxLifePoints : this._maxLifePoints;

    this._lifePoints = this._maxLifePoints;
  }

  // special(): void {
  //   }
}