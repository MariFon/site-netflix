let filmes = ["imagens/chegada.png", "imagens/escola.png", "imagens/ontem.png", "imagens/ww.png"]

function CarregarFilmes() {
    let totalFilmes = filmes.length
    let divListaFilmes = document.querySelector(".lista-filmes")

    divListaFilmes.innerHTML =""
    for (let i = 0; i < totalFilmes; i++) {
        divListaFilmes.innerHTML += "<img src=" + filmes[i] + ">"
    }
}

function AdicionarFilme() {
    let nomeFilme = document.querySelector("#nome-do-filme").value
    let caminhoCompleto = "imagens/" + nomeFilme

    filmes.push(caminhoCompleto)

    CarregarFilmes()
}

