import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Neuromancer extends Archetype {
  private _energyType: EnergyType;
  protected static instancias = 0;

  constructor(name:string) {
    super(name); // só se colocar no super o que esta nos parametros do construtorpai
    this._energyType = 'mana';
    Neuromancer.instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Neuromancer.instancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Neuromancer;