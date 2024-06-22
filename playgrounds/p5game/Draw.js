//------------------------------DRAW FUNCTIONS

//-------------------DRAW STARS----------------------X

function drawStars() {
  let r = 5;

  fill(235, 231, 0);
  ellipse(gameChar_x - 400, 100, r);
  ellipse(gameChar_x + 400, 150, r);
  ellipse(gameChar_x + 400, 150, r);
  ellipse(gameChar_x + 350, 200, r);
  ellipse(gameChar_x + 430, 350, r);
  ellipse(gameChar_x + 300, 150, r);
  ellipse(gameChar_x + 200, 150, r);
  ellipse(gameChar_x + 250, 200, r);
  ellipse(gameChar_x + 170, 350, r);

  ellipse(gameChar_x - 330, 350, r);
  ellipse(gameChar_x - 200, 150, r);
  ellipse(gameChar_x - 100, 150, r);
  ellipse(gameChar_x - 150, 200, r);
  ellipse(gameChar_x - 70, 350, r);

  ellipse(gameChar_x - 400, 150, r);
  ellipse(gameChar_x - 500, 200, r);
  ellipse(gameChar_x - 450, 350, r);
}

function drawClouds() {
  //-------------------CLOUDS ANIMATIONS----------------------X

  for (var i = 0; i < cloud_x.length; i++) {
    gametime = millis();

    if (gametime < 100000) {
      increment -= 0.015;
    } else if (gametime > 100000) {
      increment += 0.015;
    }

    //----------------CLOUD SKETCH-----------------------------X

    noStroke();
    fill(200);

    ellipse(
      cloud_x[i].xPos + increment, //make sure that clouds move to the right
      130 + cloudbop, //add bopping effect to cloud
      100,
      100
    );

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 130 + cloudbop, 100, 110);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 100 + cloudbop, 80, 80);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 100 + increment, 130 + cloudbop, 100, 100);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 50 + increment, 130 + cloudbop, 50, 50);

	ellipse(cloud_x[i].xPos * cloud_x[i].scale - 140 + increment, 130 + cloudbop, 80, 50);
  }

//----------------SMALLER CLOUD-----------------------------X
    for (var i = 0; i < cloud2_x.length; i++) {
      fill(255);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 3, 70, 50, 50);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 3, 70, 40, 40);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 3, 70, 20, 20);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 3, 70, 40, 40);

      fill(225);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + increment * 2, 150, 70, 70);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 20 + increment * 2, 150, 60, 60);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale - 40 + increment * 2, 150, 40, 40);
      ellipse(cloud2_x[i].xPos * cloud2_x[i].scale + 25 + increment * 2, 150, 60, 60);
    }
}

function LevelEnd() {
  noStroke();
  fill(13, 42, 117);

  rect(3800, floorPos_y, 500, 150);

  //-----------------LAVA CODE-------------------------------------//

  fill(225, 40, 0);
  rect(3800, floorPos_y + 50 + bop * 0.75, 500 - 10, 100);

  bubblex = random(3800 + 30, 3800 + 500 - 22);
  bubbley = random(floorPos_y + 150, floorPos_y + 70);

  //----------------BUBBLES IN LAVA-----------------------------------------------//

  fill(250, 114, 56);
  circle(bubblex, bubbley, 10);

  //---------------CANYON WALLS--------------------------------------------------//
  fill(80);
  stroke(80);
  rect(3800, floorPos_y, 20, 150);
  rect(3800 + 500 - 10, floorPos_y, 20, 150);

  noStroke();
  fill(127, 127, 127);

  //Castle Wall
  rect(4300, 0, 400, 432);

  stroke(0);

  //Bridge
  fill(188, 156, 102);
  rect(3800, 432, 500, 20);

  //Draw String
  line(4300, 50, 3800, 432);

  //Wheels
  fill(127, 127, 127);
  ellipse(4300, 432, 30, 30);

  fill(188, 156, 102);
  ellipse(4300, 50, 30, 30);
  fill(127, 127, 127);
  ellipse(4300, 50, 10, 10);

  fill(127, 127, 127);

  fill(127, 127, 127);
  ellipse(3800, 440, 30, 30);
  fill(188, 156, 102);
  ellipse(3800, 440, 10, 10);

  drawBricks();

  //Castle windows
  fill(0);
  arc(-835, 100, 70, 50, PI, TWO_PI);
  rect(-870, 100, 70, 80);
  arc(-565, 100, 70, 50, PI, TWO_PI);
  rect(-600, 100, 70, 80);

  arc(4365, 100, 70, 50, PI, TWO_PI);
  rect(4330, 100, 70, 80);
  arc(4635, 100, 70, 50, PI, TWO_PI);
  rect(4600, 100, 70, 80);
}

