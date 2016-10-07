function Box(x, y, z, size){
  this.x = x;
  this.y = y;
  this.z = z;
  this.size = size;

  this.draw = function(){
    push();
     translate(this.x, this.y, this.z);
     stroke(255);
     noStroke();
     noFill();
     //fill(50,0, 200,70);
     box(this.size);
    pop();
  }

  this.generate = function(){
    var nextGen = new Array();
    for( x = -1; x < 2; ++x){
      for( y = -1; y < 2; ++y){
        for( z = -1; z < 2; ++z){
          var guard = abs(x) + abs(y) + abs(z);
          if(guard <= 1) continue;
          var newSize = this.size / 3;
          nextGen.push(new Box(this.x + x * newSize, this.y + y*newSize, this.z + z*newSize, newSize  ));
        }
      }
    }
    return nextGen;
  }
}
