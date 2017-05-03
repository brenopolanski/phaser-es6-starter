import Phaser from 'phaser';

import titlepage from '../../images/titlepage.jpg';
import logo from '../../images/logo.png';
import level1 from '../../images/level1.png';
import simon from '../../images/spritesheet/simon.png';
import music from '../../audio/music/title.mp3';

class PreloaderState extends Phaser.State {
  init() {
    this.preloadBar = null;
  }

  preload() {
    // Set-up our preloader sprite.
    this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
    this.load.setPreloadSprite(this.preloadBar);


    // Load our actual games assets.
    this.load.image('titlepage', titlepage);
    this.load.image('logo', logo);
    this.load.audio('music', music, true);
    this.load.spritesheet('simon', simon, 58, 96, 5);
    this.load.image('level1', level1);
  }

  create() {
    const tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);

    tween.onComplete.add(this.startMainMenuState, this);
  }

  startMainMenuState() {
    this.state.start('MainMenuState');
  }
}

export default PreloaderState;
