# Code Runner ja mihin sitä käytetään

- Code Runner on kätevä alussa tehtävien pienten skriptiharjoitusten tekemiseen, koska sen avulla saa konsolin näkymään suoraan VSCodessa
- Code Runner on yksi lisäosista, jonka asensimme
- Tarvitsee toimiakseen Noden, jonka asennusohjeet on myös jaettu
- Voit tehdä kaikki harjoitukset myös selaimeen tarkistettavaksi. Silloin tarvitset myös html-tiedoston, johon linkkaat JavaScriptin

## Code Runnerin asetukset kuntoon

1. Avaa terminaali ja aja siellä komento `which node`
2. Vastaukseksi pitäisi tulla sijainti, joka loppuu sanaan "node"

![sijainti](/assets/nodepolku.png)
_Jos vastaus on jotain muuta, Node on asentamatta. Löydät sen Homebrewn kautta, tarkista asennusohjeet ItsLearningistä._

1. **Kopioi sijainti**, tarvitsemme sitä myöhemmin.
2. Avaa VSCoden komentopaletti näppäimillä `command`+`shift`+`P`
3. Kirjoita riville `Open User settings (JSON)`

   ![user settings](/assets/usersettings.png)

4. Lisää tiedostoon alla olevassa kuvassa näkyvien rivien tapaan se sijainti, jossa Node on. Sen saa kopioitua terminaalista (kohta 3.)
   ![code-runner.ExecutorMap](/assets/executromap.png)

_Ei haittaa, vaikka tiedostosi sisältö poikkeaa esimerkkikuvasta - meillä on vain hieman erilaiset asetukset._

**_Mutta jos sivulla näkyy punaista siksak-viivaa, syntaksissa on ongelma, joka pitää korjata._**

## Code Runnerin käyttö

Code Runner on luonut play-ikonin VSCoden oikeaan yläreunaan. **Tallenna** koodin muutokset ja aja koodi klikkaamalla ikonia.

![ikoni](/assets/coderunnerikoni.png)

Ohjelma suoritetaan VSCoden terminaalissa.

![lopputulos](/assets/codrunnerterminaali.png)

### Code Runner ei sovellu:

- Ohjelmiin, jossa pyydetään käyttäjältä syötettä (prompt)
- Ohjelmiin, jotka muokkaavat html-sivua
- Opettaja kertoo, milloin siirrytään näiden tehtävien pariin.
