import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  protected static instancias = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;