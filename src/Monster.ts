import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor(lifePoints?: number) {
    this._lifePoints = lifePoints || 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints >= this._lifePoints) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= attackPoints;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;