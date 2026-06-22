console.log("Array in JS");
let arr = [1, 2, 3, 5, 6, "Vishal", false, null, 5, 6, 8];
console.log(arr);
console.log(typeof arr);
console.log(arr.length);

// In Js array indexing start from 0

console.log(arr[10]);
console.log(arr[arr.length - 1]);

arr[2] = 4;
console.log(arr);
console.log(arr[12]); //undefined

arr.push(30);
arr.push(70);
console.log(arr);

arr.pop()
arr.pop()
arr.pop()
console.log(arr);

arr.unshift('50')
console.log(arr);

arr.shift()
console.log(arr);
delete arr[0]
console.log(arr);

console.log(arr.slice(2,6))
console.log(arr);

console.log(arr.splice(2,0, "Hello World", 90, 65, 54, 43))
console.log(arr);

console.log(arr.join())
console.log(arr.join(" : "))
console.log(arr.join(" * "))


console.log(arr.includes("Chitrode"))

console.log(arr.sort((a,b)=>a-b))
console.log(arr.sort((a,b)=>b-a))

let arr1 = [1,2,3]
let arr2 = [4,5,6,7,8,9,"Vishal", null]
let arr3 = arr1.concat(arr2)
console.log(arr3)

arr4 = structuredClone(arr3)
console.log(arr4)

let arr5 = [1,2,3,[4,5,6], [4,5,7,3,2]] 
console.log(arr5)
console.log(arr5.flat(Infinity))

console.log(Array.isArray(arr5))




