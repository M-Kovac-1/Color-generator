for (i = 1; i <= 100; i++) {
  let box = document.createElement("div");
  box.classList.add("box");
  document.querySelector(".container").appendChild(box);
}

let btn = document.querySelector(".btn");
let randomColorBlock = document.querySelectorAll(".box");
function RandomHexColorCode() {
  let chars = "0123456789abcdef";
  let colorLength = 6;
  let color = "";

  for (i = 0; i < colorLength; i++) {
    let randomColor = Math.floor(Math.random() * chars.length);
    console.log(randomColor);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return "#" + color;
}

function addColor() {
  randomColorBlock.forEach((e) => {
    let newColor = RandomHexColorCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
  });
}