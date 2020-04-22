class Piece_MilieuDroite extends Phaser.Scene {
  constructor() {
    super('Piece_MilieuDroite');

  }
  
  init(){}
  preload(){}
  create(){
    timer = 0;

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

    if (piece_milieudroite_visitee == 0) {
      texte_histoire_2 = this.add.text(400,675,'Je me demande combien il y a de pieces ici. Il me faudrait une carte pour me reperer.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0.5,0.5).setDepth(5).setVisible(true);
    }

    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////*************************CARTE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    piece_milieudroite_visitee = 1;

    if (cartetrouvee == 1) {
      this.add.image(775,25,'indication_carte').setScale(0.75);
      this.add.image(790,25,'indication_carte_piece_actuelle').setScale(0.8).setDepth(2);  // changer la position selon la pièce

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

    if (coeur2pris == 0) {viesupp2 = this.physics.add.image(49,600,'coeur').setDepth(1);}






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

    texte_prendre = this.add.text(420,675,'Prendre',{fontFamily:'insomnia',fontSize:20}).setOrigin(0.5,0.5).setDepth(5).setVisible(false);
    texte_carte_trouvee = this.add.text(60,675,'Vous trouvez la carte du manoir. Vous pouvez a present vous reperer en regardant en haut a droite de l\'ecran.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);
    carte = this.add.image(30,675,'carte').setDepth(5).setVisible(false);
    touche_w = this.add.image(345,673,'touche_w').setDepth(5).setScale(0.7).setVisible(false);

    if (cartetrouvee == 0) {
      carte_collider = this.physics.add.staticGroup();
      carte_collider.create(350,250,'carte').setDepth(5).setVisible(false);
    }

    plante_bas = this.physics.add.staticGroup();
    plante_bas.create(60,150,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(60,95,'plante_haut').setDepth(1);
    plante_bas.create(740,150,'plante_bas').setOrigin(0.5,0).setSize(75,1);
    this.add.image(740,95,'plante_haut').setDepth(1);
    plante_bas.create(740,650,'plante_bas').setOrigin(0.5,0).setSize(75,1).setDepth(-1);
    this.add.image(740,595,'plante_haut').setDepth(1);
    plante_bas.create(60,650,'plante_bas').setOrigin(0.5,0).setSize(75,1).setDepth(-1);
    this.add.image(60,595,'plante_haut').setDepth(1);

    placard_bas = this.physics.add.staticGroup();
    placard_bas.create(690,275,'placard_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(690,225,'placard_haut').setDepth(1);
    placard_bas.create(690,400,'placard_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(690,350,'placard_haut').setDepth(1);
    placard_bas.create(690,525,'placard_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(690,475,'placard_haut').setDepth(1);

    bibliotheque_bas = this.physics.add.staticGroup();
    bibliotheque_bas.create(420,240,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1).setFlipX(true);
    this.add.image(420,190,'bibliotheque_haut').setDepth(1).setFlipX(true);
    bibliotheque_bas.create(420,400,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1).setFlipX(true);
    this.add.image(420,350,'bibliotheque_haut').setDepth(1).setFlipX(true);
    bibliotheque_bas.create(420,560,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(420,510,'bibliotheque_haut').setDepth(1);
    bibliotheque_bas.create(240,240,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1);
    this.add.image(240,190,'bibliotheque_haut').setDepth(1);
    bibliotheque_bas.create(240,400,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1).setFlipX(true);
    this.add.image(240,350,'bibliotheque_haut').setDepth(1).setFlipX(true);
    bibliotheque_bas.create(240,560,'bibliotheque_bas').setOrigin(0.5,0).setSize(180,1).setFlipX(true);
    this.add.image(240,510,'bibliotheque_haut').setDepth(1).setFlipX(true);


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
    this.physics.add.collider(joueur,placard_bas);
    this.physics.add.collider(joueur,bibliotheque_bas);

    if (cartetrouvee == 0) {this.physics.add.overlap(joueur,carte_collider,hitCarte,null,this);}
    
    this.physics.add.collider(joueur,viesupp2,hitCoeur2,null,this);




    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////***************************CLE**************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////
    ///////////////////////////********************************************************///////////////////////////

    // fonction
    cle = this.add.image(30,675,'cle').setScale(2).setDepth(5).setVisible(false);
    texte_cle_trouvee = this.add.text(60,675,'Vous trouvez une cle supplementaire.',{fontFamily:'sbitn',fontSize:43}).setOrigin(0,0.5).setDepth(5).setVisible(false);

    if (cle1prise == 0) {clesupp1 = this.physics.add.image(690,550,'cle').setScale(2).setDepth(1).setVisible(false);}
    
    this.physics.add.overlap(joueur,clesupp1,hitCle1,null,this);

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
        texte_histoire_2.setVisible(false);
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
      this.scene.start("Piece_Milieu");
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
        this.scene.start("Piece_HautDroite");
      }
    }
    //scène en dessous
    if (joueur.x>330 && joueur.x<470 && joueur.y>630) {
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
        vientde = "haut";
        this.scene.start("Piece_BasDroite");
      }
    }



  }


}



///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////************************FONCTIONS***********************///////////////////////////
///////////////////////////********************************************************///////////////////////////
///////////////////////////********************************************************///////////////////////////

function hitCarte(joueur,carte_collider){
  if (cartetrouvee == 0 && joueur.x > 330 && joueur.x < 370 && joueur.y > 250 && joueur.y < 280) {
    texte_prendre.setVisible(true);
    touche_w.setVisible(true);
  } else {
    texte_prendre.setVisible(false);
    touche_w.setVisible(false);
  }
  if (pressw.isDown && timer == 0) {
    timer=1;
    this.sound.play('son_hitCarte',{volume: 0.3});
    texte_prendre.setVisible(false);
    touche_w.setVisible(false);
    cartetrouvee = 1;
    carte.setVisible(true);
    texte_carte_trouvee.setVisible(true);
    this.time.addEvent({
      delay: 7000,
      callback: ()=>{
        timer=0;
        carte.setVisible(false);
        texte_carte_trouvee.setVisible(false);
      },
      loop: false
    });
  }
  if (cartetrouvee == 1) {
    this.add.image(775,25,'indication_carte').setScale(0.75);
    this.add.image(790,25,'indication_carte_piece_actuelle').setScale(0.8).setDepth(2);  // changer la position selon la pièce

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
}

function hitCoeur2(joueur,viesupp2){
  this.sound.play('son_hitCoeur',{volume: 0.3});
  viesupp2.destroy(true);
  coeur2pris = 1;
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

function hitCle1(joueur,clesupp1){
  if (cle1prise == 0 && joueur.x > 673 && joueur.x < 707 && joueur.y > 535 && joueur.y < 565) {
    texte_prendre.setVisible(true);
    touche_w.setVisible(true);
  } else {
    texte_prendre.setVisible(false);
    touche_w.setVisible(false);
  }
  if (cle1prise == 0 && joueur.x > 673 && joueur.x < 707 && joueur.y > 535 && joueur.y < 565 && pressw.isDown && timer == 0) {
    timer=1;
    this.sound.play('son_hitCle',{volume: 1});
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        texte_prendre.setVisible(false);
        touche_w.setVisible(false);
        nbcle=1;
        cle1prise = 1;
        cle.setVisible(true);
        texte_cle_trouvee.setVisible(true);
      },
      loop: false
    });
    this.time.addEvent({
      delay: 7000,
      callback: ()=>{
        timer=0;
        cle.setVisible(false);
        texte_cle_trouvee.setVisible(false);
      },
      loop: false
    });
  }
  if (nbcle == 1) {texte_nbcle.setText('x 1');}
  if (nbcle == 2) {texte_nbcle.setText('x 2');}
  if (nbcle == 3) {texte_nbcle.setText('x 3');}
  if (nbcle == 4) {texte_nbcle.setText('x 4');}
  if (nbcle == 5) {texte_nbcle.setText('x 5');}
  if (nbcle == 6) {texte_nbcle.setText('x 6');}
  if (nbcle == 7) {texte_nbcle.setText('x 7');}
}