// variables initialisation
var joueur; var vientde = "nothing";
var collisions_murs; var collisions_murs_bas; var collisions_murs_haut_chauvesouris;
var timer = 0; var texte_pressenter;
var transition;


// variables touches
var cursors; var pressenter; var pressshift; var pressw; var touche_w;


// variables objets
var porte;
var torche1; var torche2; var torche3; var torche4;
var bosquet_bas; var plante_bas; var placard_bas; var bibliotheque_bas;

var nbcle = 0; var texte_nbcle; var cle;
var cle1prise = 0; var cle2prise = 0; var cle3prise = 0; var cle4prise = 0; var cle5prise = 0; var cle6prise = 0; var cle7prise = 0;
var clesupp1; var clesupp2; var clesupp3; var clesupp4; var clesupp5; var clesupp6; var clesupp7;
var texte_cle_trouvee;

var carte; var cartetrouvee = 0; var texte_prendre; var texte_carte_trouvee; var carte_collider;

var piece_milieu_visitee = 0; var piece_milieudroite_visitee = 0; var piece_milieugauche_visitee = 0; var piece_hautdroite_visitee = 0; var piece_basdroite_visitee = 0;
var piece_hautgauche_visitee = 0; var piece_basgauche_visitee = 0; var piece_hautmilieu_visitee = 0; var piece_basmilieu_visitee = 0; 


// variables monstres
var rdmchauvesouris;

var chauvesouris1; var chauvesouris2; var chauvesouris3; var chauvesouris4; var chauvesouris5; var chauvesouris6;

var chauvesouris7; var chauvesouris8; var chauvesouris9; var chauvesouris10; var chauvesouris11; var chauvesouris12;
var chauvesouris13; var chauvesouris14; var chauvesouris15; var chauvesouris16; var chauvesouris17;

var chauvesouris18; var chauvesouris19; var chauvesouris20;

var chauvesouris21; var chauvesouris22; var chauvesouris23;

var chauvesouris24; var chauvesouris25; var chauvesouris26; var chauvesouris27;

var trou1; var trou2; var trou3; var trou4; var trou5; var trou6; var trou7; var trou8;
var trou9; var trou10; var trou11; var trou12; var trou13; var trou14; var trou15;
var trou16; var trou17; var trou18; var trou19; var trou20; var trou21; var trou22;

var trou23; var trou24; var trou25;

var trou26; var trou27;


// variables vies
var nbcoeur = 3; var coeur; var texte_coeur;
var viesupp1 = 0; var viesupp2 = 0; var viesupp3 = 0; var viesupp4 = 0; var viesupp5 = 0; var viesupp6 = 0; var viesupp7 = 0; 
var coeur1pris = 0; var coeur2pris = 0; var coeur3pris = 0; var coeur4pris = 0; var coeur5pris = 0; var coeur6pris = 0; var coeur7pris = 0; 


// textes histoire
var texte_histoire_1; var texte_histoire_2; var texte_histoire_3; var texte_histoire_4; var texte_histoire_5; var texte_histoire_6; var texte_histoire_7; var texte_histoire_8; var texte_histoire_9;

// textes clés manquantes
var texte_cle_manquante1; var texte_cle_manquante2; var texte_cle_manquante3; var texte_cle_manquante4; var texte_cle_manquante5; var texte_cle_manquante6; var texte_cle_manquante7; 

// final
var lueur_fin; var trou_fin;


// sounds
var son_horrorAmbience; var son_finAmbience; 
var son_hitCle; var son_hitCarte; var son_hitCoeur; var son_hitEnnemi; var son_hitTrouFin; var son_Porte;


