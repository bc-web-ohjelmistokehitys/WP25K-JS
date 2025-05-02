# Pikku Eläintarha -projekti 🦊🐻🦅

Tämä tehtävä yhdistää taulukot, oliot, silmukat, ehtolauseet, funktiot ja DOM-manipulaation interaktiiviseksi projektiksi.

## Ominaisuudet

Yksinkertainen eläinseurantatyökalu, joka:

- Näyttää eläinlistan sivulla.
- Antaa käyttäjän suodattaa eläimiä tyypin mukaan.
- Antaa hakea eläimiä nimen perusteella.
- Sallii uusien eläinten lisäämisen (ne pysyvät näkyvissä, kunnes sivu päivitetään).
- Parantaa sivun ulkoasua ja käytettävyyttä.

## **Vaiheet projektin rakentamiseen**

### **1. Määrittele eläintaulukko**

- Luo **taulukko, jonka sisällä on olioita** eläinten tiedoista (esim. `[
  { name: "Kettu", type: "Nisäkäs" },
  { name: "Karhu", type: "Nisäkäs" }
];`).
- Käytä tätä taulukkoa **näyttääksesi eläimet sivulla**, kun se latautuu.

### **2. Näytä eläimet sivulla**

- Käytä **silmukkaa** käydäksesi taulukon läpi.
- Luo dynaamisesti `<li>`-elementtejä jokaiselle eläimelle ja **lisää ne järjestämättömään listaan (`<ul>`)**.
- Muista **tyhjentää lista** ennen kuin päivität sen.

### **3. Salli käyttäjän lisätä uusia eläimiä**

- Lisää **syöttökenttä** ja **painike** nimeltä `"Lisää eläin"`.
- Kun painiketta klikataan:
  - Hae syöttökentästä eläimen nimi.
  - Lisää se taulukkoon.
  - Päivitä näytettävä lista.
  - Tyhjennä syöttökenttä.

### **4. Suodata eläimiä tyypin mukaan**

- Lisää **alasvetovalikko** eläintyypeillä (esim. `"Nisäkäs", "Lintu", "Matelija"`).
- Kun tyyppi valitaan, **päivitä lista** näyttämään vain kyseisen tyypin eläimet.
- Jos `"Kaikki"` valitaan, näytä **kaikki eläimet**.

### **5. Hae eläimiä nimen perusteella**

- Lisää **hakupalkki**, johon käyttäjä voi kirjoittaa osan eläimen nimestä.
- Näytä vain eläimet, jotka vastaavat hakua.
- Jos osumaa ei löydy, näytä viesti kuten `"Eläimiä ei löytynyt."`

### **6. Poista eläin listasta**

- Jokaisella eläimellä tulisi olla **"Poista" -painike** vieressään.
- Klikkaamalla **"Poista"**:
  - Poista eläimen olio taulukosta.
  - Päivitä lista näytettäväksi uudelleen.

### **7. Lajittele lista aakkosjärjestykseen**

- Lisää **painike** nimeltä `"Lajittele eläimet"`:
  - Lajittelee **taulukon sisällä olevat oliot** aakkosjärjestykseen.
  - Päivittää näytettävän listan.

### **8. Paranna sivun ulkoasua**

- Tyylittele **eläinlista** niin, että jokainen rivi näyttää **kortilta** taustavärin kanssa.
- Tee **painikkeista ja syöttökentistä käyttäjäystävällisiä**.

---

## **Vinkki**

Tässä tehtävässä käytetyt metodit on esitelty ItsLearningin dia-esityksessä. Tutustu siihen!
