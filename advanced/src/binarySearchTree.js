var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
}; 

BinarySearchTree.prototype.insert = function(value){
  //dry this code
  if(value < this.value){
    if(this.left===undefined){
      this.left = new BinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  } else{
    if(this.right===undefined){
      this.right = new BinarySearchTree(value);
    }else{
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value){
    return true;
  } else if (value < this.value) {
    if(this.left===undefined) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    if(this.right===undefined) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstLog = function(func){
  func(this.value);

  if(this.left!==undefined){
    this.left.depthFirstLog(func);
  }

  if(this.right!==undefined){
    this.right.depthFirstLog(func);
  }

};


BinarySearchTree.prototype.breadthFirstLog = function(func){
  var q = new Queue();
  q.enqueue(this);
  while(q.size > 0){
    var currentNode = q.dequeue();
    func(currentNode.value);
    q.enqueue(currentNode.left);
    q.enqueue(currentNode.right);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
