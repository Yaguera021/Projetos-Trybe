import { EnergyType } from "../Energy";
import Archetype from "./Archetype";

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;


  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Warrior._archetypeInstances++;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeInstances;
  }
}