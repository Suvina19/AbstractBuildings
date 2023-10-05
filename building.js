let gridSize = 10;// size of grids
let gridSpacing;// variable for spacing of each grid box

function setup() {
  createCanvas(600, 400);// canvas of 600 width and 400 height
  noLoop();
  gridSpacing = width / gridSize;//the gridspacing is width divided by number of grids
  drawBuilding();
}

function drawBuilding() {
  background(0);
  gridSize = random(50);
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      let boxSize = width / gridSize;
      let xPos = x * boxSize;
      let yPos = y * boxSize;

      // Randomly generate fill color
      let fillColor = color(random(25), random(255), random(255));
      fill(fillColor);

      // Define the vertices of a random rectangle within the cell
      let x1 = xPos + random(boxSize);
      let y1 = yPos + random(boxSize);
      let x2 = 10;
      let y2 = yPos + random(boxSize);
;

      // Draw the rectangle
      rect(x1, y1, x2, y2);
    }
  }
}

function mousePressed() {
drawBuilding()
}
