const bgButton = document.getElementById("backgroundcolor");
const textColorInput = document.getElementById("textColor");
const paragraph = document.getElementById("text");

function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

bgButton.addEventListener("click", changeBackgroundColor);

function changeTextColor() {
  paragraph.style.color = textColorInput.value;
}

textColorInput.addEventListener("input", changeTextColor);
