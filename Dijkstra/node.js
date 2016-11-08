function node(x,y,node_radius, label){
	this.x = x
	this.y = y
	this.r = node_radius
	this.visited = false
	this.selected = false
	this.edges = new Array()
	this.label = label
	this.isStartNode = false
	this.neighbors = new Array()

	this.draw = function(){
		if(this.isStartNode){
			fill(0,100,255)
			stroke(5)

		}
		else if(this.selected && !this.isStartNode){
			fill(0,0,255,80)
		}
		else{
			if(this.visited)
				fill(0,255,0,80)
			else
				fill(255)
		}
		ellipse(this.x,this.y,this.r,this.r)

		fill(0,0,0)
		textSize(20)
		text(this.label, this.x - this.r/4, this.y + this.r/4 );
		stroke(1)

	}
	this.addEdge = function(end_node, costs){
		if(!this.edges.find(function(edge) { return edge.end == end_node })){
			this.edges.push(new edge(this, end_node, costs))
			this.neighbors.push(end_node)
		}
	}

	this.changeSelection = function(){
		this.selected = !this.selected
	}

}
