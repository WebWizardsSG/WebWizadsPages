// Table Dimensions
const tableWidth = 900;
const tableHeight = tableWidth / 2;

// Ball Size
const ballDiameter = tableWidth / 36;

// Pockets
// The pockets are 1.5 times the size of the balls
const pocketSize = ballDiameter * 1.5;

// Create the balls and pockets arrays
let balls = [];
let pockets = [];
let borders = [];

// Cue variables
let cue;
let cueStartX;
let cueStartY;
var whiteBallClicked = false;

let rows = 5; // Number of rows in the triangle of balls
let spacing = ballDiameter + 2; // Spacing between the balls

// Start position for the balls
let startX = tableWidth / 2 + 100;
let startY = tableHeight / 2 + 50;

// Color index
let colorIndex = 0;

// forces
let forceX;
let forceY;

// Colors of balls
let colors = ["darkred"];
let coloredBalls = [
  "yellow",
  "lightblue",
  "#C19A6B	",
  "lightgreen",
  "gray",
  "pink",
];

// Create an engine
let engine = Matter.Engine.create();
engine.world.gravity.y = 0; // Remove gravity

function setup() {
  createCanvas(windowWidth, windowHeight);

  whiteBallClicked = false;

  bordersEngine();

  // Add everything to the world
  Matter.World.add(engine.world, [...pockets, ...balls, ...borders, ...whiteBall]);
}

function draw() {
  Matter.Engine.update(engine);

  // Set global text properties
  textFont("Verdana");
  background(0);

  // Update the engine
  Matter.Engine.update(engine);

  // Draw the table
  drawTable();

  // Draw the pockets
  drawPockets();

  // Draw the borders (walls)
  fill(128, 128, 128); // Grey color for the borders
  for (let border of borders) {
    rectMode(CENTER);
    rect(
      border.position.x,
      border.position.y,
      border.bounds.max.x - border.bounds.min.x,
      border.bounds.max.y - border.bounds.min.y
    );
  }
  // Draw the balls
  for (let ball of balls) {
    if (ball && ball.position) {
      fill(ball.render.fillStyle);
      ellipse(ball.position.x, ball.position.y, ballDiameter);
    }
  }

  if (whiteBall[0] && whiteBall[0].position) {
    fill("white");
    ellipse(whiteBall[0].position.x, whiteBall[0].position.y, ballDiameter);
  }
  drawCue();

  if(resetMessage) {
    fill(255);
    rect(mouseX + 98, mouseY -8, 200, 30);
    fill(0);
    textSize(20);
    text("White Ball Reseting", mouseX, mouseY);
  }
  
  displayClickedBall();
  annotateWhiteBall();
  pocketInteraction();
  scoreBoard();

}

function setup() {
  createCanvas(windowWidth, windowHeight + 200);

  whiteBallClicked = false;

  // Create the balls
  createBalls();

  // Create the borders (walls) of the table
  borders = [
    Matter.Bodies.rectangle(
      100 + dimensions.tableWidth / 2,
      45,
      dimensions.tableWidth + 20,
      10,
      {
        isStatic: true,
      }
    ), // Top border
    Matter.Bodies.rectangle(
      100 + dimensions.tableWidth / 2,
      dimensions.tableHeight + 55,
      dimensions.tableWidth + 20,
      10,
      { isStatic: true }
    ), // Bottom border
    Matter.Bodies.rectangle(
      95,
      50 + dimensions.tableHeight / 2,
      10,
      dimensions.tableHeight,
      {
        isStatic: true,
      }
    ), // Left border
    Matter.Bodies.rectangle(
      105 + dimensions.tableWidth,
      50 + dimensions.tableHeight / 2,
      10,
      dimensions.tableHeight,
      { isStatic: true }
    ), // Right border
  ];

  // Add everything to the world
  Matter.World.add(engine.world, [
    ...pockets,
    ...balls,
    ...borders,
    ...whiteBall,
  ]);
}

const dimensions = {
  tableWidth: 900,
  tableHeight: tableWidth / 2,
  ballDiameter: tableWidth / 36,
  pocketSize: (tableWidth / 36) * 1.5,
};
