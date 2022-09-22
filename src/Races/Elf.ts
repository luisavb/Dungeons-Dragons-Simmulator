import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  protected static instancias = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity); // o que herda
    this._maxLifePoints = 99;
    Elf.instancias += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instancias;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
export default Elf;