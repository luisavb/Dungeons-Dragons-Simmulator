import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  protected static instancias = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;