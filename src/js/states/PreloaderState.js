import Phaser from 'phaser';

import menuBackground from '../../images/menu_background.jpg';
import logo from '../../images/logo.png';
import level1 from '../../images/level_1.png';
import gamepadIndicator from '../../images/misc/gamepad_indicator.png';
import player from '../../images/spritesheet/player.png';
import music from '../../audio/music/play.mp3';

// This is a base State class which can be extended. It provides quick access
// to common functions such as the camera, cache, input, match, sound and more.
class PreloaderState extends Phaser.State {
  init() {
    this.preloadBar = null;
  }

  preload() {
    // Setup our preloader sprite.
    this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
    this.load.setPreloadSprite(this.preloadBar);

    // Load our actual games assets.
    this.load.image('menuBackground', menuBackground);
    this.load.image('logo', logo);
    this.load.audio('music', music, true);
    this.load.spritesheet('gamepadIndicator', gamepadIndicator, 16, 16);
    this.load.spritesheet('player', player, 58, 96, 5);
    this.load.image('level1', level1);
  }

  // When the load is finished the create function is called,
  // which is when we fade the preload bar away.
  // On completion of that tween we start the main menu.
  create() {
    const tween = this.add.tween(this.preloadBar).to(
      { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true
    );

    tween.onComplete.add(this.startMainMenuState, this);
  }

  startMainMenuState() {
    this.state.start('MainMenuState');
  }
}

export default PreloaderState;
