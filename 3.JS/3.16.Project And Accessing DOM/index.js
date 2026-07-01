function time() {
  const timer = document.getElementById("root");
  const now = new Date();
  timer.innerHTML = now.toLocaleTimeString();
}
setInterval(time, 1000)
// setInterval(Callback function, Time interval)

const timer = document.getElementById("root");
timer.style.display = "flex";
timer.style.alignItems = "center";
timer.style.justifyContent = "center";
timer.style.fontSize = "100px";
