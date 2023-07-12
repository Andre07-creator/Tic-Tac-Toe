//Variáveis que pega cada um dos elementos html das linhas e colunas
//do jogo da velha
const gap1 = document.getElementById("gap1");
const gap2 = document.getElementById("gap2");
const gap3 = document.getElementById("gap3");
const gap4 = document.getElementById("gap4");
const gap5 = document.getElementById("gap5");
const gap6 = document.getElementById("gap6");
const gap7 = document.getElementById("gap7");
const gap8 = document.getElementById("gap8");
const gap9 = document.getElementById("gap9");

//Pega todos os elementos da classe gap
const gap = document.querySelectorAll(".gap");
//id da mudança de jogador
const player = document.getElementById("player");

const inputPlayer1 = document.getElementById("player1");
const inputPlayer2 = document.getElementById("player2");

//Abaixo cada evento é inserido em cada uma das lacunas do jogo
gap1.addEventListener("click", function (ev) {
  ev.preventDefault();

  if (player.classList.contains("player1")) {
    gap1.value = "X";
  } else {
    gap1.value = "O";
    gap1.innerText = "O";
  }
  gap1.disabled = true;
  passTurn();
});
gap2.addEventListener("click", function (ev) {
  ev.preventDefault();
  //Testa se a classe player esta como player1
  if (player.classList.contains("player1")) {
    gap2.value = "X";
    gap2.innerText = "X";
  }
  //se não for player1 é player2
  else {
    gap2.value = "O";
    gap2.innerText = "O";
  }
  //desativa o botão
  gap2.disabled = true;
  //chama a função de troca de turno
  passTurn();
});
gap3.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (player.classList.contains("player1")) {
    gap3.value = "X";
    gap3.innerText = "X";
  } else {
    gap3.value = "O";
    gap3.innerText = "O";
  }
  gap3.disabled = true;
  passTurn();
});
gap4.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (player.classList.contains("player1")) {
    gap4.value = "X";
    gap4.innerText = "X";
  } else {
    gap4.value = "O";
    gap4.innerText = "O";
  }
  gap4.disabled = true;
  passTurn();
});
gap5.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (player.classList.contains("player1")) {
    gap5.value = "X";
    gap5.innerText = "X";
  } else {
    gap5.value = "O";
    gap5.innerText = "O";
  }
  gap5.disabled = true;
  passTurn();
});
gap6.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (player.classList.contains("player1")) {
    gap6.value = "X";
    gap6.innerText = "X";
  } else {
    gap6.value = "O";
    gap6.innerText = "O";
  }
  gap6.disabled = true;
  passTurn();
});
gap7.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (player.classList.contains("player1")) {
    gap7.value = "X";
    gap7.innerText = "X";
  } else {
    gap7.value = "O";
    gap7.innerText = "O";
  }
  gap7.disabled = true;
  passTurn();
});
gap8.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (player.classList.contains("player1")) {
    gap8.value = "X";
    gap8.innerText = "X";
  } else {
    gap8.value = "O";
    gap8.innerText = "O";
  }
  gap8.disabled = true;
  passTurn();
});
gap9.addEventListener("click", function (ev) {
  ev.preventDefault();
  if (player.classList.contains("player1")) {
    gap9.value = "X";
    gap9.innerText = "X";
  } else {
    gap9.value = "O";
    gap9.innerText = "O";
  }
  gap9.disabled = true;
  passTurn();
});
//função que passa o turno mudando a classe de player
function passTurn() {
  //Elemento criado para mostrar o resultado da partida
  const winner = document.createElement("span");
  //Testa se o jogador 1 (X) ganhou a partida
  if (gap1.value === "X" && gap2.value === "X" && gap3.value === "X") {
    //remove o span caso ele ja esteja criado
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    //Adiciona a cor verde para as lacunas onde o jogador ganhou
    gap1.classList = "green-win";
    gap2.classList = "green-win";
    gap3.classList = "green-win";
    //adiciona a mensagem de vitória para o jogador
    winner.innerText = inputPlayer1.value + " VENCEU!!!";
    //Manda para exibir na div player
    player.appendChild(winner);
    console.log("X venceu");
    return;
  }
  if (gap4.value === "X" && gap5.value === "X" && gap6.value === "X") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap4.classList = "green-win";
    gap5.classList = "green-win";
    gap6.classList = "green-win";
    winner.innerText = inputPlayer1.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("X venceu");
    return;
  }
  if (gap7.value === "X" && gap8.value === "X" && gap9.value === "X") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap7.classList = "green-win";
    gap8.classList = "green-win";
    gap9.classList = "green-win";
    winner.innerText = inputPlayer1.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("X venceu");
    return;
  }
  if (gap1.value === "X" && gap5.value === "X" && gap9.value === "X") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap1.classList = "green-win";
    gap5.classList = "green-win";
    gap9.classList = "green-win";
    winner.innerText = inputPlayer1.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("X venceu");
    return;
  }
  if (gap7.value === "X" && gap5.value === "X" && gap3.value === "X") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap7.classList = "green-win";
    gap5.classList = "green-win";
    gap3.classList = "green-win";
    winner.innerText = inputPlayer1.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("X venceu");
    return;
  }
  if (gap1.value === "X" && gap4.value === "X" && gap7.value === "X") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap1.classList = "green-win";
    gap4.classList = "green-win";
    gap7.classList = "green-win";
    winner.innerText = inputPlayer1.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("X venceu");
    return;
  }
  if (gap2.value === "X" && gap5.value === "X" && gap8.value === "X") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap2.classList = "green-win";
    gap5.classList = "green-win";
    gap8.classList = "green-win";
    winner.innerText = inputPlayer1.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("X venceu");
    return;
  }
  if (gap3.value === "X" && gap6.value === "X" && gap9.value === "X") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap3.classList = "green-win";
    gap6.classList = "green-win";
    gap9.classList = "green-win";
    winner.innerText = inputPlayer1.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("X venceu");
    return;
  }
  //Testa se o jogador 2 (O) ganhou a partida
  if (gap1.value === "O" && gap2.value === "O" && gap3.value === "O") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap1.classList = "green-win";
    gap2.classList = "green-win";
    gap3.classList = "green-win";
    winner.innerText = inputPlayer2.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("O venceu");
    return;
  }
  if (gap4.value === "O" && gap5.value === "O" && gap6.value === "O") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap4.classList = "green-win";
    gap5.classList = "green-win";
    gap6.classList = "green-win";
    winner.innerText = inputPlayer2.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("O venceu");
    return;
  }
  if (gap7.value === "O" && gap8.value === "O" && gap9.value === "O") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap7.classList = "green-win";
    gap8.classList = "green-win";
    gap9.classList = "green-win";
    winner.innerText = inputPlayer2.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("O venceu");
    return;
  }
  if (gap1.value === "O" && gap5.value === "O" && gap9.value === "O") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap1.classList = "green-win";
    gap5.classList = "green-win";
    gap9.classList = "green-win";
    winner.innerText = inputPlayer2.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("O venceu");
    return;
  }
  if (gap7.value === "O" && gap5.value === "O" && gap3.value === "O") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap7.classList = "green-win";
    gap5.classList = "green-win";
    gap3.classList = "green-win";
    winner.innerText = inputPlayer2.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("O venceu");
    return;
  }
  if (gap1.value === "O" && gap4.value === "O" && gap7.value === "O") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap1.classList = "green-win";
    gap4.classList = "green-win";
    gap7.classList = "green-win";
    winner.innerText = inputPlayer2.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("O venceu");
    return;
  }
  if (gap2.value === "O" && gap5.value === "O" && gap8.value === "O") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap2.classList = "green-win";
    gap5.classList = "green-win";
    gap8.classList = "green-win";
    winner.innerText = inputPlayer2.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("O venceu");
    return;
  }
  if (gap3.value === "O" && gap6.value === "O" && gap9.value === "O") {
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    gap3.classList = "green-win";
    gap6.classList = "green-win";
    gap9.classList = "green-win";
    winner.innerText = inputPlayer2.value + " VENCEU!!!";
    player.appendChild(winner);
    console.log("O venceu");
    return;
  }
  ///Testa se o jogo deu empate
  if (
    //se todas as lacunas forem diferentes de vazio deu empate
    gap1.value != "" &&
    gap2.value != "" &&
    gap3.value != "" &&
    gap4.value != "" &&
    gap5.value != "" &&
    gap6.value != "" &&
    gap7.value != "" &&
    gap8.value != "" &&
    gap9.value != ""
  ) {
    //removendo o span
    const removeSpan = document.querySelector("span");
    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    //exibe a mensage de empate
    winner.innerText = " EMPATE!!!";
    player.appendChild(winner);
    console.log("empate!!!");
    return;
  }
  //Segue o jogo passando para o próximo jogador
  if (player.classList.contains("player1")) {
    const removeSpan = document.querySelector("span");

    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    //muda de jogador
    const span = document.createElement("span");
    span.innerText = "Player 2: " + inputPlayer2.value + " - O";
    //remove o player1 que é padrão e coloca como player2 na div player
    player.classList.remove("player1");
    player.classList.add("player2");
    player.appendChild(span);
  } else {
    const removeSpan = document.querySelector("span");

    if (removeSpan != null) {
      player.removeChild(removeSpan);
    }
    //remove o player2 que é padrão e coloca como player1 na div player
    const span = document.createElement("span");
    span.innerText = "Player 1: " + inputPlayer1.value + " - X";
    player.classList.remove("player2");
    player.classList.add("player1");
    player.appendChild(span);
  }
}
//reseta o jogo limpando todas as areas e reeiniciando o jogo
const reset = document
  .getElementById("reset")
  .addEventListener("click", function () {
    document.getElementById("player1").value = "";
    document.getElementById("player2").value = "";
    //um foreach que retira todos os elementos das lacunas gap
    //e habilita novamente os botões
    gap.forEach(function (element) {
      element.value = "";
      element.disabled = false;
    });
    //remove a mensagem da div player seja ela de vencedor ou empate
    const removeSpan = document.querySelector("span");
    player.removeChild(removeSpan);
    //verifica se o player contem o id player2 e o remove
    if (player.classList.contains("player2")) {
      player.classList.remove("player2");
      //Adiciona a clase player1 novamente o que é padrão
      player.classList.add("player1");
    }
    //adiciona novamente a classe gap para cada um dos elementos
    //das lacunas do jogo
    gap.forEach(function (element) {
      element.classList = "gap";
    });
  });
