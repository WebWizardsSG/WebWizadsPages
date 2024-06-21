var whiteBall = [];
var coloredBallObject = [];
var coloredBallPositions = []; // Store default positions of colored balls

function createWhiteBall() {
  // Create the white ball
  let whiteX = 200;
  let whiteY = 275;
  let whiteballs = Matter.Bodies.circle(whiteX, whiteY, ballDiameter / 2, {
    label: 'ball', // Add label
    restitution: 1.1, // Add restitution
    friction: 0.05, // Add friction
    render: {
      fillStyle: "white",
    },
  });
  // Add the white ball to the balls array, and ensure it is the first ball
  whiteBall.push(whiteballs);
}

function createColoredBalls() {
  // Manually input coordinates for the colored balls
  coloredBallPositions = [
    { x: 250, y: 350 }, // Yellow: 2 spot
    { x: 400, y: 275 }, // Blue: 5 spot
    { x: 250, y: 275 }, // Brown: 4 spot
    { x: 250, y: 200 }, // Green: 3 spot
    { x: 750, y: 275 }, // Black: 7 spot
    { x: 500, y: 275 }, // Pink: 6 spot
  ];

  for (let i = 0; i < coloredBalls.length; i++) {
    let pos = coloredBallPositions[i];
    let ball = Matter.Bodies.circle(pos.x, pos.y, ballDiameter / 2, {
      label: 'ball', // Add label
      restitution: 1.1,
      friction: 0.05,
      render: {
        fillStyle: coloredBalls[i],
      },
    });
    coloredBallObject.push(ball);
  }
}

function resetColoredBall(ball, index) {
  // Set the position of the colored ball to its default position
  let pos = coloredBallPositions[index];
  Matter.Body.setPosition(ball, { x: pos.x, y: pos.y });

  // Reset velocity and angular velocity
  Matter.Body.setVelocity(ball, { x: 0, y: 0 });
  Matter.Body.setAngularVelocity(ball, 0);

  // Add the colored ball back to the Matter.js world if it was removed
  if (!engine.world.bodies.includes(ball)) {
    Matter.World.add(engine.world, ball);
  }
}

function coloredBallPocketInteraction() {
  for (let i = 0; i < coloredBallObject.length; i++) {
    let coloredBall = coloredBallObject[i];
    for (let pocket of pockets) {
      if (
        // Check if the colored ball is in the pocket
        dist(
          coloredBall.position.x,
          coloredBall.position.y,
          pocket.x,
          pocket.y
        ) <
        pocketSize - 3
      ) {
        // Add 4 points to the current player
        if (player1Turn) {
          player1 += 4;
        } else if (player2Turn) {
          player2 += 4;
        }

        // Play the sound when a ball is pocketed
        ballInPocket.play();

        // Remove the colored ball from the world
        Matter.World.remove(engine.world, coloredBall);

        // Reset the colored ball to its default position
        resetColoredBall(coloredBall, i);
        break; // Exit the loop as the ball is already handled
      }
    }
  }
}

function createBalls() {
  console.log(whiteBallisPushed);

  // Create the white ball, if it has not been created
  if (!whiteBallisPushed) {
    // do not create white ball if it has been created to prevent multiple white balls
    createWhiteBall();
    console.log("whiteball created");
  }

  // Create the triangle of red balls
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      let x = startX + i * spacing;
      let y = startY + j * spacing - (i * spacing) / 2;
      let ball = Matter.Bodies.circle(x, y, ballDiameter / 2, {
        label: 'ball', // Add label
        restitution: 1.1, // Add restitution
        friction: 0.05, // Add friction
        render: {
          fillStyle: colors[colorIndex],
        },
      });
      // Add the ball to the balls array
      balls.push(ball);
      // Increment the color index
      colorIndex = (colorIndex + 1) % colors.length;
    }
  }

  createColoredBalls();
}

// Annotate the white ball with a triangle, ensure visibility
function annotateWhiteBall() {
  if (whiteBall[0]) {
    fill(0);
    text("🔻", whiteBall[0].position.x + 10, whiteBall[0].position.y - 10);
  }
}

function displayClickedBall() {
  if (whiteBall[0]) {
    if (
      dist(mouseX, mouseY, whiteBall[0].position.x, whiteBall[0].position.y) <
        ballDiameter &&
      //Ensure that the hover effect will not be displayed when the white ball is clicked
      !whiteBallClicked
    ) {
      fill(255);
      stroke(0);
      textSize(20);
      text("Select Ball", mouseX - 60, mouseY - 40);
      fill("orange");
      // create hover effect
      ellipse(
        whiteBall[0].position.x,
        whiteBall[0].position.y,
        ballDiameter * 1.5
      );
    } else if (!whiteBallClicked) {
      fill(255);
      stroke(0);
      textSize(15);
      text("Select white ball only", mouseX - 80, mouseY - 40);
    }
  }
}
