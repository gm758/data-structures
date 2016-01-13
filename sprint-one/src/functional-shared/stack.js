var Stack = function() {

  var someInstance = {};
  someInstance.storage = {};
  someInstance.stackSize = 0;

  return _.extend(someInstance, stackMethods);
};

var stackMethods = {
	pop: function(){
		if(this.stackSize>0){
			var retval = this.storage[this.stackSize-1];
			delete this.storage[this.stackSize-1];
			this.stackSize--;
			return retval;
		}
	},

	push: function(value){
		this.storage[this.stackSize] = value;
		this.stackSize++;
	},

	size: function(){
		return this.stackSize;
	}

};


