var Queue = function() {
  
  var instance = Object.create(queueMethods);
  instance.front = 0;
  instance.back = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage[this.front] = value;
	this.front++;
};

queueMethods.dequeue = function(){
	if(this.front !== this.back){
		var retval = this.storage[this.back];
		delete this.storage[this.back];
		this.back++;
		return retval;
	}
};

queueMethods.size = function(){
	return this.front-this.back;
}
	

