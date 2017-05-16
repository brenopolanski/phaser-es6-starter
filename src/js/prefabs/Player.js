import Phaser from 'phaser';

class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'player', 0);

    this.anchor.setTo(0.5, 0);

    this.animations.add('walk', [0, 1, 2, 3, 4], 10, true);

    game.add.existing(this);

    game.physics.enable(this, Phaser.Physics.ARCADE);

    game.input.gamepad.start();

    this.gamePadIndicator = game.add.sprite(10, 10, 'gamePadIndicator');
    this.gamePadIndicator.scale.x = 2;
    this.gamePadIndicator.scale.y = 2;
    this.gamePadIndicator.animations.frame = 1;

    // Set up a Phaser controller for keyboard input.
    this.cursors = game.input.keyboard.createCursorKeys();

    // Set up a Phaser controller for gamepad input.
    // To listen to buttons from a specific pad listen directly on
    // that pad game.input.gamepad.padX, where X = pad 1-4.
    this.gamePad1 = game.input.gamepad.pad1;
  }

  update() {
    this.body.velocity.x = 0;

    // Gamepad "connected or not" indicator
    if (this.game.input.gamepad.supported &&
        this.game.input.gamepad.active &&
        this.gamePad1.connected) {

      this.gamePadIndicator.animations.frame = 0;
    }
    else {
      this.gamePadIndicator.animations.frame = 1;
    }

    // GamePad controls

    if (this.gamePad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || this.gamePad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1) {
      this.body.velocity.x = -150;
      this.animations.play('walk');

      if (this.scale.x === 1) {
        this.scale.x = -1;
      }
    }
    else if (this.gamePad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || this.gamePad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1) {
      this.body.velocity.x = 150;
      this.animations.play('walk');

      if (this.scale.x === -1) {
        this.scale.x = 1;
      }
    }
    else {
      this.animations.frame = 0;
    }

    // Keyboard controls
    // if (this.cursors.left.isDown) {
    //   this.body.velocity.x = -150;
    //   this.animations.play('walk');

    //   if (this.scale.x === 1) {
    //     this.scale.x = -1;
    //   }
    // }
    // else if (this.cursors.right.isDown) {
    //   this.body.velocity.x = 150;
    //   this.animations.play('walk');

    //   if (this.scale.x === -1) {
    //     this.scale.x = 1;
    //   }
    // }
    // else {
    //   this.animations.frame = 0;
    // }
  }
}

export default Player;
