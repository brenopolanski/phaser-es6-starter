import 'pixi';
import 'p2';
import Phaser from 'phaser';
import '../css/game.css';

import Properties from './Properties';
import BootState from './states/BootState';
import PreloaderState from './states/PreloaderState';
import MainMenuState from './states/MainMenuState';
import GameState from './states/GameState';

class Game extends Phaser.Game {
  constructor() {
    const {
      gameWidth,
      gameHeight,
      showStats
    } = Properties;

    // Create your Phaser game and inject it into the `#game-container` div.
    super(gameWidth, gameHeight, Phaser.CANVAS, 'game-container');

    // Add the States your game has.
    this.state.add('BootState', BootState);
    this.state.add('PreloaderState', PreloaderState);
    this.state.add('MainMenuState', MainMenuState);
    this.state.add('GameState', GameState);

    // Now start the Boot state.
    this.state.start('BootState');
  }
}

window.game = new Game();
