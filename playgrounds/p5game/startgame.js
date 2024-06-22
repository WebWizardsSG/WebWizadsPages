function startGame() {
  //--------------------POSITIONING VALUES--------------------------------//
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y - 3;

  //---------------------BOOLEAN FLAGS: GAME ENVIRONMENT MECHANICS---------//

  gravity = 3;
  isLeft = false;
  isRight = false;
  isFalling = false;
  isJump = false;
  onPlatforms = false;

  //-------------------------------MOUTAIN SETUP---------------------------//
  moutain_x = [
    { xPos: -400, scale: 1.5 },
    { xPos: 0, scale: 0.8 },
    { xPos: 200, scale: 1 },
    { xPos: 900, scale: 1 },
    { xPos: 7600, scale: 1 },
    { xPos: 3000, scale: 1 },
    { xPos: 3300, scale: 1 },
  ];
  //------------------------TREE  SETUP------------------------------------//

  trees_x = [
    { xPos: -600, scale: 1 },
    { xPos: -500, scale: 1 },
    { xPos: -400, scale: 1 },
    { xPos: -300, scale: 1 },
    { xPos: -100, scale: 1 },
    { xPos: 50, scale: 1 },
    { xPos: 200, scale: 1 },
    { xPos: 400, scale: 1 },
    { xPos: 700, scale: 1 },
    { xPos: 900, scale: 1 },
    { xPos: 1500, scale: 1 },
    { xPos: 1700, scale: 1 },
    { xPos: 2300, scale: 1 },
    { xPos: 2500, scale: 1 },
    { xPos: 2800, scale: 1 },
    { xPos: 3000, scale: 1 },
    { xPos: 3500, scale: 1 },
  ];

  //------------------------GRASS  SETUP------------------------------------//
  //The flowers on the level
  grass_x = [
    -600, -550, -530, -500, -450, -430, -300, -290, -70, -60, 0, 10, 50, 80,
    120, 150, 200, 400, 430, 450, 680, 900, 1000, 1100, 1200, 1300, 1700, 1800,
    1900, 2000, 2450, 2500, 2600, 2700, 3200, 3250, 3300, 3350, 3400, 3700,
  ];

  //Television on the ground because why noy
  grass2_x = [400, 1700, 3300];

  //Pipe flower
  grass3_x = [40, 900, 1300];

  //Small castle at end of level
  castleX = [3500];

  //----------------------CAYON  SETUP--------------------------------------//

  canyons = [
    { x_pos: -1700, width: 700 },
    { x_pos: 700,   width: 200 },
    { x_pos: 1400,  width: 300 },
    { x_pos: 2100,  width: 250 },
    { x_pos: 2800,  width: 150 },
  ];

  //------------------------COLLECTABLE  SETUP------------------------------//

  //default for size is 0.7;

  collectables = [
    { x_pos: 300,  y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 540,  y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 800,  y_pos: 300, size: 0.8, isFound: false },
    { x_pos: 1000, y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 1200, y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 1400, y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 1550, y_pos: 300, size: 0.8, isFound: false },
    { x_pos: 1700, y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 1900, y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 2100, y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 2400, y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 2600, y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 2800, y_pos: 405, size: 0.7, isFound: false },
    { x_pos: 2900, y_pos: 300, size: 0.8, isFound: false },
    { x_pos: 3100, y_pos: 405, size: 0.7, isFound: false },
  ];

  //------------------------CLOUD  SETUP------------------------------------//

  cloud_x = [
    { xPos: 200,   scale: 1 },
    { xPos: 600,   scale: 1 },
    { xPos: 900,   scale: 1 },
    { xPos: 1300,  scale: 1 },
    { xPos: 1600,  scale: 1 },
    { xPos: 2000,  scale: 1 },
    { xPos: 2500,  scale: 1 },
    { xPos: 3000,  scale: 1 },
    { xPos: 3500,  scale: 1 },
    { xPos: 4000,  scale: 1 },
    { xPos: 4500,  scale: 1 },
    { xPos: 5000,  scale: 1 },
    { xPos: 5500,  scale: 1 },
    { xPos: 6000,  scale: 1 },
    { xPos: 6500,  scale: 1 },
    { xPos: 7000,  scale: 1 },
    { xPos: 7500,  scale: 1 },
    { xPos: 8000,  scale: 1 },
    { xPos: 8500,  scale: 1 },
    { xPos: 9000,  scale: 1 },
    { xPos: 9500,  scale: 1 },
    { xPos: 10000, scale: 1 },
    { xPos: 10500, scale: 1 },
    { xPos: 11000, scale: 1 },
    { xPos: 11500, scale: 1 },
    { xPos: 12000, scale: 1 },
    { xPos: 12500, scale: 1 },
    { xPos: 13000, scale: 1 },
    { xPos: 13500, scale: 1 },
    { xPos: 14500, scale: 1 },
    { xPos: 15000, scale: 1 },
    { xPos: 15500, scale: 1 },
    { xPos: 16000, scale: 1 },
    { xPos: 16500, scale: 1 },
    { xPos: 17000, scale: 1 },
    { xPos: 17500, scale: 1 },
    { xPos: 18000, scale: 1 },
    { xPos: 18500, scale: 1 },
    { xPos: 19000, scale: 1 },
    { xPos: 19500, scale: 1 },
  ];

  //For the smaller clouds
cloud2_x = [
  { xPos: 200, scale: 1 }, { xPos: 600, scale: 1 }, { xPos: 900, scale: 1 },
  { xPos: 1300, scale: 1 }, { xPos: 1600, scale: 1 }, { xPos: 2000, scale: 1 },
  { xPos: 2500, scale: 1 }, { xPos: 3000, scale: 1 }, { xPos: 3500, scale: 1 },
  { xPos: 4000, scale: 1 }, { xPos: 4500, scale: 1 }, { xPos: 5000, scale: 1 },
  { xPos: 5500, scale: 1 }, { xPos: 6000, scale: 1 }, { xPos: 6500, scale: 1 },
  { xPos: 7000, scale: 1 }, { xPos: 7500, scale: 1 }, { xPos: 8000, scale: 1 },
  { xPos: 8500, scale: 1 }, { xPos: 9000, scale: 1 }, { xPos: 9500, scale: 1 },
  { xPos: 10000, scale: 1 }, { xPos: 105000, scale: 1 }, { xPos: 11000, scale: 1 },
  { xPos: 11500, scale: 1 }, { xPos: 12000, scale: 1 }, { xPos: 12500, scale: 1 },
  { xPos: 13000, scale: 1 }, { xPos: 13500, scale: 1 }, { xPos: 14500, scale: 1 },
  { xPos: 15000, scale: 1 }, { xPos: 15500, scale: 1 }, { xPos: 16000, scale: 1 },
  { xPos: 16500, scale: 1 }, { xPos: 17000, scale: 1 }, { xPos: 17500, scale: 1 },
  { xPos: 18000, scale: 1 }, { xPos: 18500, scale: 1 }, { xPos: 19000, scale: 1 },
  { xPos: 19500, scale: 1 }
];


  stars = [];

  //Coin Object-------------//

  coin = {
    coin_Posy: -5,
  };

  //Game Score--------------//

  game_score = 0;

  //Flagpole objects--------//

  flagpole = { isReached: false, x_pos: 3500 };

  //Lives-------------------//

  lives = 3;

  //Platforms---------------//

  //-------------------PLATFORM----------------------------------------//

  platforms = [];
  platforms.push(createPlatform(400, floorPos_y - 100, 200));
  platforms.push(createPlatform(1500, floorPos_y - 100, 200));
  platforms.push(createPlatform(1600, floorPos_y - 100, 200));
  platforms.push(createPlatform(3000, floorPos_y - 100, 200));
  platforms.push(createPlatform(3200, floorPos_y - 100, 200));

  //-------------------PLATFORM----------------------------------------//

  enemies = [];
  enemies.push(new Enemy(100, floorPos_y - 10, 300));
  enemies.push(new Enemy(1000, floorPos_y - 10, 400));
  enemies.push(new Enemy(1600, floorPos_y - 10, 400));
  enemies.push(new Enemy(1400, floorPos_y - 100, 1000));
}
