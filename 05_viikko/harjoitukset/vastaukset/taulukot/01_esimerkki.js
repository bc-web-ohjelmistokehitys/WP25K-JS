// Alkuperäinen data
let teamMembers = ["Joni", "Emilia", "Mikko", "Sade"];

// 1. Tulosta jokainen nimi käyttäen forEach-metodia:
teamMembers.forEach((nimi) => console.log(nimi));

console.log("Vaihtoehtoinen tapa:");
// Tulosta jokainen nimi käyttäen for-silmukkaa
for (let i = 0; i < teamMembers.length; i++) {
  console.log(teamMembers[i]);
}

// 2. Poista ensimmäinen jäsen
teamMembers.shift(); // ['Emilia', 'Mikko', 'Sade']
console.log("poistettu ensimmäinen:", teamMembers);

// 3. Poista viimeinen jäsen
teamMembers.pop(); // ['Emilia', 'Mikko']
console.log("poistettu viimeinen:", teamMembers);

// 4. Lisää "Alex" alkuun
teamMembers.unshift("Alex"); // ['Alex', 'Emilia', 'Mikko']
console.log("Lisätty alkuun:", teamMembers);

// 5. Lisää "Linda" loppuun
teamMembers.push("Linda"); // ['Alex', 'Emilia', 'Mikko', 'Linda']
console.log("Lisätty loppuun:", teamMembers);

// 6. Uusi taulukko ilman kahta ensimmäistä jäsentä
let slicedMembers = teamMembers.slice(2); // ['Mikko', 'Linda']
console.log("uusi taulukko ilman 2 ensimmäistä:", slicedMembers);
// 7. Etsi "Mikko":n indeksi
let mikkoIndex = teamMembers.indexOf("Mikko");
console.log("Mikon indeksi:", mikkoIndex); // 2

// 8. Etsi "Jake":n indeksi
let jakeIndex = teamMembers.indexOf("Jake");
console.log("Jaken indeksi:", jakeIndex); // -1

// 9. Korvaa "Mikko" kahdella: "Maria" ja "Netta"
let mikkoIndex2 = teamMembers.indexOf("Mikko");
if (mikkoIndex2 !== -1) {
  teamMembers.splice(mikkoIndex2, 1, "Maria", "Netta");
}
console.log("Korvattu Mikko:", teamMembers);

// 10. Liitä "Ahmad" uuteen taulukkoon
let extendedTeam = [...teamMembers, "Ahmad"];
console.log("uusi taulukko Ahmadin kanssa:", extendedTeam);

// 11. Kopioi koko taulukko
let teamCopy1 = teamMembers.slice();
console.log("kopio1: ", teamCopy1);
// toinen tapa
let teamCopy2 = [...teamMembers];
console.log("kopio2: ", teamCopy2);

// 12. Yhdistä newMembers toiseen taulukkoon
let newMembers = ["Tiina", "Myrsky"];
let combinedTeams = [...teamMembers, ...newMembers];
console.log("yhdistetyt taulukot:", combinedTeams);

// 13. Etsi kaikki "Joni":n indeksit
let joniIndeksit = [];
teamMembers.forEach((nimi, i) => {
  if (nimi === "Joni") joniIndeksit.push(i);
});
console.log("Joni-indeksit:", joniIndeksit);

// 14. Muunna kaikki nimet isoiksi kirjaimiksi
let upperCased = teamMembers.map((nimi) => nimi.toUpperCase());
console.log("Isolla:", upperCased);

// 15. Lajittele aakkosjärjestykseen (kopio, jotta ei muokata alkuperäistä)
let sortedMembers = [...teamMembers].sort();
console.log("Aakkosjärjestyksessä:", sortedMembers);

// 16. Käännä järjestys (kopio)
let reversedMembers = [...teamMembers].reverse();
console.log("Päinvastaisessa järjestyksessä:", reversedMembers);

// 17. Onko ainakin yksi "Joni"
let sisaltaaJonin = teamMembers.includes("Joni");
console.log("sisältääkö Jonin?", sisaltaaJonin);

// 18. Onko kaikilla nimillä yli 3 kirjainta?
let kaikkiYli3 = teamMembers.every((nimi) => nimi.length > 3);
console.log("Onko kaikki yli 3 pitkiä?", kaikkiYli3);
