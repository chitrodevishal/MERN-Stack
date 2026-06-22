console.log("String in JS")
let str = "Hello World"
console.log(str)
console.log(typeof str)

let str1 = 'Hey World'
console.log(str1)
console.log(typeof str1)

let str2 = `Hello World`
console.log(`This is ${str2} !`)
console.log(typeof str2)

// Concantenation
console.log(str  + str2)

let text = "Hello Mercury"
console.log(text)

console.log(typeof text)
console.log(text.length)
console.log(text.toLowerCase())
console.log(text.toUpperCase())

console.log(text[7])
console.log(text.indexOf("M"))
console.log(text.lastIndexOf("l"))

console.log(text.trim())
console.log(text.includes("Merc"))
console.log(text.startsWith("Hell"))
console.log(text.endsWith("Hell"))

// 0123456789101112
// Hello Mercury
// -12-11-10-9-8-7-6-5-4-3-2-1

console.log(text.slice(2,5))
console.log(text.slice(-12,8))

console.log(text.replace("Mercury", "World"))
console.log(text.replaceAll("l", "x"))

console.log(text.split(" ")) //[ 'Hello', 'Mercury' ] it convert string into a array

console.log(text.charAt(6))
console.log(text.charAt(-6)) //


