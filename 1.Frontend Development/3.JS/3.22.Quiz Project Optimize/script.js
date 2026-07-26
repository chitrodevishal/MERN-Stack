const QuestionBank = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>",
  },
  {
    question: "Which HTML element is used to display an image?",
    options: ["<picture>", "<image>", "<img>", "<src>"],
    answer: "<img>",
  },
  {
    question: "Which HTML tag creates an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question: "Which HTML input type hides entered characters?",
    options: ["text", "email", "password", "hidden"],
    answer: "password",
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<heading>", "<head>", "<h1>"],
    answer: "<h1>",
  },
  {
    question: "Which HTML tag is used to insert a line break?",
    options: ["<break>", "<lb>", "<br>", "<hr>"],
    answer: "<br>",
  },
  {
    question: "Which attribute specifies an image source?",
    options: ["href", "src", "link", "alt"],
    answer: "src",
  },
  {
    question: "Which HTML element is used to create a table row?",
    options: ["<td>", "<th>", "<tr>", "<table-row>"],
    answer: "<tr>",
  },
  {
    question: "Which HTML5 element is used for navigation links?",
    options: ["<section>", "<aside>", "<nav>", "<header>"],
    answer: "<nav>",
  },
  {
    question: "Which CSS property changes the text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    answer: "color",
  },
  {
    question: "Which CSS property changes the background color?",
    options: ["bgcolor", "background", "background-color", "color"],
    answer: "background-color",
  },
  {
    question: "Which CSS property controls the space outside an element?",
    options: ["padding", "spacing", "margin", "border"],
    answer: "margin",
  },
  {
    question: "Which CSS property controls the space inside an element?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    answer: "padding",
  },
  {
    question: "Which CSS property makes text bold?",
    options: ["font-style", "font-weight", "text-weight", "bold"],
    answer: "font-weight",
  },
  {
    question: "Which CSS value makes an element a flex container?",
    options: [
      "display: block",
      "display: inline",
      "display: flex",
      "display: grid",
    ],
    answer: "display: flex",
  },
  {
    question: "Which CSS property is used to round element corners?",
    options: ["corner-radius", "border-radius", "radius", "round"],
    answer: "border-radius",
  },
  {
    question: "Which CSS selector selects all elements?",
    options: ["#", ".", "*", "&"],
    answer: "*",
  },
  {
    question:
      "Which CSS position value places an element relative to the viewport?",
    options: ["absolute", "relative", "fixed", "sticky"],
    answer: "fixed",
  },
  {
    question: "Which CSS property controls the stacking order of elements?",
    options: ["stack", "order", "z-index", "layer"],
    answer: "z-index",
  },
  {
    question:
      "Which keyword is used to declare a variable in modern JavaScript that cannot be reassigned?",
    options: ["var", "const", "let", "static"],
    answer: "const",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Oracle"],
    answer: "Netscape",
  },
  {
    question: "Which operator checks both value and data type?",
    options: ["==", "=", "===", "!="],
    answer: "===",
  },
  {
    question: "What is the output of typeof null?",
    options: ["null", "object", "undefined", "boolean"],
    answer: "object",
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: "JSON.parse()",
  },
  {
    question:
      "Which array method creates a new array by applying a function to each element?",
    options: ["forEach()", "filter()", "map()", "reduce()"],
    answer: "map()",
  },
  {
    question:
      "Which array method returns only the elements that satisfy a condition?",
    options: ["map()", "filter()", "find()", "every()"],
    answer: "filter()",
  },
  {
    question:
      "Which array method returns the first element that matches a condition?",
    options: ["filter()", "find()", "map()", "includes()"],
    answer: "find()",
  },
  {
    question:
      "Which array method executes a reducer function and returns a single value?",
    options: ["reduce()", "map()", "filter()", "forEach()"],
    answer: "reduce()",
  },
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["var", "let", "const", "define"],
    answer: "let",
  },
  {
    question: "What is the purpose of the spread operator (...) in JavaScript?",
    options: [
      "To create loops",
      "To copy or expand arrays/objects",
      "To compare values",
      "To define classes",
    ],
    answer: "To copy or expand arrays/objects",
  },
  {
    question: "Which keyword is used to handle errors in JavaScript?",
    options: ["error", "catch", "try", "debug"],
    answer: "try",
  },
  {
    question:
      "Which block is used to handle an exception thrown inside a try block?",
    options: ["throw", "finally", "catch", "error"],
    answer: "catch",
  },
  {
    question: "Which keyword is used to create a Promise manually?",
    options: ["promise", "Promise", "new Promise", "async"],
    answer: "new Promise",
  },
  {
    question:
      "Which keyword is used before a function to make it asynchronous?",
    options: ["await", "async", "defer", "promise"],
    answer: "async",
  },
  {
    question: "Which keyword pauses execution until a Promise is resolved?",
    options: ["wait", "async", "resolve", "await"],
    answer: "await",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A CSS property",
      "A function with access to its outer scope",
      "A loop statement",
      "A Promise method",
    ],
    answer: "A function with access to its outer scope",
  },
  {
    question: "Which loop is best suited for iterating over array values?",
    options: ["for...of", "for...in", "while", "do...while"],
    answer: "for...of",
  },
  {
    question: "Which loop iterates over object keys?",
    options: ["for...of", "forEach", "for...in", "map"],
    answer: "for...in",
  },
  {
    question: "Which method converts a JavaScript object into a JSON string?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toString()",
      "JSON.convert()",
    ],
    answer: "JSON.stringify()",
  },
  {
    question: "What is React?",
    options: [
      "A database",
      "A backend framework",
      "A JavaScript library for building user interfaces",
      "A CSS framework",
    ],
    answer: "A JavaScript library for building user interfaces",
  },
  {
    question: "Who developed React?",
    options: ["Google", "Microsoft", "Facebook (Meta)", "Netflix"],
    answer: "Facebook (Meta)",
  },
  {
    question: "What is JSX?",
    options: [
      "A database language",
      "A JavaScript XML syntax extension",
      "A CSS library",
      "A backend language",
    ],
    answer: "A JavaScript XML syntax extension",
  },
  {
    question:
      "Which function is used to create a React component using a function?",
    options: [
      "function Component() {}",
      "React.component()",
      "new Component()",
      "createComponent()",
    ],
    answer: "function Component() {}",
  },
  {
    question: "What are props in React?",
    options: [
      "Local component variables",
      "Values passed from parent to child components",
      "Database records",
      "CSS properties",
    ],
    answer: "Values passed from parent to child components",
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useRef", "useState", "useMemo"],
    answer: "useState",
  },
  {
    question: "Which hook is used for performing side effects?",
    options: ["useContext", "useEffect", "useReducer", "useState"],
    answer: "useEffect",
  },
  {
    question: "What is the default file extension for React components?",
    options: [".java", ".jsx", ".html", ".css"],
    answer: ".jsx",
  },
  {
    question: "Which attribute is used instead of 'class' in JSX?",
    options: ["className", "classname", "cssClass", "styleClass"],
    answer: "className",
  },
  {
    question: "Which method is commonly used to render a list in React?",
    options: ["filter()", "map()", "reduce()", "find()"],
    answer: "map()",
  },
  {
    question: "Which hook is used to access the Context API in React?",
    options: ["useState", "useContext", "useReducer", "useMemo"],
    answer: "useContext",
  },
  {
    question:
      "Which hook is used to store a mutable value without causing a re-render?",
    options: ["useEffect", "useRef", "useState", "useContext"],
    answer: "useRef",
  },
  {
    question: "Which hook is used for complex state management?",
    options: ["useMemo", "useReducer", "useRef", "useEffect"],
    answer: "useReducer",
  },
  {
    question: "Which hook is used to memoize expensive calculations?",
    options: ["useMemo", "useRef", "useEffect", "useState"],
    answer: "useMemo",
  },
  {
    question:
      "Which hook memoizes a function to avoid unnecessary re-creation?",
    options: ["useCallback", "useMemo", "useReducer", "useContext"],
    answer: "useCallback",
  },
  {
    question: "Which package is commonly used for routing in React?",
    options: [
      "react-navigation",
      "react-router-dom",
      "react-route",
      "react-router",
    ],
    answer: "react-router-dom",
  },
  {
    question: "Which component is used to define routes in React Router v6?",
    options: ["<Router>", "<Routes>", "<Switch>", "<Browser>"],
    answer: "<Routes>",
  },
  {
    question: "Which component is used to define an individual route?",
    options: ["<Path>", "<Route>", "<Link>", "<Navigate>"],
    answer: "<Route>",
  },
  {
    question: "Which component is used to navigate without reloading the page?",
    options: ["<a>", "<Link>", "<Navigate>", "<Nav>"],
    answer: "<Link>",
  },
  {
    question:
      "Which hook is used to navigate programmatically in React Router?",
    options: ["useHistory", "useNavigate", "useLocation", "useRoute"],
    answer: "useNavigate",
  },
  {
    question: "Which hook returns URL parameters in React Router?",
    options: ["useLocation", "useParams", "useNavigate", "useSearch"],
    answer: "useParams",
  },
  {
    question: "Which event is commonly used to update form state in React?",
    options: ["onClick", "onSubmit", "onChange", "onFocus"],
    answer: "onChange",
  },
  {
    question: "Which method prevents the default form submission behavior?",
    options: [
      "event.stop()",
      "event.preventDefault()",
      "event.cancel()",
      "event.prevent()",
    ],
    answer: "event.preventDefault()",
  },
  {
    question: "What is Node.js?",
    options: [
      "A frontend framework",
      "A JavaScript runtime environment",
      "A database",
      "A CSS library",
    ],
    answer: "A JavaScript runtime environment",
  },
  {
    question: "Which engine powers Node.js?",
    options: ["SpiderMonkey", "Chakra", "V8", "Rhino"],
    answer: "V8",
  },
  {
    question: "Which command initializes a new Node.js project?",
    options: ["node init", "npm start", "npm init", "npm create"],
    answer: "npm init",
  },
  {
    question:
      "Which file stores project metadata and dependencies in a Node.js project?",
    options: ["package.json", "config.json", "node.json", "project.json"],
    answer: "package.json",
  },
  {
    question: "Which package manager comes bundled with Node.js?",
    options: ["Yarn", "pnpm", "npm", "Composer"],
    answer: "npm",
  },
  {
    question: "Which module is used to create an HTTP server in Node.js?",
    options: ["url", "http", "server", "https"],
    answer: "http",
  },
  {
    question: "Which keyword is used to export a module in CommonJS?",
    options: ["export", "exports", "module.exports", "default"],
    answer: "module.exports",
  },
  {
    question: "What is Express.js?",
    options: [
      "A React library",
      "A Node.js web framework",
      "A MongoDB tool",
      "A CSS framework",
    ],
    answer: "A Node.js web framework",
  },
  {
    question: "Which method is used to create an Express application?",
    options: ["express.create()", "express()", "new Express()", "app()"],
    answer: "express()",
  },
  {
    question: "Which Express method handles GET requests?",
    options: ["app.post()", "app.get()", "app.fetch()", "app.request()"],
    answer: "app.get()",
  },
  {
    question: "Which Express method is used to handle POST requests?",
    options: ["app.send()", "app.create()", "app.post()", "app.push()"],
    answer: "app.post()",
  },
  {
    question:
      "Which middleware is used to parse incoming JSON request bodies in Express?",
    options: [
      "express.urlencoded()",
      "bodyParser.json()",
      "express.json()",
      "jsonParser()",
    ],
    answer: "express.json()",
  },
  {
    question:
      "Which Express middleware is commonly used to enable Cross-Origin Resource Sharing?",
    options: ["helmet", "cors", "morgan", "cookie-parser"],
    answer: "cors",
  },
  {
    question: "Which Express method is used to define middleware?",
    options: ["app.use()", "app.route()", "app.listen()", "app.connect()"],
    answer: "app.use()",
  },
  {
    question: "Which Express method starts the server?",
    options: ["app.run()", "app.start()", "app.listen()", "app.server()"],
    answer: "app.listen()",
  },
  {
    question: "MongoDB is a ______ database.",
    options: ["Relational", "NoSQL", "Graph", "Hierarchical"],
    answer: "NoSQL",
  },
  {
    question: "MongoDB stores data in the form of:",
    options: ["Tables", "Rows", "Documents", "Sheets"],
    answer: "Documents",
  },
  {
    question: "Which command inserts a single document in MongoDB?",
    options: ["insertOne()", "insert()", "createOne()", "saveOne()"],
    answer: "insertOne()",
  },
  {
    question: "Which method retrieves all matching documents?",
    options: ["findOne()", "find()", "get()", "select()"],
    answer: "find()",
  },
  {
    question: "Which method retrieves a single document?",
    options: ["find()", "findOne()", "getOne()", "fetchOne()"],
    answer: "findOne()",
  },
  {
    question: "Which MongoDB method updates a single document?",
    options: ["update()", "updateOne()", "modifyOne()", "replace()"],
    answer: "updateOne()",
  },
  {
    question: "Which MongoDB method deletes one document?",
    options: ["removeOne()", "delete()", "deleteOne()", "dropOne()"],
    answer: "deleteOne()",
  },
  {
    question: "What is Mongoose?",
    options: [
      "A React library",
      "A MongoDB ODM for Node.js",
      "A CSS framework",
      "A database server",
    ],
    answer: "A MongoDB ODM for Node.js",
  },
  {
    question: "Which Mongoose method establishes a database connection?",
    options: [
      "mongoose.start()",
      "mongoose.connect()",
      "mongoose.open()",
      "mongoose.createConnection()",
    ],
    answer: "mongoose.connect()",
  },
  {
    question: "In Mongoose, a Schema defines:",
    options: [
      "API routes",
      "Document structure",
      "React components",
      "Express middleware",
    ],
    answer: "Document structure",
  },
  {
    question: "Which HTTP method is generally used to create a new resource?",
    options: ["GET", "PUT", "POST", "DELETE"],
    answer: "POST",
  },
  {
    question: "Which HTTP method is used to retrieve data?",
    options: ["GET", "POST", "PUT", "PATCH"],
    answer: "GET",
  },
  {
    question: "Which HTTP status code means 'OK'?",
    options: ["200", "201", "400", "500"],
    answer: "200",
  },
  {
    question: "Which HTTP status code means 'Created'?",
    options: ["200", "201", "204", "301"],
    answer: "201",
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "401", "404", "500"],
    answer: "404",
  },
  {
    question: "Which HTTP status code indicates an Internal Server Error?",
    options: ["400", "401", "404", "500"],
    answer: "500",
  },
  {
    question: "Git is primarily used for:",
    options: ["Database management", "Version control", "UI design", "Testing"],
    answer: "Version control",
  },
  {
    question: "Which command initializes a new Git repository?",
    options: ["git start", "git init", "git create", "git new"],
    answer: "git init",
  },
  {
    question: "Which Git command uploads commits to a remote repository?",
    options: ["git upload", "git commit", "git push", "git send"],
    answer: "git push",
  },
  {
    question: "What does JWT stand for?",
    options: [
      "Java Web Token",
      "JSON Web Token",
      "JavaScript Web Token",
      "JSON Worker Token",
    ],
    answer: "JSON Web Token",
  },
  {
    question: "Which part of the MERN stack is responsible for the frontend?",
    options: ["MongoDB", "Express.js", "React", "Node.js"],
    answer: "React",
  },
  {
    question: "Which of the following is the correct MERN stack order?",
    options: [
      "MongoDB, Express.js, React, Node.js",
      "MongoDB, React, Express.js, Node.js",
      "React, Express.js, MongoDB, Node.js",
      "Node.js, MongoDB, React, Express.js",
    ],
    answer: "MongoDB, Express.js, React, Node.js",
  },
];

