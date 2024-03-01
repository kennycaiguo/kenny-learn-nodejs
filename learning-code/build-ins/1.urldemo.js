const { log } = require('console')
let url = require('url')

//1.parse方法，把一个网址解析为一个有很多属性的对象
let urlStr="http://www.nodejs.org/some/url/?with=query&param=that#about"
let ret = url.parse(urlStr,true)
// console.log(ret);
//2.//2 format方法，和上面的方法刚好反过来
let urlObj={
    protocol:'https',
    slashes:true,
    host:"www.restelrico.com",
    port:null,
    hash:'#good',
    search:'?recommand=de-la-casa&price=3700'
}
let urllink = url.format(urlObj)
// console.log(urllink);//https://www.restelrico.com?recommand=de-la-casa&price=3700#good

//3.resolve方法，后面的path路径会覆盖前面的path路径
let url1 = url.resolve('https://www.httpbin.ort','get')
// console.log(url1);//https://www.httpbin.ort/get
let url2 = url.resolve('https://www.httpbin.org/get','post')
// console.log(url2);//https://www.httpbin.org/post 原来的网址有路径，直接覆盖
//4.URLSearchParams
let link = "https://www.sogou.com/web?query=%E5%A5%B3%E5%B8%9D&_asf=www.sogou.com"
let urlParams = new URLSearchParams(url.parse(link,true).search)
// console.log(urlParams);//URLSearchParams { 'query' => '女帝', '_asf' => 'www.sogou.com' }
let urlString = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
let urlParams2 = new URLSearchParams(url.parse(urlString,true).search) //其实是一个Map数据结构
// console.log(urlParams2); //URLSearchParams { 'id' => '2' }
let urlString2 = "https://www.bing.com/images/search?q=car&qs=n&form=QBIDMH&first=1"
let urlParams3 = new URLSearchParams(url.parse(urlString2,true).search)
// console.log(urlParams3); //URLSearchParams { 'q' => 'car', 'qs' => 'n', 'form' => 'QBIDMH', 'first' => '1' }
// console.log([...urlParams3]);
for(let [k,v] of urlParams3){
    //  console.log(`key:${k},value:${v}`);
}
//5.URL类,它也一个searchParams属性也是可以解析search字符串
let myUrl = new URL('https://www.baidu.com:443/path/index.html?id=2#tag=3')
console.log(myUrl.searchParams); //URLSearchParams { 'id' => '2' }
console.log(myUrl.searchParams.get('id'));//2