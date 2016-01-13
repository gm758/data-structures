var Queue = function() {
	var someInstance = {};
	someInstance.front = 0;
	someInstance.back = 0;
	someInstance.storage = {};

	return _.extend(someInstance, queueMethods);
};

var queueMethods = {
	enqueue: function(value){
      this.storage[this.front] = value;
      this.front++;
	},
	dequeue: function(){
	  if (this.front !== this.back){
	      var resvar = this.storage[this.back];
	      delete this.storage[this.back];
	      this.back++;
	      return resvar;
	  }
	},
	size: function(){
	  return this.front - this.back;
	}
};


