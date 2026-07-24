// Query Selector - Select any thing
const id = document.querySelector("#first") // here we select ID
id.innerHTML = "Keep your voice down!"

const id1 = document.querySelector(".header2") // here we select class 
// console.log(id)
id1.style.backgroundColor = "lightblue"

// In case if we have multiple class having same name it gave first class

// document.querySelector(".header1")
// <h1 id="first" class="header1">Keep your voice down!</h1>


// const id2 = document.querySelectorAll(".header1")
// then we get a nodelist
// we can iterate on node list using for loop
// 1. for(let  i=0;i<id2.length;i++){ console.log(id2[i])}
// 2. for(let key of id2){console.log(key)}
// 3. id2.forEach((num)=>console.log(num))


// We can convert our object into an array 
Array.from(id2)
// after converting into array we can apply any array operation on it.

// Using QuerySelection we can select HTML elements  too
//let id3 = document.querySelectorAll("li")
// it return  a node list to get all list item

//Using TagName we can select HTML elements
// Accessing using tagname
// document.getElementsByTagName("h1")
// we get HTML collection we can iterate using for of and how can we use for each
// first convert it into an array then we can iterate over it using for each 
//Array.from(id4).forEach((a)=>console.log(a))

//Accessing using relationship
//parent nodes
//const list = document.querySelector("li")
//list.parentNode or list.parentElement // we get parent node

//Child nodes
//const par = document.querySelector("ul")
//par
//par.childNodes // we get a node list of ul --> par.childNodes[0]. par.childNodes[1]
//par.children return onyl children's 

//par.firstChild
//par.lastChild

// document.getElementById('first').innerHTML
// document.getElementById('first').innerText
// document.getElementById('first').textContent


