class Piece_MilieuGauche extends Phaser.Scene {
  constructor() {
    super('Piece_MilieuGauche');

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

    if (piece_milieugauche_visitee == 0) {
      texte_histoire_3 = this.add.text(400,675,'Des chauve-souris ? Tres bien. Il suffit que je les evite.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
    }

    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*************************CARTE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    piece_milieugauche_visitee = 1;

    if (cartetrouvee == 1) {
      this.add.image(775,25,'indication_carte').setScale(0.75);
      this.add.image(760,25,'indication_carte_piece_actuelle').setScale(0.8).setDepth(2);  // changer la position selon la pièce

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

    if (coeur3pris == 0) {viesupp3 = this.physics.add.image(170,530,'coeur').setDepth(1);}
    







    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////******************INITIALISATION SCENE******************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    
    pressenter = this.input.keyboard.addKey('ENTER');
    pressshift = this.input.keyboard.addKey('SHIFT');
    pressw = this.input.keyboard.addKey('W');

    // joueur
    if (vientde == "gauche") {joueur = this.physics.add.sprite(50,400,'perso_idle').setScale(2).setDepth(1);}
    if (vientde == "droite") {joueur = this.physics.add.sprite(750,400,'perso_idle').setScale(2).setDepth(1);}
    if (vientde == "haut") {joueur = this.physics.add.sprite(400,150,'perso_idle').setScale(2).setDepth(1);}
    if (vientde == "bas") {joueur = this.physics.add.sprite(400,630,'perso_idle').setScale(2).setDepth(1);}
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
    porte.create(400,87,'porte').setSize(145,60).setOrigin(0.5,0.37);                   // porte du haut
    //porte.create(11,407,'porte_gauche');                                                // porte de gauche
    porte.create(789,407,'porte_droite');                                               // porte de droite
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

    plante_bas = this.physics.add.staticGroup();
    plante_bas.create(60,150,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(60,95,'plante_haut').setDepth(1);
    plante_bas.create(740,150,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(740,95,'plante_haut').setDepth(1);
    plante_bas.create(740,650,'plante_bas').setOrigin(0.5,0).setSize(75,1).setDepth(-1);
    this.add.image(740,595,'plante_haut').setDepth(1);
    plante_bas.create(60,650,'plante_bas').setOrigin(0.5,0).setSize(75,1).setDepth(-1);
    this.add.image(60,595,'plante_haut').setDepth(1);

    bibliotheque_bas = this.physics.add.staticGroup();
    bibliotheque_bas.create(220,240,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1).setFlipX(true);
    this.add.image(220,190,'bibliotheque_haut').setDepth(1).setFlipX(true);
    bibliotheque_bas.create(280,400,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(280,350,'bibliotheque_haut').setDepth(1);
    bibliotheque_bas.create(220,560,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1).setFlipX(true);
    this.add.image(220,510,'bibliotheque_haut').setDepth(1).setFlipX(true);

    bibliotheque_bas.create(580,240,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(580,190,'bibliotheque_haut').setDepth(1);
    bibliotheque_bas.create(520,400,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1).setFlipX(true);
    this.add.image(520,350,'bibliotheque_haut').setDepth(1).setFlipX(true);
    bibliotheque_bas.create(580,560,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(580,510,'bibliotheque_haut').setDepth(1);


    // chauve-souris
    rdmchauvesouris = Phaser.Math.Between(1,4);
    if (rdmchauvesouris == 1) {chauvesouris1 = this.physics.add.sprite(100,170,'chauve-souris');}
      else if (rdmchauvesouris == 2) {chauvesouris1 = this.physics.add.sprite(350,170,'chauve-souris');}
      else if (rdmchauvesouris == 3) {chauvesouris1 = this.physics.add.sprite(350,270,'chauve-souris');}
      else if (rdmchauvesouris == 4) {chauvesouris1 = this.physics.add.sprite(100,270,'chauve-souris');}
    rdmchauvesouris = Phaser.Math.Between(1,4);
    if (rdmchauvesouris == 1) {chauvesouris2 = this.physics.add.sprite(160,330,'chauve-souris');}
      else if (rdmchauvesouris == 2) {chauvesouris2 = this.physics.add.sprite(410,330,'chauve-souris');}
      else if (rdmchauvesouris == 3) {chauvesouris2 = this.physics.add.sprite(410,430,'chauve-souris');}
      else if (rdmchauvesouris == 4) {chauvesouris2 = this.physics.add.sprite(160,430,'chauve-souris');}
    rdmchauvesouris = Phaser.Math.Between(1,4);
    if (rdmchauvesouris == 1) {chauvesouris3 = this.physics.add.sprite(100,490,'chauve-souris');}
      else if (rdmchauvesouris == 2) {chauvesouris3 = this.physics.add.sprite(350,490,'chauve-souris');}
      else if (rdmchauvesouris == 3) {chauvesouris3 = this.physics.add.sprite(350,590,'chauve-souris');}
      else if (rdmchauvesouris == 4) {chauvesouris3 = this.physics.add.sprite(100,590,'chauve-souris');}
    rdmchauvesouris = Phaser.Math.Between(1,4);
    if (rdmchauvesouris == 1) {chauvesouris4 = this.physics.add.sprite(460,170,'chauve-souris');}
      else if (rdmchauvesouris == 2) {chauvesouris4 = this.physics.add.sprite(710,170,'chauve-souris');}
      else if (rdmchauvesouris == 3) {chauvesouris4 = this.physics.add.sprite(710,270,'chauve-souris');}
      else if (rdmchauvesouris == 4) {chauvesouris4 = this.physics.add.sprite(460,270,'chauve-souris');}
    rdmchauvesouris = Phaser.Math.Between(1,4);
    if (rdmchauvesouris == 1) {chauvesouris5 = this.physics.add.sprite(400,330,'chauve-souris');}
      else if (rdmchauvesouris == 2) {chauvesouris5 = this.physics.add.sprite(650,330,'chauve-souris');}
      else if (rdmchauvesouris == 3) {chauvesouris5 = this.physics.add.sprite(650,430,'chauve-souris');}
      else if (rdmchauvesouris == 4) {chauvesouris5 = this.physics.add.sprite(400,430,'chauve-souris');}
    rdmchauvesouris = Phaser.Math.Between(1,4);
    if (rdmchauvesouris == 1) {chauvesouris6 = this.physics.add.sprite(460,490,'chauve-souris');}
      else if (rdmchauvesouris == 2) {chauvesouris6 = this.physics.add.sprite(710,490,'chauve-souris');}
      else if (rdmchauvesouris == 3) {chauvesouris6 = this.physics.add.sprite(710,590,'chauve-souris');}
      else if (rdmchauvesouris == 4) {chauvesouris6 = this.physics.add.sprite(460,590,'chauve-souris');}

    this.anims.create({
      key:'anim_chauve-souris',
      frames: this.anims.generateFrameNumbers('chauve-souris', {start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    });

    chauvesouris1.anims.play('anim_chauve-souris', true);
    chauvesouris2.anims.play('anim_chauve-souris', true);
    chauvesouris3.anims.play('anim_chauve-souris', true);
    chauvesouris4.anims.play('anim_chauve-souris', true);
    chauvesouris5.anims.play('anim_chauve-souris', true);
    chauvesouris6.anims.play('anim_chauve-souris', true);


    texte_coeur = this.add.text(60,675,'Vous trouvez un coeur, il vous ajoute une vie supplementaire.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);
    coeur = this.add.image(30,675,'coeur').setDepth(5).setVisible(false);


    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***********************COLLISIONS***********************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    this.physics.add.collider(joueur,collisions_murs);
    this.physics.add.collider(joueur,porte);
    this.physics.add.collider(joueur,plante_bas);
    this.physics.add.collider(joueur,bibliotheque_bas);

    this.physics.add.overlap(joueur,chauvesouris1,hitChauvesouris1,null,this);
    this.physics.add.overlap(joueur,chauvesouris2,hitChauvesouris2,null,this);
    this.physics.add.overlap(joueur,chauvesouris3,hitChauvesouris3,null,this);
    this.physics.add.overlap(joueur,chauvesouris4,hitChauvesouris4,null,this);
    this.physics.add.overlap(joueur,chauvesouris5,hitChauvesouris5,null,this);
    this.physics.add.overlap(joueur,chauvesouris6,hitChauvesouris6,null,this);

    this.physics.add.collider(joueur,viesupp3,hitCoeur3,null,this);



    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***************************CLE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    // fonction
    cle = this.add.image(30,675,'cle').setScale(2).setDepth(5).setVisible(false);
    texte_cle_trouvee = this.add.text(60,675,'Vous trouvez une cle supplementaire.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);

    if (cle2prise == 0) {clesupp2 = this.physics.add.image(400,400,'cle').setScale(2).setDepth(1);}
    
    this.physics.add.overlap(joueur,clesupp2,hitCle2,null,this);

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



    texte_cle_manquante1 = this.add.text(400,675,'Il vous faut 1 cle pour entrer dans cette piece.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
    texte_cle_manquante2 = this.add.text(400,675,'Il vous faut 2 cles pour entrer dans cette piece.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
    texte_cle_manquante3 = this.add.text(400,675,'Il vous faut 3 cles pour entrer dans cette piece.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
    texte_cle_manquante4 = this.add.text(400,675,'Il vous faut 4 cles pour entrer dans cette piece.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
    texte_cle_manquante5 = this.add.text(400,675,'Il vous faut 5 cles pour entrer dans cette piece.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
    texte_cle_manquante6 = this.add.text(400,675,'Il vous faut 6 cles pour entrer dans cette piece.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
    texte_cle_manquante7 = this.add.text(400,675,'Il vous faut 7 cles pour entrer dans cette piece.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);





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
    if (chauvesouris1.x <= 100 && chauvesouris1.y <= 170) {
      chauvesouris1.setVelocityY(0);
      chauvesouris1.setVelocityX(130);
    } else if (chauvesouris1.x >= 350 && chauvesouris1.y <= 170) {
      chauvesouris1.setFlipX(false);
      chauvesouris1.setVelocityY(130);
      chauvesouris1.setVelocityX(0);
    } else if (chauvesouris1.x >= 350 && chauvesouris1.y >= 270) {
      chauvesouris1.setVelocityY(0);
      chauvesouris1.setVelocityX(-130);
    } else if (chauvesouris1.x <= 100 && chauvesouris1.y >= 270) {
      chauvesouris1.setFlipX(true);
      chauvesouris1.setVelocityY(-130);
      chauvesouris1.setVelocityX(0);
    }

    if (chauvesouris2.x <= 160 && chauvesouris2.y <= 330) {
      chauvesouris2.setVelocityY(0);
      chauvesouris2.setVelocityX(140);
    } else if (chauvesouris2.x >= 410 && chauvesouris2.y <= 330) {
      chauvesouris2.setFlipX(false);
      chauvesouris2.setVelocityY(140);
      chauvesouris2.setVelocityX(0);
    } else if (chauvesouris2.x >= 410 && chauvesouris2.y >= 430) {
      chauvesouris2.setVelocityY(0);
      chauvesouris2.setVelocityX(-140);
    } else if (chauvesouris2.x <= 160 && chauvesouris2.y >= 430) {
      chauvesouris2.setFlipX(true);
      chauvesouris2.setVelocityY(-140);
      chauvesouris2.setVelocityX(0);
    }

    if (chauvesouris3.x <= 100 && chauvesouris3.y <= 490) {
      chauvesouris3.setVelocityY(0);
      chauvesouris3.setVelocityX(150);
    } else if (chauvesouris3.x >= 350 && chauvesouris3.y <= 490) {
      chauvesouris3.setFlipX(false);
      chauvesouris3.setVelocityY(150);
      chauvesouris3.setVelocityX(0);
    } else if (chauvesouris3.x >= 350 && chauvesouris3.y >= 590) {
      chauvesouris3.setVelocityY(0);
      chauvesouris3.setVelocityX(-150);
    } else if (chauvesouris3.x <= 100 && chauvesouris3.y >= 590) {
      chauvesouris3.setFlipX(true);
      chauvesouris3.setVelocityY(-150);
      chauvesouris3.setVelocityX(0);
    }

    if (chauvesouris4.x <= 460 && chauvesouris4.y <= 170) {
      chauvesouris4.setVelocityY(0);
      chauvesouris4.setVelocityX(160);
    } else if (chauvesouris4.x >= 710 && chauvesouris4.y <= 170) {
      chauvesouris4.setFlipX(false);
      chauvesouris4.setVelocityY(160);
      chauvesouris4.setVelocityX(0);
    } else if (chauvesouris4.x >= 710 && chauvesouris4.y >= 270) {
      chauvesouris4.setVelocityY(0);
      chauvesouris4.setVelocityX(-160);
    } else if (chauvesouris4.x <= 460 && chauvesouris4.y >= 270) {
      chauvesouris4.setFlipX(true);
      chauvesouris4.setVelocityY(-160);
      chauvesouris4.setVelocityX(0);
    }

    if (chauvesouris5.x <= 400 && chauvesouris5.y <= 330) {
      chauvesouris5.setVelocityY(0);
      chauvesouris5.setVelocityX(170);
    } else if (chauvesouris5.x >= 650 && chauvesouris5.y <= 330) {
      chauvesouris5.setFlipX(false);
      chauvesouris5.setVelocityY(170);
      chauvesouris5.setVelocityX(0);
    } else if (chauvesouris5.x >= 650 && chauvesouris5.y >= 430) {
      chauvesouris5.setVelocityY(0);
      chauvesouris5.setVelocityX(-170);
    } else if (chauvesouris5.x <= 400 && chauvesouris5.y >= 430) {
      chauvesouris5.setFlipX(true);
      chauvesouris5.setVelocityY(-170);
      chauvesouris5.setVelocityX(0);
    }

    if (chauvesouris6.x <= 460 && chauvesouris6.y <= 490) {
      chauvesouris6.setVelocityY(0);
      chauvesouris6.setVelocityX(180);
    } else if (chauvesouris6.x >= 710 && chauvesouris6.y <= 490) {
      chauvesouris6.setFlipX(false);
      chauvesouris6.setVelocityY(180);
      chauvesouris6.setVelocityX(0);
    } else if (chauvesouris6.x >= 710 && chauvesouris6.y >= 590) {
      chauvesouris6.setVelocityY(0);
      chauvesouris6.setVelocityX(-180);
    } else if (chauvesouris6.x <= 460 && chauvesouris6.y >= 590) {
      chauvesouris6.setFlipX(true);
      chauvesouris6.setVelocityY(-180);
      chauvesouris6.setVelocityX(0);
    }




    this.time.addEvent({
      delay: 5000,
      callback: ()=>{
        texte_histoire_3.setVisible(false);
      },
      loop: false
    });




    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*******************CHANGEMENT DE SCENES*****************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    
    // scène à droite
    if (joueur.x>757 && joueur.y>350 && joueur.y<470) {
      this.sound.play('son_Porte',{volume: 0.1});
      vientde = "gauche";
      this.scene.start("Piece_Milieu");
    }
    // scène au dessus
    if (joueur.x>330 && joueur.x<470 && joueur.y<150) {
      if (nbcle<2) {
        texte_cle_manquante2.setVisible(true);
        this.time.addEvent({
          delay: 5000,
          callback: ()=>{
            texte_cle_manquante2.setVisible(false);
          },
          loop: false
        });        }
      if (nbcle>=2) {
        this.sound.play('son_Porte',{volume: 0.1});
        vientde = "bas";
        this.scene.start("Piece_HautGauche");
      }
    }
    //scène en dessous
    if (joueur.x>330 && joueur.x<470 && joueur.y>630) {
      if (nbcle<3) {
        texte_cle_manquante3.setVisible(true);
        this.time.addEvent({
          delay: 5000,
          callback: ()=>{
            texte_cle_manquante3.setVisible(false);
          },
          loop: false
        });        }
      if (nbcle>=3) {
        this.sound.play('son_Porte',{volume: 0.1});
        vientde = "haut";
        this.scene.start("Piece_BasGauche");
      }
    }



  }


}

///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////************************FONCTIONS***********************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////

function hitChauvesouris1(joueur,chauvesouris1){
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
  
  if (vientde == "droite") {joueur.setPosition(750,400);}
  if (vientde == "haut") {joueur.setPosition(400,150);}
  if (vientde == "bas") {joueur.setPosition(400,630);}

}

function hitChauvesouris2(joueur,chauvesouris2){
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
  
  if (vientde == "droite") {joueur.setPosition(750,400);}
  if (vientde == "haut") {joueur.setPosition(400,150);}
  if (vientde == "bas") {joueur.setPosition(400,630);}

}

function hitChauvesouris3(joueur,chauvesouris3){
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
  
  if (vientde == "droite") {joueur.setPosition(750,400);}
  if (vientde == "haut") {joueur.setPosition(400,150);}
  if (vientde == "bas") {joueur.setPosition(400,630);}

}

function hitChauvesouris4(joueur,chauvesouris4){
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
  
  if (vientde == "droite") {joueur.setPosition(750,400);}
  if (vientde == "haut") {joueur.setPosition(400,150);}
  if (vientde == "bas") {joueur.setPosition(400,630);}

}

function hitChauvesouris5(joueur,chauvesouris5){
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
  
  if (vientde == "droite") {joueur.setPosition(750,400);}
  if (vientde == "haut") {joueur.setPosition(400,150);}
  if (vientde == "bas") {joueur.setPosition(400,630);}

}

function hitChauvesouris6(joueur,chauvesouris6){
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
  
  if (vientde == "droite") {joueur.setPosition(750,400);}
  if (vientde == "haut") {joueur.setPosition(400,150);}
  if (vientde == "bas") {joueur.setPosition(400,630);}

}


function hitCoeur3(joueur,viesupp3){
  this.sound.play('son_hitCoeur',{volume: 0.3});
  viesupp3.destroy(true);
  coeur3pris = 1;
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


function hitCle2(joueur,clesupp2){
  this.sound.play('son_hitCle',{volume: 1});
  clesupp2.destroy(true);
  nbcle=2;
  cle2prise = 1;
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