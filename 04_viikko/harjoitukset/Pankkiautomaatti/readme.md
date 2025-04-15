# Pankkiautomaatti-simulaattori

Tässä projektissa käyttäjät voivat tarkistaa saldonsa, tallettaa rahaa ja nostaa rahaa yksinkertaisen verkkokäyttöliittymän avulla.

## Pääominaisuudet

- Näyttää käyttäjän saldon sivulla.
- Mahdollistaa rahan tallettamisen syöttämällä summan ja klikkaamalla painiketta.
- Mahdollistaa rahan nostamisen (vain jos saldo riittää).
- Päivittää saldon välittömästi ilman sivun uudelleenlatausta.

# **Projekti 2: Pankkiautomaatti-simulaattori**

## Vaiheet projektin toteuttamiseen

1. Luo HTML-rakenne

   - Lisää osio **saldon näyttämiseen**.
   - Lisää **syöttökenttä ja painike** **rahan tallettamista** varten.
   - Lisää **syöttökenttä ja painike** **rahan nostamista** varten.
   - Lisää **viestialue** virheilmoitusten näyttämiseksi (esim. "Saldo ei riitä").

2. Lisää tapahtumankuuntelijat

   - Käytä `addEventListener()`-metodia havaitaksesi, kun käyttäjä **klikkaa talletuspainiketta**.
   - Käytä `addEventListener()`-metodia havaitaksesi, kun käyttäjä **klikkaa nostopainiketta**.

3. Kirjoita JavaScript-funktiot

   - **`checkBalance()`** → Näyttää nykyisen saldon.
   - **`deposit()`** → Lisää rahaa saldoon (vain jos summa on kelvollinen).
   - **`withdraw()`** → Vähentää rahaa (vain jos käyttäjällä on tarpeeksi saldoa).

4. Tarkista käyttäjän syötteet

   - Varmista, että käyttäjä syöttää **vain numeroita** talletettaessa tai nostettaessa.
   - Estä nostot, jos **saldo on liian pieni**.
   - Näytä **virheilmoituksia** tarvittaessa.

5. Paranna ulkoasua ja tyylejä
   - Käytä **Google-fonttia**, jotta sovellus näyttää hyvältä.
   - Lisää **värejä ja tilaa elementtien ympärille** selkeän ulkoasun luomiseksi.

### Bonushaaste

- Lisää PIN-koodiin perustuva kirjautumisjärjestelmä ennen kuin käyttäjä pääsee käyttämään tiliään.
