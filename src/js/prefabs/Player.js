import Phaser from 'phaser';

class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'player', 0);

    this.anchor.setTo(0.5, 0);

    this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);

    game.add.existing(this);

    game.physics.enable(this, Phaser.Physics.ARCADE);
  }

  update() {
    // Set up a Phaser controller for keyboard input.
    const cursors = this.game.input.keyboard.createCursorKeys();

    this.body.velocity.x = 0;

    if (cursors.left.isDown) {
      this.body.velocity.x = -150;
      this.animations.play('walk');

      if (this.scale.x === 1) {
        this.scale.x = -1;
      }
    }
    else if (cursors.right.isDown) {
      this.body.velocity.x = 150;
      this.animations.play('walk');

      if (this.scale.x === -1) {
        this.scale.x = 1;
      }
    }
    else {
      this.animations.frame = 0;
    }
  }
}

export default Player;
