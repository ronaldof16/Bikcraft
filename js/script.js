// Ativar links do menu 
let links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    let url = location.href;
    let href = link.href;

    if(url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

// Ativar itens do orçamento
const parametro = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    let elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true;
    }  
}

parametro.forEach(ativarProduto);

// Perguntas frequentes
let perguntas = document.querySelectorAll(".perguntas button");
function ativarPergunta(event) {
    let pergunta = event.currentTarget;
    let controls = pergunta.getAttribute("aria-controls");
    let resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    let ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas
let galeria = document.querySelectorAll(".bicicleta-imagens img");
let galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
    let img = event.currentTarget;
    let media = matchMedia("(min-width: 1000px)").matches;
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);