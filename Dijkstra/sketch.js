let canvas_height = 800;
let canvas_width = 1200;
var grid_width = 80;
var grid_height = 120;

var node_radius = 25
var node_distance = 20

let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let current_letter_index = 0

var running = false
var selectStartNode = false

var graph = new Array()

var priorityQueue = new priorityQueue()

var current_start
var start_node

var dlist

function setup(){
  createCanvas(canvas_width,canvas_height)
  background(51);
  dlist = new dijkstraList(canvas_width - 100, 100)

}

function draw(){
  if(running){
    background(255);
    textSize(40);
    fill(0,255,0,70)
    text("Running Dijkstra",  0 , 50 );

  }else if(selectStartNode) {
    background(30);
    textSize(40);
    fill(200,0,0,70)
    text("Select Start Node",  0 , 50 );
  }else{
    background(51);

    textSize(40);
    fill(255,0,0,70)
    text("Edit Graph",  0 , 50 );

  }
  graph.forEach(function(node) {node.edges.forEach(function(node) {node.draw();});});
  graph.forEach(function(node) {node.draw();});
  dlist.draw()

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
  if(!running){
    if (mouseIsPressed) {
      // check if user clicked on a node. If not, getNode returns undefined and this evaluates to false
      let curNode = getNode(mouseX, mouseY)

      // does the user hit an empty space with the mouse?
      if(!curNode){

        // if we already selected a node, deselect it now.
        if(current_start)
          current_start.changeSelection()

        // create new node on the clicked coordinates with a new letter from the letters array
        let new_node = new node(mouseX,mouseY,node_radius, letters[current_letter_index])
        // push the node to the graph
        graph.push(new_node)


        dlist.updateEntry(new_node.label, "inf")

        // set the current start for the next possible edge connection to this new node
        current_start = new_node
        current_start.changeSelection()
        // calculate the next free letter index
        current_letter_index = (current_letter_index + 1) % 26
      }
      // The user had hit an existing node.
      else{

        // is the user in selectStartNode mode!?
        if(selectStartNode){

          // do we have an old start node?
          if(start_node)
            start_node.isStartNode = false // if we have an old start node, then we need to set its isStartNode to false!

          // set the new Start node to the current node
          start_node = curNode

          // set the start nodes isStartNode to true!
          start_node.isStartNode = true

          // return here, because we dont want to connect in select startNode mode!
          return
        }
        // we dont have a starting node for the next possible edge?
        if(!current_start){
          // set the start for the next possible edge to the clicked node.
          current_start = curNode
          curNode.changeSelection()
        }
        // we have a start for the next possible edge and the clicked node is not the same
        else if(curNode != current_start)
        {
          // we add an edge to the current start with an random value as costs
          current_start.addEdge(curNode, parseInt(random(50)))
          // we deselect the current start
          current_start.changeSelection()

          // for a continious edge connection experience,the current start is set to the end of the edge.
          current_start = curNode
          current_start.changeSelection()

        }else{
          curNode.changeSelection()
          current_start = undefined
        }
      }
    }
  }
}

function dijkstraInit(){

  // initialize ALL nodes with infinity.
  graph.foreach(function (node){
    priorityQueue.insert(node, Infinity)
  })



}


function dijkstraStep(){

  // Priority Queue is not empty!?
  if(priorityQueue.data.length > 0){
    let u = priorityQueue.getHighestPriority()
    u.neighbors.foreach(function(){
      let alt = 
    })
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
