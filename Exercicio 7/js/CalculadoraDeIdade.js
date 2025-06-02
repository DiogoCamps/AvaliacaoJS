export default class CalcularadoDeIdade {
  constructor(dataNascimento) {
    this.dataNascimento = new Date(dataNascimento);
  }

  calcularadoraDeIdade() {
    let hoje = new Date();


    let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
    let mesAtual = hoje.getMonth();
    let diaAtual = hoje.getDate();

    let mesNascimento = this.dataNascimento.getMonth();
    let diaNascimento = this.dataNascimento.getDate();
    
    //prettier-ignore
    if ((mesAtual < mesNascimento) || (mesAtual === mesNascimento) && (diaAtual < diaNascimento)) {
      idade--;
    }

    return idade;
  }
}