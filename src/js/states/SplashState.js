import Phaser from 'phaser';

class SplashState extends Phaser.State {
  create() {
    this.state.start('SplashState');
  }
}

export default SplashState;
