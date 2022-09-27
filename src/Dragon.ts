import Monster from './Monster';

class Dragon extends Monster {
  constructor(lifePoints?: number) {
    super();
    this._lifePoints = lifePoints || 999;
  }
}

export default Dragon;