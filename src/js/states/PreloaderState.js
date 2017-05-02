import Phaser from 'phaser';

class PreloaderState extends Phaser.State {
  init() {
    this.background = null;
    this.preloadBar = null;
    this.ready = false;
  }

  preload() {
    this.background = this.add.sprite(0, 0, 'preloaderBackground');
    this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

    this.load.setPreloadSprite(this.preloadBar);
  }

  create() {
//  Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
    this.preloadBar.cropEnabled = false;
  }

  update() {
  }
}

export default PreloaderState;
