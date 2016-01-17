

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
  
  //Load the english dictionary
  //NOTE: Phone requires englishWords.js to function
  for (var i = 0; i < words.length; i++){
    this._lookupTree.insertWord(words[i]);
  }

  this._keys = [];

  this.sentence = "";
};

Phone.prototype.press = function(entry){
  
  if (entry === '<' ){
    this.backspace();
  } else if (entry === '_') {
    this.sentence += ' ';
  } else if (entry === '1' || entry === '#'){
    this._keys.push(entry);
  } else {
    this._keys.push(this._t9[entry]);
  }
};

//Removes most recent keypress
Phone.prototype.backspace = function(){
  this._keys.pop();
};

Phone.prototype.clearWord = function(){
  this._keys = [];
};

Phone.prototype.addWordToSentence = function(word){
  this.sentence += word;
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

