import Phaser from 'phaser';

import Properties from '../Properties';
import Player from '../prefabs/Player';

/**
 * Setup and display the main game state.
 */
class GameState extends Phaser.State {
  /**
   * Setup variables or objects before the preloading starts.
   */
  init() {
    this.background = null;
    this.music = null;
    this.player = null;
  }

  /**
   * Add background to level 1, external font, music and player Simon.
   */
  create() {
    this.backgroundLevel1 = this.add.sprite(0, 0, 'level1');

    const { fontFamily } = Properties;
    const levelText = 'Level 1';
    const text = this.add.text(this.game.width - 120, 15, levelText);

    text.font = fontFamily[0];
    text.fontSize = 15;
    text.fill = '#fff';
    text.align = 'center';

    this.music = this.add.audio('music', 1, false);
    this.music.play();

    this.player = new Player(this.game, 130, 284);
  }

  /**
   * Show the debug sprite info.
   */
  render() {
    const { showDebugSpriteInfo } = Properties;

    // Handle debug mode.
    if (__DEV__ && showDebugSpriteInfo) {
      this.game.debug.spriteInfo(this.player, 35, 500);
    }
  }
}

export default GameState;
