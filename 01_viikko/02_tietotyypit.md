# Tietotyypit

JavaScript on dynaamisesti tyypitetty kieli, mikä tarkoittaa, että muuttujat voivat pitää sisällään arvoja mistä tahansa tietotyypistä, ja sama muuttuja voi pitää eri tyyppisiä arvoja elinkaarensa aikana. Perustietotyyppien ymmärtäminen JavaScriptissä on tärkeää tehokkaan ohjelmoinnin kannalta. Tässä yleiskatsaus ensisijaisiin tietotyyppeihin:

### Primitiiviset tietotyypit

- **Numero**: Edustaa sekä kokonaislukuja (integer) että liukulukuja (float). Esimerkiksi 42 ja 3.14.
- **Merkkijono**: Käytetään tekstuaaliseen dataan. Sen täytyy olla lainausmerkkien sisällä, esim. "Hei maailma!". Englanniksi _string_.
- **Boolean**: Edustaa loogista kokonaisuutta ja voi olla vain kaksi arvoa: true tai false. Kutsutaan myös _totuusarvoksi_.
- **Määrittelemätön** (Undefined): Kun muuttuja on julistettu mutta sille ei ole annettu arvoa, sen arvo on määrittelemätön (undefined).
- **Null**: Tarkoittaa nollaarvoa, osoittaen minkään objektin arvon puuttumista.
- **Symboli** (ES6:ssa esitelty): Käytetään luomaan nimettömiä ja uniikkeja arvoja.

```js
let number = 5; // Numero
let text = "Hei"; // Merkkijono
let onAktiivinen = true; // Boolean
let user = { nimi: "Alice", ikä: 25 }; // Objekti

let notDefined; // Määrittelemätön
let emptyValue = null; // Null
```

### Monimutkainen tietotyyppi

- Taulukko (eng. _array_): Lista arvoja, jossa arvot voivat olla mitä tahansa tietotyyppiä.
- Olio (engl. _object_): Kokoelma avain-arvo -pareja, joissa arvot voivat olla mistä tahansa tietotyypistä. Olioita käytetään erilaisten avainkohtaisten kokoelmien ja monimutkaisempien kokonaisuuksien tallentamiseen.

## typeof

typeof-operatoria JavaScriptissä käytetään määrittämään annetun arvon tai muuttujan tyyppi. Se on yksioperaattori, joka palauttaa merkkijonon, joka ilmaisee sen operandin tietotyypin. Tämä operaattori on erityisen hyödyllinen vianetsinnässä tai kun sinun täytyy tarkistaa arvon tyyppi ennen tiettyjen operaatioiden suorittamista sille.

```js
let name = "Liisa";
let age = 30;
let isStudent = false;
let hobbies = ["lukeminen", "pyöräily"];

console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof hobbies); // "object" (arrays are type 'object' in JavaScript)
```
