//---------- GLOBAL VARS ----------//

//---- POS VARIABLES ----//
var gameChar_x;
var gameChar_y;
var floorPos_y;
var collectable = 0.7;
var cameraPosX = 0;

//---- ARRAY POS VARS ----//
var trees_x;
var moutain_x;
var caynon_x;
var Canyon;
var cloud_x;
var grass_x;
var grass3_x;
var grass2_x;
var stars;
var castleX;
var cloud2_x;
var bricks;
var castleWallX;

//---- MOVEMENT VARS ----//
var isLeft;
var isRight;
var isFalling = false;
var isPlummeting;
var isJump;
var stand;

//---- ENV MECHANICS ----//
var platforms;
var Inline;
var onPlatforms;
var isContact;
var gravity;
var bop;
var walkbop;
var Lavabop;
var cloudbop;
var increment = 1;
var decrement = 0.3;

//---- GAME MECHANICS ----//
var gametime;
var game_score = 0;
var flagpole;
var lives = 3;
var respawnCooldown = 0;

//---- BOOL FLAGS -------//
var ground = true;
var lose = false;
var isFound = false;
var livesDecremented = false;
var die = false;
var plumetcanyon = false;
var respawnCooldown = false;
var controlflypast = false;

//---- ART ELEMENTS ----//
var manabarWidth = 200;
var red_Increase = 0;
var blue_Increase = 255;
var green_Increase = 0;
var bubblex;
var bubbley;

//----- PRELOAD --------//
var moon;
var castle;
var doggo;
var grass2;
var grass3;
//-------ENEMIES--------//
var enemies;
//-------DOM ELEMENTS--//
var newParagraph;
