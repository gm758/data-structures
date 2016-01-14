

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined){
    this._storage.set(index, new Bucket());
  }
  this._storage.get(index).addTuple(k,v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  return bucket.getTuple(k) === undefined ? undefined : bucket.getTuple(k).value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  bucket.removeTuple(k);
};

var Tuple = function(key, value){
  this.key = key;
  this.value = value;
};

var Bucket = function(){
	this.tuples = [];

  
};

Bucket.prototype.addTuple = function(key, value){
  var existingIndex = this.find(key);

  if(existingIndex>=0){
    this.tuples[existingIndex].value = value;
  } else{
    this.tuples.push(new Tuple(key,value));
  }
};

Bucket.prototype.removeTuple = function(key){
  var foundIndex = this.find(key);
  if(foundIndex>=0){
    this.tuples = this.tuples.slice(0,foundIndex) + this.tuples.slice(foundIndex+1);
  }
};

Bucket.prototype.find = function(key){
  for(var i = 0; i < this.tuples.length; i++){
    if (this.tuples[i].key === key){
      return i;
    }
  }
  return -1;
};

Bucket.prototype.getTuple = function(key){
  var foundIndex = this.find(key);
  console.log(this.tuples);
  console.log(key);
  console.log(foundIndex);
  return foundIndex===-1 ? undefined : this.tuples[foundIndex];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


