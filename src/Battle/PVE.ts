import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  protected _character: Fighter | SimpleFighter;
  protected _monsters: SimpleFighter[];

  constructor(character: Fighter, monsters: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monsters = monsters;
  }

  // -- source: https://www.devmedia.com.br/while-e-do-while-lacos-de-repeticoes-estrutura-da-linguagem-parte-1/18870
  fight(): number {
    // podem ser vários monstros vs um player
    this._monsters.forEach((monster) => {
      while (this._character.lifePoints > -1 && monster.lifePoints > -1) {
        this._character.attack(monster);
        monster.attack(this._character);
      }
    });
    
    return super.fight();
  }
}
export default PVE;