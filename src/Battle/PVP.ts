import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected _player1: Fighter;
  protected _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  // -- source: https://www.devmedia.com.br/while-e-do-while-lacos-de-repeticoes-estrutura-da-linguagem-parte-1/18870
  fight(): number {
    // lutando até os dois perderem a vidaaaaaa
    while (this._player2.lifePoints > -1 && this._player1.lifePoints > -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
      // enquanto os dois players estiverem com vida, o while rodará o looping
    }
    return super.fight();
  }
}
export default PVP;
