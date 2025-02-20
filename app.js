//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const adicionarAmigo = () => {
    const amigo = document.getElementById("amigo").value;

    if (!amigo) { alert("Por favor, insira um nome valido"); return};
   
    const lista = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = amigo;
    lista.appendChild(novoItem);

    clearInput();
}

const sortearAmigo = () => {
    const result = document.getElementById("resultado");

    const list = document.querySelectorAll('#listaAmigos li');

    if (list.length === 0) { alert("Lista vazia"); return};

    const friendList = Array.from(list);

    const randomIndex = Math.floor(Math.random() * friendList.length);
    friendList[randomIndex].textContent = `O amigo sorteado é: ${
        friendList[randomIndex].textContent
    }`
    result.appendChild(friendList[randomIndex]);
    
    clearFriendList();

    clearInput();

}

const clearInput = () => {
    const amigo = document.getElementById('amigo');
    
    amigo.value = "";
    amigo.focus();
}

const clearFriendList = () => {
    document.getElementById('listaAmigos').innerHTML = "";
}