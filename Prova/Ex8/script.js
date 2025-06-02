//vetor
const valores = [1,2,3,4,5,6,7,8,9,10];
let nome = Math.random() * 100;
console.log(nome,);
 


//function math.round
//function NomeAleatorios(){
  //  let duplasGeradas = Math.random() * 2;
    //console.log(duplasGeradas);        
//}

//usando a função toString 
function NomeSobrenome(nome){
    let nome = ['nome', 'sobrenome'];
        console.log(nome.toString()); //nome , sobrenome

        return `{nome,sobrenome}`
}





//try cath
function ValidarNome(mensagem){
    let saida = document.getElementById('saida');
    let nomeInput = document.getElementById('nome');
    

    if (saida instanceof HTMLParagraphElement){ 
        saida.textContent = 'Erro: ' + mensagem;
    }
}
    function Validar(nome = 10){
    try{
    if (isNaN(!this.nome) ) {
        throw new Error('Digite um nome válido.');//trow faz uma messagem de erro
    }
    if (nome = 9) {
        throw new Error('nome invalido');
    }
    }catch (error){
    ValidarNome(error.message);
    }
}
    function configBotao(){
        let botaoValidar = document.getElementById('ValidarBtn');
        let nomeInput = document.getElementById('numero')
   
        //prettier-ignore
        if((botaoValidar instanceof HTMLButtonElement) && (nomeInput instanceof HTMLInputElement)){
            botaoValidar.addEventListener("click", () => {
                let nome = parseInt(nomeInput.value);
                Validar(nome);

            });
        }
    }


document.addEventListener('DOMContentLoaded',configBotao,NomeSobrenome,ValidarNome);