//Bricks of the castlewall
function drawBricks() {
  drawbirck();

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 10; j++) {
      image(bricks, 4300 + i * 50, floorPos_y - 50 - j * 50, 50, 50);
    }
  }

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 15; j++) {
      image(bricks, -900 + i * 50, floorPos_y - 50 - j * 50, 50, 50);
    }
  }
}
function drawTrees() {
  //-------------------------------------TREE------------------------------//

  //-----------FOR LOOP FOR TREE REPEAT-------------X

  for (var i = 0; i < trees_x.length; i++) {
    //-----------------------TRUNK-------------------------------------------X

    noStroke();
    fill(139, 69, 19); // color of tree trunk

    noStroke();
    rect(trees_x[i].xPos * trees_x[i].scale + 212, 288, 33, 144);

    //---------------TREE__TRIANGLE_BRANCHES---------------------------------X

    fill(0, 80, 0);
    triangle(
      trees_x[i].xPos * trees_x[i].scale + 180,
      370, //left angle
      trees_x[i].xPos * trees_x[i].scale + 280,
      370, // right angle
      trees_x[i].xPos * trees_x[i].scale + 230,
      260
    ); // Apex

    fill(0, 100, 0); //tree branch color
    triangle(
      trees_x[i].xPos * trees_x[i].scale + 180,
      340, //left angle
      trees_x[i].xPos * trees_x[i].scale + 280,
      340, //right angle
      trees_x[i].xPos * trees_x[i].scale + 230,
      230
    ); //Apex

    fill(0, 120, 0); //tree branch color
    triangle(
      trees_x[i].xPos * trees_x[i].scale + 190,
      300, //left angle
      trees_x[i].xPos * trees_x[i].scale + 270,
      300, //right angle
      trees_x[i].xPos * trees_x[i].scale + 230,
      230
    ); //Apex

    //-----------------------------------------------------------------------X
  }
}



function drawGrass() {
  //-------------------------------------TREE------------------------------//

  //-----------FOR LOOP FOR GRASS REPEAT-------------X

  for (var i = 0; i < grass2_x.length; i++) {
    image(grass2, grass2_x[i], floorPos_y - 150, 150, 150);
  }

  for (var i = 0; i < grass3_x.length; i++) {
    image(grass3, grass3_x[i], floorPos_y - 130, 130, 130);
  }

  for (var i = 0; i < grass_x.length; i++) {
    image(grass, grass_x[i], floorPos_y - 50, 50, 50);
  }

  dog();
}

//---------------------------------DOG CHARACTER---------------------------//
var doggo_x = 550;

let movingRight = false; // Initialize outside of the function

function dog() {
  let doggo_y = floorPos_y - 100;
  push(); // Save current transformation matrix

  if (doggo_x <= 550 && doggo_x > 0 && !movingRight) {
    doggo_x -= 0.5;
    if (doggo_x == 0) {
      movingRight = true;
    }
    // Draw the dog image normally
    image(doggo, doggo_x, doggo_y);
  } else if (movingRight) {
    doggo_x += 0.5;
    if (doggo_x == 550) {
      movingRight = false;
    }
    translate(doggo_x + doggo.width, doggo_y);
    scale(-1, 1);
    image(doggo, 0, 0);
  }

  pop(); // Restore the transformation matrix
}
//---------------------------MOONs and friend---------------------------------//

function drawMoon() {
  image(moon, gameChar_x + 200, 30, 150, 150);
  image(planet, gameChar_x - 400, 150, 150, 150);
}

function drawFriend() {
  image(friend, gameChar_x - 60, gameChar_y - 100 + cloudbop, 50, 50);
}

