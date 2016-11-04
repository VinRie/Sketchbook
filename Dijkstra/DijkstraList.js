function dijkstraList(x,y){

	this.x = x
	this.y = y

	this.valueMap = new Array()

	this.updateEntry = function(_key, _value){
		this.valueMap.push({key: _key, value: _value})
	}

	this.getEntry = function(key){
		return this.valueMap.
	}


	this.draw = function(){
		textSize(20)
		text("Dijkstra List", this.x - 100, this.y);

		this.valueMap.forEach(function (item, key, map) {
			text(key, this.x, this.y);
			text(item, this.x + 20, this.y);
		})

	}

}