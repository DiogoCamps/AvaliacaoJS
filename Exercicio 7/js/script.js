
function configurar() {
  let botaoCalcular = document.getElementById('executarBtn');
  let inputDataNascimento = document.getElementById('dataNascimento');

  //prettier-ignore
  if ((botaoCalcular instanceof HTMLButtonElement) && (inputDataNascimento instanceof HTMLInputElement)) {
    botaoCalcular.addEventListener('click', () => {
      let idade = inputDataNascimento.value;
      validar(idade);
    });
  }
}

function validar(dataNascimento) {
    let padrao = /^\d{4}-\d{2}-\d{2}$/;
    if(!padrao.test(dataNascimento)) {
        console.log("Entrada inválida!");
        return;
    }
    let data = new Date();
    if(isNaN(data.getTime())) {
        console.log("Data inválida!");
        return;
    }

}
function calcularIdade(dataNascimento, data) {
    console.log(dataNascimento)
    let idade = Math.abs(Number(dataNascimento) - data);
    return idade;
}

function exibirResultado(idade) {
  let saida = document.getElementById('resultado');
  if (saida instanceof HTMLParagraphElement) {
    saida.textContent = `Você tem ${idade} anos.`;
  }

}

document.addEventListener('DOMContentLoaded', configurar);




