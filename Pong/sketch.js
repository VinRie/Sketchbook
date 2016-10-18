let player1;
let player2;

let ball;

const WIDTH = 1000;
const HEIGHT = 500;

function setup(){
  createCanvas(WIDTH, HEIGHT);
  player1 = new Player(10, HEIGHT / 2 + 5);
  player2 = new Player(WIDTH -10, HEIGHT / 2 + 5);
  ball = new Ball(WIDTH/2, HEIGHT/2);

}

function draw(){
  background(255);

  updatePlayers();
  updateBall(player1);

  ball.draw();
  player1.draw();
  player2.draw();
}

function updatePlayers(){
  if(keyIsDown(UP_ARROW)){
    player2.movePlayer(-1);
  }if(keyIsDown(DOWN_ARROW)){
    player2.movePlayer(1);
  }if(keyIsDown(87) || keyIsDown(119)){
      player1.movePlayer(-1);
  }if(keyIsDown(83) || keyIsDown(115)){
      player1.movePlayer(1);
  }
}
  function updateBall(player){
    //collision detection
    if(isInRange(ball.getPos().y, player.getPos().y, player.getPos().y + player.length)){
      console.log("collision!");
    }

    ball.moveBall();
  }

  function isInRange( value, start, end){
    return (value >= start && value <= end);
  }
