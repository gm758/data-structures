var Stack = function() {
  var someInstance = {};
  var sizeStack = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[sizeStack] = value;
    sizeStack++;
  };

  someInstance.pop = function() {
    if(sizeStack>0){
      var retval = storage[sizeStack-1];
      delete storage[sizeStack-1];
      sizeStack--;
      return retval;
    }
  };

  someInstance.size = function() {
    return sizeStack;
  };

  return someInstance;
};
