

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

var Tuple = function(key, value){
  this.key = key;
  this.value = value;
};

var Bucket = function(){
	var tuples = [];

	this.addTuple = function(key, value){
    var existingIndex = this.find(key);

    if(existingIndex>=0){
      tuples[existingIndex].value = value;
    } else{
      tuples.push(new Tuple(key,value));
    }
	};

	this.removeTuple = function(key){
    var foundIndex = this.find(key);
    if(foundIndex>=0){
      tuples = tuples.slice(0,foundIndex) + tuples.slice(foundIndex+1);
    }
	};

	this.find = function(key){
    _.each(tuples, function(tuple, index){
      if(tuple.key === key){
        return index;
      }
    });	
    return -1;
	};
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


