function gerarSenha() {
  
    const exibirResultado = document.getElementById('resultado');

    const tamanhoSenha = 10;
    let letras = true;
    let numeros = true;
    let caracteresEspeciais = false;

    let vetorNumeros = ['0','1','2','3','4','5','6','7','8','9'];
    let vetorLetras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let vetorEspeciais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', ';', ':', ',', '.', '/', '?', '~'];

    let todosCaracteres = [];


    if (letras) {
        todosCaracteres = [...todosCaracteres, ...vetorLetras];
    }
    if (numeros) {
        todosCaracteres = [...todosCaracteres, ...vetorNumeros];
    }
    if (caracteresEspeciais) {
        todosCaracteres = [...todosCaracteres, ...vetorEspeciais];
    }
    exibirResultado.value = ` ${todosCaracteres.join(', ')}`;
}