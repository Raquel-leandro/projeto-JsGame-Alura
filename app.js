alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se numeroSecreto for igual ao chute
    if (numeroSecreto == chute) {
        break;
        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}
            //lê-se = tentativas é maior que 1? se sim 'tentativas' se não 'tentativa';
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
//if(tentativas > 1){
  //  alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//}else{
  //  alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}
