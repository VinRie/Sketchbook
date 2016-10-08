var x = 0;
var a = 0;

var sponge = [];
var myBox;

function setup() {
  createCanvas(1200, 800, WEBGL);
  myBox = new Box(0,0,0,500);

  sponge.push(myBox);
}


function mousePressed(){var x;
var a;

var sponge = [];
var myBox;

function setup() {
  x = 0;
  a = 0;
  createCanvas(1200, 800, WEBGL);
  myBox = new Box(0,0,0,500);

  sponge.push(myBox);
}

function mousePressed(){
  clear();
  var nextGen = new Array();

  for(index = 0; index < sponge.length; ++index){
    nextGen.push.apply(nextGen, sponge[index].generate());
  }

  sponge = nextGen;


}

function draw() {
  background(100);
  var index;

  //rotateX(a);
  //rotateY(a );
  //rotateZ(a * 0.1);

  for(index = 0; index < sponge.length; ++index){
    sponge[index].draw();

  }
  a = (a +0.01) % (2* PI) ;

  //myBox.draw();
}

  clear();
  var nextGen = new Array();

  for(index = 0; index < sponge.length; ++index){
    nextGen.push.apply(nextGen, sponge[index].generate());
  }

  sponge = nextGen;


}

function draw() {
  background(100);
  var index;

  //rotateX(a);
  //rotateY(a );
  //rotateZ(a * 0.1);
 // schnucki
  for(index = 0; index < sponge.length; ++index){
    sponge[index].draw();

  }
  a = (a +0.01) % (2* PI) ;

  //myBox.draw();
}
