function edge(start_node, end_node, costs){
	
	this.start = start_node
	this.end = end_node
	this.costs = costs

	this.draw = function(){
		line(this.start.x, this.start.y, this.end.x, this.end.y)
		textSize(20);
		fill(0)
		text(this.costs,5+ this.start.x - ( this.start.x - this.end.x) / 2 , this.start.y - ( this.start.y - this.end.y)/ 2 );
	}
 

}
