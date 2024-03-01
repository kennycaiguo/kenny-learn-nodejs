function anySum(...params) {
    let sum = 0
    for(let i of params){
        sum +=i
    }
    return sum
}

function anyMax(...params) {
    let max = params[0]
    for(let i of params){
       if(i>max){
         max = i
       }
    }
    return max
}
// console.log(anySum(1,2,3,4,5));
module.exports = {
    anySum,
    anyMax
}