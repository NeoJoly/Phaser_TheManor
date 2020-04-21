var config = {
  width: 800,
  height: 700,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:0},
            debug: false
        }
    },
    scene: [
      //Menu,
      Preload,
      Piece_Milieu,
      Piece_MilieuDroite,
      Piece_HautGauche,
      Piece_HautMilieu,
      Piece_HautDroite,
      Piece_MilieuGauche,
      Piece_BasGauche,
      Piece_BasMilieu,
      Piece_BasDroite,
      MenuFin,
    ]
  }

var game = new Phaser.Game(config);
