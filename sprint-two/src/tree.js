var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  return _.extend(newTree,treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
  return newTree;
};

treeMethods.contains = function(target) { //beautify this?
  if(this.value === target){
    return true;
  }
  
  for(var i=0; i<this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
    }
  }

  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
