

var Trie = function(value){
  this.value = value || null;
  this.children = {};


};

Trie.prototype.insertWord = function(word){
  var node = this;

  for(var i=0; i<word.length; i++){
    if(!(word[i] in node.children)){
      node.children[word[i]] = new Trie(word[i]); 
    } 
    node = node.children[word[i]];
  }
};

Trie.prototype.getWord = function(){

};


var Phone = function(){
  var t9 = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  var lookupTree = new Trie();
  for (var i = 0; i < words.length; i++){
    lookupTree.insert(words[i]);
  }

  this._keys = [];
};

Phone.prototype.press = function(number){
  this._keys.push(number);
}











































