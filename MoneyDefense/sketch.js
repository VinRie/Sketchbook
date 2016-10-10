var player;



function setup(){
  player = new Player();

}


function draw(){

  player.update();

  player.draw();

}
