import Phaser from 'phaser';

import Player from './Player';

class GameState extends Phaser.State {
  init() {
    this.background = null;
    this.music = null;
    this.player = null;
  }

  create() {
    this.background = this.add.sprite(0, 0, 'level1');

    this.music = this.add.audio('music', 1, false);
    this.music.play();

    this.player = new Player(this.game, 130, 284);
  }
}

export default GameState;
