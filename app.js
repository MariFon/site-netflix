function CarregarFilmes() {

    let filmes = ["imagens/chegada.png", "imagens/escola.png", "imagens/ontem.png", "imagens/ww.png"]

    for (let controle = 0; controle < 4; controle = controle + 1) { 
        document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[controle] + ">" 
    }
}