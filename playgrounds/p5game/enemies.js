function drawEnemies() {
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].draw();
    var enemiesContact = enemies[i].checkContact(gameChar_x, gameChar_y);

    if (enemiesContact) {
      manabarWidth = 0;
      if (lives < 0) {
        die = true;
        break;
      }
    }
  }
}
function Enemy(x, y, range) {
  this.x = x;
  this.y = y;
  this.range = range;

  this.currentX = x;
  this.inc = 2; //inc for increment
  this.angle = 0;

  //this function increase the value of the enemy by this.inc
  this.update = function() {
    //moves enemies across the screen
    this.currentX += this.inc;

    //if the enemies has gotten to far off right
    if (this.currentX >= this.x + this.range) {
      //move enemy back into position
      this.inc = -2;
    } else if (this.currentX < this.x) {
      //move enemy back into position
      this.inc = 2;
    }
  };

  //draws the enemies------------------------//
  this.draw = function() {
    //Enemy is a unstable monster that shakes and vibrates
    let shakyEnemy = random(0, 3);
    //draw enemy in updated location
    this.update();

    //The enemy will be angry and shake when player is close
    fill(255, 0, 0);
    stroke(0);
    //spiky shell of enemy
    push();
    translate(this.currentX + shakyEnemy, this.y - 40 + shakyEnemy);
    rotate(this.angle);
    star(0, 0, 20, 40, 20);
    //yes, the enemy is a evil monster eyeball
    pop();
    image(
      eye,
      this.currentX - 39 + shakyEnemy,
      this.y - 91 + shakyEnemy,
      80,
      80
    );
    this.angle += 1;
  };

  //checks the contact with enemy-----------//
  this.checkContact = function(gc_x, gc_y) {
    //checks distance between gamecharx, gamechary and player
    var EnemyDist = dist(gc_x, gc_y, this.currentX, this.y);

    //Return true if distance between enemy and player below 10
    if (EnemyDist < 40) {
      close = true;
      return true;
    }
    return false;
  };
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
