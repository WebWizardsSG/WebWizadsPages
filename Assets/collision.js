// Tracks collisions
var collisions = 0;

var redCollision = false;
var redCollisionCount = 0;

var BorderCollision = false;
var BorderCollisionCount = 0;

var coloredBallCollision = false;
var coloredBallCollisionCount = 0;

function RedcollisionMessage() {
  fill("red");
  text("Red Ball Collision x" + redCollisionCount, 750, 560);
}

function BordercollisionMessage() {
  fill("white");
  text("Border Collision x" + BorderCollisionCount, 750, 600);
}

function coloredBallCollisionMessage() {
  fill("yellow");
  text("Colored Collision x" + coloredBallCollisionCount, 750, 650);
}

function collisionDetection() {
  // Set up collision detection
  Matter.Events.on(engine, "collisionStart", function (event) {
    var pairs = event.pairs;

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];

      if (pair.bodyA.label === "ball" && pair.bodyB.label === "ball") {
        if (whiteBall.includes(pair.bodyA) || whiteBall.includes(pair.bodyB)) {
          if (coloredBallObject.includes(pair.bodyA) || coloredBallObject.includes(pair.bodyB)) {
            console.log("colored collision");
            coloredBallCollisionCount++;
            coloredBallCollision = true;
            ballCollision.play();
          } else if (balls.includes(pair.bodyA) || balls.includes(pair.bodyB)) {
            console.log("red collision");
            redCollisionCount++;
            redCollision = true;
            ballCollision.play();
          }
        }
        collisions++;
      }

      if ((pair.bodyA.label === "ball" && pair.bodyB.label === "border") ||
          (pair.bodyA.label === "border" && pair.bodyB.label === "ball")) {
        if (whiteBall.includes(pair.bodyA) || whiteBall.includes(pair.bodyB)) {
          console.log("border collision");
          BorderCollisionCount++;
          BorderCollision = true;
          ballCollision.play();
        }
      }
    }
  });

  Matter.Events.on(engine, "collisionActive", function (event) {
    var pairs = event.pairs;

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      if (pair.bodyA.label === "ball" && pair.bodyB.label === "ball") {
        if (whiteBall.includes(pair.bodyA) || whiteBall.includes(pair.bodyB)) {
          if (coloredBallObject.includes(pair.bodyA) || coloredBallObject.includes(pair.bodyB)) {
            console.log("colored collision still active");
          } else if (balls.includes(pair.bodyA) || balls.includes(pair.bodyB)) {
            console.log("red collision still active");
          }
        }
      }

      if ((pair.bodyA.label === "ball" && pair.bodyB.label === "border") ||
          (pair.bodyA.label === "border" && pair.bodyB.label === "ball")) {
        if (whiteBall.includes(pair.bodyA) || whiteBall.includes(pair.bodyB)) {
          console.log("border collision still active");
        }
      }
    }
  });

  Matter.Events.on(engine, "collisionEnd", function (event) {
    var pairs = event.pairs;

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      if (pair.bodyA.label === "ball" && pair.bodyB.label === "ball") {
        if (whiteBall.includes(pair.bodyA) || whiteBall.includes(pair.bodyB)) {
          if (coloredBallObject.includes(pair.bodyA) || coloredBallObject.includes(pair.bodyB)) {
            console.log("colored collision ended");
          } else if (balls.includes(pair.bodyA) || balls.includes(pair.bodyB)) {
            console.log("red collision ended");
          }
        }
      }

      if ((pair.bodyA.label === "ball" && pair.bodyB.label === "border") ||
          (pair.bodyA.label === "border" && pair.bodyB.label === "ball")) {
        if (whiteBall.includes(pair.bodyA) || whiteBall.includes(pair.bodyB)) {
          console.log("border collision ended");
        }
      }
    }
  });
}
