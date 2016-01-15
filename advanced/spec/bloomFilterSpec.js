describe('bloomFilter', function() {
  var bloom;

  beforeEach(function() {
    bloom = new BloomFilter(18, [hashCode, djb2Code, sdbmCode]);
  });


  it('should set bits when value is added', function(){
    bloom.add('test');
    expect(bloom._storage.indexOf(1)).to.be.above(-1);
  });

  it('should return true/false from possiblyContains when appropriate', function(){
    bloom.add('test');
    expect(bloom.possiblyContains('test')).to.equal(true);
    expect(bloom.possiblyContains('dog')).to.equal(false);
  });

  it('should call _each for the number of hash functions we have', function(){
    var counter = 0;
    bloom.add('test');
    bloom._eachHash('test',function(){
      counter++;
    });
    expect(counter).to.equal(3);
  });
});