function drawMoutains() {
  //-------------------------------MOUTAINS--------------------------------//

  for (var i = 0; i < moutain_x.length; i++) {
    //--------------------------TRIANGLES-----------------------------------X
    noStroke();
    fill(57, 67, 92);
    triangle(
      moutain_x[i].xPos * moutain_x[i].scale + 100,
      258,
      moutain_x[i].xPos * moutain_x[i].scale + 300,
      432,
      moutain_x[i].xPos * moutain_x[i].scale,
      432
    ); // first Shadow of the moutain

    fill(70, 82, 112);

    triangle(
      moutain_x[i].xPos + 100 * moutain_x[i].scale,
      258,
      moutain_x[i].xPos + 200 * moutain_x[i].scale,
      432,
      moutain_x[i].xPos * moutain_x[i].scale,
      432
    ); // first Triangle of the moutain

    fill(70, 82, 112);
    triangle(
      moutain_x[i].xPos + 200 * moutain_x[i].scale,
      198,
      moutain_x[i].xPos + 400 * moutain_x[i].scale,
      432,
      moutain_x[i].xPos + 40 * moutain_x[i].scale,
      432
    ); // Second Triangle of the moutain

    fill(57, 67, 92);
    triangle(
      moutain_x[i].xPos + 200 * moutain_x[i].scale,
      198,
      moutain_x[i].xPos + 450 * moutain_x[i].scale,
      432,
      moutain_x[i].xPos + 330 * moutain_x[i].scale,
      432
    ); // Second shadow of the moutain
  }
}
//-------INTERACTABLES-----------------------//
function drawCollectible(collectable) {
  stroke(0);
  fill(218, 165, 32);

  ellipse(
    collectable.x_pos,
    collectable.y_pos + bop,
    35 * collectable.size,
    40 * collectable.size
  );

  fill(255, 215, 0);
  ellipse(
    collectable.x_pos,
    collectable.y_pos + bop,
    25 * collectable.size,
    30 * collectable.size
  );

  fill(218, 165, 32);
  rect(
    collectable.x_pos - 1,
    collectable.y_pos - 7 + bop,
    4 * collectable.size,
    20 * collectable.size
  );
}

function checkCollectable(collectable) {
  if (
    dist(gameChar_x, gameChar_y, collectable.x_pos + 1, collectable.y_pos) < 35
  ) {
    collectable.isFound = true;
    Found.play();
    game_score += 1;
  }
}

function drawCanyon(canyon) {
  // Draw the canyon and lava here, but remove the falling check.
  noStroke();
  fill(13, 42, 117);

  //----------------BACK OF CANYON---------------------------------//

  rect(canyon.x_pos + 30, floorPos_y, canyon.width - 20, 150);

  //-----------------LAVA CODE-------------------------------------//

  fill(225, 40, 0);
  rect(canyon.x_pos + 31, floorPos_y + 50 + bop * 0.75, canyon.width - 22, 100);

  bubblex = random(canyon.x_pos + 30, canyon.x_pos + canyon.width - 22);
  bubbley = random(floorPos_y + 150, floorPos_y + 70);

  //----------------BUBBLES IN LAVA----------------------------------------//

  fill(250, 114, 56);
  circle(bubblex, bubbley, 10);

  //---------------CANYON WALLS--------------------------------------------//

  fill(80);
  stroke(80);
  rect(canyon.x_pos + 10, floorPos_y, 20, 150);
  rect(canyon.x_pos + canyon.width - 10, floorPos_y, 20, 150);
}

function drawbirck() {
  noStroke();
  fill(204, 0, 255, 50);

  //Roof
  image(bricks, 460, 210, 85, 20);

  //Energy field
  rect(460, 230, 85, 98);
  fill(216, 130, 237);
  rect(random(460, 545), random(230, 330), 5, 10);

  //Bottom
  image(bricks, 460, 330, 85, 20);

  //------------------------------------|

  //Bottom
  image(bricks, 1007, 210, 75, 20);
  image(bricks, 1082, 210, 60, 20);

  //Energy Field
  fill(204, 0, 255, 50);
  rect(1007, 230, 135, 98);
  fill(216, 130, 237);
  rect(random(1007, 1130), random(230, 310), 5, 10);

  //Bottom
  image(bricks, 1007, 330, 75, 20);
  image(bricks, 1082, 330, 60, 20);

  //------------------------------------|

  //roof
  image(bricks, 1757, 210, 75, 20);
  image(bricks, 1832, 210, 75, 20);

  //Energy Field
  fill(204, 0, 255, 50);
  rect(1757, 230, 150, 100);
  fill(216, 130, 237);
  rect(random(1757, 1900), random(230, 310), 5, 10);

  //bottom
  image(bricks, 1757, 330, 75, 20);
  image(bricks, 1832, 330, 75, 20);
}

function sign() {
    fill(255);
    text("Keep Going ...", 3800, 250);
    
    if(gameChar_x > 3700) {
        text("I must reach the castle!",gameChar_x + 20, 370);
    }
}
