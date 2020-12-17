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
