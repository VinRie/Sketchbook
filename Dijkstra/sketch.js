let canvas_height = 800;
let canvas_width = 1200;
var grid_width = 80;
var grid_height = 120;

var node_radius = 25
var node_distance = 20


var running = false
var selectStartNode = false

var graph = new Array()

var current_start

function setup(){
  createCanvas(canvas_width,canvas_height)
  background(51);
}

function draw(){
  if(running){
    background(255);
    textSize(40);
    fill(0,255,0,70)
    text("Running Dijkstra",  0 , 50 );

  }else {
    background(51);

    textSize(40);
    fill(255,0,0,70)
    text("Edit Graph",  0 , 50 );

  }
  graph.forEach(function(node) {node.edges.forEach(function(node) {node.draw();});});

  graph.forEach(function(node) {node.draw();});


}

function keyPressed(){

  if (keyCode == ENTER || keyCode == RETURN) {
    running = !running;
  }
  if (keyCode == ESCAPE) {
    current_start.changeSelection()
    current_start = undefined
  }
  if (keyCode == 83) {
    selectStartNode = !selectStartNode
  }
  console.log(keyCode)
}

function mousePressed(){
  if(!running && !selectStartNode){
    if (mouseIsPressed) {
      // check if user clicked on a node. If not, getNode returns undefined and this evaluates to false
      let curNode = getNode(mouseX, mouseY)
      if(!curNode){

        if(current_start)
          current_start.changeSelection()

        let new_node = new node(mouseX,mouseY,node_radius)
        graph.push(new_node)
        current_start = new_node
        current_start.changeSelection()
      }
      else{
        if(!current_start){
          current_start = curNode
          curNode.changeSelection()
        }else if(curNode != current_start)
        {
          current_start.addEdge(curNode, parseInt(random(50)))
          current_start.changeSelection()

          current_start = curNode
          current_start.changeSelection()

        }else{
          curNode.changeSelection()
          current_start = undefined
        }
      }
    }
  }

  if(!running && selectStartNode){

    let curNode = getNode(mouseX, mouseY)
    if(!curNode){
        

    }
  }
}

function getNode(x, y){
  return graph.find(function(node){
    if((x < node.x + (node_radius+node_distance) && x > node.x - (node_radius+node_distance))
        && (y < node.y + (node_radius+node_distance) && y > node.y - (node_radius+node_distance)))
          return true
    else
      return false
  })
}
