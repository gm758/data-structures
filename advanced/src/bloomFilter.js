
var BloomFilter = function(slots, hashFunctions){
  this._slots = slots;
  this._hashes = hashFunctions;
  this._storage = Array(slots).fill(0);

  this.add = function(value){
    this._eachHash(value,function(bitIndex){
      this._storage[bitIndex] = 1;
    });
  };

  this.possiblyContains = function(value){
    var doesNotContain = true;
    this._eachHash(value, function(bit){
      doesNotContain = doesNotContain && !!this._storage[bit];
    });
    return doesNotContain;
  };

  this._eachHash = function(value, callback){
    for(var i = 0; i<this._hashes.length; i++){
      var hashIndex = this._hashes[i](value, this._slots); 
      callback.call(this,hashIndex);
    }
  };
};

var hashCode = function(str, length){
    var hash = 0;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash % length;
};



var djb2Code = function(str, length){
    var hash = 5381;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return hash % length;
};

var sdbmCode = function(str, length){
    var hash = 0;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = char + (hash << 6) + (hash << 16) - hash;
    }
    return hash % length;
};


