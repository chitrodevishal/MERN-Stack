const id = document.getElementById('first')
id.innerHTML = "Hello World"

const id2 = document.querySelector('.header2')
// document.querySelector('.header2') for one
// document.querySelectorAll('.header2') for all
id2.style.backgroundColor = "darkred"


const obj = document.getElementsByTagName('h1')
console.log(obj)