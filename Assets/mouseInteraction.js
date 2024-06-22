let draggingCueBall = false;
let placingCueBall = true;
let lastValidPosition = { x: 200, y: 275 };
let initialPlacement = true;

function mousePressed() {
  if (initialPlacement || placingCueBall) {
    if (
      dist(mouseX, mouseY, whiteBall[0].position.x, whiteBall[0].position.y) <
      ballDiameter / 2
    ) {
      draggingCueBall = true;
    }
  } else {
    if (
      dist(mouseX, mouseY, whiteBall[0].position.x, whiteBall[0].position.y) <
      ballDiameter / 2
    ) {
      cueStartX = mouseX;
      cueStartY = mouseY;
      whiteBallClicked = true;
    }
  }
}

function mouseReleased() {
  if (initialPlacement || draggingCueBall) {
    let newX = mouseX;
    let newY = mouseY;
    let dx = newX - 250;
    let dy = newY - 275;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 75 || newX > 250 || checkCollision(newX, newY)) {
      Matter.Body.setPosition(whiteBall[0], lastValidPosition);
    } else {
      Matter.Body.setPosition(whiteBall[0], { x: newX, y: newY });
      lastValidPosition = { x: newX, y: newY };
      if (initialPlacement) {
        initialPlacement = false; // End the initial placement phase
      } else {
        placingCueBall = false; // End the placing cue ball phase after pocketing
      }
    }

    draggingCueBall = false;
  } else if (whiteBallClicked) {
    forceX = constrain((cueStartX - mouseX) * 0.0001, -0.029, 0.029);
    forceY = constrain((cueStartY - mouseY) * 0.0001, -0.029, 0.029);
    whiteBallClicked = false;

    Matter.Body.applyForce(whiteBall[0], whiteBall[0].position, {
      x: forceX,
      y: forceY,
    });

    console.log(forceX, forceY);
    cueHitBall.play();
  } else {
    console.log("WhiteBall not selected, so no force applied");
  }
}

function drawCue() {
  if (mouseIsPressed && whiteBallClicked) {
    stroke("white");
    strokeWeight(1);
    line(whiteBall[0].position.x, whiteBall[0].position.y, mouseX, mouseY);
    strokeWeight(1);
    stroke(0);
    textSize(20);
    fill(255);
    rect(mouseX + 36, mouseY - 8, 130, 50);
    fill(0);
    text(
      "Angle: " + Math.round((calculateAngle() * 180) / Math.PI),
      mouseX - 13,
      mouseY + 10
    );
    text(
      "Force: " + Math.round((cueStartX - mouseX) * 0.08),
      mouseX - 13,
      mouseY - 10
    );
  } else if (initialPlacement || draggingCueBall) {
    let newX = mouseX;
    let newY = mouseY;
    let dx = newX - 250;
    let dy = newY - 275;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= 75 && newX <= 250 && !checkCollision(newX, newY)) {
      Matter.Body.setPosition(whiteBall[0], { x: newX, y: newY });
      lastValidPosition = { x: newX, y: newY };
    } else {
      if (newX <= 250) {
        let angle = Math.atan2(dy, dx);
        let validX = 250 + Math.cos(angle) * 75;
        let validY = 275 + Math.sin(angle) * 75;

        if (!checkCollision(validX, validY)) {
          Matter.Body.setPosition(whiteBall[0], { x: validX, y: validY });
          lastValidPosition = { x: validX, y: validY };
        } else {
          Matter.Body.setPosition(whiteBall[0], lastValidPosition);
        }
      } else {
        Matter.Body.setPosition(whiteBall[0], lastValidPosition);
      }
    }
  }
}

function calculateAngle() {
  let angle = Math.atan2(cueStartY - mouseY, cueStartX - mouseX);
  return angle;
}

function checkCollision(newX, newY) {
  for (let ball of balls) {
    if (dist(newX, newY, ball.position.x, ball.position.y) < ballDiameter) {
      return true;
    }
  }
  for (let ball of coloredBallObject) {
    if (dist(newX, newY, ball.position.x, ball.position.y) < ballDiameter) {
      return true;
    }
  }
  return false;
}
