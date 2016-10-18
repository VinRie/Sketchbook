function Player(x,y){
  let pos = createVector(x,y);
  let length = 50;
  let width = 10;
  let speed = 5;

  this.getPos = function(){
    return pos;
  }

  this.draw = function(){
    noStroke();
    fill(100,0,0,50);
    rect(pos.x, pos.y, width, length);
  }

  this.movePlayer = function(yDirection){
    if(!((pos.y + yDirection * speed) + length >= HEIGHT) && !((pos.y + yDirection * speed) < 0))
      pos.y += yDirection * speed;
  }

}
