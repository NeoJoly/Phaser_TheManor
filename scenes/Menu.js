var musiquefondmenu; var videomanoir;

class Menu extends Phaser.Scene {
  constructor() {
    super('Menu');

  }


  init(){}


  preload(){

    videomanoir = this.load.video('VideoManoir', 'assets/MenuVideoManoir.mp4', 'loadeddata', true, true);
    this.load.audio('MusiqueFond', 'sounds/HorrorAmbience.mp3');
    this.load.audio('GameStart','sounds/GameStart.ogg');

  }


  create(){

    this.add.video(400, 350, "VideoManoir");
    this.sound.add("MusiqueFond");
    this.sound.play("MusiqueFond",{volume: 0.5});
    this.sound.add("GameStart");
    texte_pressenter = this.add.text(290, 550, 'Press Enter', {fontFamily: 'death markers', fontSize: 35});
    pressenter = this.input.keyboard.addKey('ENTER');


  }


  update(){

    // texte "Press Enter" qui clignote
    if (timer == 0) {
      this.time.addEvent({
        delay: 2000,
        callback: ()=>{
          texte_pressenter.setVisible(false);
          timer = 1;
      },
        loop: false
    });
    }
    if (timer == 1) {
      this.time.addEvent({
        delay: 1000,
        callback: ()=>{
          texte_pressenter.setVisible(true);
          timer = 0;
      },
        loop: false
    });
    }

    if (pressenter.isDown) {
      this.cameras.main.fadeOut(3000);
      this.time.addEvent({
        delay: 250,
        callback: ()=>{
          this.sound.play('GameStart',{volume: 0.05});
        },
        loop: false
      });

      this.time.addEvent({
        delay: 3000,
        callback: ()=>{
          this.scene.start("Preload");
        },
        loop: false
      });


    }
    

    
  }


}
