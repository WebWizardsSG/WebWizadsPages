let hasAudioPlayed = false;

//     TAKES INPUT FROM PLATFROM ARRAY AT startgame.js line 128
//----------------------------------------------------------------//
function Platform(x, y, length) {
  this.x = x;
  this.y = y;
  this.length = length;

  this.draw = function () {
    fill(255, 0, 255, 0);
    rect(this.x + 60, this.y, this.length - 120, 20);
  };

  this.drawDebug = function () {
    noFill();
    stroke(255, 0, 0, 0);
    rect(this.x, this.y, this.length, 20);
  };
  this.checkContact = function (gc_x, gc_y) {


    //X-AXIS CONTACT CHECK------------//

    if (gc_x + 10 > this.x && gc_x < this.x + this.length - 10) {
      Inline = true;

      //Left Threshold check: this.x
      //Right Threshold check: this.x + this.length + 2

      //Y-AXIS CONTACT CHECK------------//
      var d = this.y - gc_y; //distance between p0layer and platform y pos
      if (d >= 0 && d < 5) {
        return true;
      }
    }

    return false;
  };
}
//----------------------------------------------------------------//

function checkIfCharacterIsOnAnyPlatform() {
  if (isFalling && Inline) {
    for (var i = 0; i < platforms.length; i++) {
      isContact = platforms[i].checkContact(gameChar_x_world, gameChar_y);
      if (isContact == true) {
        onPlatforms = true;
        break;
      }
    }
  }
  // IF character on platform Jumps
  if (!isContact && gameChar_y < 431) {
    isFalling = true;
  }
}

function drawPlatforms() {
  for (var i = 0; i < platforms.length; i++) {
    platforms[i].draw();
    platforms[i].drawDebug(); // This line draws the debug boxes
  }
}

function createPlatform(x, y, length) {
  return new Platform(x, y, length);
}
