function configurar(){
    let validar = document.getElementById("validarBtn");
    if(validar instanceof HTMLButtonElement){
        validar.addEventListener('click',Contagem)
                  
    }

    function Contagem(){
        let entrada = document.getElementById("contaNum");
        let saida = document.getElementById("saida");
        if((entrada instanceof HTMLInputElement) && (saida instanceof HTMLParagraphElement)){
            
        } 
    }
      Contagem.length;
      
}



    document.addEventListener('DOMContentLoaded', configurar);










// let nome = "SENAI";

// let tamanho = nome.length;

// console.log(tamanho);