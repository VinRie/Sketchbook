function Ball(x,y){
  let pos = createVector(x,y);
  let r = 20;
  let direction = createVector(0.00001,0);

  this.getPos = function(){
  return pos;
  }

  this.draw = function(){
    noStroke();
    fill(0,100,0,50);
    ellipse(pos.x, pos.y, r, r);
  }

  this.moveBall = function(){
  //  pos += 1;
    pos.x += -1
  }



}
