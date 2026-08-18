/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result="";
    let word=s.split(" ");
    result+=word[0].toLowerCase();
    return result;

    
};
console.log(toLowerCase("Hello"))