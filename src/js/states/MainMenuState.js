import Phaser from 'phaser';

/**
 * Show menu background and logo.
 */
class MainMenuState extends Phaser.State {
  /**
   * Setup variables or objects before the preloading starts.
   */
  init() {
    this.background = null;
    this.logo = null;
  }

  /**
   * A couple of Sprites, tweens to make them appear. Then the game waits
   * for an input event before fading out and starting the Game class.
   */
  create() {
    this.background = this.add.sprite(0, 0, 'menuBackground');
    this.background.alpha = 0;

    this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
    this.logo.anchor.setTo(0.5, 0.5);

    this.add.tween(this.background).to(
      { alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true
    );

    this.add.tween(this.logo).to(
      { y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000
    );

    this.input.onDown.addOnce(this.fadeOut, this);
  }

  /**
   * Hide background and move logo.
   */
  fadeOut() {
    const tween = this.add.tween(this.logo).to(
      { y: 800 }, 2000, Phaser.Easing.Linear.None, true
    );

    this.add.tween(this.background).to(
      { alpha: 0 }, 2000, Phaser.Easing.Linear.None, true
    );

    tween.onComplete.add(this.startGame, this);
  }

  /**
   * Move on to the game state.
   */
  startGame() {
    this.state.start('GameState');
  }
}

export default MainMenuState;
