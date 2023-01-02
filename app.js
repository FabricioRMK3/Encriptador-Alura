

// FUNCION PARA CREAR EL DIV DONDE IRÁ EL RESULTADO DE LA ENCRIPTACION Y EL BOTON DE COPIAR
function crearRespuesta(textoResultado){
  let resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerHTML = "";
  let parrafo  = document.createElement("p");
  parrafo.id = "texto-salida";
  parrafo.innerHTML = textoResultado;
  resultado.appendChild(parrafo);
  let botonCopiar = document.createElement("button");
  botonCopiar.id = "btn-copiar";
  botonCopiar.className = "botones"
  botonCopiar.innerHTML = "Copiar";
  botonCopiar.addEventListener("click", copiarTexto);
  resultado.appendChild(botonCopiar);
  
  document.getElementById("invisible").style.display = "none";
}





//FUNCION PARA ENCRIPTAR EL TEXTO
function encriptar() {
    let texto = document.getElementById("texto-entrada").value;
    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
      let c = texto[i];
      if (c === "e") {
        textoEncriptado += "enter";
      } else if (c === "i") {
        textoEncriptado += "imes";
      } else if (c === "a") {
        textoEncriptado += "ai";
      } else if (c === "o") {
        textoEncriptado += "ober";
      } else if (c === "u") {
        textoEncriptado += "ufat";
      } else {
        textoEncriptado += c;
      }
    }
    crearRespuesta(textoEncriptado)
    
    document.getElementById("invisible").style.display = "none";

  }

// FUNCION PARA DESENCRIPTAR EL TEXTO

function desencriptar() {
  
  let texto = document.getElementById("texto-entrada").value;
  let textoDesencriptado = desEncriptar(texto);

  crearRespuesta(textoDesencriptado)
}

function desEncriptar(texto){
  let palabra = '';
  if(texto !== ''){
    palabra += texto.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u')
  }
  return palabra
}

// CONVIERTE CUALQUIER TEXTO CON MAYUSCULAS O CON TILDES EN TEXTO PLANO
window.addEventListener("load", function() {
  let elemento = document.getElementById("texto-entrada");

  elemento.addEventListener("input", function() {
    this.value = this.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  });
});


// FUNCION PARA COPUAR EL TEXTO DESENCRIPTADO
function copiarTexto() {
  let texto = document.getElementById("texto-salida");
  let seleccion = window.getSelection();
  let rango = document.createRange();
  rango.selectNodeContents(texto);
  seleccion.removeAllRanges();
  seleccion.addRange(rango);
  document.execCommand("copy");
}








// const codigo = {
//   e: "enter",
//   i: "imes",
//   a: "ai",
//   o: "ober",
//   u: "ufat",
// };

// function encriptar(texto) {
//   return texto.replace(/[aeiou]/g, (c) => codigo[c]);
// }

// function desencriptar(texto) {
//   return texto.replace(/(enter|imes|ai|ober|ufat)/g, (c) => Object.keys(codigo).find((k) => codigo[k] === c));
// }


