/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const result={}
    for(let num of nums){
        if(result[num]){
            result[num]+=1;
        }else{
            result[num]=1
        }
    }
    let totalSum=0;
    for(let num in result){
        if(result[num]===1){
            totalSum+=Number(num)
        }
    }
    return totalSum
};