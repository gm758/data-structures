var Stack = function() {
  this.sizeStack = 0;
  this.storage = {};

};

Stack.prototype.push = function(value){
	this.storage[this.sizeStack] = value;
	this.sizeStack++;
};

Stack.prototype.pop = function(){
	if(this.sizeStack>0){
		var retval = this.storage[this.sizeStack-1];
		delete this.storage[this.sizeStack-1];
		this.sizeStack--;
		return retval;
	}
};

Stack.prototype.size = function(){
	return this.sizeStack;
};
