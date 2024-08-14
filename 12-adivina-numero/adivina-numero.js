const numeroSecreto = Math.floor(Math.random() * 10) + 1;

const numeroJugador = parseInt(prompt("Adivina el número entre 1 y 10"));

console.log(`El numero con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
    console.log("!Felicidades, adivinaste el número secreto!");
} else if (numeroJugador < numeroSecreto) {
    console.log("El número secreto es demasiado bajo, intenta de nuevo");
} else {
    console.log("El número secreto es demasiado alto, intenta de nuevo");
}