// First, We make a array in which we store question, options and answer in form on object then we create a randomquestion() function which help to choose 10 question from QuestionBank array we don't want to repeat any question so we use set object for uniqueness

// Step 1.
// 1.1: Store the Question
// 1.2: Option ko store karana: 4 Option
// 1.3:Answer

// {
//     question: "What does HTML stand for?",
//     options (Array): [
//       "Hyper Text Markup Language",
//       "High Text Machine Language",
//       "Hyper Transfer Markup Language",
//       "Home Tool Markup Language",
//     ],
//     answer: "Hyper Text Markup Language",
//   },....................remaining 99 store this 100 question store into an Array (QuestionBank)

// For random unique question we build a function by name randomquestion for uniqueness we use Set object/Element

function Randomquestion() {
  // const data = new Set();
  // while (data.size != 10) {
  //   const index = Math.floor(Math.random() * QuestionBank.length);
  //   data.add(QuestionBank[index]);
  // }
  // return [...data]; // here we convert set into an array

  // nlog(n)
  QuestionBank.sort(() => Math.random() - 0.5);
  return QuestionBank.slice(0, 10);
}

// Step2. Create ⬇

//<div class="question">
//<p>1. What is the capital of India?</p>
//<label><input type="radio" name="q1" value="Mumbai" />Mumbai</label>
//<label><input type="radio" name="q1" value="New Delhi" />New Delhi</label>
//<label><input type="radio" name="q1" value="Kolkata" />Kolkata</label>
//<label><input type="radio" name="q1" value="Chennai" />Chennai</label>
// </div>

