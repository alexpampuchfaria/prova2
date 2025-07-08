timestotais = 0;
let timesmax = 4;
let mostraHTML = document.getElementById("mostraHTML");

function cadastro(){

    if (timestotais >= timesmax) {
      alert("Limite de 4 times atingido!");
      return;
    }

    let nometime = prompt("Digite o nome do time: ");
    

    let aluno1 = prompt("Escreva o nome do jogado1: ");
    let aluno2 = prompt("Escreva o nome do jogado2: ");
    let aluno3 = prompt("Escreva o nome do jogador3: ");

    let idade1 = Number(window.prompt(`Escreva a idade do ${aluno1}`));
    let idade2 = Number(window.prompt(`Escreva a idade do ${aluno2}`));
    let idade3 = Number(window.prompt(`Escreva a idade do ${aluno3}`));

    let media;
    
    media = (idade1 + idade2 + idade3) / 3;
    

    if (media > 15) {
        alert ("O seu time não poderá participar do interclasse pela média de idade!!");
        alert("cadatre um time valído");
      
      }


    timestotais++;

    let lista = document.getElementById("listatimes");
    let bloco = document.createElement("div");

    mostraHTML.innerHTML += `<h3> TIME: ${nometime.toUpperCase()}</h3>`;
    mostraHTML.innerHTML += `<p>${aluno1}, ${idade1}</p>`;
    mostraHTML.innerHTML += `<p>${aluno2}, ${idade2}</p>`;
    mostraHTML.innerHTML += `<p>${aluno3}, ${idade3}</p>`; 
    mostraHTML.innerHTML += `<p>Média de idade: ${media.toFixed(2)}</p><hr>`;
}
