console.log("Advanced For In Loop")
// For in loop with Array isn't recommended
const arr = [10, 20, 30, 40, 50]
arr.name = "Virat" // index never a string it always start from e.g.0,1,2,3,...etc
console.log(arr)
for(let key in arr){
    // console.log(key) // it will print index of array
    console.log(key,  ":", arr[key])
}


// for in loop always used with objects only 
// we can use with in array
for(let index = 0; index < arr.length; index++){
    console.log(index,":",arr[index])
}