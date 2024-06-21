function drawTable() {
  //Create the table border
  fill("brown");
  rect(550, 275, tableWidth + 60, tableHeight + 60, 20);

  // Draw the table's playing area
  fill(18, 94, 0); // Green color for the table
  rect(550, 275, tableWidth, tableHeight);
  
  // Draw D pocket
  stroke("gray");
  line(250, 40, 250, tableHeight + 50);
  arc(250, 275, 150, 150, HALF_PI, -HALF_PI);
  //reset stroke
  stroke(0);
}
