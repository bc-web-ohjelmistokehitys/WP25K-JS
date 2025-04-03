## Vertailua

### = sijoittaa arvon

- Yksi yhtäsuuruusmerkki asettaa muuttujan arvon. Esimerkiksi `x = 5`, jossa muuttuja x saa arvon 5.
- Ehtolauseita kirjoittaessa onkin käytettävä useampaa yhtäsuuruusmerkkiä.

### == Yhtä suuri kuin:

- Vertailee kahden arvon samuutta, ohittaen tietotyypin.
- Esimerkiksi: `5 == '5'` palauttaa `true`, koska ne ovat samat arvot, vaikka tietotyyppi eroaa.

### === Täsmälleen yhtä suuri kuin:

- Vertailee kahden arvon samuutta sekä tietotyyppiä.
- Esimerkiksi: `5 === '5'` palauttaa `false`, koska arvojen lisäksi myös tietotyyppi pitää olla sama.

### ! Ei, looginen negaatio:

- Kääntää totuusarvon vastakkaiseksi.
- Esimerkiksi: `!(5 === 5)` palauttaa `false`, koska 5 todella on yhtä suuri kuin 5.
- Käytetään yleensä tarkistamaan onko jokin arvo epätosi:

```js
let raining = false;

if (!raining) {
  console.log("Ei sada, lähdetään ulos"); // Tämä tulostuu
} else {
  console.log("Sataa, pysytään sisällä.");
}
```

### != Ei yhtä suuri kuin:

- Vertailee kahden arvon epäsuuruutta, ohittaen tietotyypin.
- Esimerkiksi: `5 != '5'` palauttaa `false`, koska ne ovat samat arvot, vaikka tietotyyppi eroaa.

### !== Ei täsmälleen yhtä suuri kuin:

- Vertailee kahden arvon epäsuuruutta sekä tietotyyppiä.
- Esimerkiksi: `5 !== '5'` palauttaa `true`, koska vaikka arvot ovat samat, tietotyypit eroavat.

### > Suurempi kuin:

- Vertailee kahden arvon suuruutta toisiinsa verrattuna.
- Esimerkiksi: `5 > 5` palauttaa `false`, koska arvot ovat samat.

### >= Suurempi tai yhtä suuri kuin:

- Vertailee kahden arvon suuruutta toisiinsa verrattuna ja hyväksyy saman arvon.
- Esimerkiksi: `5 >= 5` palauttaa `true`, koska arvot ovat samat.

### < Pienempi kuin:

- Vertailee kahden arvon suuruutta toisiinsa verrattuna.
- Esimerkiksi: `2 < 5` palauttaa `true` koska kaksi on pienempi kuin viisi.

### <= Pienempi tai yhtä suuri kuin:

- Vertailee kahden arvon suuruutta toisiinsa verrattuna ja hyväksyy saman arvon.
- Esimerkiksi: `2 <= 0` palauttaa `false`, koska kaksi ei ole pienempi tai yhtä suuri kuin 0.

### Kummin päin eli < vai >?

![>](/assets/Big-and-Small.png)

[kuvan lähde](https://www.mometrix.com/blog/remembering-the-greater-than-sign-less-than-sign/)
