document
  .getElementById("inputText")
  .addEventListener("input", function (event) {
    document.getElementById("displayText").textContent = event.target.value;
  });
