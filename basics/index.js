console.log("hello world");

const arr =[1,2,3,4]

console.log(arr)

setTimeout(()=>{
    console.log("this code is delayed by 2 seconds")
},2000)

console.log("this is third last synchronous code")

// setTimeout(()=>{
//     console.log("this message is delayed by zero seconds let wait for some time")
// },0)


console.log("this is second last synchronous code")


// setTimeout(()=>{
//     console.log("this message is delayed by 0 seconds")
// },0)

console.log("this is last synchronous code")

// setTimeout(()=>{
//     console.log("this message is delayed by zero seconds let wait for some time helo there")
// },0)


const firstModule = require('./firstModule') 

console.log("sum is: ",firstModule.sum(10,20))


try{
    console.log("divide function")
    const result = firstModule.divide(100,0)
    console.log("result is: ",result)
}catch(error){
    console.log("error: ",error.message )
}