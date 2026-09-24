/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0
    for(i=0;i<sentences.length;i++){
        let words=sentences[i].split(" ")
        if(words.length>max){
            max=words.length
        }
    }
    return max
    
};