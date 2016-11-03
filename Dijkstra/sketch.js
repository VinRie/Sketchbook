let canvas_height = 800;
let canvas_width = 1200;
var grid_width = 80;
var grid_height = 120;

var node_radius = 25
var node_distance = 20

var graph = new Array()

var current_start

function setup(){
  createCanvas(canvas_width,canvas_height)

}

function draw(){
  graph.forEach(function(node) {node.draw();});
}


function mousePressed(){
  if (mouseIsPressed) {
    // check if user clicked on a node. If not, getNode returns undefined and this evaluates to false
    let curNode = getNode(mouseX, mouseY)
    if(!curNode) 
      graph.push(new node(mouseX,mouseY,node_radius))

    else{
      if(!current_start){
        console.log("start")
        current_start = curNode
      }else if(curNode != current_start)
      {
        console.log("end")
        current_start.addEdge(curNode, parseInt(random(50)))
        current_start = undefined
      }else
        current_start = undefined
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
