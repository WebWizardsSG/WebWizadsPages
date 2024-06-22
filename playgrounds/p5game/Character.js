//-------DRAW CHARACTERS---------------------//
function drawCharacter() {
  ////////////////////////////////DRAW  CHARACTER///////////////////////////

  //-------------------------FALLING LEFT----------------------------------//

  if (isLeft && isFalling) {
    //______________________BODY_______________//

    fill(128, 6, 23);
    stroke(0, 0, 0);
    rect(gameChar_x - 6.5, gameChar_y - 50, 13, 30, 4);

    //______________________HEAD________________//

    fill(229, 190, 164);
    stroke(0);
    ellipse(gameChar_x, gameChar_y - 60, 25);

    //__________________RIGHT FEET_______________//

    fill(0);
    rect(gameChar_x - 13, gameChar_y - 20, 10, 6);

    //__________________LEFT FEET_______________//

    fill(0);
    rect(gameChar_x + 3, gameChar_y - 15, 10, 6, 4);

    //------------------EYES-----------------//
    fill(0, 0, 0); //left eye
    ellipse(gameChar_x - 6, gameChar_y - 51, 3);
  }

  //----------------------------JUMP LEFT----------------------------------//
  else if (isJump == true && isLeft == true) {
    //______________________BODY_______________//

    fill(128, 6, 23);
    stroke(0, 0, 0);
    rect(gameChar_x - 6.5, gameChar_y - 50, 13, 30, 4);

    //______________________HEAD________________//

    fill(229, 190, 164);
    stroke(0);
    ellipse(gameChar_x, gameChar_y - 60, 25);

    //__________________RIGHT FEET_______________//

    fill(0);
    rect(gameChar_x - 13, gameChar_y - 20, 10, 6, 4);

    //__________________LEFT FEET_______________//

    fill(0);
    rect(gameChar_x + 3, gameChar_y - 15, 10, 6, 4);

    //------------------EYES-----------------//

    fill(0, 0, 0); //left eye
    ellipse(gameChar_x - 6, gameChar_y - 63, 3);
  }

  //-------------------------JUMP RIGHT------------------------------------//
  else if (isRight && isJump) {
    //______________________BODY______________//

    fill(128, 6, 23);
    stroke(0, 0, 0);
    rect(gameChar_x - 6.5, gameChar_y - 50, 13, 30, 4);

    //______________________HEAD________________//

    fill(229, 190, 164);
    stroke(0);
    ellipse(gameChar_x, gameChar_y - 60, 25);

    //__________________RIGHT FEET____________//

    fill(0);
    rect(gameChar_x + 3, gameChar_y - 20, 10, 6, 4);

    //__________________LEFT FEET____________//

    fill(0);
    rect(gameChar_x - 13, gameChar_y - 15, 10, 6, 4);

    //---------------------EYES--------------//
    fill(0, 0, 0);
    ellipse(gameChar_x + 6, gameChar_y - 67, 3);
  }

  //----------------FALLING RIGHT-----------------------------------------//
  else if (isRight && isFalling) {
    //______________________BODY______________//

    fill(128, 6, 23);
    stroke(0, 0, 0);
    rect(gameChar_x - 6.5, gameChar_y - 50, 13, 30, 4);

    //______________________HEAD________________//

    fill(229, 190, 164);
    stroke(0);
    ellipse(gameChar_x, gameChar_y - 60, 25);

    //__________________RIGHT FEET____________//

    fill(0);
    rect(gameChar_x + 3, gameChar_y - 20, 10, 6, 4);

    //__________________LEFT FEET____________//

    fill(0);
    rect(gameChar_x - 13, gameChar_y - 15, 10, 6, 4);

    //---------------------EYES--------------//
    fill(0, 0, 0);
    ellipse(gameChar_x + 6, gameChar_y - 57, 3);
  }

  //----------------------------WALK LEFT---------------------------------//
  else if (isLeft == true) {
    //______________________BODY______________//

    fill(128, 6, 23);
    stroke(0, 0, 0);
    rect(gameChar_x - 6.5, gameChar_y - 39, 13, 30, 4);

    //______________________HEAD________________//

    fill(229, 190, 164);
    stroke(0);
    ellipse(gameChar_x, gameChar_y - 50, 25);

    //__________________RIGHT FEET____________//

    fill(0);
    rect(gameChar_x, gameChar_y - 10, 10, 6, 4);

    //__________________LEFT FEET____________//

    fill(0);
    rect(gameChar_x - 15, gameChar_y - 10, 10, 6, 4);

    //------------------EYES-----------------//
    fill(0, 0, 0); //left eye
    ellipse(gameChar_x - 6, gameChar_y - 51, 3);
  }

  //----------------------WALK RIGHT---------------------------------------//
  else if (isRight == true) {
    //______________________BODY______________//
    fill(128, 6, 23);
    stroke(0, 0, 0);
    rect(gameChar_x - 6.5, gameChar_y - 39, 13, 30, 4);

    //______________________HEAD________________//
    fill(229, 190, 164);
    stroke(0);
    ellipse(gameChar_x, gameChar_y - 50, 25);

    //__________________RIGHT FEET_____________//
    fill(0);
    rect(gameChar_x + 5, gameChar_y - 10, 10, 6, 4);

    //__________________LEFT FEET_____________//
    fill(0);
    rect(gameChar_x - 10, gameChar_y - 10, 10, 6, 4);

    //---------------------EYES--------------//
    fill(0, 0, 0);
    ellipse(gameChar_x + 6, gameChar_y - 51, 3);
  }

  //----------------------------FALLING DOWN-------------------------------//
  else if (isFalling == true) {
    // add your jumping facing forwards code

    //______________________BODY_____________//

    fill(128, 6, 23);
    stroke(0, 0, 0);
    rect(gameChar_x - 6.5, gameChar_y - 50, 13, 30, 4);

    //______________________HEAD_______________//

    fill(229, 190, 164);
    stroke(0);
    ellipse(gameChar_x, gameChar_y - 60, 25);

    //__________________RIGHT FEET____________//

    fill(0);
    rect(gameChar_x + 3, gameChar_y - 15, 10, 6, 4);

    //__________________LEFT FEET____________//

    fill(0);
    rect(gameChar_x - 13, gameChar_y - 15, 10, 6, 4);

    //---------------------EYES--------------//
    fill(0, 0, 0); //right eye
    ellipse(gameChar_x + 6, gameChar_y - 53, 3);

    fill(0, 0, 0); //left eye
    ellipse(gameChar_x - 6, gameChar_y - 53, 3);
  }

  //---------------------JUMP UP------------------------------------------//
  else if (isJump == true) {
    //______________________BODY______________//
    fill(128, 6, 23);
    stroke(0, 0, 0);
    rect(gameChar_x - 6.5, gameChar_y - 39, 13, 30, 4);

    //______________________HEAD________________//
    fill(229, 190, 164);
    stroke(0);
    ellipse(gameChar_x, gameChar_y - 50, 25);

    //__________________RIGHT FEET_____________//
    fill(0);
    rect(gameChar_x + 3, gameChar_y - 10, 10, 6, 3);
    //__________________LEFT FEET____________//
    fill(0);
    rect(gameChar_x - 13, gameChar_y - 10, 10, 6, 3);

    //---------------------EYES--------------//
    fill(0, 0, 0); //right eye
    ellipse(gameChar_x + 6, gameChar_y - 57, 3);

    fill(0, 0, 0); //left eye
    ellipse(gameChar_x - 6, gameChar_y - 57, 3);
  }

  //------------------------------STAND FORWARD----------------------------//
  else {
    //______________________BODY______________//
    fill(128, 6, 23);
    stroke(0, 0, 0);
    rect(gameChar_x - 6.5, gameChar_y - 39, 13, 30, 4);

    //______________________HEAD________________//
    fill(229, 190, 164);
    stroke(0);
    ellipse(gameChar_x, gameChar_y - 50, 25);

    //__________________RIGHT FEET_____________//
    fill(0);
    rect(gameChar_x + 3, gameChar_y - 10, 10, 6, 3);
    //__________________LEFT FEET____________//
    fill(0);
    rect(gameChar_x - 13, gameChar_y - 10, 10, 6, 3);

    //---------------------EYES--------------//
    fill(0, 0, 0); //right eye
    ellipse(gameChar_x + 6, gameChar_y - 51, 3);

    fill(0, 0, 0); //left eye
    ellipse(gameChar_x - 6, gameChar_y - 51, 3);
  }
}
