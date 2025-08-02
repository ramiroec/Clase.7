
// Cadena de ejemplo
let texto = "Hola, Mundo! Bienvenido a JavaScript.";

// Mostrar la cadena original
document.getElementById("originalText").textContent = texto;

// 1. Length: Obtener la longitud de la cadena
let longitud = texto.length;
document.getElementById("lengthOutput").innerHTML = `
    <p><b>Longitud del texto:</b> ${longitud}</p>
`;

// 2. Slice: Extraer una parte de la cadena
let saludo = texto.slice(0, 10);
document.getElementById("sliceOutput").innerHTML = `
    <p><b>Fragmento extraído:</b> ${saludo}</p>
`;

// 3. toUpperCase: Convertir toda la cadena a mayúsculas
let textoMayusculas = texto.toUpperCase();
document.getElementById("upperCaseOutput").innerHTML = `
    <p><b>Texto en mayúsculas:</b> ${textoMayusculas}</p>
`;

// 4. Split: Dividir la cadena en un array de subcadenas
let palabras = texto.split(" ");
document.getElementById("splitOutput").innerHTML = `
    <p><b>Array de palabras:</b> ${JSON.stringify(palabras)}</p>
`;

// 5. Replace: Reemplazar una subcadena por otra
let nuevoTexto = texto.replace("Mundo", "Amigo");
document.getElementById("replaceOutput").innerHTML = `
    <p><b>Texto reemplazado:</b> ${nuevoTexto}</p>
`;
