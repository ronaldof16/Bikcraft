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