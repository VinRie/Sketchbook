function priorityQueue(){

	var data = new Array()


	this.insert = function(_node, _priority){
		data.push( {node: _node, priority: _priority})
	}

	// Note: in this implementation the highest priority has the lowest number
	this.getHighestPriority = function(){
		var len = arr.length, min = this.data[0];
		var curNode = undefined
		var curIndex = undefined
		while (len--) {
	    if (this.data[len].priority < min) {
	      min = this.data[len].priority
				curNode = this.data[len].node
				curIndex = len
	    }
	  }
		this.data.splice(curIndex, 1)
		return min;
	}

	this.decreasePriority = function(_node, _priority){
		this.findElement(_node).priority = _priority
	}


	this.findElement = function(_node){
		return this.data.find( function (element){ return element.node == _node}    )
	}


}
