import Phaser from 'phaser';

import Properties from '../Properties';
import preloadBar from '../../images/loader.png';

/**
 * Setup the pre-game boot sequence.
 */
class BootState extends Phaser.State {
  /**
   * Setup variables or objects before the preloading starts.
   */
  init() {
    // Unless you specifically know your game needs to support
    // multi-touch, I would recommend setting this to 1.
    this.input.maxPointers = 1;

    // Phaser will automatically pause if the browser tab the game
    // is in loses focus. You can disable that here:
    this.stage.disableVisibilityChange = true;

    if (this.game.device.desktop) {
      // If you have any desktop specific settings, they can go in here:
      this.scale.pageAlignHorizontally = true;
    }
    else {
      const { gameWidth, gameHeight } = Properties;

      // Same goes for mobile settings.
      // In this case we're saying scale the game,
      // no lower than 480x260 and no higher than 800x600.
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.setMinMax(480, 260, gameWidth, gameHeight);
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
    }
  }

  /**
   * Preload any assets needed for the preload state.
   */
  preload() {
    // Here we load the assets required for our preloader
    // (in this case a background and a loading bar).
    this.load.image('preloadBar', preloadBar);
  }

  /**
   * Setup anything that is needed before the preload state begins.
   */
  create() {
    // By this point the preloader assets have loaded to the cache,
    // we've set the game settings.
    // So now let's start the real preloader going.
    this.state.start('PreloaderState');
  }
}

export default BootState;
