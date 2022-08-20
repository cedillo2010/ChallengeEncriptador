
const textoEntrada=document.querySelector(".textoEntrada")
const textoSalida= document.querySelector(".textoSalida")

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado= encriptar(textoEntrada.value);
    console.log(textoEncriptado);
    textoSalida.value= textoEncriptado;
    textoSalida.style.backgroundImage="none";
    textoEntrada.value="";
}


function encriptar(stringEncriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],
    ["o","ober"],["u","ufat"]];

    stringEncriptado= stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
        console.log(stringEncriptado)

    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado= Desencriptar(textoEntrada.value);
    console.log(textoEncriptado);
    textoSalida.value= textoEncriptado;
    textoEntrada.value="";
}


function Desencriptar(stringEncriptado){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],
    ["o","ober"],["u","ufat"]];

    stringEncriptado= stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][1])){
            stringEncriptado=stringEncriptado.replaceAll
            (matrizCodigo[i][1],matrizCodigo[i][0])
        }
        console.log(stringEncriptado)

    }
    return stringEncriptado;
}

function copiar(){
   textoSalida.select()
   navigator.clipboard.writeText(textoSalida.value)
   textoSalida.value="";
   
}