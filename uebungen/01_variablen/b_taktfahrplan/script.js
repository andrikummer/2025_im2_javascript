/*
* 01.b - Taktfahrplan
* Bis im Jahr 2070 möchte die Deutsche Bahn auf einen Taktfahrplan,
* also einem System wie in der Schweiz, umstellen, wo alle Züge stündlich
* Fahren. Darauf freust du dich sehr! Jetzt möchtest du aber wissen,
* wie alt du dann überhaupt schon bist. Schreibe dir eine Berechnung dazu.
*
* Merke: Pro Kalenderjahr kannst du zwei verschiedene Alter haben (z.B. 26 und 27).
* Gebe in einem String beide Möglichkeiten in der Konsole aus.
* */

const jahr = 2025;
const taktfahrplan_done_year = 2070;

// let geburtsdatum = parseInt(prompt("In welchem Jahr hast du Geburtstag?"), 10);

// if (isNaN(geburtsdatum)) {
//     console.error("Bitte gib ein gültiges Geburtsjahr ein.");
// } else {
//     let aktuellesAlter = jahr - geburtsdatum;
//     let alterImZieljahr = taktfahrplan_done_year - geburtsdatum;

//     console.log(
//         `Du bist ${aktuellesAlter -1} oder ${aktuellesAlter} Jahre alt.`
//     );
//     console.log(
//         `Du bist im Jahr ${taktfahrplan_done_year} entweder ${alterImZieljahr - 1} oder ${alterImZieljahr} Jahre alt.`
//     );
// }

let geburtsdatum = parseInt(prompt("In welchem Jahr hast du Geburtstag?"), 10);

checkAlter(taktfahrplan_done_year, geburtsdatum);

function checkAlter(db, datum) {
    let alterImZieljahr = db - datum;
    console.log(`Du bist im Jahr ${db} entweder ${alterImZieljahr - 1} oder ${alterImZieljahr} Jahre alt.`);
}
    