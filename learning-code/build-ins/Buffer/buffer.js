//1.alloc
let buf = Buffer.alloc(10) //这个方法在创建内存空间后会把里面的内容清除
// console.log(buf); //<Buffer 00 00 00 00 00 00 00 00 00 00>
//2.allocUnsafe
let buf2 = Buffer.allocUnsafe(10) //这个方法只负责创建空间，并不会清除里面的内容
// console.log(buf2); //<Buffer 00 00 00 00 00 00 00 00 00 00>
//3.from该方法可以把一个数组或者一个字符串转化为Buffer内存空间
let buf3 = Buffer.from("hello") //buffer对象有很多方法
console.log(buf3); //<Buffer 68 65 6c 6c 6f>
console.log(buf3.toString()); //hello
