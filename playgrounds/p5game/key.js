//--KEYFUCTIONS----------------------------X

function keyPressed() {
  if (keyCode == 37 && lose == false && die == false) {
    isLeft = true;
  } else if (keyCode == 39 && lose == false && die == false) {
    isRight = true;
  }
  //-------------------------JUMP CODE--------------------------------------X
  else if (
    keyCode == 38 &&
    (isJump == false) & (isFalling == false) &&
    lose == false
  ) {
    isJump = true;
    jumpSound.play();
  } else if (keyPressed == 37 && keyIsDown(RIGHT_ARROW)) {
    stand = true;
    isLeft = true;
    isRight = true;
  }
}
function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.
  if (keyCode == 37) {
    isLeft = false;
  } else if (keyCode == 39) {
    isRight = false;
  }
}