class Preload extends Phaser.Scene {
  constructor() {
    super('Preload');
  }
  init(){}  
  preload(){


    this.load.image('gameovertint','assets/gameover.png');

    this.load.spritesheet('transition','assets/transition.png',{frameWidth:800,frameHeight:700});
  
    // fond + collisions
    this.load.image('piece_manoir','assets/pieces/piece_manoir.png');
    this.load.image('collisions_murs_haut','assets/collisions_murs/collisions_murs_haut.png');
    this.load.image('collisions_murs_cotes','assets/collisions_murs/collisions_murs_cotes.png');
    this.load.image('collisions_murs_bas','assets/collisions_murs/collisions_murs_bas.png');

    // joueur
    this.load.image('perso_idle','assets/perso/perso_idle.png');
    this.load.spritesheet('perso_droite','assets/perso/perso_droite.png',{frameWidth: 13,frameHeight: 27});
    this.load.spritesheet('perso_bas','assets/perso/perso_bas.png',{frameWidth: 17,frameHeight: 27});
    this.load.spritesheet('perso_haut','assets/perso/perso_haut.png',{frameWidth: 17,frameHeight: 27});
    this.load.spritesheet('perso_stop','assets/perso/perso_stop.png',{frameWidth: 17,frameHeight: 27});

    // portes
    this.load.image('porte','assets/objets/porte.png');
    this.load.image('porte_droite','assets/objets/porte_droite.png');
    this.load.image('porte_gauche','assets/objets/porte_gauche.png');

    // torches
    this.load.spritesheet('torche','assets/objets/torche.png',{frameWidth: 30,frameHeight: 50});

    // objets
    this.load.image('cle','assets/objets/cle.png');

    this.load.image('bosquet_haut','assets/objets/bosquet_haut.png');
    this.load.image('bosquet_bas','assets/objets/bosquet_bas.png');
    
    this.load.image('plante_haut','assets/objets/plante_haut.png');
    this.load.image('plante_bas','assets/objets/plante_bas.png');

    this.load.image('placard_haut','assets/objets/placard_haut.png');
    this.load.image('placard_bas','assets/objets/placard_bas.png');

    this.load.image('bibliotheque_haut','assets/objets/bibliotheque_haut.png');
    this.load.image('bibliotheque_bas','assets/objets/bibliotheque_bas.png');

    // chauve-souris
    this.load.spritesheet('chauve-souris','assets/monstres/chauve-souris.png',{frameWidth: 39,frameHeight: 32});

    // carte
    this.load.image('indication_carte','assets/pieces/indication_carte.png');
    this.load.image('indication_carte_piece_actuelle','assets/pieces/indication_carte_piece_actuelle.png');
    this.load.image('indication_carte_piece_visitee','assets/pieces/indication_carte_piece_visitee.png');
    this.load.image('carte','assets/objets/carte.png');

    // touches
    this.load.image('touche_w','assets/touches/touche_w.png');

    // coeurs
    this.load.image('coeur','assets/coeurs/coeur.png');
    this.load.image('coeur1','assets/coeurs/coeur1.png');
    this.load.image('coeur2','assets/coeurs/coeur2.png');
    this.load.image('coeur3','assets/coeurs/coeur3.png');
    this.load.image('coeur4','assets/coeurs/coeur4.png');
    this.load.image('coeur5','assets/coeurs/coeur5.png');
    this.load.image('coeur6','assets/coeurs/coeur6.png');
    this.load.image('coeur7','assets/coeurs/coeur7.png');
    this.load.image('coeur8','assets/coeurs/coeur8.png');
    this.load.image('coeur9','assets/coeurs/coeur9.png');
    this.load.image('coeur10','assets/coeurs/coeur10.png');
    this.load.image('cachecoeurs','assets/coeurs/cachecoeurs.png');

    // trous
    this.load.image('trou','assets/monstres/trou.png');


    // final
    this.load.image('trou_fin','assets/final/trou_fin.png');
    this.load.spritesheet('lueur_fin','assets/final/lueur_fin.png',{frameWidth: 300,frameHeight: 300});






    // sounds
    son_finAmbience = this.load.audio('son_finAmbience','sounds/FinAmbience.wav');
    son_hitCle = this.load.audio('son_hitCle','sounds/HitCle.wav');
    son_hitCarte = this.load.audio('son_hitCarte','sounds/HitCarte.wav');
    son_hitCoeur = this.load.audio('son_hitCoeur','sounds/HitCoeur.wav');
    son_hitEnnemi = this.load.audio('son_hitEnnemi','sounds/HitEnnemi.wav');
    son_hitTrouFin = this.load.audio('son_hitTrouFin','sounds/HitTrouFin.wav');
    son_Porte = this.load.audio('son_Porte','sounds/Porte.wav');



  }
  
  
  create(){}
  update(){this.scene.start("Piece_Milieu");}
}
  