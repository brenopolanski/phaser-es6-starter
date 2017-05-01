import 'pixi';
import 'p2';
import Phaser from 'phaser';
import '../css/game.css';

import BootState from './states/BootState';
import SplashState from './states/SplashState';
import PreloaderState from './states/PreloaderState';
import MainMenuState from './states/MainMenuState';
import GameState from './states/GameState';

import Settings from './Settings';

class Game extends Phaser.Game {
  constructor() {
    const documentElement = document.documentElement;
    const width = documentElement.clientWidth > Settings.gameWidth ? Settings.gameWidth : documentElement.clientWidth;
    const height = documentElement.clientHeight > Settings.gameHeight ? Settings.gameHeight : documentElement.clientHeight;

    // Create your Phaser game and inject it into the `#game-container` div.
    super(width, height, Phaser.CANVAS, 'game-container');

    // Add the States your game has.
    this.state.add('BootState', BootState);
    this.state.add('SplashState', SplashState);
    this.state.add('PreloaderState', PreloaderState);
    this.state.add('MainMenuState', MainMenuState);
    this.state.add('GameState', GameState);

    // Now start the Boot state.
    this.state.start('BootState');
  }
}

window.game = new Game();
