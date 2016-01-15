var BinarySearchTree = function(value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
}; 

BinarySearchTree.prototype.insert = function(value){
  //dry this code
  if (this.getMaxDepth() > this.getMinDepth() * 2) {
    this.rebalance();
  }
  
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

BinarySearchTree.prototype.rebalance = function(){
  var treeNodes = [];

  this.depthFirstLog(function(tree){
    treeNodes.push(tree);
  });

  treeNodes.sort(function(a,b){
    return a.value > b.value;
  });


  var build = function(arr, start, end){
    if (start > end) {
      return;
    }
    var medianIndex = Math.floor((end + start)/2);

    var median = arr[medianIndex];
    var node = new BinarySearchTree(median);
    node.left = build(arr, start, medianIndex-1);
    node.right = build(arr, medianIndex+1, end);
    return node;
    // if (newTree === undefined){
    //   newTree = new Tree(median);
    // } else {
    //   newTree.insert(median);
    // }
    // build(array, start, medianIndex-1);
    // build(array, medianIndex+1, end);
  };

  var newTree = build(treeNodes, 0, treeNodes.length-1);
  this.left = newTree.left;
  this.right = newTree.right;
  this.value = newTree.value;
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

BinarySearchTree.prototype.getMaxDepth = function(){
  if (this === null){
    return 0;
  }
  var left;
  var right;

  left = this.left ? this.left.getMaxDepth() : 0;
  right = this.right ? this.right.getMaxDepth() : 0;

  return 1 + Math.max(left, right);
};

BinarySearchTree.prototype.getMinDepth = function(){
  if (this === null){
    return 0;
  }
  var left;
  var right;

  left = this.left ? this.left.getMinDepth() : 0;
  right = this.right ? this.right.getMinDepth() : 0;

  return 1 + Math.min(left, right);
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
