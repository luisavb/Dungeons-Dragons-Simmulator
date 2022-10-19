# Dungeons and Dragons Simulator 🧙‍♂️⚔️🐉
Consiste em uma estrutura de classes para criação de personagens em jogos de interpretação de papéis, conhecidos como RPG (Role Playing Game).

 - Construída com Typescript
 - Utilizando os princípios de POO e da Arquitetura SOLID

Nele, é possível criar personagens com a raça (anão, elfo, hobbit, orc ou dragão) e com os arquétipos (mago, necromante, guarda ou guerreiro), juntamente com as informações de nome, pontos de vida, tipo de energia, destreza e defesa, conforme descrito na representação abaixo:

```bash
 Character/Monster
   └─ Archetype
      ├─ Mage
      ├─ Necromancer
      ├─ Ranger
      └─ Warrior
   └─ Defense
   └─ Dexterity
   └─ Energy
   └─ LifePoints
   └─ MaxLifePoints
   └─ Name
   └─ Race
      ├─ Dragon
      ├─ Dwarf
      ├─ Elf
      ├─ Halfling
      └─ Orc
   └─ attack()
   └─ levelUp()
   └─ receiveDamage()
``` 
 
Com os personagens e monstros criados, podemos realizar batalhas de dois tipos: personagem contra personagem ou personagem contra vários inimigos ou contra múltiplos personagens rivais.

```bash
 Battle
   └─ PVE (player versus enemies)
   └─ PVP (player versus player)
``` 


## Instruções de Instalação
Para rodar o repositório localmente, realize o clone do projeto e utilize os comandos a seguir para inicializar o Docker e instalar as dependências:
```bash
docker-compose up -d
```
```bash
docker exec -it trybers_and_dragons bash
```
Para instalar as dependências:
```bash
npm install
```
Para parar completamente a aplicação:
```bash
docker-compose down
```

## Para jogar!
Após a instalação das dependências confira os arquivos na pasta ./src, nela consta as classes criadas para construção dos persongens. 
Crie um arquivo index.ts em ./src e construa personagens e realize batalhas.
O comando ```npm start``` executa esse script de código no terminal.
