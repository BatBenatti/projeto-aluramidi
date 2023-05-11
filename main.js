const botaoRepete = document.querySelector("#repete");
const teclas = document.querySelectorAll(".tecla");
const composer = document.querySelector("#repete");
const input = document.querySelector(".composer");
let repetir = [];
let composicao = "";
let velocidade = 500;

function tocaSom(idElementAudio) {
  const elemento = document.querySelector(idElementAudio).play();

  elemento.currentTime = 0;
  elemento.play;
}

for (let i = 0; i < teclas.length; i++) {
  const instrumento = teclas[i].classList[1];
  const id = `#som_${instrumento}`;
  const tecla = teclas[i];
  tecla.onclick = function () {
    tocaSom(id);
    repetir.push(id);
    composicao = repetir.join(" - ");
    input.innerHTML = `${composicao}`;
  };

  tecla.onkeydown = function (evento) {
    if (evento.keyCode == 13 || evento.keyCode == 32) {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

function funcRepete() {
  repetir.forEach((element, i) => {
    setTimeout(() => {
      tocaSom(element);
      repetir.splice(0, 1);
      composicao = repetir.join(" - ");
      input.innerHTML = `${composicao}`;
    }, i * velocidade);
  });
}

botaoRepete.onclick = funcRepete;
