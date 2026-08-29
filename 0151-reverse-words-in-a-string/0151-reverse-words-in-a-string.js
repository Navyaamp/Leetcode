/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words=s.trim().split(/\s+/).reverse().join(" ","")
    return words;
};
console.log(reverseWords("the sky is blue"));