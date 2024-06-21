function mousePressed() {
  for (let whiteballs of whiteBall) {
    if (
      dist(mouseX, mouseY, whiteBall[0].position.x, whiteBall[0].position.y) >
      ballDiameter
    ) {
      return; // Ensure that only the white ball can be hit
    } else {
      cueStartX = mouseX;
      cueStartY = mouseY;
      whiteBallClicked = true;
    }
  }
}

function mouseReleased() {
  if (whiteBallClicked) {
    // Calculate the force vector
    forceX = constrain((cueStartX - mouseX) * 0.00008, -0.019, 0.019);
    forceY = constrain((cueStartY - mouseY) * 0.00008, -0.019, 0.019);
    whiteBallClicked = false;

    // Apply the force to the white ball
    Matter.Body.applyForce(whiteBall[0], whiteBall[0].position, {
      x: forceX,
      y: forceY,
    });

    console.log(forceX, forceY)
    cueHitBall.play();
  } else {
    console.log("WhiteBall not selected, so no force applied");
  }
}

function drawCue() {
  // Draw the cue if the mouse is pressed
  if (mouseIsPressed && whiteBallClicked) {
    // Update the position of the cue to follow the mouse
    // Matter.Body.setPosition(cue, { x: mouseX, y: mouseY });

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
  }
}

function calculateAngle() {
  let angle = Math.atan2(cueStartY - mouseY, cueStartX - mouseX);
  return angle;
}

