let util = require('util')

async function cb(){
    return Promise.reject(null)
}

let cbret = util.callbackify(cb)
 
cbret((err,data)=>{
    if(err){
        console.log(err && err.hasOwnProperty('reason') && err.reason === null);//true
    }
    console.log(data);
 })