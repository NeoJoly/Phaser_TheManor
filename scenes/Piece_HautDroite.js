class Piece_HautDroite extends Phaser.Scene {
  constructor() {
    super('Piece_HautDroite');

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

    if (piece_hautdroite_visitee == 0) {
      texte_histoire_8 = this.add.text(400,675,'J\'ai deja vu ca tout a l\'heure, mefiance...',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
    }

    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*************************CARTE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    piece_hautdroite_visitee = 1;

    if (cartetrouvee == 1) {
      this.add.image(775,25,'indication_carte').setScale(0.75);
      this.add.image(790,10,'indication_carte_piece_actuelle').setScale(0.8).setDepth(2);  // changer la position selon la pièce

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

    collisions_murs_haut_chauvesouris = this.physics.add.staticGroup();
    collisions_murs_haut_chauvesouris.create(400,630,'collisions_murs_haut').setVisible(false);

    // placement des portes
    porte = this.physics.add.staticGroup();
    //porte.create(400,87,'porte').setSize(145,60).setOrigin(0.5,0.37);                   // porte du haut
    porte.create(11,407,'porte_gauche');                                                // porte de gauche
    //porte.create(789,407,'porte_droite');                                               // porte de droite
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

    chauvesouris21 = this.physics.add.sprite(Phaser.Math.Between(50,750),Phaser.Math.Between(150,540),'chauve-souris').setVelocityX(150).setVelocityY(150).setBounce(1);
    chauvesouris22 = this.physics.add.sprite(Phaser.Math.Between(50,750),Phaser.Math.Between(150,540),'chauve-souris').setVelocityX(150).setVelocityY(150).setBounce(1);
    chauvesouris23 = this.physics.add.sprite(Phaser.Math.Between(50,750),Phaser.Math.Between(150,540),'chauve-souris').setVelocityX(150).setVelocityY(150).setBounce(1);

    this.anims.create({
      key:'anim_chauve-souris',
      frames: this.anims.generateFrameNumbers('chauve-souris', {start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    });

    chauvesouris21.anims.play('anim_chauve-souris', true);
    chauvesouris22.anims.play('anim_chauve-souris', true);
    chauvesouris23.anims.play('anim_chauve-souris', true);


    texte_coeur = this.add.text(60,675,'Vous trouvez un coeur, il vous ajoute une vie supplementaire.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);
    coeur = this.add.image(30,675,'coeur').setDepth(5).setVisible(false);



    trou23 = this.physics.add.image(310,360,'trou').setVisible(false);
    trou24 = this.physics.add.image(390,430,'trou').setVisible(false);
    trou25 = this.physics.add.image(470,360,'trou').setVisible(false);



    plante_bas = this.physics.add.staticGroup();
    plante_bas.create(60,150,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(60,95,'plante_haut').setDepth(1);
    plante_bas.create(740,150,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(740,95,'plante_haut').setDepth(1);




    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***********************COLLISIONS***********************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    this.physics.add.collider(joueur,collisions_murs);
    this.physics.add.collider(joueur,porte);
    this.physics.add.collider(joueur,plante_bas);

    this.physics.add.collider(chauvesouris21,collisions_murs);
    this.physics.add.collider(chauvesouris22,collisions_murs);
    this.physics.add.collider(chauvesouris23,collisions_murs);
    this.physics.add.collider(chauvesouris21,collisions_murs_haut_chauvesouris);
    this.physics.add.collider(chauvesouris22,collisions_murs_haut_chauvesouris);
    this.physics.add.collider(chauvesouris23,collisions_murs_haut_chauvesouris);
    this.physics.add.collider(chauvesouris21,plante_bas);
    this.physics.add.collider(chauvesouris22,plante_bas);
    this.physics.add.collider(chauvesouris23,plante_bas);
    
    this.physics.add.overlap(joueur,chauvesouris21,hitChauvesouris21,null,this);
    this.physics.add.overlap(joueur,chauvesouris22,hitChauvesouris22,null,this);
    this.physics.add.overlap(joueur,chauvesouris23,hitChauvesouris23,null,this);



    this.physics.add.overlap(joueur,trou23,hitTrou23,null,this);
    this.physics.add.overlap(joueur,trou24,hitTrou24,null,this);
    this.physics.add.overlap(joueur,trou25,hitTrou25,null,this);






    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***************************CLE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    // fonction
    cle = this.add.image(30,675,'cle').setScale(2).setDepth(5).setVisible(false);
    texte_cle_trouvee = this.add.text(60,675,'Vous trouvez une cle supplementaire.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);

    if (cle7prise == 0) {clesupp7 = this.physics.add.image(390,360,'cle').setScale(2).setDepth(0);}
    
    this.physics.add.overlap(joueur,clesupp7,hitCle7,null,this);

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

    this.time.addEvent({
      delay: 5000,
      callback: ()=>{
        texte_histoire_8.setVisible(false);
      },
      loop: false
    });


    if (joueur.x>=185.5 && joueur.x<=425.5 && joueur.y>=320 && joueur.y<=390 || joueur.x>=265.5 && joueur.x<=345.5 && joueur.y>=100 && joueur.y<=460) {
      trou23.setVisible(true);
    } else {
      trou23.setVisible(false);
    }
    if (joueur.x>=265.5 && joueur.x<=505.5 && joueur.y>=390 && joueur.y<=460 || joueur.x>=345.5 && joueur.x<=425.5 && joueur.y>=320 && joueur.y<=530) {
      trou24.setVisible(true);
    } else {
      trou24.setVisible(false);
    }
    if (joueur.x>345.5 && joueur.x<=585.5 && joueur.y>=320 && joueur.y<=390 || joueur.x>=425.5 && joueur.x<=505.5 && joueur.y>=100 && joueur.y<=460) {
      trou25.setVisible(true);
    } else {
      trou25.setVisible(false);
    }




    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*******************CHANGEMENT DE SCENES*****************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    
    // scène à gauche
    if (joueur.x<43 && joueur.y>350 && joueur.y<470) {
      if (nbcle<7) {
        texte_cle_manquante7.setVisible(true);
        this.time.addEvent({
          delay: 5000,
          callback: ()=>{
            texte_cle_manquante7.setVisible(false);
          },
          loop: false
        });        }
      if (nbcle>=7) {
        this.sound.play('son_Porte',{volume: 0.1});
        vientde = "droite";
        this.scene.start("Piece_HautMilieu");
      }
    }
    //scène en dessous
    if (joueur.x>330 && joueur.x<470 && joueur.y>630) {
      this.sound.play('son_Porte',{volume: 0.1});
      vientde = "haut";
      this.scene.start("Piece_MilieuDroite");
    }



  }


}

///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////************************FONCTIONS***********************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////

function hitChauvesouris21(joueur,chauvesouris21){
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
  
  if (vientde == "bas") {
    joueur.setPosition(400,630);
  }
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }

}

function hitChauvesouris22(joueur,chauvesouris22){
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
  
  if (vientde == "bas") {
    joueur.setPosition(400,630);
  }
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }

}

function hitChauvesouris23(joueur,chauvesouris23){
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
  
  if (vientde == "bas") {
    joueur.setPosition(400,630);
  }
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }

}


function hitTrou23(joueur,trou23){
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
  
  if (vientde == "bas") {
    joueur.setPosition(400,630);
  }
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }

}

function hitTrou24(joueur,trou24){
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
  
  if (vientde == "bas") {
    joueur.setPosition(400,630);
  }
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }

}

function hitTrou25(joueur,trou25){
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
  
  if (vientde == "bas") {
    joueur.setPosition(400,630);
  }
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }

}


function hitCle7(joueur,clesupp7){
  this.sound.play('son_hitCle',{volume: 1});
  clesupp7.destroy(true);
  nbcle=7;
  cle7prise = 1;
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