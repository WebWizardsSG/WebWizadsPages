function animations() {
  bop = 5 * sin(frameCount / 10); //for the collectible to bop up and down
  walkbop = 2 * sin(frameCount / 3); //for walking animation to bop
  Lavabopbop = 3 * sin(frameCount / 5); //for the lava to rise and fall
  cloudbop = 8 * sin(frameCount / 30); //for the cloud to rise and fall
    
  //HUD BLACK BAR----------------------------//
  strokeWeight(2);
  fill(77, 114, 84);
  rect(0, floorPos_y, width, height - floorPos_y);
}
