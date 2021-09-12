//########### Eleições da Ilha de Vera Cruz ##############

const prompt = require('prompt-sync')();

	var candidato1 = 0;
  var candidato2 = 0;
  var candidato3 = 0;
  var nulo = 0;
  var branco = 0;
	var voto = 0;

function autorizaVoto (anoNascimento) {

    let idade = 2021 - anoNascimento;
    
    if (idade >= 18) {
        return "Voto Obrigatorio"

    } else if (idade <= 18 && idade > 16) {
        return "Voto Opcional"

    } else {
        return "Voto Negado"
    }

};

function votacao (autorizacao, voto) {

    if (autorizacao == "Voto Obrigatorio" || autorizacao == "Voto Opcional") {
        voto = +prompt(`Selecione a opção correspondente ao seu candidato ou tipo de voto:
        1 = Candidato 1
        2 = Candidato 2
        3 = Candidato 3
        4 = Voto Nulo
        5 = Voto em Branco
        `);
        
        
          if (voto === 1) {
            candidato1++
        } else if (voto === 2) {
            candidato2++
        } else if (voto === 3) {
            candidato3++
        } else if (voto === 4) {
            nulo++
        } else {
            branco++
        };     
                
    } else if  (autorizacao == "Voto Negado") {
			
			exibirResultados()
				         
      }
};

function exibirResultados() {
  
	
  console.log(`O candidato 1 teve ${candidato1} votos.`);
  console.log(`O candidato 2 teve ${candidato2} votos.`);
  console.log(`O candidato 3 teve ${candidato3} votos.`);
  console.log(`A quantidade de votos nulos foi de ${nulo} votos.`);
  console.log(`A quantidade de votos em branco foi de ${branco} votos.`);

  if (candidato1 > candidato2 && candidato1 > candidato3) {
    console.log ("Candidato 1 venceu as eleições.")
  } else if (candidato2 > candidato1 && candidato2 > candidato3) {
      console.log ("Candidato 2 venceu as eleições.")
  } else if ( candidato3 > candidato1 && candidato3 > candidato2) {
    console.log ("Candidato 3 venceu as eleições.")
  } else if (nulo > candidato1 && nulo > candidato2 && nulo > candidato3 && nulo > branco) {
    console.log ("Nenhum candidato venceu, a maioria dos votos foram nulos.")
  } else {
      console.log ("Nenhum candidato venceu, a maioria dos votos foram em branco.")
  }

};


do {
  
	var ano_nascimento = +prompt ("Qual seu ano de nascimento? ");
  console.log();

  var autorizacao = autorizaVoto(ano_nascimento);
  console.log (autorizacao);

  votacao(autorizacao);

  var novo_voto = prompt ("Votar novamente? ");

} while (
   novo_voto == "sim"
);

exibirResultados();