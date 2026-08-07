const element = React.createElement(
  "h1",
  {
    id: "First",
    className: "One",
    style: { backgroundColor: "pink", color: "Black", fontSize: "50px" },
  },
  "Hello Brother",
);
const element1 = React.createElement(
  "h1",
  {
    id: "First",
    className: "One",
    style: { backgroundColor: "Aqua", color: "Black", fontSize: "50px" },
  },
  "Hello World",
);
// ReactDOM.render(element, document.getElementById("root")) // Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

const root = ReactDOM.createRoot(document.getElementById("root"));
// React root container is a container in which root can be stopped it make web ui more responsive
// it's also single threaded
// root.render(element);
// root.render(element1);
// Using this we can insert multiple element using wrap into a div element
const div = React.createElement("div", null, element, element1);
root.render(div);

// Nested Div
//   <div>
//       <div>
//         <div>
//           <p>This is Paragraph</p>
//         </div>
//       </div>
//     </div>