// very first, we select a form
// 2.1. Create a div by classname question for this first we have to select form
// 2.2.then we make a const var. in which we store the 10 random question
const form = document.querySelector("form");
const quizquestions = Randomquestion(); // here we get 10 random question by calling randomquestion() function
const correctAnswers = {};
// key: values

// obj  = {question: "What does HTML stand for?",
//     options (Array): [
//       "Hyper Text Markup Language",
//       "High Text Machine Language",
//       "Hyper Transfer Markup Language",
//       "Home Tool Markup Language",
//     ],
//     answer: "Hyper Text Markup Language",
//   }

quizquestions.forEach((obj, index) => {
  const QuestionDiv = document.createElement("div");
  QuestionDiv.className = "question"; //<div class="question">
  // obj[key] = value
  correctAnswers[`q${index + 1}`] = obj["answer"];

  const para = document.createElement("p");
  para.innerHTML = `${[index + 1]}. ${obj.question}`; // <p>1. What is the capital of India?</p>
  QuestionDiv.appendChild(para);

  // Create Option
  //  options: [
  //       "Hyper Text Markup Language",
  //       "High Text Machine Language",
  //       "Hyper Transfer Markup Language",
  //       "Home Tool Markup Language",
  //     ]

  obj["options"].forEach((value) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = value;
    label.appendChild(input);
    const textnode = document.createTextNode(value);
    label.appendChild(textnode);
    QuestionDiv.appendChild(label);
    QuestionDiv.appendChild(document.createElement("br"));
  });
  form.appendChild(QuestionDiv);
  form.appendChild(document.createElement("hr"));
});

const btn = document.createElement("Button");
btn.style.width = "100%";

btn.type = "submit";
btn.className = "submit-btn";
btn.textContent = "Submit";

form.appendChild(btn);

const reset = document.createElement("Button");
reset.style.width = "100%";

reset.type = "reset";
reset.className = "reset-btn";
reset.textContent = "Reset";
reset.style.marginTop = "20px";
form.appendChild(reset);

// const correctAnswers = {};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  let result = 0;
  for (let [key, value] of data.entries()) {
    if (value === correctAnswers[key]) {
      result++;
    }
  }
  const score = document.querySelector(".result");
  if (score) {
    score.textContent = `Score is ${result} out of 10`;
  }
});

form.addEventListener("reset", () => {
  const score = document.querySelector(".result");
  if (score) {
    score.textContent = "";
  }
});
