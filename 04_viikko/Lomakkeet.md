# **Lomakkeiden eli käyttäjän syötteen käsittely JavaScriptillä**

JavaScriptin avulla voit **ottaa haltuun, validoida ja käsitellä käyttäjän syötettä dynaamisesti** lomakkeista, syötekentistä ja muista interaktiivisista elementeistä. Tämä on olennaista **vuorovaikutteisten verkkosovellusten** rakentamisessa.

## **Käyttäjän syötteen hakeminen**

Hakeaksesi käyttäjän syötteen, valitse syötekenttä ja käytä JavaScriptissä sen `.value`-ominaisuutta.

### Esimerkki: Syötteen hakeminen tekstikentästä

```html
<input type="text" id="username" placeholder="Syötä nimesi" />
<button id="submitBtn">Lähetä</button>
<p id="output"></p>
```

```js
function displayUsername() {
  const inputValue = document.getElementById("username").value;
  document.getElementById("output").textContent =
    "Käyttäjä syötti: " + inputValue;
}

document.getElementById("submitBtn").addEventListener("click", displayUsername);
```

Kun painiketta klikataan, käyttäjän syöte **haetaan ja tulostetaan** konsoliin.

## Käyttäjän syötteen seuraaminen reaaliajassa

Sen sijaan että odotetaan painikkeen klikkausta, voidaan **havaita muutokset käyttäjän kirjoittaessa**.

### Esimerkki: Syötteen seuranta reaaliaikaisesti

```html
<input type="text" id="liveInput" placeholder="Aloita kirjoittaminen..." />
<p id="liveOutput"></p>
```

```js
function showLiveText(event) {
  document.getElementById("liveOutput").textContent =
    "Kirjoitit: " + event.target.value;
}

document.getElementById("liveInput").addEventListener("input", showLiveText);
```

Tämä päivittää `<p>`-elementin tekstin **välittömästi**, kun käyttäjä kirjoittaa.

## **Lomakkeen lähetyksen käsittely JavaScriptillä**

Lomakkeet yleensä **päivittävät sivun** lähetyksen yhteydessä. JavaScriptin avulla voidaan **estää tämä oletustoiminto** ja käsitellä tiedot dynaamisesti.

### Esimerkki: Lomakkeen submit-tapahtuman käsittely

```html
<form id="userForm">
  <input type="text" id="name" placeholder="Nimesi" />
  <input type="email" id="email" placeholder="Sähköpostiosoitteesi" />
  <button type="submit">Lähetä</button>
</form>
<p id="formOutput"></p>
```

```js
function processForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  document.getElementById(
    "formOutput"
  ).textContent = `Lähetetty nimi: ${name}, Sähköposti: ${email}`;
}

document.getElementById("userForm").addEventListener("submit", processForm);
```

Nyt lomake **lähettää tiedot ilman että sivu päivittyy**.

## Käyttäjän syötteen validointi JavaScriptillä

Käyttäjän syöte tulisi aina **validioida** ennen sen käyttöä.

### Yleisiä JavaScript-validointitarkistuksia

| **Validointi**    | **Esimerkki**               |
| ----------------- | --------------------------- |
| Pakollinen kenttä | `if (input === '')`         |
| Vähimmäispituus   | `if (name.length < 3)`      |
| Sähköpostimuoto   | `if (!email.includes('@'))` |
| Vain numerot      | `if (isNaN(value))`         |

### **Esimerkki: Yksinkertainen lomakevalidointi**

```html
<form id="signupForm">
  <input
    type="text"
    id="username"
    placeholder="Käyttäjänimi (väh. 3 merkkiä)"
  />
  <input type="email" id="userEmail" placeholder="Syötä sähköpostisi" />
  <button type="submit">Rekisteröidy</button>
</form>
<p id="errorMessage"></p>
```

```js
function validateForm(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("userEmail").value;
  const errorMessage = document.getElementById("errorMessage");

  if (username.length < 3) {
    errorMessage.textContent =
      "Käyttäjänimen on oltava vähintään 3 merkkiä pitkä!";
    return;
  }

  if (!email.includes("@")) {
    errorMessage.textContent = "Syötä kelvollinen sähköpostiosoite!";
    return;
  }

  errorMessage.textContent = "Käyttäjä rekisteröity onnistuneesti!";
}

document.getElementById("signupForm").addEventListener("submit", validateForm);
```

