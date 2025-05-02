/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/

function User(username, email) {
  this.username = username;
  this.email = email;
  this.showInfo = function () {
    console.log(`Käyttäjä: ${this.username}, sähköposti: ${this.email}`);
  };
}

const u1 = new User("lauraj", "laura@example.com");
u1.showInfo(); // Käyttäjä: lauraj, sähköposti: laura@example.com

/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/

class User2 {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  showInfo() {
    console.log(`Käyttäjä: ${this.username}, sähköposti: ${this.email}`);
  }
  changeEmail(newEmail) {
    this.email = newEmail;
    console.log(`Sähköposti päivitetty: ${this.email}`);
  }
}

// Käyttö
const u2 = new User2("pekka", "pekka@old.fi");
u2.showInfo(); // Käyttäjä: pekka, sähköposti: pekka@old.fi
u2.changeEmail("p.korpela@fi"); // Sähköposti päivitetty: p.korpela@fi
u2.showInfo(); // Käyttäjä: pekka, sähköposti: p.korpela@fi

/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/
const theme = { name: "light", isActive: true };

const themeButton = document.getElementById("themeBtn");
themeButton.addEventListener("click", () => {
  // vaihdetaan
  theme.name = theme.name === "light" ? "dark" : "light";
  theme.isActive = !theme.isActive;
  document.body.setAttribute("data-theme", theme.name);
  console.log(`Teema: light, isActive: ${theme.isActive}`);
});

/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/
const counter = { value: 0 };

const elVal = document.getElementById("val");
document.getElementById("inc").addEventListener("click", () => {
  counter.value++;
  elVal.textContent = counter.value;
});
document.getElementById("dec").addEventListener("click", () => {
  counter.value--;
  elVal.textContent = counter.value;
});

/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/

const product = { name: "Kirja", price: 15, quantity: 1 };
document.getElementById("itemName").textContent = product.name;
document.getElementById("itemPrice").textContent = product.price;

const input = document.getElementById("qty");
const totalEl = document.getElementById("total");

function update() {
  product.quantity = parseInt(input.value, 10);
  totalEl.textContent = `Yhteensä: ${product.price * product.quantity} €`;
}

input.addEventListener("input", update);
update(); // alustus

/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/

function Task(title, description, completed = false) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}
const tasks = [];

const btn = document.getElementById("addTask");
btn.addEventListener("click", () => {
  const t = document.getElementById("title").value;
  const d = document.getElementById("desc").value;
  const c = document.getElementById("completed").checked;
  const task = new Task(t, d, c);
  tasks.push(task);
  render();
});

function render() {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";
  tasks.forEach((tsk) => {
    const li = document.createElement("li");
    li.textContent =
      `${tsk.title}: ${tsk.description} ` + `(Valmis: ${tsk.completed})`;
    ul.appendChild(li);
  });
}

/* Tehtävä 7
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}
Car.prototype.age = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.year;
};

// Käyttö
const myCar = new Car("Toyota", "Corolla", 2015);
document.getElementById(
  "carInfo"
).textContent = `Auton ikä: ${myCar.age()} vuotta`;

/* Tehtävä 8
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

const users = [
  { name: "Anna", score: 15 },
  { name: "Samira", score: 25 },
  { name: "Kai", score: 10 },
];

function renderUsers() {
  const ul = document.getElementById("userList");
  ul.innerHTML = "";
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = `${u.name}: ${u.score}`;
    ul.appendChild(li);
  });
}

document.getElementById("sortUsers").addEventListener("click", () => {
  users.sort((a, b) => b.score - a.score);
  renderUsers();
});

renderUsers();

/* Tehtävä 9
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/

const shoppingList = { items: [] };

document.getElementById("addItem").addEventListener("click", () => {
  const input = document.getElementById("itemInput");

  const val = input.value.trim();
  if (!val) return;
  shoppingList.items.push(val);
  renderList();
  input.value = ""; // <-- Tyhjennetään kenttä
  input.focus(); // <-- (vapaaehtoinen) asetetaan fokus takaisin kenttään
});

function renderList() {
  const ul = document.getElementById("list");
  ul.innerHTML = "";
  shoppingList.items.forEach((i) => {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  });
}

/* Tehtävä 10
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

const posts = [
  { title: "Hei maailma", content: "Ensimmäinen postaus", likes: 0 },
  { title: "Toinen", content: "Jatketaan", likes: 2 },
];

function renderPosts() {
  const ul = document.getElementById("posts");
  ul.innerHTML = "";
  posts.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML =
      `<h3>${p.title}</h3><p>${p.content}</p>` +
      `<button data-id="${i}">Tykkää (${p.likes})</button>`;
    ul.appendChild(li);
  });
  ul.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.target.dataset.id, 10);
      posts[idx].likes++;
      renderPosts();
    });
  });
}

renderPosts();

/* Tehtävä 11
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
}
Employee.prototype.increaseSalary = function (percent) {
  this.salary += this.salary * (percent / 100);
};

// Käyttö
const emp = new Employee("Maija", "Dev", 3000);
console.log("Palkka alussa:", emp.salary); //
emp.increaseSalary(10);
console.log("Palkka nyt:", emp.salary); // 3300

/* Tehtävä 12
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/

const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++;
      document.getElementById("timer").textContent = this.seconds;
    }, 1000);
  },
};

document.getElementById("start").addEventListener("click", () => {
  timer.start();
});

/* Tehtävä 13
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/
document.addEventListener("DOMContentLoaded", () => {
  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  const library = [];
  document.getElementById("bookForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("t").value;
    const author = document.getElementById("a").value;
    const pages = parseInt(document.getElementById("p").value, 10);
    library.push(new Book(title, author, pages));
    render();
    e.target.reset();
  });

  function render() {
    console.log("jotain");
    const ul = document.getElementById("books");
    ul.innerHTML = "";
    library.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = `${b.title} kirjoittanut ${b.author}, ${b.pages} sivua`;
      ul.appendChild(li);
    });
  }
});
/* Tehtävä 14
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/

const foxTracker = { foxes: [] };

document.getElementById("addFox").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const loc = document.getElementById("loc").value.trim();
  if (!name || !loc) return;
  foxTracker.foxes.push({ name, loc });
  renderFoxes();
});

function renderFoxes() {
  const ul = document.getElementById("foxes");
  ul.innerHTML = "";
  foxTracker.foxes.forEach((f) => {
    const li = document.createElement("li");
    li.textContent = `${f.name} – sijainti: ${f.loc}`;
    ul.appendChild(li);
  });
}
