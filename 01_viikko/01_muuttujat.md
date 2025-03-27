# Muuttujat

Muuttujat ovat kuin säilytyslaatikoita tietokoneohjelmassa. Voit ajatella niitä nimettyinä laatikoina, joihin voit laittaa erilaisia arvoja tai tietoja, kuten numeroita, merkkijonoja tai totuusarvoja. Näiden laatikoiden avulla voit tallentaa ja käsitellä tietoja ohjelman suorituksen aikana. Kun muuttuja saa uuden arvon, sen entinen arvo unohdetaan.

## Muuttujan luominen

Kun luot muuttujan, annat sille nimen, joka toimii viittauksena siihen laatikkoon, ja voit antaa sille arvon, joka asetetaan laatikkoon. Tämän jälkeen voit käyttää tätä nimeä ohjelmassa viitataksesi siihen arvoon tai muuttujaan, joka on tallennettu tähän laatikkoon.

```js
let nimi = "Hilkka"; // Luo muuttujan ja antaa sille arvon
console.log(nimi); // Tulostaa: Hilkka
nimi = "Erkki"; // Vaihtaa muuttujan arvon
console.log(nimi); // Tulostaa: Erkki
```

Voit myös luoda muuttujan ilman, että annat sille arvoa. Silloin muuttujan arvoksi asetetaan automaattisesti _undefined_. Tämä tarkoittaa, että muuttujalla ei ole mitään määriteltyä arvoa. Onkin hyvä käytäntö antaa muuttujille alustusarvo aina kun mahdollista, jotta vältetään odottamattomat toimintatilanteet ohjelmassa.

```js
let nimi, ika; // Muuttujat ovat olemassa, niiden arvo on 'undefined'
nimi = "Riikka"; // Annetaan muuttujalle arvoksi merkkijono
ika = 45; // Annetaan muuttujan arvoksi luku
```

_Muuttuja on kuin tuoli: siinä voi olla vain yksi arvo kerrallaan. Ja jos edellinen istujan tilalle on tullut uusi, ei edellisestä ole jälkeäkään. Alussa tuoli voi olla myös tyhjä._

## Muuttujatyypit

Javascript on heikosti tyypitetty ohjelmointikieli. Muuttujat eivät siis välitä, minkä tyyppistä dataa niihin laitetaan. Kaikki käy – luvut, merkkijonot, totuusarvot (true/false), taulukot, oliot...jopa funktiot.

Javascriptissä on kolme eri muuttujatyyppiä: const, let ja var.

- Tyyppi **var** on näistä vanhin. Sillä voi olla joko globaali tai funktiokohtainen näkyvyysalue. Toisin kuin uudemmat const ja let, var ei salli lohkokohtaista näkyvyyttä. Vaikka Javascript tukeekin sitä edelleen, sen käyttäminen ei ole suositeltavaa.

- **Const** on vakiomuuttuja (engl. constant). Kun siihen on kerran laitettu arvo, tätä arvoa ei voi enää ylikirjoittaa. (Huomaa kuitenkin, että arvon sisältöä voi edelleen muuttaa. Esimerkiksi jos const-muuttujaan on laitettu olio tai taulukko, niiden sisältö voi muuttaa. Lisää näistä myöhemmin.)

- **Let** puolestaan on muuttujatyyppi, johon voi sijoittaa uuden arvon miten monta kertaa tahansa.

Teknisestä näkökulmasta kaikki muuttujasi voivat hyvin olla let-tyyppisiä – mutta ehkä se const on ihan hyödyllinen, jotta et vahingossa ylikirjoita sellaista minkä ei kuulu olla muokattavissa.

## Nimeämisestä

Muuttujan nimen voit valita itse, joten koodaajalla on melko vapaat kädet niiden suhteen. Tässä muutama ohje järkevään nimeämiseen koodin luettavuuden ja ylläpidettävyyden kannalta:

1. **Kuvaava**: Muuttujan nimi tulisi kuvailla selkeästi sen tarkoitusta tai sisältöä. Esimerkiksi jos muuttuja sisältää käyttäjän iän, hyvä nimi voisi olla `userAge`.

2. **Yksinkertainen ja selkeä**: Vältä liian monimutkaisia tai epäselviä nimiä. Yksinkertainen ja suora nimi helpottaa koodin ymmärtämistä.

3. **camelCase**: Yleinen käytäntö JavaScriptissä on käyttää camelCase-nimeämiskonventiota, jossa ensimmäinen sana kirjoitetaan pienillä kirjaimilla ja jokainen seuraava sana alkaa isolla kirjaimella. Esimerkiksi `userAge`, `firstName`, `totalAmount`.

4. **Tarkoitusta vastaava**: Muuttujan nimi tulisi kuvata tarkasti sen käyttötarkoitusta. Tämä auttaa muita kehittäjiä ymmärtämään koodia helposti.

5. **Vältä lyhenteitä**: Vältä lyhenteitä, ellei lyhenne ole yleisesti tunnettu ja ymmärrettävä. Selkeät ja kuvaavat nimet tekevät koodista helpommin luettavaa ja ylläpidettävää.

6. **Englanninkieliset nimet**: On suositeltavaa, että muuttujat nimetään kannattaa kirjoittaa englanniksi, sillä se tekee koodista helpommin ymmärrettävää ja yhteensopivaa muiden kehittäjien kanssa.

7. **Vältä varattuja sanoja**: Osalla sanoista on JavaScriptissä tarkoitus, kuten `function`, `let` ja `const`. Näitä ei voi käyttää.

Esimerkiksi, jos luodaan muuttuja, joka tallentaa pelaajan pistemäärän, hyvä nimi voisi olla `playerScore`. Tämä nimi on kuvaava, yksinkertainen ja selkeä, ja se noudattaa camelCase-nimeämiskonventiota.

Samoja ohjeita kannattaa käyttää myös funktioita, olioita ja taulukoita nimetessä.
