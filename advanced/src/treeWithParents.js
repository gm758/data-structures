var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];

  return _.extend(newTree,treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  newTree.parent = this;
  this.children.push(newTree);
  return newTree;
};

treeMethods.removeFromParent = function(){
  //Remove the child reference from the parent
  var childIndex = this.parent.findChildIndex(this);
  this.parent.children.splice(childIndex,1);

  this.parent = null;
};

treeMethods.traverse = function(callback){

  callback(this);

  for(var i=0; i<this.children.length; i++){
    this.children[i].traverse(callback);
  }
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

treeMethods.findChildIndex = function(node){
  for(var i=0; i<this.children.length; i++){
    if(this.children[i]===node){
      return i;
    }
  }

  return -1;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
