let anni= prompt("Inserisci la tua età");
console.log (anni);

let chilometri= prompt("Inserisci il chilometraggio")
console.log (chilometri);

let prezzotragitto=chilometri*0.21;
console.log(prezzotragitto);

let scontoperminori=prezzotragitto*0.2
console.log(scontoperminori);

let scontoperver65=prezzotragitto*0.4
console.log(scontoperver65);

let prezzofinale;


if (anni <18){
    alert("Sei sotto i 18 anni di età")
    prezzofinale=prezzotragitto-scontoperminori
} 

else if (anni >=65){
    alert ("Sei sopra i 65 anni di età")
    prezzofinale=prezzotragitto-scontoperver65
}

else {
    alert("Non hai diritto a sconti")
    prezzofinale=prezzotragitto
}

console.log(prezzofinale + " Questo è il prezzo riservato per te");