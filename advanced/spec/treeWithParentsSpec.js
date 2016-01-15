describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should hold reference to its parent', function(){
    tree.addChild(5);
    tree.addChild(3);
    var testNode = tree.addChild(2);
    expect(testNode.parent).to.equal(tree);
    expect(tree.parent).to.equal(null);
  });

  it('should lose reference to parent after deletion', function(){
    tree.addChild(5);
    tree.addChild(3);
    var testNode = tree.addChild(2);
    testNode.removeFromParent();
    expect(testNode.parent).to.equal(null);
    expect(tree.contains(2)).to.equal(false);
  });

  it('should execute a callback on each node when running each', function(){
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    var treeChild1 = tree.addChild(4);
    treeChild1.addChild(5)
    var treeChild2 = treeChild1.addChild(6);
    
    var nodesTraversed = 0;
    var nodesEqualTo5 = 0;
    tree.traverse(function(node){
      nodesTraversed++;
      if(node.value===5){
        nodesEqualTo5++;
      }
    });
    expect(nodesTraversed).to.equal(7);
    expect(nodesEqualTo5).to.equal(1);

  });

});
