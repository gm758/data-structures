var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v, limitedArray) {
  if(this._size >= this._limit * 0.75){
    var newLimit = this._limit * 2;
    this.resize(newLimit);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined){
    this._storage.set(index, new Bucket());
  }
  this._storage.get(index).addTuple(k,v);
  this._size++;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  return bucket.getTuple(k) === undefined ? undefined : bucket.getTuple(k).value;
};

HashTable.prototype.remove = function(k) {
  if(this._size <= this._limit * 0.25){
    var newLimit = this._limit / 2;
    this.resize(newLimit);
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  bucket.removeTuple(k);
  this._size--;
};

HashTable.prototype.resize = function(newLimit) {
  //can we dry this function relative to insert?
  var newStorage = LimitedArray(newLimit);
  this.each(function(tuple){
    var index = getIndexBelowMaxForKey(tuple.key, newLimit);
    if (newStorage.get(index) === undefined){
      newStorage.set(index, new Bucket());
    }
    newStorage.get(index).addTuple(tuple.key, tuple.value);

  });
  this._storage = newStorage;
  this._limit = newLimit;
};

HashTable.prototype.each = function(callback){
  this._storage.each(function(bucket){
    if (bucket !== undefined) {
      _.each(bucket.tuples, callback);
    }
  });
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
  return foundIndex===-1 ? undefined : this.tuples[foundIndex];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


