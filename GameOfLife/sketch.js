var grid_width = 50;
var grid_height = 50;
var canvas_width = 1200;
var canvas_height = 1200;
var xscale = canvas_width / grid_width;
var yscale = canvas_height / grid_height;
var grid = new Array();

running = false;

function setup(){
  createCanvas(canvas_width, canvas_height);
  for(y = 0; y < grid_height; ++y)
    for(x = 0; x < grid_width; ++x)
      grid.push(new cell(x, y, xscale, yscale));

  frameRate(5);
}

function keyPressed(){

  if (keyCode == ENTER || keyCode == RETURN) {
    running = !running;
  }

}

function mousePressed(){
  var clickedCell = getCell(mouseX, mouseY)
  if(clickedCell != -1){
    clickedCell.invertState();
  }else{
    // nothing yet.
  }
}

function draw(){

  background(100);

  for(c = 0; c < grid.length; ++c)
    if(running)
      grid[c].calcNextState(grid, grid_width, grid_height);

  for(c = 0; c < grid.length; ++c)
    if(running)
      grid[c].update();

  for(c = 0; c < grid.length; ++c)
    grid[c].draw();
}

function getCell(x, y){
  var i = Math.floor((x / canvas_width) * grid_width);
  var j = Math.floor((y / canvas_height) * grid_height);


  console.log(grid[i + j*grid_width]);
  return grid[i + j*grid_width];

}
