const assert = require('assert');
const Phrase = require('../index.js');

describe('Phase', () => {
  describe('#isPalindrome', () => {
    it('should return false for a non-palindrome', () => {
      let nonPalindrome = new Phrase(`apple`);
      assert(!nonPalindrome.isPalindrome());
    });
    it('should return true for a plain palindrome', () => {
      let palinPalindrome = new Phrase(`racecar`);
      assert(palinPalindrome.isPalindrome());
    });

    it('Should return true for a mixed-case palindrome', () => {
      let mixedCasePalindrome = new Phrase(`Racecar`);
      assert(mixedCasePalindrome.isPalindrome());
    });

    it('Should return true for a palindrome with punctuation', () => {
      let punctuationPalindrome = new Phrase(`Madam, I'm Adam`);
      assert(punctuationPalindrome.isPalindrome());
    });
  })
})
