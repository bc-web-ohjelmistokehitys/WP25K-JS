function toggle() {
  let element = document.getElementById("hideShow");

  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

/* funktiokutsun voi tehdä myös html-elementissä onclick-tapahtumana. Silloin ei tarvita
seuraavaa riviä eli funktiokutsua */
document.getElementById("toggleVisibility").addEventListener("click", toggle);

// näkyvyyttä voi muokata myös css-määritelmällä visibility : hidden / visible
