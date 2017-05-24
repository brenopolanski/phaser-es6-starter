import Phaser from 'phaser';

import Properties from '../Properties';

class BootState extends Phaser.State {
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

  preload() {
    // Honestly, just about anything could go here.
    // It's YOUR game after all. Eat your heart out!
  }

  create() {
    // Honestly, just about anything could go here.
    // It's YOUR game after all. Eat your heart out!
  }
}

export default BootState;
