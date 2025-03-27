# Operaattorit

JavaScriptissä operaattoreita käytetään suorittamaan operaatioita muuttujilla ja arvoilla. JavaScriptissä on useita erilaisia operaattoreita, joista jokainen palvelee eri tarkoitusta. Tässä keskitymme muutamiin perusaritmeettisiin operaattoreihin:

- Yhteenlasku (+): Lisää kaksi lukua.
- Vähennyslasku (-): Vähentää yhden luvun toisesta.
- Kertolasku (\*): Kertoo kaksi lukua keskenään.
- Jakolasku (/): Jakaa yhden luvun toisella.

```js
let summa = 5 + 3; // on yhtä suuri kuin 8
let erotus = 5 - 3; // on yhtä suuri kuin 2
let tulo = 5 * 3; // on yhtä suuri kuin 15
let jakolasku = 5 / 3; // on suurin piirtein 1.67
```

## Lisääminen ja vähentäminen yhdellä

Muuttujan arvon lisääminen yhdellä ja vähentäminen yhdellä on sen verran yleistä, että sitä varten on käytössä lyhenteet **++** sekä **--**.

```js
let lisäys = 5;
lisäys++; // on yhtä suuri kuin 6
let vähennys = 5;
vähennys--; // on yhtä suuri kuin 4
```

Ilman lyhenteitä sama olisi:

```js
let lisäys = 5;
lisäys = lisäys + 1; // on yhtä suuri kuin 6
let vähennys = 5;
vähennys = vähennys - 1; // on yhtä suuri kuin 4
```

## Nykyisen arvon sisällyttäminen uuteen

Jos muuttujan uuteen arvon halutaan muuttavan sen nykyistä arvoa, silloin muuttujan nimi täytyy sisällyttää yhtäsuuruusmerkin toisellekin puolelle:

```js
let lisättäväLause = "Kotikissa";
lisättäväLause = lisättäväLause + " kiertelee"; // "Kotikissa kiertelee"
let lisättäväLuku = 5;
lisättäväLuku = lisättäväLuku + 4; // on yhtä suuri kuin 9
```

Tähänkin on lyhennetty kirjoitustapa **+=** ja **-=**:

```js
let lisättäväLause = "Kotikissa";
lisättäväLause += " kiertelee"; // "Kotikissa kiertelee"
let lisättäväLuku = 5;
lisättäväLuku += 4; // on yhtä suuri kuin 9
```

Sama toimii myös vähennyslaskuissa ja kertolaskuissa.

## Jakojäännösoperaattori

Erityisen hyödyllinen operaattori JavaScriptissä on jakojäännösoperaattori (%). Se palauttaa jakolaskun jäännöksen. Tätä operaattoria käytetään usein tarkistamaan, onko luku parillinen vai pariton. Muitakin käyttötarkoitusten on.

```js
let jakojäännös1 = 8 % 2; // Tulos on 0 (8 on parillinen)
let jakojäännös2 = 7 % 2; // Tulos on 1 (7 on pariton)
```

Tässä on, miten jakolaskun jakojäännös 8 % 2 lasketaan:

8 / 2 = 4
4 / 2 = 2
=> jakolaskun jakojäännös on 0, koska **8 = 4 \* 2 + 0**

Kun taas 7 % 2:
7 / 2 = 3 (pyöristetty)
=> jakolaskun jakojäännös on 1, koska **7 = 3 \* 2 + 1**

Jakolaskun jakojäännöstä voidaan käyttää tarkistamaan, onko luku **parillinen** vai **pariton**.
