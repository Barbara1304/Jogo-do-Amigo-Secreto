//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = []

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();
  if(nome === ' ') return
  
  amigos.push(nome);
  input.value = '';
  input.focus();

  atualizarLista();
 }
  function atualizarLista(){
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    amigos.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
  }
  function sortearAmigo() {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    if (amigos.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Adicione pelo menos um nome!";
        ulResultado.appendChild(li);
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    const li = document.createElement("li");
    li.textContent = `Amigo sorteado: ${nomeSorteado}`;
    ulResultado.appendChild(li);
    }