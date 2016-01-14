describe('doublyLinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property("head");
    expect(linkedList).to.have.property("tail");
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a("function");
    expect(linkedList.removeHead).to.be.a("function");
    expect(linkedList.contains).to.be.a("function");
  });

  it('should designate a new tail when new nodes are added', function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should return the value of the former head when removeHead is called", function(){
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should set a new head when addToHead is called', function(){
    linkedList.addToHead(10);
    expect(linkedList.head.value).to.equal(10);
    linkedList.addToHead(11);
    expect(linkedList.head.value).to.equal(11);
  });

  it('should return the former tail when removeTail is called', function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    var currentTail = linkedList.tail;
    var expectedNextTail = currentTail.previous;
    expect(currentTail.value).to.equal(linkedList.removeTail());
    //Check to make sure we transfered the tail to the expected node
    expect(expectedNextTail).to.equal(linkedList.tail);
  });

  xit('should have a number of connected nodes equal to the list length', function(){
  
  });
  //add more tests here to test the functionality of linkedList
});
