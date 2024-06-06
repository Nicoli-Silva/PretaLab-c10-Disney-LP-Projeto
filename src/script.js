let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpitesDado = [];

function jogoDeAdivinhacao() {
  const palpiteDigitado = pegarPalpiteDigitado();
    
  if (!palpiteDigitado || palpiteDigitado < 1 || palpiteDigitado > 100) {
    alert("Digite um valor entre 1 e 100!");
    return; 
  }
    
    if (palpitesDado.includes(palpiteDigitado)) {
      alert("Você ja tentou esse Mona, insira um numero diferente");
       return;
    } else {
      palpitesDado.push(palpiteDigitado);
    }
    //SOS 

  if (palpiteDigitado === numeroAleatorio) {
    alert("Parabéns, você ganhou!!!"); 
    reiniciarJogo();
    return;
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback("O número inserido é muito alto. Tente novamente.");
    } else if ( palpiteDigitado < numeroAleatorio ) { 
        tentativas++;
        atualizarFeedback ("O número inserido é muito baixo. Tente novamente.");
    }

    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao);

    const palpitesFalhos = pegarPalpitesFalhos();
    const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novosPalpitesFalhos);

    const pontuacaoAtual = pegarPontuacao();
    if (pontuacaoAtual === "Você tem 0 pontos") {
        alert ("Deu Ruim mona! Quer se humilhar novamente?");
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja reiniciar? ");

    if (vaiReiniciar === true) {
      numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      tentativas = 0;
      palpitesDado = [];
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback("");
        limparPalpiteDigitado();
    }

}