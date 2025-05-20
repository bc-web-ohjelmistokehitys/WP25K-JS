# Pannukakku 3: Tilausten Hallinta

Tässä vaiheessa kehität sovellustasi edelleen käsittelemällä **tilauksia olioina** ja tallentamalla ne **taulukkoon**. Lisäksi luot uuden **"Kaikki tilaukset"** -sivun, jossa "kokki" voi hallita jokaisen tilauksen tilaa.

---

## Mikä on uutta?

### 1. **Tilausten tallennus taulukkoon**

Jokainen tilaus tallennetaan oliona, joka sisältää:

- Yksilöllisen `id`:n
- `customerName` (asiakkaan nimi)
- `selectedPancake` (valittu lettutyyppi)
- `toppings` (täytteet, taulukko)
- `extras` (lisukkeet, taulukko)
- `deliveryMethod` (toimitustapa)
- `totalPrice` (kokonaishinta)
- `status` (tila, oletuksena: `"waiting"`)

### 2. **"Kaikki tilaukset" -sivu**

- Luo uusi HTML-sivu alusta alkaen itse.
- Näyttää kaikki tallennetut tilaukset.
- Kokki voi **päivittää tilauksen tilaa**.
- Eri tilat näkyvät **erilaisilla tyyleillä**:

  - **"waiting"** – oletustyyli (esim. keltainen)
  - **"ready"** – päivitetty tyyli (esim. sininen)
  - **"delivered"** – lopullinen tyyli (esim. vihreä)

---

## Toteutusohjeet

### Tallenna tilaukset taulukkoon

- Luo `orders`-taulukko tilausten tallentamiseen.
- Kun käyttäjä **vahvistaa** tilauksen:

  - Luo **yksilöllinen ID** (esim. `Date.now()`).
  - Luo **olio**, joka sisältää tilauksen tiedot.
  - Lisää olio `orders`-taulukkoon.
  - Tallenna `orders` **localStorageen**, jotta tiedot säilyvät sivun päivityksen jälkeen.

---

### Näytä tilaukset "Kaikki tilaukset" -sivulla

- Hae tilaukset `localStoragesta` ja näytä ne sivulla.
- Jokaisesta tilauksesta näytetään:

  - **Tilausnumero (ID)**
  - **Asiakkaan nimi**
  - **Letun tyyppi**
  - **Täytteet ja lisätuotteet**
  - **Toimitustapa**
  - **Kokonaishinta**
  - **Tila** (valikko tai napit tilan vaihtamiseen)

---

### Päivitä tilauksen tila

- Lisää **valikko (dropdown)** tai **nappeja**, joiden avulla kokki voi päivittää tilauksen tilan.
- Kun tila muuttuu:

  - Päivitä oikea olio.
  - Tallenna muutokset `localStorageen`.

- Käytä eri värejä tilan mukaan:

  - `"waiting"` → 🟡 Keltainen
  - `"ready"` → 🔵 Sininen
  - `"delivered"` → 🟢 Vihreä

---

### Säilytä tiedot `localStorage`:n avulla

- Tallenna tilaukset `localStorageen`.
- Lataa ja näytä ne, kun "Kaikki tilaukset" -sivu avataan.

---

## Esimerkki tilaus-oliosta

```javascript
{
  id: 1700000001234,
  customerName: "Alviina",
  selectedPancake: "Chocolate",
  toppings: ["Nuts", "Syrup"],
  extras: ["Whipped Cream"],
  deliveryMethod: "Delivery",
  totalPrice: 15,
  status: "waiting"
}
```

---

### Lisäominaisuudet (bonus):

- Lisää **haku**, jolla voi etsiä tilauksia asiakkaan nimen tai ID:n eli tilausnumeron perusteella.
- Lisää **lajittelu** (esim. "waiting"-tilaukset ensin).
- Salli **tilausten poistaminen**, kun ne on toimitettu.
