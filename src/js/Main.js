import 'pixi';
import 'p2';
import Phaser from 'phaser';

import Settings from './Settings';

class Game extends Phaser.Game {
  constructor() {
    const documentElement = document.documentElement;
    const width = documentElement.clientWidth > Settings.gameWidth ? Settings.gameWidth : documentElement.clientWidth;
    const height = documentElement.clientHeight > Settings.gameHeight ? Settings.gameHeight : documentElement.clientHeight;

    // Create your Phaser game and inject it into the #game-container div.
    super(width, height, Phaser.CANVAS, 'game-container');

    // Add the States your game has.

    // Now start the Boot state.
  }
}

window.game = new Game();
