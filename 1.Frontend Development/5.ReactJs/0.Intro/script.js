// Here we create an element using JS
const heading = document.createElement("h1");
heading.innerHTML = "Hello world";
heading.style.backgroundColor = "aqua";
heading.style.fontSize = "40px";
heading.style.color = "Black";

const heading1 = document.createElement("h1");
heading1.innerHTML = "Another Heading";
heading1.style.backgroundColor = "red";
heading1.style.fontSize = "25px";
heading1.style.color = "Black";
document.getElementById("root").append(heading, heading1);

const react = {
  createElement: function (tag, properties, ...children) {
    const element = document.createElement(tag);

    if (properties) {
      for (let key in properties) {
        element.style[key] = properties[key];
      }
    }

    if (children.length > 0) {
      if (children.length === 1 && typeof children[0] !== "object") {
        element.innerHTML = children[0];
      } else {
        for (let val of children) {
          element.appendChild(val);
        }
      }
    }
    return element;
  },
};

const heading2 = react.createElement("h1", null, "Heading using react object");
const heading3 = react.createElement(
  "h1",
  { fontSize: "45px", color: "Blue" },
  "Heading using react object",
);

const li = react.createElement("li", {}, "HTML");
const li1 = react.createElement("li", {}, "JS");
const li2 = react.createElement("li", {}, "CSS");
const UL = react.createElement(
  "ul",
  { fontSize: "25px", backgroundColor: "Blue" },
  li,
  li1,
  li2,
);
document.getElementById("root").appendChild(heading2); //Here we perform Dom manipulation

const ReactDom = {
  render: function (element, root) {
    root.append(element);
  },
};
ReactDom.render(heading3, document.getElementById("root"));
ReactDom.render(heading3, document.getElementById("root"));
ReactDom.render(UL, document.getElementById("root"));

// Now little bit complex like if we want to create a unordered list like
// HTML
// CSS
// JS
