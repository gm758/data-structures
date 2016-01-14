var DoublyLinkedList = function() {
  var sizeList = 0;
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    //Create new node
    var node = new Node(value);

    //Initialize head if we don't have one
    list.head = list.head || node;

    if(list.tail!==null){
      list.tail.next = node;
      node.previous = list.tail;
    }
    
    //set tail to new to new node
    list.tail = node;

    sizeList++;

  };

  list.addToHead = function(value) {
    var node = new Node(value);
    list.tail = list.tail || node;

    if (list.head!==null){
      list.head.previous = node;
      node.next = list.head;
    }
    list.head = node;
    sizeList++;
  };

  list.removeTail = function(){
    var initialTail = list.tail;

    list.tail = list.tail.previous;
    list.tail.next = null;

    initialTail.previous = null;
    sizeList--;
    return initialTail.value;
  };

  list.removeHead = function() {
    var nextHead = list.head.next;
    if(nextHead!==null){
      nextHead.previous = null;
    }
    var initialHead = list.head;
    list.head.next = null;
    list.head = nextHead;
    sizeList--;
    return initialHead.value;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode !== null) {
      if(currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  list.size = function() {
    return sizeList;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
