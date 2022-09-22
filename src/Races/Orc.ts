import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  protected static instancias = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity); // o que herda
    this._maxLifePoints = 74;
    Orc.instancias += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instancias;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
export default Orc;