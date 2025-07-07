let timestotais = 0;
let timesmax = 4;
let mostraHTML = document.getElementById("mostraHTML")

function cadastro(){

    if (timestotais >= timesmax) {
      alert("Limite de 4 times atingido");
      return;
    }

    let nometime = prompt("Digite o nome do seu time: ")
  

    let aluno1 = prompt("Escreva o nome do aluno 1: ")
    let aluno2 = prompt("Escreva o nome do aluno 2: ")
    let aluno3 = prompt("Escreva o nome do aluno 3: ")

    let idade1 = Number(window.prompt(`Escreva a idade do ${aluno1}`))
    let idade2 = Number(window.prompt(`Escreva a idade do ${aluno2}`))
    let idade3 = Number(window.prompt(`Escreva a idade do ${aluno3}`))

    let media;
    
    media = (idade1 + idade2 + idade3) / 3;

    if (media > 15) {
        alert ("O seu time não poderá participar do interclasse pela média de idade!!")
    }
    
    timestotais++;

    let lista = document.getElementById("listatimes");
    let bloco = document.createElement("div")

    mostraHTML.innerHTML += `<p class="textos">Time: <b>${nometime.toUpperCase()}</b>, Média de Idade: ${media}</p>`;
   
    jhonHTML.innerHTML += `<p class="textos">${aluno1}, ${idade1}</p>`;
    frontHTML.innerHTML += `<p class="textos">${aluno2}, ${idade2}</p>`;
    leSHTML.innerHTML += `<p class="textos">${aluno3}, ${idade3}</p>`;   
}
