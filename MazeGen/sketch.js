var width = 1200;
var height = 800;

var xsize = 100;
var ysize = 100;

var grid = [];
var currentCell;
var stack;

var visitedCount = 1;
var totalCells;
var nextCell;
var stepMode = true;

function setup() {
  createCanvas(1200, 800);
  generateGrid();
  currentCell = grid[0];
  stack = new Array();
  grid[0].visited = true;
  totalCells = grid.length ;
  stack.push(currentCell);
  frameRate(2);
}

function draw( ) {
  background(42);
  for(i = 0; i < grid.length; ++i){
    grid[i].draw();
  }
  if(stepMode)
    this.generateMazeStep();

}

function keyPressed(){
 if (keyCode === ENTER) {
   console.log("exit Step Mode");
   stepMode = false;
   this.generateMazeFull();
 }
}

function generateGrid(){
  var xscale = width/xsize;
  var yscale = height/ysize;
  for(y= 0; y < ysize; ++y)
    for(x = 0; x < xsize; ++x){
      var cell = new Cell(x, y, xscale, yscale);
      grid.push(cell);
    }
}

  function generateMazeStep(){
    if(visitedCount >= totalCells)
      return;
    currentCell.highlight = false;
    nextCell = currentCell.visitRandomNeighbor(grid);

    if(nextCell != undefined){
      breakWall(currentCell, nextCell);
      nextCell.visited =true;
      visitedCount = visitedCount + 1;
      stack.push(nextCell);
      currentCell = nextCell;
    } else{
        currentCell = stack.pop();
    }
    currentCell.highlight = true;
  }

  function generateMazeFull(){
    while(visitedCount < totalCells)
    {
      currentCell.highlight = false;
      nextCell = currentCell.visitRandomNeighbor(grid);
      if(nextCell != undefined){
        breakWall(currentCell, nextCell);
        nextCell.visited =true;
        visitedCount = visitedCount + 1;
        stack.push(nextCell);
        currentCell = nextCell;

      } else{
          currentCell = stack.pop();
      }
      currentCell.highlight = true;
    }
  }

function index(x, y) {
    if (x < 0 || y < 0 || x >= xsize || y >= ysize) {
      return -1;
    }
    return x + y * xsize;
}

function breakWall(cell_a, cell_b){
  if(cell_a.x < cell_b.x){
    cell_a.walls[1] = false;
    cell_b.walls[3] = false;
  }else if(cell_a.x > cell_b.x){
    cell_a.walls[3] = false;
    cell_b.walls[1] = false;
  }else if(cell_a.y < cell_b.y){
    cell_a.walls[2] = false;
    cell_b.walls[0] = false;
  }else if(cell_a.y > cell_b.y){
    cell_a.walls[0] = false;
    cell_b.walls[2] = false;
  }
}
