document.addEventListener("DOMContentLoaded", () => {
  // 1. Eläin­taulukko olioina (nimi + tyyppi)
  let animals = [
    { name: "Kettu", type: "Nisäkäs" },
    { name: "Karhu", type: "Nisäkäs" },
    { name: "Kotka", type: "Lintu" },
    { name: "Kilpikonna", type: "Matelija" },
    { name: "Sammakko", type: "Sammakkoeläin" },
    { name: "Lohi", type: "Kala" },
  ];

  // DOM-elementit
  const animalList = document.getElementById("animalList");
  const searchInput = document.getElementById("searchAnimal");
  const filterSelect = document.getElementById("filterType");
  const sortButton = document.getElementById("sortAnimals");
  const newNameInput = document.getElementById("newAnimalName");
  const newTypeSelect = document.getElementById("newAnimalType");
  const addButton = document.getElementById("addAnimal");

  // 2–5. Renderöinti: haku + filtteri + lista
  function renderList() {
    // tyhjennä listan sisältö
    animalList.innerHTML = "";

    // suodatus
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filterType = filterSelect.value;

    let filtered = [];

    for (let i = 0; i < animals.length; i++) {
      const a = animals[i];

      // tarkista ensin tyyppi
      if (filterType !== "Kaikki" && a.type !== filterType) {
        continue;
      }

      // tarkista sitten haku
      if (!a.name.toLowerCase().includes(searchTerm)) {
        continue;
      }

      // jos molemmat ehdot täyttyvät, lisää tulokseen
      filtered.push(a);
    }

    if (filtered.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Eläimiä ei löytynyt.";
      li.classList.add("no-results");
      animalList.appendChild(li);
      return;
    }

    // luo jokaiselle eläimelle rivi
    filtered.forEach((animal, idx) => {
      const li = document.createElement("li");
      li.classList.add("animal-card");

      li.innerHTML = `
        <span class="animal-name">${animal.name}</span>
        <span class="animal-type">${animal.type}</span>
        <button class="delete-btn" data-index="${idx}">Poista</button>
      `;
      animalList.appendChild(li);
    });

    // 6. Poisto­napit
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const i = parseInt(e.target.dataset.index);
        // huom! indeksi perustuu filtered-taulukkoon, etsitään alkuperäisestä
        const toRemove = filtered[i];
        animals = animals.filter((a) => a !== toRemove);
        renderList();
      });
    });
  }

  // 3. Lisää eläin
  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = newNameInput.value.trim();
    const type = newTypeSelect.value;
    if (name) {
      animals.push({ name, type });
      newNameInput.value = "";
      renderList();
    }
  });

  // 4. Suodatus ja 5. Haku – live-päivitys
  searchInput.addEventListener("input", renderList);
  filterSelect.addEventListener("change", renderList);

  // 7. Lajittelu
  sortButton.addEventListener("click", () => {
    animals.sort((a, b) => a.name.localeCompare(b.name, "fi"));
    renderList();
  });

  // Alustava renderöinti
  renderList();
});
