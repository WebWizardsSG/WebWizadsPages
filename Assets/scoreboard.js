var player1 = 0;
var player2 = 0;

function scoreBoard() {
  fill(255);
  textSize(20);
  text("Player 1: " + player1, 70, tableHeight + 130);
  text("Player 2: " + player2, 70, tableHeight + 160);
  text(
    "Current Turn: " + (player1Turn ? "Player 1" : "Player 2"),
    70,
    tableHeight + 190
  );
  text("Total Collisions: " + collisions, 500, tableHeight + 160);
}
