

var Trie = function(value){
  this.value = value || null;
  this.children = {};


};

Trie.prototype.insertWord = function(word){
  var node = this;
  word = word + '"';

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
  this._t9 = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  this._lookupTree = new Trie();
  for (var i = 0; i < words.length; i++){
    this._lookupTree.insertWord(words[i]);
  }

  this._keys = [];
};

Phone.prototype.press = function(number){
  this._keys.push(this._t9[number]);
};


Phone.prototype.getPotentialWords = function() {

  var wordList = [];

  var recursive = function (keyPresses, currentKeyPress,currentWord, node) {

    if (currentKeyPress === keyPresses.length) { 
        if ('"' in node.children) {
          wordList.push(currentWord);
        }
    } else {
      for (var i=0; i<keyPresses[currentKeyPress].length; i++) {
        var potentialLetter = keyPresses[currentKeyPress][i];

        if (potentialLetter in node.children) {
          recursive(keyPresses, currentKeyPress + 1, currentWord + potentialLetter, node.children[potentialLetter]);
        }
      }
    }
  };

  recursive(this._keys, 0, '', this._lookupTree);
  return wordList;
};

