**Pannukakkutilauksen muokkaussovellus (VAIHE 1)**  
Tämä on sovelluksesi ensimmäinen vaihe, jossa rakennat yksinkertaisen interaktiivisen verkkosivun, jonka avulla käyttäjä voi muokata pannukakkuaan ja nähdä hinnan päivittyvän dynaamisesti. **Tulet palauttamaan tämän projektin myöhemmin, joten seuraa ohjeita huolellisesti ja pidä koodisi siistinä ja järjestettynä.** Palautusohjeet tehtävälle tulevat viimeisen vaiheen jälkeen.

Tässä sovelluksessa käyttäjä voi muokata pannukakkutilaustaan valitsemalla eri pannukakkutyypin, täytteitä ja lisukkeita. Kun valintoja tehdään, kokonaishinta päivittyy välittömästi.

### Askeleet projektin ensimmäisen vaiheen toteuttamiseen

Käytettävänäsi on tiedostot, joita lähteä muokkaamaan.

**1. Aseta tapahtumankuuntelijat**

- Käytä `addEventListener`-metodia havaitaksesi, kun käyttäjä vaihtaa pannukakkutyypin avattavasta valikosta.
- Käytä `addEventListener`-metodia seurataksesi, kun käyttäjä valitsee tai poistaa täytteitä ja lisukkeita.

**2. Hae käyttäjän valinnat**

- Hae valittu pannukakkutyyppi valikosta.
- Hae kaikki valitut täytteet listasta.
- Hae kaikki valitut lisukkeet ja niiden hinnat.

**3. Laske kokonaishinta**

- Aloita valitun pannukakkutyypin perushinnasta.
- Lisää 1 € jokaisesta valitusta täytteestä.
- Lisää valittujen lisukkeiden yksittäiset hinnat.

**4. Päivitä hinnannäyttö**

- Päivitä dynaamisesti `#totalPrice` ja `#totalPriceDisplay` oikealla hinnalla.

**5. Paranna ulkoasua ja tyyliä**

- Sovellus on tehty käyttäen inspiraationa Kotipizzan "Rakenna oma pizzasi" -sivua: [linkki sivulle](https://www.kotipizza.fi/menu/perfetta).
- Lisää Google Fontsista valittu fontti kaikkiin sivun elementteihin – valitse fontti, joka sopii projektin moderniin ja houkuttelevaan ulkoasuun.
- Vaihda kuva ja värit omaan tyyliisi sopiviksi.
- Lisää huomiota herättävä animaatio hinnannäytölle, jotta käyttäjä huomaa hinnan muutokset.
