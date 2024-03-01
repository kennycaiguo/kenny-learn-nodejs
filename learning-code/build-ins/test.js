let axios = require('axios')
let querystring = require('querystring')

let postData = querystring.stringify({
    province: '上海',
    city: '上海',
    district:'宝山区',
    address:'上海市宝山区密山路5号',
    latitude: 43.0,
    longtitude:160.0,
    message:'求购一条小鱼',
    contact: '134466666',
    type:'sell',
    time: 1531217561
})

// axios.post('http://localhost:3000/data',querystring.stringify({name:"boss",age:30}))
//          .then(res=>{
//             console.log(res)
//          })
//          .catch(err=>{
//             console.log(err);
//          })
axios.post('http://localhost:3000/data',querystring.stringify({name:"boss",age:30}))
         .then(res=>{
            console.log(res)
         })
         .catch(err=>{
            console.log(err);
         })
    
