(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require(`@flaskfullofcoffee/palindrome`);

alert(new Phrase(`Madam, I'm Adam.`).isPalindrome());

},{"@flaskfullofcoffee/palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// let test = `Madam, I'm Adam`;
// Reverses a string
function reversify(str) {
  return Array.from(str).reverse().join('');
}
// function onlyLetters(str) {
//   return str.replace(/\W/g, '');
// }

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  this.letters = function letters() {
    return this.content.replace(/\W/g, '');
  }

  this.isPalindrome = function isPalindrome() {
    return this.processedContent() === reversify(this.processedContent());
  }
}

},{}]},{},[1]);
