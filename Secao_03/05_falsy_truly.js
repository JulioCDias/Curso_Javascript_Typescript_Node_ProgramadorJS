// Falsy = false, 0, -0, "", null, undefined, NaN, document.all
// Truly = qualquer outro valor diferente dos falsy

if ("") {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

if (!"") { // ! = negação
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}