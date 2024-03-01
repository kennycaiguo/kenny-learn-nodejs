const { ifError } = require('assert')
let util = require('util')

async function cb(){
    return "hello node"
}

let cbret = util.callbackify(cb)
 
cbret((err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
 })