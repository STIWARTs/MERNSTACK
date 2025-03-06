let h3 = document.querySelector(".heading");
let btn = document.querySelector(".btn");
let div = document.querySelector(".randomColor");

btn.addEventListener("click", function () {
  let color = getRandomColor();
  h3.innerText = color;
  div.style.backgroundColor = color;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let randomColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(randomColor);
  return randomColor;
}
