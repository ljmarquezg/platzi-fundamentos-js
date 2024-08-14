/* 

for in -> Itera sobre las propiedades de un objeto

for (variable in objeto) {
    // Código a ejecutar
}) */

const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
};

for (fruta in listaDeCompras) {
    console.log(fruta);
}

for (fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}