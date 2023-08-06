var botonEncriptar=document.querySelector(".btn-encriptar");
var botonDesencriptar=document.querySelector(".btn-desencriptar");
var botonCopiar=document.querySelector(".btn-copiar")
var muneco=document.querySelector(".Contenedor-muneco");
var h3 = document.querySelector(".Contenedor-h3");
var parrafo = document.querySelector(".contain-parrafo");
var resultado= document.querySelector(".texto-resultado");
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick=desencriptar;
botonCopiar.onclick = copiarTexto;
var area=document.querySelector(".area");


function limpiar(){
    return area.value="";
}



function encriptar(){
   
    ocultarAdelante();
    resultado.textContent=encriptarText(recuperarTexto().toLowerCase());
   limpiar();
    
   
  
   
}

function desencriptar(){
  
    ocultarAdelante();
    resultado.textContent=desencriptarText(recuperarTexto().toLowerCase());
      limpiar();
   
}
    


function recuperarTexto(){
    var area=document.querySelector(".area");
    return area.value;

}
function ocultarAdelante(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");

}
function encriptarText(mensaje){
    var text = mensaje;
    var texto_encriptado="";
    
    
    for(var i=0; i<text.length;i++){
        
        if(text[i]=="a"){
            texto_encriptado=texto_encriptado+"ai";
        }
        else if(text[i]=="e"){
            texto_encriptado=texto_encriptado+"enter";
        }
        else if(text[i]=="i"){
            texto_encriptado=texto_encriptado+"imes";
        }
        else if(text[i]=="o"){
            texto_encriptado=texto_encriptado+"ober";
        }
        else if(text[i]=="u"){
            texto_encriptado=texto_encriptado+"ufat";
        }
        else{
            texto_encriptado=texto_encriptado+text[i];
        }

    }
    return texto_encriptado;



}
function desencriptarText(mensaje){
    
    var text = mensaje;
    var texto_desencriptado="";
    
    for(var i=0; i<text.length;i++){
        if(text[i]=="a"){
            texto_desencriptado=texto_desencriptado+"a";
            i=i+1;
        }
        else if(text[i]=="e"){
            texto_desencriptado=texto_desencriptado+"e";
            i=i+4;
        }
        else if(text[i]=="i"){
            texto_desencriptado=texto_desencriptado+"i";
            i=i+3;
        }
        else if(text[i]=="o"){
            texto_desencriptado=texto_desencriptado+"o";
            i=i+3;
        }
        else if(text[i]=="u"){
            texto_desencriptado=texto_desencriptado+"u";
            i=i+3;
        }
        else{
            texto_desencriptado=texto_desencriptado+text[i];
        }

    }
    return texto_desencriptado;


}
function copiarTexto(){
    
    navigator.clipboard.writeText(resultado.innerHTML);

}
