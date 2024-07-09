var mensaje;
var texto;
// const regex = /^[a-zA-Z0-9]+$/;

//Evita Teclas 
function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Permitir borrar y Espacio. 
    if (tecla == 8 || tecla == 32) {
        return true;
    }
    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function encriptar() {
    texto = document.getElementById("texto").value.toLowerCase();
    //console.log(screen.width);
    if (texto != 0) {
        //Declaracon de llaves encriptado
        mensaje = texto.replace(/e/img, "enter");
        mensaje = mensaje.replace(/o/img, "ober");
        mensaje = mensaje.replace(/i/img, "imes");
        mensaje = mensaje.replace(/a/img, "ai");
        mensaje = mensaje.replace(/u/img, "ufat");

        //document.getElementById("textoRespuestaInput").value = mensaje;
        //document.getElementById("textoRespuestaInput").style.visibility = "visible";

      
       document.getElementById("textoRespuesta").innerHTML = mensaje;
    
        //document.getElementById("respuestaAviso").innerHTML = mensaje;
        //document.getElementById("textoRespuesta").setAttribute('rows', 15);
        document.getElementById("botonCopiar").style.visibility = "visible";
        //document.getElementById("botonCopiar").style.visibility = "inherit";
        //document.getElementById("respuestaImagen").style.visibility = "hidden";
        document.getElementById("respuestaAviso").remove();
        document.getElementById("respuestaInstruccion").remove();
        document.getElementById("respuestaImagen").remove();

    } else {
        alert("Digita alguna palabra para Encriptar");
    }

}
/*
const textareaValue = document.getElementById('miTextarea').value;
if (!textareaValue.match(regex)) {
    alert('Por favor, ingresa los datos en el formato correcto.');
    return false;
}*/

function copiar() {
    var textoCopiar = document.getElementById('textoRespuesta').value;
    //console.log(textoCopiar);
    navigator.clipboard.writeText(textoCopiar);

}

function desencriptar() {
    texto = document.getElementById("texto").value.toLowerCase();
    if (texto != 0) {
        //Declaracon de llaves desencriptado
        mensaje = texto.replace(/enter/img, "e");
        mensaje = mensaje.replace(/ober/img, "o");
        mensaje = mensaje.replace(/imes/img, "i");
        mensaje = mensaje.replace(/ai/img, "a");
        mensaje = mensaje.replace(/ufat/img, "u");

        //document.getElementById("respuestaAviso").innerHTML = mensaje;
        document.getElementById("textoRespuesta").innerHTML = mensaje;
    } else {
        alert("Digita alguna palabra para Encriptar");
    }
}


