import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  protected static instancias = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity); // o que herda
    this._maxLifePoints = 60;
    Halfling.instancias += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instancias;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
export default Halfling;