function CarregarFilmes() {
//array = variavel com subdivisoes(indices)
    let filmes = ["imagens/chegada.png", "imagens/escola.png", "imagens/ontem.png", "imagens/ww.png"]

    // console.log("Carregar Filmes")
    // document.querySelector(".lista-filmes").innerHTML = "<img src=" + filmes[0] + ">"
    // document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[1] + ">"
    // document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[2] + ">"
    // document.querySelector(".lista-filmes").innerHTML += "<img src=" + filmes[3] + ">"

    //laço de repetição
    for(let controle = 0 ; controle < 6 ; controle = controle + 1){ document.querySelector(".lista-filmes").innerHTML +="<img src" + filmes[controle] + ">"}
}