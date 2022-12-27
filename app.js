
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
    let resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    resultado.innerHTML = "";
    let parrafo  = document.createElement("p");
    parrafo.id = "texto-salida";
    parrafo.innerHTML = textoEncriptado;
    resultado.appendChild(parrafo);
    let botonCopiar = document.createElement("button");
    botonCopiar.id = "btn-copiar";
    botonCopiar.className = "botones"
    botonCopiar.innerHTML = "Copiar";
    botonCopiar.addEventListener("click", copiarTexto);
    resultado.appendChild(botonCopiar);
    
    document.getElementById("invisible").style.display = "none";

  }

  function copiarTexto() {
    let texto = document.getElementById("texto-salida");
    texto.select();
    document.execCommand("copy");
  }