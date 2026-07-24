// 1.Create a Element

const element = document.createElement("li");
element.innerHTML = "NodeJs"; // insert data into element

// Attach to DOM
const parent = document.getElementById("root"); // here we get access to parents
parent.appendChild(element); // it's help to attach into parent

function create(content) {
  const element = document.createElement("li");
  element.innerHTML = content;
  const element2 = document.createElement("li");
  element2.innerHTML = content + " " + "V.2.0";

  // Attach to DOM
  const parent = document.getElementById("root");
  //   parent.appendChild(element); // use to add an a element and statement
  parent.append(element, element2); // use to add multiple element and statements
}

create("NodeJs");
create("Express");
create("MongoDB");

// 2.Create a TextNode (Text without any tag) space and next line came within textnode

const textnode = document.createTextNode("Hello World");
// const parent = document.getElementById("root");
parent.appendChild(textnode);

// 3.Create a Attribute Node
const attribute = document.createAttribute("class"); //which attribute we want to create and add
attribute.value = "one"; // gave value it attribute using this we can access that
const element1 = document.querySelector("li"); // target element where we want to attach attirbute
element1.setAttributeNode(attribute); //finally attribute attached to element

//  if we want access second list item
const attirbute1 = document.createAttribute("class");
attirbute1.value = "two";

// const element2 = document.querySelector("li")
parent.children[2].setAttributeNode(attirbute1);

// Accessing Attribute of an element
const element3 = document.getElementById("root"); // first we get access to those element which we want to access
console.log(element3.getAttribute("class")); //here we get that attribute access
element3.setAttribute("custom", "three"); // here we set an attribute

// if we want to update the existing attribute
element3.setAttribute("class", "changed");
element3.removeAttribute("id"); //if we want to remove any attribute

// add nodes to the DOM
// whenever we want to add nodes we want parent access
// const parent = document.getElementById("root");
const element4 = document.createElement("li");
element4.innerHTML = "AWS";

parent.prepend(element4); // if we want to attach on top/ front
parent.append(element4); // if we want to attach on last/ back

const child = parent.children[2];
console.log(child); // here we get access to any element
// parent.insertBefore(element4, child); //insertBefore(newNode, referenceNode)

parent.replaceChild(element4, child);  // replaceChild(newNode, oldNode)
// parent.innerHTML += "TS"
// parent.innerHTML += "<li>Docker</li>"
// parent.innerHTML = parent.innerHTML + "<li>Docker</li>"

// if we want to add div before Unordered list
const div = document.createElement("div") // here we create a div
div.innerHTML = "Vishal Chitrode" // and content inside div

parent.insertAdjacentElement("beforebegin", div) 
parent.insertAdjacentElement("afterbegin", div)
parent.insertAdjacentElement("afterend", div)
parent.insertAdjacentElement("beforeend", div)


// remove child
const element5 = document.querySelector("li")
element5.remove()

