function node(x,y,node_radius){
	this.x = x
	this.y = y
	this.r = node_radius
	this.visited = true
	this.selected = false
	this.edges = new Array()

	this.draw = function(){
		if(this.selected)
			fill(0,0,255,80)
		else{
			if(this.visited)
				fill(0,255,0,80)
			else
				fill(255)
		}
		ellipse(this.x,this.y,this.r,this.r)
	}
	this.addEdge = function(end_node, costs){
		if(!this.edges.find(function(edge) { return edge.end == end_node }))
			this.edges.push(new edge(this, end_node, costs))
	}

	this.changeSelection = function(){
		this.selected = !this.selected
	}

}
