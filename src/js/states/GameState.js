import Phaser from 'phaser';

import Player from '../prefabs/Player';

// This is a base State class which can be extended. It provides quick access
// to common functions such as the camera, cache, input, match, sound and more.
class GameState extends Phaser.State {
  init() {
    this.background = null;
    this.music = null;
    this.player = null;
  }

  // Add background to level 1, music and player Simon.
  create() {
    this.backgroundLevel1 = this.add.sprite(0, 0, 'level1');

    this.music = this.add.audio('music', 1, false);
    this.music.play();

    this.player = new Player(this.game, 130, 284);
  }

  render() {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.player, 35, 500);
    }
  }
}

export default GameState;
