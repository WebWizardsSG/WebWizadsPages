var whiteBall = [];

function createWhiteBall() {
  // Create the white ball
  let whiteX = 220;
  let whiteY = 275;
  let whiteballs = Matter.Bodies.circle(whiteX, whiteY, ballDiameter / 2, {
    restitution: 1.1, // Add restitution
    friction: 0.05, // Add friction
    render: {
      fillStyle: "white",
    },
  });
  // Add the white ball to the balls array, and ensure it is the first ball
  whiteBall.push(whiteballs);
}

function createBalls() {

  console.log(whiteBallisPushed);

  if (!whiteBallisPushed) {
    createWhiteBall();
    console.log("whiteball created")
  }

  // Create the triangle of red balls
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      let x = startX + i * spacing;
      let y = startY + j * spacing - (i * spacing) / 2;
      let ball = Matter.Bodies.circle(x, y, ballDiameter / 2, {
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

  // Create 6 colored balls behind the triangle
  let behindStartX = startX + (rows * spacing + 3); // Start position for the balls behind
  for (let i = 0; i < coloredBalls.length; i++) {
    // Position the balls behind the triangle
    let x = behindStartX;

    // Center the balls vertically
    let y = startY + i * spacing - ((coloredBalls.length - 1) * spacing) / 2;
    let ball = Matter.Bodies.circle(x, y, ballDiameter / 2, {
      restitution: 1.1, // Add restitution
      friction: 0.05, // Add friction
      render: {
        fillStyle: coloredBalls[i],
      },
    });
    balls.push(ball);
  }
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
