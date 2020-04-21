class MenuFin extends Phaser.Scene {
  constructor() {
    super('MenuFin');

  }


  init(){}


  preload(){

    videomanoir = this.load.video('VideoManoir', 'assets/MenuVideoManoir.mp4', 'loadeddata', true, true);
    this.load.audio('GameStart','sounds/GameStart.ogg');
    
  }


  create(){

    transition = this.add.sprite(400,200,'transition').setDepth(1000);
    this.anims.create({
      key:'anim_transition',
      frames: this.anims.generateFrameNumbers('transition', {start: 0, end: 9}),
      frameRate: 20,
      repeat: 0
    });
    transition.anims.play('anim_transition');
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        transition.setVisible(false);
      },
      loop: false
    });

    this.add.video(400, 350, "VideoManoir");
    this.sound.add("GameStart");
    this.add.text(400, 550, 'Merci d\'avoir joue !', {fontFamily: 'death markers', fontSize: 40}).setOrigin(0.5,0.5);


  }


  update(){}


}