Virheilmoitukset päivittyvät dynaamisesti ilman sivun päivitystä.

## Valintaruudut (checkbox) ja radiopainikkeet JavaScriptissä

### Esimerkki: Checkboxin validointi

```html
<input type="checkbox" id="agree" /> Hyväksyn ehdot
<button id="submitCheckbox">Lähetä</button>
<p id="checkboxOutput"></p>
```

```js
function checkAgreement() {
  const isChecked = document.getElementById("agree").checked;
  document.getElementById("checkboxOutput").textContent = isChecked
    ? "Käyttäjä hyväksyi ehdot"
    : "Käyttäjä ei hyväksynyt ehtoja";
}

document
  .getElementById("submitCheckbox")
  .addEventListener("click", checkAgreement);
```

### **Esimerkki: Radiopainikkeen käsittely**

```html
<label><input type="radio" name="color" value="Red" /> Punainen</label>
<label><input type="radio" name="color" value="Blue" /> Sininen</label>
<label><input type="radio" name="color" value="Green" /> Vihreä</label>
<button id="submitRadio">Valitse väri</button>
<p id="radioOutput"></p>
```

```js
function getSelectedColor() {
  const selectedColor = document.querySelector('input[name="color"]:checked');
  document.getElementById("radioOutput").textContent = selectedColor
    ? "Valittu väri: " + selectedColor.value
    : "Väriä ei valittu";
}

document
  .getElementById("submitRadio")
  .addEventListener("click", getSelectedColor);
```

Tämä hakee **valitun radiopainikkeen arvon**.

## **Avlasvetovalikon käsittely (`<select>`)**

### **Esimerkki: Valitun vaihtoehdon hakeminen**

```html
<select id="city">
  <option value="">Valitse kaupunki</option>
  <option value="helsinki">Helsinki</option>
  <option value="stockholm">Tukholma</option>
  <option value="oslo">Oslo</option>
</select>
<button id="submitSelect">Valitse kaupunki</button>
<p id="selectOutput"></p>
```

```js
function getSelectedCity() {
  const selectedCity = document.getElementById("city").value;
  document.getElementById("selectOutput").textContent = selectedCity
    ? "Valittu kaupunki: " + selectedCity
    : "Kaupunkia ei valittu";
}

document
  .getElementById("submitSelect")
  .addEventListener("click", getSelectedCity);
```

`.value` hakee **valitun vaihtoehdon**.

## **Syötteen tallentaminen ja käyttö**

Käyttäjän syöte voidaan **tallentaa myöhempää käyttöä varten** `localStorage`-ominaisuudella.

### **Esimerkki: Käyttäjätiedon tallennus ja lataus**

```html
<input type="text" id="userNameInput" placeholder="Syötä nimesi" />
<button id="saveBtn">Tallenna nimi</button>
<button id="loadBtn">Lataa nimi</button>
<p id="displayName"></p>
```

```js
function saveName() {
  const name = document.getElementById("userNameInput").value;
  localStorage.setItem("savedName", name);
}

function loadName() {
  const savedName = localStorage.getItem("savedName");
  document.getElementById("displayName").textContent = savedName
    ? `Tervetuloa takaisin, ${savedName}!`
    : "Nimeä ei ole tallennettu.";
}

document.getElementById("saveBtn").addEventListener("click", saveName);
document.getElementById("loadBtn").addEventListener("click", loadName);
```

**`localStorage.setItem()`** säilyttää tiedot **myös sivun päivityksen jälkeen**.

## Huomioita

- **Validioi aina käyttäjän syöte** ennen sen käyttöä tai tallennusta.
- **Käytä JavaScriptin tapahtumankuuntelijoita (event listeners)** lomakkeiden lähetyksen ja syötteiden käsittelyyn.
- **Estä lomakkeen oletustoiminto** käyttämällä `event.preventDefault()`.
- **Käytä `localStorage`-ominaisuutta**, kun haluat säilyttää käyttäjätiedot sivulatausten välillä.
- **Käytä `console.log()`-komentoa** testaukseen ja syötteiden virheenkorjaukseen.
