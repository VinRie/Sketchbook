function cell(i, j, xwidth, ywidth){

  this.i = i;
  this.j = j;
  this.x = i * xwidth;
  this.y = j * ywidth;
  this.state = false;
  this.nextState = this.state;
  this.xwidth = xwidth;
  this.ywidth = ywidth;

  this.draw = function(){
    if(!this.state){
      noStroke();
      fill(0);
      fill(0,75,50,66);

      rect(this.x, this.y, this.xwidth, this.ywidth);

    }else{
      stroke(255);
      fill(100,75,50,66);

      rect(this.x, this.y, this.xwidth, this.ywidth);

    }
  }

  this.update = function(){
    this.state = this.nextState;
  }

  this.calcNextState = function(grid, width, height){
    var otherx;
    var otherv;
    var population = 0;
    for(offsety = -1; offsety < 2; ++offsety){
      for(offsetx = -1; offsetx < 2; ++offsetx){
        otherx = this.i + offsetx;
        othery = this.j + offsety;

        if(offsetx == 0 && offsety == 0)
          continue;

        if(otherx < 0 || othery < 0 || otherx > width-1 || othery > height-1)
          continue;

        //console.log("X: " + otherx + " Y: " + othery);

        if(grid[otherx + othery * width].state)
          population = population + 1;
      }
    }

    // Rules:

    if(population > 3){
      this.nextState = false;
    }
    if(population < 2){
      this.nextState = false;
    }
    if(population === 3){
      this.nextState = true;
    }
  }

  this.invertState = function(){
    this.state = !this.state;
    this.nextState = !this.nextState;
  }

  this.isAlive = function(){
    return this.state;
  }
}
