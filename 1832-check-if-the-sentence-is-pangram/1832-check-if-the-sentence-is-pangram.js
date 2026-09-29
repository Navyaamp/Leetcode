/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
  let alphabets="abcdefghijklmnopqrstuvwxyz"
  for(i=0;i<alphabets.length;i++){
    if(!sentence.includes(alphabets[i])){
        return false
    }
  }
    return true
};