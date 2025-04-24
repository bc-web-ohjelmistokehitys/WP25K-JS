# Näkyvyysalue eli Scope JavaScriptissä

Scope määrittää, **missä muuttujia ja funktioita voidaan käyttää** koodissasi. Se auttaa **järjestämään** muuttujia ja **ehkäisemään ristiriitoja** niiden välillä.

## Näkyvyysalueet eli Scope-tyypit JavaScriptissä

### Globaali näkyvyys

Muuttujat, jotka on määritelty **funktioiden tai lohkojen ulkopuolella**, kuuluvat **globaaliin scopeen**. Niihin pääsee käsiksi **missä tahansa** skriptissä.

```js
let globalVar = "Olen globaali muuttuja";

function exampleFunction() {
  console.log(globalVar); // Saatavilla täällä
}

console.log(globalVar); // Myös saatavilla täällä
```

**Hyvä käytäntö:** Vältä liian montaa globaalia muuttujaa, jotta **vältät ristiriitoja** funktioiden välillä.

### Paikallinen / funktiokohtainen näkyvyys

Muuttujat, jotka on määritelty **funktion sisällä**, kuuluvat **paikalliseen scopeen**. Niihin ei pääse käsiksi funktion ulkopuolella.

```js
function exampleFunction() {
  let localVar = "Olen paikallinen muuttuja";
  console.log(localVar); // Saatavilla täällä
}

console.log(localVar); // ❌ Uncaught ReferenceError: localVar is not defined
```

**Hyvä käytäntö:** Käytä **paikallisia muuttujia** aina kun mahdollista, jotta niiden vaikutusalue pysyy rajattuna ja koodi helpommin hallittavissa.

## Lohkokohtainen näkyvyys

Aaltosulut `{}` määrittelevät lohkon. (Niitä käytetään myös funktiossa.)

Funktioiden lisäksi voi olla muitakin lohkoja, kuten ehtolauseita tai silmukoita. Sisemmät lohkot kuuluvat samaan näkyvyysalueeseen ulomman kanssa, mutta ulommat eivät kuulu samaan sisemmän kanssa.

```js
function tarkistaLuku(luku) {
  console.log("Funktion alku, luku on:", luku);

  if (luku > 10) {
    let viesti = "Luku on suurempi kuin 10";
    console.log(viesti); // toimii OK
  }

  console.log(viesti); // ❌ viesti ei ole näkyvissä täällä
}

tarkistaLuku(15);
```

- Funktion sisällä määritelty muuttuja `luku` on ehtolauseen käytössä.
- Ehtolauseen sisällä määritelty muuttuja `viesti` ei ole funktion käytössä ehtolauseen ulkopuolella.

### Vanhentuntut muuttuja `var`

Ennen **ES6-versiota** `var` oli pääasiallinen tapa määritellä muuttujia. Sillä ei ole lohko-scopea, vain **funktion scope**.

```js
if (true) {
  var testVar = "Olen funktion sisällä näkyvä";
}
console.log(testVar); // ✅ Saatavilla täällä
```

**Hyvä käytäntö:** Vältä `var`:n käyttöä ja suosi `let` tai `const` -muuttujia, jotta **vältät odottamattoman käyttäytymisen**.

## Temporal Dead Zone (TDZ)

**TDZ** on ajanjakso, joka alkaa **näkyvyysalueen alusta** ja kestää siihen asti kunnes muuttuja **määritellään**.

```js
console.log(myVar); // ❌ ReferenceError: Cannot access 'myVar' before initialization
let myVar = "Määritellään myöhemmin";
```

**Hyvä käytäntö:** **Määrittele muuttujat scoopen alussa.**

## Parhaat käytännöt scopen suhteen

- **Käytä `let` ja `const`** `var`-avainsanan sijaan välttääksesi odottamatonta käyttäytymistä.
- **Määrittele muuttujat näkyvyysalueen alussa**.
- **Pidä funktiot ja muuttujat mahdollisimman pienessä scopessa**.
- **Rajoita globaalien muuttujien määrää** ristiriitojen välttämiseksi.

## Yleisiä virheitä

Globaalin muuttujan käyttö paikallisen sijaan

```js
let count = 0; // ❌ Globaali, voi ylikirjoittua vahingossa

function increase() {
  count++; // Parempi tapa on käyttää paikallista muuttujaa
}
```

✅ Käytä **paikallista muuttujaa funktion sisällä**

```js
function increase() {
  let count = 0;
  count++;
  console.log(count);
}
```
