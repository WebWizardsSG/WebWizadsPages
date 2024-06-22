function HUD() {
  //Give background to HUD
  fill(0);
  noStroke();
  rect(gameChar_x - 512, 0, 10000, 60);
  rect(-1000, 0, 10000, 60);

  //-------SCORE HUD---------------------------X
  fill(255);
  stroke(0);
  text("score: " + game_score, cameraPosX + 10, 40);
  //-------------------------------------------x

  healthbar();
  manabar();

  //---------RESPAWN TEXT-------//
  if (respawnCooldown == true && !die) {
    //---------Text to display where character has Died----------------//
    fill(255);
    stroke(0);
    textSize(32);
    textFont("comic sans MS");
    text("Respawning...", gameChar_x, 300);

    //-----------------------------------------------------------------//

    //If player presses both left and right together
    if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
      text("Both keys are pressed", gameChar_x, 300);
    }
  }
}

//--------CONTROLS MESSAGE------------------//
function control() {
  if (gametime >= 500 && !controlflypast) {
    stroke(0);
    strokeWeight(3);
    textSize(25);
    textFont("comic sans MS");
    fill(255);
    text(
      "Use the arrow keys to control",
      -increment * (-0.08 * increment),
      100
    );
    //so that the player can read the instructions, then zoom off
  }

  if (gametime > 10000) {
    controlflypast = true; //make the control message disappear after 10 seconds
  }
}

function manabar() {
  if (!isContact && manabarWidth > 0) {
    manabarWidth -= decrement * 0.8;
    red_Increase += 0.5 * 0.7;
    blue_Increase -= 0.5 * 0.7;
  }
  if (isContact && manabarWidth < 200) {
    manabarWidth += decrement * 2;
    red_Increase -= 1;
    blue_Increase += 1;
  }
  if (manabarWidth < 1) {
    //---DISABLE USER INPUT WHEN FALLING------//
    isLeft = false;
    isRight = false;
    isPlummeting = true;
    //---------APPLY GRAVITY TO FALL----------//
    gravity = gravity * 1.1;
    gameChar_y += gravity;
    //---------DEDUCT LIVES-------------------//
    // Only trigger losing a life if not already decremented
    if (!livesDecremented) {
      lose = true;
      livesDecremented = true;
      respawnCooldown = true;
      loseSound.play();
      isFalling = false;
      setTimeout(function () {
        Respawning.play(); //waits for lose sound to complete playing
      }, 1500);

      setTimeout(function () {
        //waits for respawn before setting mana back full
        manabarWidth = 200;
        red_Increase = 0;
        green_Increase = 0;
        blue_Increase = 255;
      }, 5000);
    }
  }
  noStroke();
  fill(255);
  text("Mana", gameChar_x - 180, 40);
  fill(red_Increase, green_Increase, blue_Increase);
  rect(gameChar_x - 100, 20, manabarWidth, 20);
}

//-------------------------------HEALTH BAR-------------------------//
function healthbar() {
  fill(0);
  if (lives == 3) {
	image(health, cameraPosX + 800, -10, 200, 80);
  } else if (lives == 2) {
	image(health, cameraPosX + 800, -10, 200, 80);
	noStroke();
	fill(0);
    rect(cameraPosX + 800, 0, 70, 60);
  } else if (lives == 1) {
    image(health, cameraPosX + 800, -10, 200, 80);
	noStroke();
	fill(0);
    rect(cameraPosX + 800, 0, 120, 60);
  } else if (die == true) {
    image(health, cameraPosX + 800, -10, 200, 80);
	noStroke();
	fill(0);
    rect(cameraPosX + 800, 0, 200, 60);
    bg.stop();
  }
}
