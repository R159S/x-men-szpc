const personagens = document.querySelectorAll('.personagem')//percorre todos os elementos com a mesma classe

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: "smooth"})
        }

        removerSelecaoDoPersonagem() //remove uma classe css de um elemento

        personagem.classList.add('selecionado') //adiciona uma nova classe css ao elemento selecionado

        alterarImagemPersonagemSelecionado(personagem) //interpolação de variável usando crases

        alterarNomePersonagemSelecionado(personagem)

        alterarDescricaoPersonagem(personagem)
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerText = personagem.getAttribute('data-description')
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')
    const idPersonagem = personagem.attributes.id.value //valor do atributo do elemento
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')
}
