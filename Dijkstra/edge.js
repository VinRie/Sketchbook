function edge(start_node, end_node, costs){

	this.start = start_node
	this.end = end_node
	this.costs = costs

	this.start_center = createVector(this.start.x, this.start.y)
	this.u = createVector(this.end.x - this.start.x, this.end.y - this.start.y)
	this.u.normalize()
	this.start_edge = p5.Vector.add(this.start_center, this.u.mult(25/2))


	this.end_center = createVector(this.end.x, this.end.y)
	this.v = createVector(this.start.x - this.end.x, this.start.y - this.end.y)
	this.v.normalize()
	this.end_edge = p5.Vector.add(this.end_center, this.v.mult(25/2))

	this.label_pos = p5.Vector.add(this.end_edge, this.v.mult(3))


	this.draw = function(){
		fill(0,0,0)
		line(this.start_edge.x, this.start_edge.y, this.end_edge.x, this.end_edge.y)

		var a1 = atan2(this.end.y - this.start.y, this.end.x - this.start.x)
		var a2 = atan2(1,0)
		var angle = a1 - a2
		angleMode(DEGREES)
		push()
			translate(this.end_edge.x, this.end_edge.y)
			rotate(180 + angle)
			rotate(33)
			line(0,0,0,15)
		pop()
		push()
			translate(this.end_edge.x, this.end_edge.y)
			rotate(180 + angle)
			rotate(-33)
			line(0,0,0,15)
		pop()

		textSize(20)
		text(this.costs, this.label_pos.x  , this.label_pos.y );

	}


}
