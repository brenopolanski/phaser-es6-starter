import Phaser from 'phaser';

import menuBackground from '../../images/menu_background.jpg';
import logo from '../../images/logo.png';
import level1 from '../../images/level_1.png';
import gamePadIndicator from '../../images/misc/gamepad_indicator.png';
import player from '../../images/spritesheet/player.png';
import music from '../../audio/music/play.mp3';

class PreloaderState extends Phaser.State {
  init() {
    this.preloadBar = null;
  }

  preload() {
    // Set-up our preloader sprite.
    this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
    this.load.setPreloadSprite(this.preloadBar);

    // Load our actual games assets.
    this.load.image('menuBackground', menuBackground);
    this.load.image('logo', logo);
    this.load.audio('music', music, true);
    this.load.spritesheet('gamePadIndicator', gamePadIndicator, 16, 16);
    this.load.spritesheet('player', player, 58, 96, 5);
    this.load.image('level1', level1);
  }

  create() {
    const tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);

    tween.onComplete.add(this.startMainMenuState, this);
  }

  startMainMenuState() {
    this.state.start('MainMenuState');
  }
}

export default PreloaderState;
