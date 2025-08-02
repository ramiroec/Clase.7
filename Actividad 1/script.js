// Ejemplos estáticos
document.getElementById('lengthResult').textContent =
    "Resultado: " + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;

let frutas = "Manzana, Banana, Kiwi";
let parte = frutas.slice(9, 15);
document.getElementById('sliceResult').textContent =
    "Resultado: " + parte;

let saludo = "Hola Mundo!";
document.getElementById('caseResult').innerHTML =
    "Mayúsculas: " + saludo.toUpperCase() + "<br>" +
    "Minúsculas: " + saludo.toLowerCase();

// Funciones interactivas
function calcularLongitud() {
    let texto = document.getElementById('lengthInput').value;
    document.getElementById('lengthInteractiveResult').textContent =
        "Longitud: " + texto.length;
}

function extraerTexto() {
    let texto = document.getElementById('sliceInput').value;
    let inicio = parseInt(document.getElementById('sliceStart').value);
    let fin = parseInt(document.getElementById('sliceEnd').value);

    if (fin > texto.length) fin = texto.length;
    if (inicio > fin) inicio = fin;

    let resultado = texto.slice(inicio, fin);
    document.getElementById('sliceInteractiveResult').textContent =
        "Texto extraído: " + resultado;
}

function aMayusculas() {
    let texto = document.getElementById('caseInput').value;
    document.getElementById('caseInteractiveResult').textContent =
        "Resultado: " + texto.toUpperCase();
}

function aMinusculas() {
    let texto = document.getElementById('caseInput').value;
    document.getElementById('caseInteractiveResult').textContent =
        "Resultado: " + texto.toLowerCase();
}

// Inicializar resultados interactivos
calcularLongitud();
extraerTexto();
aMayusculas();
