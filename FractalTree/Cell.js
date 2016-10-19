function Cell(x,y, xscale, yscale){
  this.x = x;
  this.y = y;
  this.xscale = xscale;
  this.yscale = yscale;

  // north, west, south, east
  this.walls = [true, true, true, true];

  this.visited = false;
  this.highlight = false;


  this.isVisited = function(){
    return this.visited;
  }

  this.draw = function(){
    var cx = this.x * this.xscale;
    var cy = this.y * this.yscale;
    var yw = this.yscale;
    var xw = this.xscale;

    stroke(255);
    if(this.walls[0]){
      line(cx,                cy,                 cx + xw, cy);
    }if(this.walls[1]){
      line(cx + xw, cy, cx + xw, cy + yw );

    }if(this.walls[2]){

      line(cx + xw, cy + yw, cx, cy+yw);

    }if(this.walls[3]){
      line(cx, cy + yw, cx, cy);
    }

    
    if(this.visited && !this.highlight){
      noStroke();
      fill(0,100,100,75);
      rect(x*xscale, y*yscale, xscale, yscale);
    }else if(this.highlight){
      noStroke();
      fill(100,5,50,100);
      rect(x*xscale, y*yscale, xscale, yscale);
    }else{
      noStroke();
      fill(100);
      rect(x*xscale, y*yscale, xscale, yscale);
    }
  }

  this.visitRandomNeighbor = function(grid){

    var neighbors = [];
    var top    = grid[index(this.x, this.y -1)];
    var right  = grid[index(this.x+1, this.y)];
    var bottom = grid[index(this.x, this.y+1)];
    var left   = grid[index(this.x-1, this.y)];

    if (top && !top.visited) {
     neighbors.push(top);
    }
    if (right && !right.visited) {
     neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
     neighbors.push(bottom);
    }
    if (left && !left.visited) {
     neighbors.push(left);
    }

    if (neighbors.length > 0) {
     var r = floor(random(0, neighbors.length));
     return neighbors[r];
    } else {
     return undefined;
    }
  }

}
