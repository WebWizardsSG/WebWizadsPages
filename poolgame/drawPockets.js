function drawPockets() {
  // Define pocket size
  const pocketSize = dimensions.pocketSize;

  // Create an object to store pocket parameters
  pockets = [
    {
      x: 100,
      y: 50,
      w: pocketSize * 2,
      h: pocketSize * 2,
      start: 0,
      stop: HALF_PI,
    }, // Top left pocket - quarter circle
    {
      x: 1000,
      y: 50,
      w: pocketSize * 2,
      h: pocketSize * 2,
      start: HALF_PI,
      stop: PI,
    }, // Top right pocket - quarter circle
    {
      x: 100,
      y: 500,
      w: pocketSize * 2,
      h: pocketSize * 2,
      start: PI + HALF_PI,
      stop: TWO_PI,
    }, // Bottom left pocket - quarter circle
    {
      x: 1000,
      y: 500,
      w: pocketSize * 2,
      h: pocketSize * 2,
      start: PI,
      stop: PI + HALF_PI,
    }, // Bottom right pocket - quarter circle
    {
      x: 550,
      y: 50,
      w: pocketSize * 1.5,
      h: pocketSize * 1.5,
      start: 0,
      stop: PI,
    }, // Top middle pocket - semi-circle
    {
      x: 550,
      y: 500,
      w: pocketSize * 1.5,
      h: pocketSize * 1.5,
      start: PI,
      stop: TWO_PI,
    }, // Bottom middle pocket - semi-circle
  ];

  fill(0); // Black color for the pockets

  // Loop through the pockets array and draw each pocket
  for (let pocket of pockets) {
    arc(pocket.x, pocket.y, pocket.w, pocket.h, pocket.start, pocket.stop);
  }
}

function coloredBallPocketInteraction() {
  for (let coloredBall of coloredBallObject) {
    for (let pocket of pockets) {
      if (
        // Check if the colored ball is in the pocket
        dist(coloredBall.position.x, coloredBall.position.y, pocket.x, pocket.y) <
        pocketSize - 3
      ) {
        // Add 4 points to the current player
        if (player1Turn) {
          player1 += 4;
        } else if (player2Turn) {
          player2 += 4;
        }

        // Remove the colored ball from the world
        Matter.World.remove(engine.world, coloredBall);
        coloredBallObject = coloredBallObject.filter((b) => b !== coloredBall); // Remove ball from the coloredBallObject array
        ballInPocket.play();

        break; // Exit the loop as the ball is already removed
      }
    }
  }
}


var whiteBallisPushed = false;
var resetMessage = false;

function pocketInteraction() {
  let whiteBallReset = false;

  for (let whiteballs of whiteBall) {
    if (whiteBallReset) break; // Exit if white ball has been reset

    for (let ball of balls) {
      if (whiteBallReset) break; // Exit if white ball has been reset

      for (let pocket of pockets) {
        if (
          // Check if the white ball is in the pocket
          dist(
            whiteballs.position.x,
            whiteballs.position.y,
            pocket.x,
            pocket.y
          ) <
          pocketSize - 3
        ) {
          ErrorAudio.play();
          if (player1Turn) {
            player1 = player1 - 4;
          }

          if (player2Turn) {
            player2 = player2 - 4;
          }
          // Remove the white ball from the world
          Matter.World.remove(engine.world, whiteballs);
          whiteBall.splice(0, 1);
          ballInPocket.play();

          resetMessage = true;

          // Create new white ball
          let newWhiteBall = Matter.Bodies.circle(200, 300, ballDiameter / 2, {
            restitution: 1.1, // Add restitution
            friction: 0.05, // Add friction
            render: {
              fillStyle: "white",
            },
          });

          // Set the position of the new white ball
          Matter.Body.setPosition(newWhiteBall, { x: 200, y: 275 });

          // Reset velocity and angular velocity
          Matter.Body.setVelocity(newWhiteBall, { x: 0, y: 0 });
          Matter.Body.setAngularVelocity(newWhiteBall, 0);

          // Add the new white ball to the Matter.js world
          Matter.World.add(engine.world, newWhiteBall);

          setTimeout(() => {
            // Add the white ball to the whiteBall array after 1.5 seconds
            whiteBall.push(newWhiteBall);
            resetMessage = false;
          }, 800);
          whiteBallReset = true; // Set flag to indicate white ball has been reset
          break;
        }

        coloredBallPocketInteraction();

        // Check if any colored ball is in the pocket
        if (
          dist(ball.position.x, ball.position.y, pocket.x, pocket.y) <
          pocketSize - 3
        ) {
          Matter.World.remove(engine.world, ball);
          if (player1Turn) {
            player1 = player1 + 1;
          }

          if (player2Turn) {
            player2 = player2 + 1;
          }
          balls = balls.filter((b) => b !== ball); // Remove ball from the balls array
          ballInPocket.play();
          break; // Exit the inner loop as the ball is already removed
        }
      }
    }
  }
}
