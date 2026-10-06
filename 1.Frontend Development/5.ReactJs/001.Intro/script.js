
const element = React.createElement("h1", {}, "Hello Brother")
// ReactDOM.render(element, document.getElementById("root")) // Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

const root = ReactDOM.createRoot(document.getElementById("root"));
// React root container is a container in which root can be stopped it make web ui more responsive
// it's also single threaded
root.render(element);