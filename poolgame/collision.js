function collisionDetection() {
    // Set up collision detection
    Matter.Events.on(engine, "collisionStart", function (event) {
      var pairs = event.pairs;

      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        if (pair.bodyA.label === "ball" && pair.bodyB.label === "ball") {
          console.log(
            "Collision detected between balls:",
            pair.bodyA.label,
            "and",
            pair.bodyB.label
          );
          ballCollision.play();
        }
      }
    });

    Matter.Events.on(engine, "collisionActive", function (event) {
      var pairs = event.pairs;

      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        if (pair.bodyA.label === "ball" && pair.bodyB.label === "ball") {
          console.log(
            "Collision still active between balls:",
            pair.bodyA.label,
            "and",
            pair.bodyB.label
          );
        }
      }
    });

    Matter.Events.on(engine, "collisionEnd", function (event) {
      var pairs = event.pairs;

      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        if (pair.bodyA.label === "ball" && pair.bodyB.label === "ball") {
          console.log(
            "Collision ended between balls:",
            pair.bodyA.label,
            "and",
            pair.bodyB.label
          );
        }
      }
    });
  }