let height = 800;
let width = 1200;
let angle;
let colorR;
let colorG;
let colorB;

function setup(){
  createCanvas(width,height)
  // Beautiful trianglish  fractal
  // angle = PI*4 / sin(1);

  // angle = PI / sin(PI);
    angle = PI / 2;
}


function draw(){
  angle = PI / (((mouseX+width/2) / width) * 4)
  colorR = ((mouseY) / width*2) * 255
  colorG = (mouseX / width * 2) * 255
  colorB = (mouseX/ width) * 255

  background(51)
  stroke(colorR, colorG, 0)
  strokeWeight(2);
  translate(width/2,height)
  branch(250)
 

}

function branch(len){
  if(len < 10)
    return
  line(0,0,0,-len)
  push()
    translate(0, -len)
    rotate(angle)
    branch(len*0.75)
  pop()

  push()
    translate(0, -len)
    rotate(-angle)
    branch(len*0.6)
  pop()



}