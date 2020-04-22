class Piece_HautMilieu extends Phaser.Scene {
  constructor() {
    super('Piece_HautMilieu');

  }

  
  init(){}
  preload(){}
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

    if (piece_hautmilieu_visitee == 0) {
      texte_histoire_9 = this.add.text(400,675,'Enfin libre !',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
    }
    

    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*************************CARTE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    piece_hautmilieu_visitee = 1;

    if (cartetrouvee == 1) {
      this.add.image(775,25,'indication_carte').setScale(0.75);
      this.add.image(775,10,'indication_carte_piece_actuelle').setScale(0.8).setDepth(2);  // changer la position selon la pièce

      this.add.image(775,25,'indication_carte_piece_visitee').setScale(0.8).setDepth(1);
      if (piece_milieudroite_visitee == 1) {this.add.image(790,25,'indication_carte_piece_visitee').setScale(0.8).setDepth(1);}
      if (piece_milieugauche_visitee == 1) {this.add.image(760,25,'indication_carte_piece_visitee').setScale(0.8).setDepth(1);}
      if (piece_hautmilieu_visitee == 1) {this.add.image(775,10,'indication_carte_piece_visitee').setScale(0.8).setDepth(1);}
      if (piece_basmilieu_visitee == 1) {this.add.image(775,40,'indication_carte_piece_visitee').setScale(0.8).setDepth(1);}
      if (piece_hautgauche_visitee == 1) {this.add.image(760,10,'indication_carte_piece_visitee').setScale(0.8).setDepth(1);}
      if (piece_hautdroite_visitee == 1) {this.add.image(790,10,'indication_carte_piece_visitee').setScale(0.8).setDepth(1);}
      if (piece_basdroite_visitee == 1) {this.add.image(790,40,'indication_carte_piece_visitee').setScale(0.8).setDepth(1);}
      if (piece_basgauche_visitee == 1) {this.add.image(760,40,'indication_carte_piece_visitee').setScale(0.8).setDepth(1);}
      
    }



    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*************************COEURS*************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    if (nbcoeur == 1) {this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
    if (nbcoeur == 2) {this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
    if (nbcoeur == 3) {this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
    if (nbcoeur == 4) {this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
    if (nbcoeur == 5) {this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
    if (nbcoeur == 6) {this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
    if (nbcoeur == 7) {this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
    if (nbcoeur == 8) {this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
    if (nbcoeur == 9) {this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
    if (nbcoeur == 10) {this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
    






    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////******************INITIALISATION SCENE******************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    
    pressenter = this.input.keyboard.addKey('ENTER');
    pressshift = this.input.keyboard.addKey('SHIFT');
    pressw = this.input.keyboard.addKey('W');

    // joueur
    if (vientde == "gauche") {
      joueur = this.physics.add.sprite(50,400,'perso_idle').setScale(2).setDepth(1);
    }
    if (vientde == "droite") {
      joueur = this.physics.add.sprite(750,400,'perso_idle').setScale(2).setDepth(1);
    }
    if (vientde == "haut") {
      joueur = this.physics.add.sprite(400,150,'perso_idle').setScale(2).setDepth(1);
    }
    if (vientde == "bas") {
      joueur = this.physics.add.sprite(400,630,'perso_idle').setScale(2).setDepth(1);
    }
    joueur.setCollideWorldBounds(true);
    /*contrôles*/cursors = this.input.keyboard.createCursorKeys();
    this.anims.create({
      key:'anim_perso_droite',
      frames: this.anims.generateFrameNumbers('perso_droite', {start: 0, end: 3}),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_bas',
      frames: this.anims.generateFrameNumbers('perso_bas', {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_haut',
      frames: this.anims.generateFrameNumbers('perso_haut', {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key:'anim_perso_stop',
      frames: this.anims.generateFrameNumbers('perso_stop', {start: 0, end: 1}),
      frameRate: 2,
      repeat: -1
    });

    // fond + collisions
    this.add.image(400,350,'piece_manoir');
    collisions_murs = this.physics.add.staticGroup();
    collisions_murs.create(400,65,'collisions_murs_haut').setVisible(false);
    collisions_murs.create(8,350,'collisions_murs_cotes').setVisible(false);
    collisions_murs.create(792,350,'collisions_murs_cotes').setVisible(false);
    collisions_murs_bas = this.physics.add.staticGroup();
    collisions_murs_bas.create(400,660,'collisions_murs_bas').setDepth(1);
    collisions_murs.create(400,677,'collisions_murs_bas');

    // placement des portes
    porte = this.physics.add.staticGroup();
    porte.create(789,407,'porte_droite');        // porte de droite

    // placement des torches
    torche1 = this.physics.add.sprite(100,80,'torche');
    torche2 = this.physics.add.sprite(250,80,'torche');
    torche3 = this.physics.add.sprite(550,80,'torche');
    torche4 = this.physics.add.sprite(700,80,'torche');
    this.anims.create({
      key:'anim_torche',
      frames: this.anims.generateFrameNumbers('torche', {start: 0, end: 3}),
      frameRate: 10,
      repeat: -1
    });
    torche1.anims.play('anim_torche');
    torche2.anims.play('anim_torche');
    torche3.anims.play('anim_torche');
    torche4.anims.play('anim_torche');




    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*********************CREATION SCENE*********************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    plante_bas = this.physics.add.staticGroup();
    plante_bas.create(60,150,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(60,95,'plante_haut').setDepth(1);
    plante_bas.create(740,150,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(740,95,'plante_haut').setDepth(1);
    plante_bas.create(740,650,'plante_bas').setOrigin(0.5,0).setSize(75,1).setDepth(-1);
    this.add.image(740,595,'plante_haut').setDepth(1);
    plante_bas.create(60,650,'plante_bas').setOrigin(0.5,0).setSize(75,1).setDepth(-1);
    this.add.image(60,595,'plante_haut').setDepth(1);


    lueur_fin = this.physics.add.sprite(400,370,'lueur_fin').setDepth(5);
    this.anims.create({
      key:'anim_lueur_fin',
      frames: this.anims.generateFrameNumbers('lueur_fin', {start: 0, end: 7}),
      frameRate: 10,
      repeat: -1
    });
    lueur_fin.anims.play('anim_lueur_fin', true);

    trou_fin = this.physics.add.image(400,400,'trou_fin').setDepth(10).setScale(0.75);

    





    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***********************COLLISIONS***********************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    this.physics.add.collider(joueur,collisions_murs);
    this.physics.add.collider(joueur,porte);
    this.physics.add.collider(joueur,plante_bas);

    this.physics.add.overlap(joueur,trou_fin,finDuJeu,null,this);








    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////**************************SONS**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    
    this.sound.add('son_finAmbience');
    this.sound.play('son_finAmbience');
    this.sound.add('son_hitTrouFin');

    this.sound.add('son_hitCle');
    this.sound.add('son_hitCarte');
    this.sound.add('son_hitCoeur');
    this.sound.add('son_hitEnnemi');














  }


  update(){

    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////****************INITIALISATION CONTROLES****************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    // contrôle du joueur
    if (cursors.up.isDown && cursors.right.isUp && cursors.left.isUp && pressshift.isUp) {
      joueur.anims.play('anim_perso_haut', true);
      joueur.setVelocityY(-125);
      joueur.setVelocityX(0);
    }
    else if (cursors.down.isDown && cursors.right.isUp && cursors.left.isUp && pressshift.isUp) {
      joueur.anims.play('anim_perso_bas', true);
      joueur.setVelocityY(125);
      joueur.setVelocityX(0);
    }
    else if (cursors.right.isDown && cursors.up.isUp && cursors.down.isUp && pressshift.isUp) {
      joueur.anims.play('anim_perso_droite', true);
      joueur.setVelocityX(150);
      joueur.setVelocityY(0);
      joueur.setFlipX(false);
    }
    else if (cursors.left.isDown && cursors.up.isUp && cursors.down.isUp && pressshift.isUp) {
      joueur.anims.play('anim_perso_droite', true);
      joueur.setVelocityX(-150);
      joueur.setVelocityY(0);
      joueur.setFlipX(true);
    }

    // contrôle rapide
    if (cursors.up.isDown && cursors.right.isUp && cursors.left.isUp && pressshift.isDown) {
      joueur.anims.play('anim_perso_haut', true);
      joueur.setVelocityY(-175);
      joueur.setVelocityX(0);
    }
    else if (cursors.down.isDown && cursors.right.isUp && cursors.left.isUp && pressshift.isDown) {
      joueur.anims.play('anim_perso_bas', true);
      joueur.setVelocityY(175);
      joueur.setVelocityX(0);
    }
    else if (cursors.right.isDown && cursors.up.isUp && cursors.down.isUp && pressshift.isDown) {
      joueur.anims.play('anim_perso_droite', true);
      joueur.setVelocityX(225);
      joueur.setVelocityY(0);
      joueur.setFlipX(false);
    }
    else if (cursors.left.isDown && cursors.up.isUp && cursors.down.isUp && pressshift.isDown) {
      joueur.anims.play('anim_perso_droite', true);
      joueur.setVelocityX(-225);
      joueur.setVelocityY(0);
      joueur.setFlipX(true);
    }

    // stop
    else if (cursors.left.isUp && cursors.right.isUp && cursors.up.isUp && cursors.down.isUp) {
      joueur.anims.play('anim_perso_stop', true);
      joueur.setVelocityX(0);
      joueur.setVelocityY(0);
    }




    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////**********************UPDATE SCENE**********************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////





    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*******************CHANGEMENT DE SCENES*****************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    
    // scène à droite
    if (joueur.x>757 && joueur.y>350 && joueur.y<470) {
      this.sound.play('son_Porte',{volume: 0.1});
      vientde = "gauche";
      this.scene.start("Piece_HautDroite");
    }



  }


}

function finDuJeu(joueur,trou_fin){
  this.sound.play('son_hitTrouFin',{volume: 0.2});
  this.scene.start('MenuFin');
}