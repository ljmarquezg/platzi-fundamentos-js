let expr = "Papayas";

switch (expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan $0.59 el kilo.");
        break;

    case "Manzanas":
        console.log("Las manzanas cuestan $0.32 el kilo.");
        break;

    case "Plátanos":
    case "Papayas":
        console.log("Las papayas y los plátanos cuestan $2.79 el kilo.");
        break;

    default:
        console.log(`Lo siento, no tenemos ${expr}.`);
}