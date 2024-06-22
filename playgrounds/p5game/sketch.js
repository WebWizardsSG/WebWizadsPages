preload();

function setup() {
  createCanvas(1024, 576);

  //-------START GAME FUNCTION CALL----------//
  startGame();

  bg.play();
  Birds.play();
  Birds.setVolume(2);
}

function draw() {
  background(13, 42, 117);

  isContact = false;
  Inline = false;
  isFalling = false;

  animations();

  //CAMERA-----------------------------------//

  if (isRight == true) {
    cameraPosX += 5;
  } else if (isLeft == true) {
    cameraPosX -= 5;
  }
  push();
  translate(-cameraPosX, 0);

  //------------TRACK PLAYERWORLD POSITION------//
  gameChar_x_world = gameChar_x + cameraPosX;

  //----DRAW ENVIRONMENT----//
  drawStars();
  drawMoon();
  drawClouds();
  drawMoutains();
  drawTrees();
  drawGrass();

  //-----DRAW COIN----------//

  for (var i = 0; i < collectables.length; i++) {
    if (!collectables[i].isFound) {
      checkCollectable(collectables[i]);
      drawCollectible(collectables[i]); // Always draw collectable unless it is found
    }
  }
  //-----DRAW CANYON-------//

  for (var i = 0; i < canyons.length; i++) {
    checkCanyon(canyons[i]);
    drawCanyon(canyons[i]);
  }
  control();
  drawCharacter();
  drawEnemies();
  drawFriend();
  drawBricks();
  LevelEnd();
  renderFlagpole();
  drawPlatforms();
  sign();
  checkIfCharacterIsOnAnyPlatform();
  pop();
  interaction();
  checkPlayerDie();
  HUD();
  playerWin();
}
