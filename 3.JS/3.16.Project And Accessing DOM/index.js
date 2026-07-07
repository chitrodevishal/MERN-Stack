const timer = document.getElementById("root"); // here we are selection our id element
const date = new Date();
timer.innerHTML = date.toLocaleTimeString();

function time() {
  const date = new Date();
  timer.innerHTML = date.toLocaleTimeString();
}
timer.style.height = "100vh"
timer.style.display = "flex"
timer.style.alignItems = "center"
timer.style.justifyContent = "center"
timer.style.fontSize = "5rem"
// timer.style.border = "5px"
// timer.style.borderColor = "white"
// timer.style.borderStyle = "solid"
timer.style.color = "white"
setInterval(time, 1000);
