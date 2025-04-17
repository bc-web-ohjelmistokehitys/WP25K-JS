// Tälle tehtävällä on useampi vastausvaihtoehto.

// Yksinkertainen vaihtoehto 1 - varsinainen tehtäväanto

document.getElementById("addButton").addEventListener("click", function () {
  const fruit = document.getElementById("fruitInput");

  const listItem = document.createElement("li");
  listItem.textContent = fruit.value;

  document.getElementById("fruitList").appendChild(listItem);
  fruit.value = "";
});

// Yksinkertainen vaihtoehto 2 - varsinainen tehtäväanto

function lisaaHedelma() {
  const fruit = document.getElementById("fruitInput");

  const listItem = document.createElement("li");
  listItem.textContent = fruit.value;

  document.getElementById("fruitList").appendChild(listItem);
  fruit.value = "";
}

document.getElementById("addButton").addEventListener("click", lisaaHedelma);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// Jos ei haluta lisätä tyhjiä listaelementtejä, lisätään if-lause
// Vaihtoehto 1

document.getElementById("addButton").addEventListener("click", function () {
  const fruit = document.getElementById("fruitInput");

  // jos tekstikenttä ei ole tyhjä, toteutetaan elementin lisääminen
  if (fruit.value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = fruit.value;

    document.getElementById("fruitList").appendChild(listItem);
    fruit.value = "";
  }
});

// Vaihtoehto 2

function lisaaHedelma() {
  const fruit = document.getElementById("fruitInput");

  // jos tekstikenttä ei ole tyhjä, toteutetaan elementin lisääminen
  if (fruit.value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = fruit.value;

    document.getElementById("fruitList").appendChild(listItem);
    fruit.value = "";
  }
}

document.getElementById("addButton").addEventListener("click", lisaaHedelma);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// Jos halutaan lisätä toiminto, jossa hedelmä voidaan lisätään myös enteriä painamalla

function lisaaHedelma() {
  const fruit = document.getElementById("fruitInput");

  // jos tekstikenttä ei ole tyhjä, toteutetaan elementin lisääminen
  if (fruit.value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = fruit.value;

    document.getElementById("fruitList").appendChild(listItem);
    fruit.value = "";
  }
}

document.getElementById("addButton").addEventListener("click", lisaaHedelma);
// Lisätään tähän toinen funktiokutsu, joka reagoi enterin painamiseen
document
  .getElementById("fruitInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      lisaaHedelma();
    }
  });
