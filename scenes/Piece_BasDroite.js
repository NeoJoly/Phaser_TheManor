class Piece_BasDroite extends Phaser.Scene {
  constructor() {
    super('Piece_BasDroite');

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

    if (piece_basdroite_visitee == 0) {
      texte_histoire_7 = this.add.text(400,675,'Trois chemins, bien.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
    }

    

    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*************************CARTE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    piece_basdroite_visitee = 1;

    if (cartetrouvee == 1) {
      this.add.image(775,25,'indication_carte').setScale(0.75);
      this.add.image(790,40,'indication_carte_piece_actuelle').setScale(0.8).setDepth(2);  // changer la position selon la pièce

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
    
    if (coeur7pris == 0) {viesupp7 = this.physics.add.image(225,475,'coeur').setDepth(1);}

    






    

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
    porte.create(400,87,'porte').setSize(145,60).setOrigin(0.5,0.37);                   // porte du haut
    porte.create(11,407,'porte_gauche');                                                // porte de gauche
    //porte.create(789,407,'porte_droite');                                               // porte de droite
    //porte.create(400,690,'porte').setSize(145,60).setOrigin(0.5,1).setVisible(false);   // porte du bas

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

    // chemins
    bosquet_bas = this.physics.add.staticGroup();
    plante_bas = this.physics.add.staticGroup();


    // chemin 1
    plante_bas.create(150,240,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(150,185,'plante_haut').setDepth(1);

    bosquet_bas.create(275,250,'bosquet_bas').setOrigin(0.5,0).setSize(150,1);
    this.add.image(275,227,'bosquet_haut').setDepth(1);

    bosquet_bas.create(450,250,'bosquet_bas').setOrigin(0.5,0).setSize(150,1);
    this.add.image(450,227,'bosquet_haut').setDepth(1);

    bosquet_bas.create(625,250,'bosquet_bas').setOrigin(0.5,0).setSize(150,1);
    this.add.image(625,227,'bosquet_haut').setDepth(1);



    // chemin 2
    plante_bas.create(150,390,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(150,335,'plante_haut').setDepth(1);

    bosquet_bas.create(275,400,'bosquet_bas').setOrigin(0.5,0).setSize(150,1);
    this.add.image(275,377,'bosquet_haut').setDepth(1);

    bosquet_bas.create(450,400,'bosquet_bas').setOrigin(0.5,0).setSize(150,1);
    this.add.image(450,377,'bosquet_haut').setDepth(1);

    bosquet_bas.create(625,400,'bosquet_bas').setOrigin(0.5,0).setSize(150,1);
    this.add.image(625,377,'bosquet_haut').setDepth(1);

    plante_bas.create(150,440,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(150,385,'plante_haut').setDepth(1);

    plante_bas.create(150,495,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(150,440,'plante_haut').setDepth(1);



    // chemin 3
    plante_bas.create(150,540,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(150,485,'plante_haut').setDepth(1);

    bosquet_bas.create(275,550,'bosquet_bas').setOrigin(0.5,0).setSize(150,1);
    this.add.image(275,527,'bosquet_haut').setDepth(1);

    bosquet_bas.create(450,550,'bosquet_bas').setOrigin(0.5,0).setSize(150,1);
    this.add.image(450,527,'bosquet_haut').setDepth(1);

    bosquet_bas.create(625,550,'bosquet_bas').setOrigin(0.5,0).setSize(150,1);
    this.add.image(625,527,'bosquet_haut').setDepth(1);




    // obstacles

    // trous
    trou26 = this.physics.add.image(40,220,'trou').setVisible(false).setOrigin(0.1,0.1).setSize(60.8,48);
    trou27 = this.physics.add.image(620,300,'trou').setVisible(false).setOrigin(0.1,0.1).setSize(60.8,48);

    // chauve-souris
    chauvesouris24 = this.physics.add.sprite(200,275,'chauve-souris');
    chauvesouris25 = this.physics.add.sprite(600,425,'chauve-souris');
    chauvesouris26 = this.physics.add.sprite(200,575,'chauve-souris');
    chauvesouris27 = this.physics.add.sprite(600,575,'chauve-souris');

    this.anims.create({
      key:'anim_chauve-souris',
      frames: this.anims.generateFrameNumbers('chauve-souris', {start: 0, end: 1}),
      frameRate: 10,
      repeat: -1
    });

    chauvesouris24.anims.play('anim_chauve-souris', true);
    chauvesouris25.anims.play('anim_chauve-souris', true);
    chauvesouris26.anims.play('anim_chauve-souris', true);
    chauvesouris27.anims.play('anim_chauve-souris', true);



    // coeur

    texte_coeur = this.add.text(60,675,'Vous trouvez un coeur, il vous ajoute une vie supplementaire.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);
    coeur = this.add.image(30,675,'coeur').setDepth(5).setVisible(false);




    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***********************COLLISIONS***********************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    this.physics.add.collider(joueur,collisions_murs);
    this.physics.add.collider(joueur,porte);
    this.physics.add.collider(joueur,bosquet_bas);
    this.physics.add.collider(joueur,plante_bas);

    this.physics.add.overlap(joueur,trou26,hitTrou26,null,this);
    this.physics.add.overlap(joueur,trou27,hitTrou27,null,this);
    
    this.physics.add.overlap(joueur,chauvesouris24,hitChauvesouris24,null,this);
    this.physics.add.overlap(joueur,chauvesouris25,hitChauvesouris25,null,this);
    this.physics.add.overlap(joueur,chauvesouris26,hitChauvesouris26,null,this);
    this.physics.add.overlap(joueur,chauvesouris27,hitChauvesouris27,null,this);

    
    this.physics.add.collider(joueur,viesupp7,hitCoeur7,null,this);







    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***************************CLE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    // fonction
    cle = this.add.image(30,675,'cle').setScale(2).setDepth(5).setVisible(false);
    texte_cle_trouvee = this.add.text(60,675,'Vous trouvez une cle supplementaire.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);

    if (cle6prise == 0) {clesupp6 = this.physics.add.image(75,185,'cle').setScale(2).setDepth(0);}
    
    this.physics.add.overlap(joueur,clesupp6,hitCle6,null,this);

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

    if (joueur.x<=150 && joueur.y<=350) {
      trou26.setVisible(true);
    } else {
      trou26.setVisible(false);
    }

    if (joueur.x>=530 && joueur.y<=380 && joueur.y>=280) {
      trou27.setVisible(true);
    } else {
      trou27.setVisible(false);
    }



    if (chauvesouris24.y <= 275) {chauvesouris24.setVelocityY(100);}
    if (chauvesouris24.y >= 375) {chauvesouris24.setVelocityY(-100);}

    if (chauvesouris25.y <= 425) {chauvesouris25.setVelocityY(100);}
    if (chauvesouris25.y >= 525) {chauvesouris25.setVelocityY(-100);}

    if (chauvesouris26.y <= 575) {chauvesouris26.setVelocityY(50);}
    if (chauvesouris26.y >= 675) {chauvesouris26.setVelocityY(-50);}

    if (chauvesouris27.y <= 575) {chauvesouris27.setVelocityY(75);}
    if (chauvesouris27.y >= 675) {chauvesouris27.setVelocityY(-75);}








    this.time.addEvent({
      delay: 5000,
      callback: ()=>{
        texte_histoire_7.setVisible(false);
      },
      loop: false
    });



    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*******************CHANGEMENT DE SCENES*****************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    
    // scène à gauche
    if (joueur.x<43 && joueur.y>350 && joueur.y<470) {
      this.sound.play('son_Porte',{volume: 0.1});
      vientde = "droite";
      this.scene.start("Piece_BasMilieu");
    }
    // scène au dessus
    if (joueur.x>330 && joueur.x<470 && joueur.y<150) {
      if (nbcle<6) {
        texte_cle_manquante6.setVisible(true);
        this.time.addEvent({
          delay: 5000,
          callback: ()=>{
            texte_cle_manquante6.setVisible(false);
          },
          loop: false
        });        }
      if (nbcle>=6) {
        this.sound.play('son_Porte',{volume: 0.1});
        vientde = "bas";
        this.scene.start("Piece_MilieuDroite");
      }
    }


  }


}

///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////************************FONCTIONS***********************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////

function hitTrou26(joueur,trou26){
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
  
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }
  if (vientde == "haut") {
    joueur.setPosition(400,150);
  }

}

function hitTrou27(joueur,trou27){
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
  
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }
  if (vientde == "haut") {
    joueur.setPosition(400,150);
  }
  

}

function hitChauvesouris24(joueur,chauvesouris24){
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
  
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }
  if (vientde == "haut") {
    joueur.setPosition(400,150);
  }
}

function hitChauvesouris25(joueur,chauvesouris25){
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
  
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }
  if (vientde == "haut") {
    joueur.setPosition(400,150);
  }
}

function hitChauvesouris26(joueur,chauvesouris26){
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
  
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }
  if (vientde == "haut") {
    joueur.setPosition(400,150);
  }
}

function hitChauvesouris27(joueur,chauvesouris27){
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
  
  if (vientde == "gauche") {
    joueur.setPosition(50,400);
  }
  if (vientde == "haut") {
    joueur.setPosition(400,150);
  }
}

function hitCoeur7(joueur,viesupp7){
  this.sound.play('son_hitCoeur',{volume: 0.3});
  viesupp7.destroy(true);
  coeur7pris = 1;
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


function hitCle6(joueur,clesupp6){
  this.sound.play('son_hitCle',{volume: 1});
  clesupp6.destroy(true);
  nbcle=6;
  cle6prise = 1;
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