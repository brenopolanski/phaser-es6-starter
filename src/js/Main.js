import 'pixi';
import 'p2';
import Phaser from 'phaser';
import Stats from 'stats.js';
import '../css/game.css';

import Properties from './Properties';
import BootState from './states/BootState';
import PreloaderState from './states/PreloaderState';
import MainMenuState from './states/MainMenuState';
import GameState from './states/GameState';

// The Phaser.Game object is the main controller for the entire Phaser game.
class Game extends Phaser.Game {
  constructor() {
    const { gameWidth, gameHeight } = Properties;

    // Create your Phaser game and inject it into the `#game-container` div.
    super(gameWidth, gameHeight, Phaser.CANVAS, 'game-container');

    // Add the States your game has.
    this.state.add('BootState', BootState);
    this.state.add('PreloaderState', PreloaderState);
    this.state.add('MainMenuState', MainMenuState);
    this.state.add('GameState', GameState);

    // Now start the Boot state.
    this.state.start('BootState');

    // Handle debug mode.
    if (__DEV__) {
      this.setupStats();
    }
  }

  setupStats() {
    // Setup the new stats panel.
    const stats = new Stats();

    document.body.appendChild(stats.dom);

    // Monkey-patch the update loop so we can track the timing.
    const updateLoop = this.update;

    this.update = (...args) => {
      stats.begin();
      updateLoop.apply(this, args);
      stats.end();
    };
  }
}

window.game = new Game();
