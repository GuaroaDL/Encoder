// En esta funcion es para tomar el texto original escrito en el texarea 
// y encriptarlo

function encriptar() {
    
  const textoEntrada = document.getElementById("texto").value;
  if (verificacion(textoEntrada)) {
    const encoderText = encriptarPalabra(textoEntrada);
    document.getElementById("resultado").textContent= encoderText;
    document.getElementById("imga").style.display = "none"; 
    document.getElementById("bt").style.display = "block"
  } else {
    alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
  }
}
// --------------------------------------------------------------------------------------------------------
// Esta funcion toma el texto encritado escrito en el textarea para descencriptarlo
function descencriptar() {

  const encoderText = document.getElementById("texto").value;
  if (verificacion(encoderText)) {
    const textoEntrada = descencriptarPalabra(encoderText);
    document.getElementById("resultado").textContent = textoEntrada;
    document.getElementById("imga").style.display = "none";
    document.getElementById("bt").style.display = "block"
  } else {
    alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
  }
}
//---------------------------------------------------------------------------------------------------------
//Esta funcion es para verificar que el texto ingresado en el textarea
// cumple con las reglas (no mayusculas ni caracteres especiales)
function verificacion(texto) {
  return /^[a-z\s]+$/.test(texto);
}
//-----------------------------------------------------------------------------------------------------------
//Esta funcion es para establecer las llaves de encriptado 
function encriptarPalabra(palabra) {
  const encriptacion = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
  };

  const palabraEncriptada = palabra.split("").map(char => encriptacion[char] || char).join("");
  return palabraEncriptada;
}
//-----------------------------------------------------------------------------------------------------------

//Esta funcion es para establecer las llaves de descencriptado 
function descencriptarPalabra(palabraEncriptada) {
  const desencriptacion = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
  };

  const palabraOriginal = palabraEncriptada.split(/(enter|imes|ai|ober|ufat)/).map(part => desencriptacion[part] || part).join("");
  return palabraOriginal;
}
//-----------------------------------------------------------------------------------------------------------
//Esta funcion es para el extra del boton de copiado y notificar mediaante
//una alerta que ya fue copiado 
function copiarResultado() {
  let copiar = document.getElementById("resultado").innerText;
  navigator.clipboard.writeText(copiar);
  document.execCommand('copy');
  alert("Resultado copiado al portapapeles");
  document.getElementById("imga").style.display = "block";
  document.getElementById("resultado").textContent = "Ingresa el texto que desees encriptar o desencriptar";
  document.getElementById("bt").style.display = "none"
  
}

