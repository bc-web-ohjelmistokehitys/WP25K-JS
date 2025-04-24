// Alussa tilin saldo on nolla
let saldo = 0;

// Päivittää näkymässä näkyvän saldon tekstin
function paivitaSaldo() {
  document.getElementById("saldoNaytto").textContent = "Saldo: " + saldo + " €";
}

// Näyttää virhe- tai onnistumisviestin käyttäjälle
function naytaViesti(teksti, onVirhe = true) {
  const viestiEl = document.getElementById("viesti");
  viestiEl.textContent = teksti;
  // Väri määräytyy onko kyse virheestä vai ei
  viestiEl.style.color = onVirhe ? "red" : "green";
}

// Lisää käyttäjän syöttämän summan saldoon
function talleta() {
  const summa = Number(document.getElementById("talletusSumma").value);

  // Tarkistetaan, että syöte on kelvollinen luku ja suurempi kuin 0
  if (isNaN(summa) || summa <= 0) {
    naytaViesti("Syötä kelvollinen talletussumma.");
    return;
  }

  saldo += summa;
  paivitaSaldo();
  naytaViesti("Talletus onnistui!", false);
  document.getElementById("talletusSumma").value = ""; // Tyhjennetään syöttökenttä
}

// Vähentää käyttäjän syöttämän summan saldosta, jos rahaa on tarpeeksi
function nosta() {
  const summa = Number(document.getElementById("nostoSumma").value);

  // Tarkistetaan, että syöte on kelvollinen luku ja suurempi kuin 0
  if (isNaN(summa) || summa <= 0) {
    naytaViesti("Syötä kelvollinen nostosumma.");
    return;
  }

  // Estetään nosto, jos saldo ei riitä
  if (summa > saldo) {
    naytaViesti("Saldo ei riitä nostoon.");
    return;
  }

  saldo -= summa;
  paivitaSaldo();
  naytaViesti("Nosto onnistui!", false);
  document.getElementById("nostoSumma").value = ""; // Tyhjennetään syöttökenttä
}

// Liitetään tapahtumankuuntelijat nappeihin
document.getElementById("talletaBtn").addEventListener("click", talleta);
document.getElementById("nostaBtn").addEventListener("click", nosta);

// Näytetään saldo heti sivun latautuessa
paivitaSaldo();
