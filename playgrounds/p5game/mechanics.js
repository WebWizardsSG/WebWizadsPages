//--------MECHANICS---------------------------//
function checkCanyon(canyon) {
  if (
    gameChar_x > canyon.x_pos + 55 &&
    gameChar_x < canyon.x_pos + canyon.width - 33 &&
    gameChar_y >= floorPos_y &&
    !livesDecremented
  ) {
    //---DISABLE USER INPUT WHEN FALLING------//
    isLeft = false;
    isRight = false;
    isPlummeting = true;

    //---------APPLY GRAVITY TO FALL----------//
    gravity = gravity * 1.1;
    gameChar_y += gravity;

    //---------DEDUCT LIVES-------------------//

    // Only trigger losing a life if not already decremented
    if (!livesDecremented && !die) {
      lose = true;
      livesDecremented = true;
      respawnCooldown = true;
      loseSound.play();
      setTimeout(function () {
        Respawning.play(); //waits for lose sound to complete playing
      }, 1500);
    }
  }
}

function checkPlayerDie() {
  if (lose && lives > 0 && livesDecremented == true) {
    lives -= 1; //decrement lives by 1

    //-------------RESET BOOLEAN FLAGS----------//

    lose = false;
    isFalling = false;

    //---------Text to display where character has Died-------------------//
    fill(255);
    textSize(32);
    textFont("comic sans MS");
    //--------------------------------------------------------------------//
    //---------COOLDOWN TIMER-------------------//

    setTimeout(function () {
      respawn(); // Call respawn function to reset the player state
      livesDecremented = false; // Reset the flag after respawning
      respawnCooldown = false;
      manabarWidth = 200;
      red_Increase = 0;
      green_Increase = 0;
      blue_Increase = 255;
    }, 5000); //responds in 3 seconds
  } else if (lives <= 0) {
    die = true;

    textSize(30);
    fill(0, 0, 0, 90);
    rect(-2000, 0, 10000, height);
    fill(255);
    text("GAME OVER", cameraPosX + 400, 300);
    const h1Elements = document.getElementsByTagName("h1");

    // Assuming there's only one h1 element
    if (h1Elements.length > 0) {
      h1Elements[0].style.display = "block";
    }
    const reloadElement = document.getElementById("reloadElement");
    reloadElement.addEventListener("click", function() {
      window.location.reload();
    });
  }
}

function respawn() {
  gameChar_x = width / 2;
  gameChar_y = 432;
  cameraPosX = 0; //reset camera position
  gravity = 2; // Reset gravity
  isPlummeting = false;
  isFalling = false;
}

//-------------------------------FLAG POLE--------------------------//
function renderFlagpole() {
  push();
  strokeWeight(5);
  stroke(180);
  line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);

  fill(132, 0, 255);
  noStroke();

  if (flagpole.isReached == true) {
    fill(random(0, 255), random(0, 255), 255);
    rect(flagpole.x_pos, floorPos_y - 250, 70, 50);
    image(doggo, flagpole.x_pos - 10, floorPos_y - 305);
  } else {
    fill(0);
    rect(flagpole.x_pos, floorPos_y - 50, 70, 50);
    image(doggo, flagpole.x_pos - 10, floorPos_y - 100);
  }
}

function checkFlagpole() {
  var d = abs(gameChar_x - flagpole.x_pos);

  if (d < 15) flagpole.isReached = true;
}
//-------Win Sdreen--------------//
function playerWin() {
    if(gameChar_x > 4350){
    textSize(30);
    fill(0, 0, 0, 90);
    rect(-2000, 0, 10000, height);
    fill(255);
    text("YOU WIN", cameraPosX + 400, 300);
    noLoop();
    }
}
//--------------------------------INTERACTION FUNCTION-------------//

function interaction() {
  //--Prevent a bug where character doesnt plummet when in canyon--//

  if (isPlummeting) {
    gravity = gravity * 1.1;
    gameChar_y += gravity;
    return;
  }

  //--------------------------------WALK------------------------------------X

  if (gameChar_y > 434 && (isFalling == false || isPlummeting == false)) {
    gameChar_y = floorPos_y; //this is to prevent a bug where sometimes the character falls through the floor slowly
  }

  if (isLeft == true && (isJump == true || isFalling == true)) {
    gameChar_x -= 5;
  }

  if (isRight == true && (isJump == true || isFalling == true)) {
    gameChar_x += 5;
  }

  //comments: This is to prevent the walkbop animation from activating while jumping for while falling

  //TO PREVENT A BUG WERE IF LEFT AND RIGHT BOTH PRESSED, CAMERAPOSX BREAKS------X
  if (isRight == true && isLeft == true) {
    isRight = false;
    isLeft = false;
    cameraPosX = gameChar_x - 512;
  }
  //-------------------------------------ANIMATED__WALK---------------------X

  if (isLeft == true && isJump == false && isFalling == false) {
    gameChar_x -= 5;
    //    gameChar_y = gameChar_y + walkbop; //for walking animation
  }

  if (isRight == true && isJump == false && isFalling == false) {
    gameChar_x += 5;
    gameChar_y = gameChar_y + walkbop; //for walking animation
  }

  //-----------------------------------MAX HEIGHT---------------------------X

  if (isJump == true) {
    gameChar_y -= 10;

    //Max Height Jumping from ground
    if (gameChar_y < 300) {
      isJump = false;
      isFalling = true;
    }
  }

  //Once player is in the air, it is not in contact
  if (gameChar_y <= floorPos_y) {
    isContact = false;

    for (var i = 0; i < platforms.length; i++) {
      //-----------------------------------------------------//
      //If checkContact returns true, player is on platform, after passing X and Y axis check at platform.js line 21
      if (platforms[i].checkContact(gameChar_x_world, gameChar_y) == true) {
        isContact = true; //if player on platform, isContact is true

        isFalling = false; //and is not falling

        break;
      }
    }

    //If not on platform, but on ground
    if (!isContact && gameChar_y < 432) {
      gameChar_y += gravity * 1.3;
      isFalling = false;
    }
  }
  //-------------------------------------GRAVITY----------------------------X
  else if (gameChar_y < floorPos_y) {
    isJump = false;
    gameChar_y += gravity;
  }

  //-------------------------------------JUMP RIGHT-------------------------X
  else if (gameChar_y < floorPos_y && isRight == true) {
    isRight = true;
    isJump = true;
  }

  //-------------------------------------FALL RIGHT------------------------X
  else if (isJump && isRight == true) {
    isRight = true;
    isJump = false;
    isFalling = true;
  }

  //--------------------------------------FALL LEFT-------------------------X
  else if (isJump && isLeft == true) {
    isLeft = true;
    isJump = false;
    isFalling = true;
  }

  //--------------------------------------HAS FALLEN GROUND----------------X
  else if (gameChar_y >= floorPos_y) {
    isFalling = false;
  }

  //---------------------------------------JUMP LEFT------------------------X
  else if (gameChar_y < floorPos_y && isLeft == true) {
    isLeft = true;
    isJump = true;
  }

  //---------------------------------------FLAG POLE-------------------------X
  if (flagpole.isReached == false) {
    checkFlagpole();
  }

  //---------PREVENT DOUBLE JUMPS
  if (gameChar_y < 431 && !Inline) {
    isFalling = true;
  }

  //--------------------------------------Character disappears and do not respawn-------------X

  if (die == true) {
    gameChar_y = 1000;
  }
}
