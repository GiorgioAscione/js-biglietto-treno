let anni= prompt("Inserisci la tua età");
console.log (anni);

let chilometri= prompt("Inserisci il chilometraggio")
console.log (chilometri);

let prezzotragitto=chilometri*0.21;
console.log(prezzotragitto);

if (anni <18){
    alert("Sei sotto i 18 anni d'età")
}

else if (anni >65){
    alert ("Sei sopra i 65 anni d'età")
}

else {
    alert("Non hai diritto a sconti")
}
