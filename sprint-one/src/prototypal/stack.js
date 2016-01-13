var Stack = function() {
	var someInstance = Object.create(stackMethods);
	someInstance.sizeStack = 0;
	someInstance.storage = {};
	return someInstance;
};

var stackMethods = {
	push: function(value){
      this.storage[this.sizeStack] = value;
      this.sizeStack++;
	},
	pop: function(){
      if(this.sizeStack > 0){
      	var resval = this.storage[this.sizeStack-1];
      	delete this.storage[this.sizeStack-1];
      	this.sizeStack--;
      	return resval;
      }
	},
	size: function(){
      return this.sizeStack;
	}
};


