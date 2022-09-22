import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  protected static instancias = 0;

  constructor(name:string) {
    super(name); // só se colocar no super o que esta nos parametros do construtorpai
    this._energyType = 'mana';
    Necromancer.instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;