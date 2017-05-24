import Phaser from 'phaser';
import WebFont from 'webfontloader';

import Properties from '../Properties';
import menuBackground from '../../images/menu_background.jpg';
import logo from '../../images/logo.png';
import level1 from '../../images/level_1.png';
import gamepadIndicator from '../../images/misc/gamepad_indicator.png';
import player from '../../images/spritesheet/player.png';
import music from '../../audio/music/play.mp3';

/**
 * Preload the game and display the loading screen.
 */
class PreloaderState extends Phaser.State {
  /**
   * Setup variables or objects before the preloading starts.
   */
  init() {
    this.preloadBar = null;
  }

  /**
   * Preload any assets needed for the main menu state.
   */
  preload() {
    const { fontFamily } = Properties;

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

    // Load external font.
    WebFont.load({
      google: {
        families: fontFamily
      }
    });
  }

  /**
   * When the load is finished the create function is called,
   * which is when we fade the preload bar away.
   * On completion of that tween we start the main menu.
   */
  create() {
    const tween = this.add.tween(this.preloadBar).to(
      { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true
    );

    tween.onComplete.add(this.startMainMenuState, this);
  }

  /**
   * Move on to the main menu state.
   */
  startMainMenuState() {
    this.state.start('MainMenuState');
  }
}

export default PreloaderState;
