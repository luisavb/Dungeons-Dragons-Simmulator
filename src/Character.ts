import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  // pra a interface parar de reclamar
  // private lifePoints: number;
  // strength: number;
  // defense: number;
  // energy?: Energy | undefined;
  
  constructor(name: string, race?: Race, archetype?: Archetype) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = race || new Elf(this._name, this._dexterity);
    this._archetype = archetype || new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };

    // pra a interface parar de reclamar
    // this.lifePoints = this._lifePoints;
    // this.strength = this._strength;
    // this.defense = this._defense;
    // this.energy = this._energy;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { 
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage <= 0) {
      return this._lifePoints;
    } 
    this._lifePoints -= damage;
    const life = this._lifePoints - damage;
    if (life <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    
    const levelUpLifePoints = this._maxLifePoints + getRandomInt(1, 10);

    if (levelUpLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = levelUpLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(): void {
    if (this._energy.amount > 5 && this._strength > 5) {
      this._defense = 13;
    }
  }
}

export default Character;
