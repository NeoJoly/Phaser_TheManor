class Piece_HautGauche extends Phaser.Scene {
  constructor() {
    super('Piece_HautGauche');

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

    if (piece_hautgauche_visitee == 0) {
      texte_histoire_4 = this.add.text(400,675,'Si j\'observe bien leurs mouvements, je peux passer facilement, meme si certains semblent aleatoires...',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
    }

    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*************************CARTE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    piece_hautgauche_visitee = 1;

    if (cartetrouvee == 1) {
      this.add.image(775,25,'indication_carte').setScale(0.75);
      this.add.image(760,10,'indication_carte_piece_actuelle').setScale(0.8).setDepth(2);  // changer la position selon la pièce

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

    if (coeur4pris == 0) {viesupp4 = this.physics.add.image(750,150,'coeur').setDepth(1);}
    







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
    porte.create(400,690,'porte').setSize(145,60).setOrigin(0.5,1).setVisible(false);   // porte du bas

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

    placard_bas = this.physics.add.staticGroup();
    placard_bas.create(400,200,'placard_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(400,150,'placard_haut').setDepth(1);

    bibliotheque_bas = this.physics.add.staticGroup();
    bibliotheque_bas.create(120,175,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1).setFlipX(true);
    this.add.image(120,125,'bibliotheque_haut').setDepth(1).setFlipX(true);
    bibliotheque_bas.create(680,175,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(680,125,'bibliotheque_haut').setDepth(1);


    chauvesouris7 = this.physics.add.sprite(50,300,'chauve-souris');
    chauvesouris8 = this.physics.add.sprite(300,300,'chauve-souris');
    chauvesouris9 = this.physics.add.sprite(550,300,'chauve-souris');

    chauvesouris10 = this.physics.add.sprite(50,425,'chauve-souris');
    chauvesouris11 = this.physics.add.sprite(300,425,'chauve-souris');
    chauvesouris12 = this.physics.add.sprite(550,425,'chauve-souris');

    chauvesouris13 = this.physics.add.sprite(50,550,'chauve-souris');
    chauvesouris14 = this.physics.add.sprite(300,550,'chauve-souris');
    chauvesouris15 = this.physics.add.sprite(550,550,'chauve-souris');

    this.anims.create({
      key:'anim_chauve-souris',
      frames: this.anims.generateFrameNumbers('chauve-souris', {start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    });

    chauvesouris7.anims.play('anim_chauve-souris', true);
    chauvesouris8.anims.play('anim_chauve-souris', true);
    chauvesouris9.anims.play('anim_chauve-souris', true);
    chauvesouris10.anims.play('anim_chauve-souris', true);
    chauvesouris11.anims.play('anim_chauve-souris', true);
    chauvesouris12.anims.play('anim_chauve-souris', true);
    chauvesouris13.anims.play('anim_chauve-souris', true);
    chauvesouris14.anims.play('anim_chauve-souris', true);
    chauvesouris15.anims.play('anim_chauve-souris', true);


    texte_coeur = this.add.text(60,675,'Vous trouvez un coeur, il vous ajoute une vie supplementaire.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);
    coeur = this.add.image(30,675,'coeur').setDepth(5).setVisible(false);







    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***********************COLLISIONS***********************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    this.physics.add.collider(joueur,collisions_murs);
    this.physics.add.collider(joueur,porte);
    this.physics.add.collider(joueur,placard_bas);
    this.physics.add.collider(joueur,bibliotheque_bas);
    
    this.physics.add.collider(joueur,viesupp4,hitCoeur4,null,this);

    this.physics.add.overlap(joueur,chauvesouris7,hitChauvesouris7,null,this);
    this.physics.add.overlap(joueur,chauvesouris8,hitChauvesouris8,null,this);
    this.physics.add.overlap(joueur,chauvesouris9,hitChauvesouris9,null,this);
    this.physics.add.overlap(joueur,chauvesouris10,hitChauvesouris10,null,this);
    this.physics.add.overlap(joueur,chauvesouris11,hitChauvesouris11,null,this);
    this.physics.add.overlap(joueur,chauvesouris12,hitChauvesouris12,null,this);
    this.physics.add.overlap(joueur,chauvesouris13,hitChauvesouris13,null,this);
    this.physics.add.overlap(joueur,chauvesouris14,hitChauvesouris14,null,this);
    this.physics.add.overlap(joueur,chauvesouris15,hitChauvesouris15,null,this);








    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***************************CLE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    // fonction
    cle = this.add.image(30,675,'cle').setScale(2).setDepth(5).setVisible(false);
    texte_cle_trouvee = this.add.text(60,675,'Vous trouvez une cle supplementaire.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);

    if (cle3prise == 0) {clesupp3 = this.physics.add.image(50,150,'cle').setScale(2).setDepth(0);}
    
    this.physics.add.overlap(joueur,clesupp3,hitCle3,null,this);

    // overlay
    this.add.image(500,10,'cle').setScale(2).setOrigin(0,0);
    texte_nbcle = this.add.text(540,5,'x 0',{fontFamily:'death markers',fontSize:30,color:'#999'}).setOrigin(0,0);
    if (nbcle == 1) {texte_nbcle.setText('x 1');}
    if (nbcle == 2) {texte_nbcle.setText('x 2');}
    if (nbcle == 3) {texte_nbcle.setText('x 3');}
    if (nbcle == 4) {texte_nbcle.setText('x 4');}
    if (nbcle == 5) {texte_nbcle.setText('x 5');}
    if (nbcle == 6) {texte_nbcle.setText('x 6');}
    if (nbcle == 7) {texte_nbcle.setText('x 7');}




    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////**************************SONS**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    
    this.sound.add('son_finAmbience');
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

    // contrôle chauve-souris
    rdmchauvesouris = Phaser.Math.Between(0,1);
    if (chauvesouris7.x <= 50) {chauvesouris7.setVelocityX(200);}
    if (chauvesouris7.x >= 250) {chauvesouris7.setVelocityX(-200);}
    if (chauvesouris7.x >= 149 && chauvesouris7.x <= 151) {
      if (rdmchauvesouris == 0) {
        chauvesouris7.setVelocityX(200);
      } else {chauvesouris7.setVelocityX(-200);}
    }
    rdmchauvesouris = Phaser.Math.Between(0,1);
    if (chauvesouris8.x <= 300) {chauvesouris8.setVelocityX(200);}
    if (chauvesouris8.x >= 500) {chauvesouris8.setVelocityX(-200);}
    if (chauvesouris8.x >= 399 && chauvesouris8.x <= 401) {
      if (rdmchauvesouris == 0) {
        chauvesouris8.setVelocityX(200);
      } else {chauvesouris8.setVelocityX(-200);}
    }
    rdmchauvesouris = Phaser.Math.Between(0,1);
    if (chauvesouris9.x <= 550) {chauvesouris9.setVelocityX(200);}
    if (chauvesouris9.x >= 750) {chauvesouris9.setVelocityX(-200);}
    if (chauvesouris9.x >= 649 && chauvesouris9.x <= 651) {
      if (rdmchauvesouris == 0) {
        chauvesouris9.setVelocityX(200);
      } else {chauvesouris9.setVelocityX(-200);}
    }


    rdmchauvesouris = Phaser.Math.Between(0,1);
    if (chauvesouris10.x <= 50) {chauvesouris10.setVelocityX(150);}
    if (chauvesouris10.x >= 250) {chauvesouris10.setVelocityX(-150);}
    if (chauvesouris10.x >= 149 && chauvesouris10.x <= 151) {
      if (rdmchauvesouris == 0) {
        chauvesouris10.setVelocityX(150);
      } else {chauvesouris10.setVelocityX(-150);}
    }
    rdmchauvesouris = Phaser.Math.Between(0,1);
    if (chauvesouris11.x <= 300) {chauvesouris11.setVelocityX(150);}
    if (chauvesouris11.x >= 500) {chauvesouris11.setVelocityX(-150);}
    if (chauvesouris11.x >= 399 && chauvesouris11.x <= 401) {
      if (rdmchauvesouris == 0) {
        chauvesouris11.setVelocityX(150);
      } else {chauvesouris11.setVelocityX(-150);}
    }
    rdmchauvesouris = Phaser.Math.Between(0,1);
    if (chauvesouris12.x <= 550) {chauvesouris12.setVelocityX(150);}
    if (chauvesouris12.x >= 750) {chauvesouris12.setVelocityX(-150);}
    if (chauvesouris12.x >= 649 && chauvesouris12.x <= 651) {
      if (rdmchauvesouris == 0) {
        chauvesouris12.setVelocityX(150);
      } else {chauvesouris12.setVelocityX(-150);}
    }


    rdmchauvesouris = Phaser.Math.Between(0,1);
    if (chauvesouris13.x <= 50) {chauvesouris13.setVelocityX(100);}
    if (chauvesouris13.x >= 250) {chauvesouris13.setVelocityX(-100);}
    if (chauvesouris13.x >= 149 && chauvesouris13.x <= 151) {
      if (rdmchauvesouris == 0) {
        chauvesouris13.setVelocityX(100);
      } else {chauvesouris13.setVelocityX(-100);}
    }
    rdmchauvesouris = Phaser.Math.Between(0,1);
    if (chauvesouris14.x <= 300) {chauvesouris14.setVelocityX(100);}
    if (chauvesouris14.x >= 500) {chauvesouris14.setVelocityX(-100);}
    if (chauvesouris14.x >= 399 && chauvesouris14.x <= 401) {
      if (rdmchauvesouris == 0) {
        chauvesouris14.setVelocityX(100);
      } else {chauvesouris14.setVelocityX(-100);}
    }
    rdmchauvesouris = Phaser.Math.Between(0,1);
    if (chauvesouris15.x <= 550) {chauvesouris15.setVelocityX(100);}
    if (chauvesouris15.x >= 750) {chauvesouris15.setVelocityX(-100);}
    if (chauvesouris15.x >= 649 && chauvesouris15.x <= 651) {
      if (rdmchauvesouris == 0) {
        chauvesouris15.setVelocityX(100);
      } else {chauvesouris15.setVelocityX(-100);}
    }

    

    this.time.addEvent({
      delay: 5000,
      callback: ()=>{
        texte_histoire_4.setVisible(false);
      },
      loop: false
    });










    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*******************CHANGEMENT DE SCENES*****************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    
    //scène en dessous
    if (joueur.x>330 && joueur.x<470 && joueur.y>630) {
      this.sound.play('son_Porte',{volume: 0.1});
      vientde = "haut";
      this.scene.start("Piece_MilieuGauche");
    }



  }


}

///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////************************FONCTIONS***********************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////

function hitCoeur4(joueur,viesupp4){
  this.sound.play('son_hitCoeur',{volume: 0.3});
  viesupp4.destroy(true);
  coeur4pris = 1;
  nbcoeur+=1;
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

  texte_coeur.setVisible(true);
  coeur.setVisible(true);
  this.time.addEvent({
    delay: 5000,
    callback: ()=>{
      texte_coeur.setVisible(false);
      coeur.setVisible(false);
    },
    loop: false
  });
}


function hitChauvesouris7(joueur,chauvesouris7){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris8(joueur,chauvesouris8){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris9(joueur,chauvesouris9){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris10(joueur,chauvesouris10){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris11(joueur,chauvesouris11){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris12(joueur,chauvesouris12){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris13(joueur,chauvesouris13){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris14(joueur,chauvesouris14){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris15(joueur,chauvesouris15){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris16(joueur,chauvesouris16){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}

function hitChauvesouris17(joueur,chauvesouris17){
  this.sound.play('son_hitEnnemi',{volume: 0.1});
  nbcoeur-=1;
  if (nbcoeur == 0) {
    this.physics.pause();
    this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0);
    this.add.image(400,350,'gameovertint').setDepth(100);
    this.add.text(400, 400, 'Game Over', {fontFamily: 'death markers', fontSize: 100}).setOrigin(0.5,0.5).setDepth(101);
    gameOver=true;
  }
  if (nbcoeur == 1) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur1').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 2) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur2').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 3) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur3').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 4) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur4').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 5) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur5').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 6) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur6').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 7) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur7').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 8) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur8').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 9) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur9').setDepth(5).setOrigin(0,0);}
  if (nbcoeur == 10) {this.add.image(10,10,'cachecoeurs').setDepth(5).setOrigin(0,0); this.add.image(10,10,'coeur10').setDepth(5).setOrigin(0,0);}
  
  joueur.setPosition(400,630);

}


function hitCle3(joueur,clesupp3){
  this.sound.play('son_hitCle',{volume: 1});
  clesupp3.destroy(true);
  nbcle=3;
  cle3prise = 1;
  cle.setVisible(true);
  texte_cle_trouvee.setVisible(true);
  this.time.addEvent({
    delay: 7000,
    callback: ()=>{
      cle.setVisible(false);
      texte_cle_trouvee.setVisible(false);
    },
    loop: false
  });
  if (nbcle == 1) {texte_nbcle.setText('x 1');}
  if (nbcle == 2) {texte_nbcle.setText('x 2');}
  if (nbcle == 3) {texte_nbcle.setText('x 3');}
  if (nbcle == 4) {texte_nbcle.setText('x 4');}
  if (nbcle == 5) {texte_nbcle.setText('x 5');}
  if (nbcle == 6) {texte_nbcle.setText('x 6');}
  if (nbcle == 7) {texte_nbcle.setText('x 7');}
}