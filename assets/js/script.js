function gerarSenha() {
  
    const exibirResultado = document.getElementById('resultado');

    const tamanhoSenha = Number(document.getElementById('tamanho').value);
    let letras = document.getElementById('letras').checked;
    let numeros = document.getElementById('numeros').checked;
    let caracteresEspeciais = document.getElementById('especiais').checked;
    let senhaSegura = [];

    let vetorNumeros = ['0','1','2','3','4','5','6','7','8','9'];
    let vetorLetras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
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

    for (let index = 0; index < tamanhoSenha; index++) {
        let valor = gerarNumeroAleatorio(todosCaracteres.length);
        senhaSegura[index] = todosCaracteres[valor];
        
    }
    exibirResultado.value = ` ${senhaSegura.join('')}`;
}

function gerarNumeroAleatorio(numeroMaximo){
    min = 0;
    max = numeroMaximo;
    return Math.floor(Math.random() * (max - min) + min);
}


document.getElementById('tamanho').addEventListener('input', (evento) => {
    document.getElementById('valor-tamanho').textContent = evento.target.value;
});