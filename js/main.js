let _symbols = [];
let _clothes = [];

async function init() {
    await getSymbols();
    await getClothes();
}
init();

// fetch Main Symbols
async function getSymbols() {
    let response = await fetch("json/symbols.json");
    let data = await response.json();
    _symbols = data;
    appendSymbols(data, "#main-symbols-container");
    load(false);
}

// append symbols to the DOM
function appendSymbols(symbols, container) {
    console.log(symbols)
    let htmlTemplate = "";
    for (let symbol of symbols) {
        htmlTemplate += /*html*/ `
        <article class="symbols-category" onclick = "showDetailView('${symbol.id}')">
        <div class="symbol-image-container">
        <img src="${symbol.img}">
        </div>
        <h2>${symbol.name}</h2>
        </article>
    `;
    }
    document.querySelector(container).innerHTML = htmlTemplate;
}




// fetch Clothes Symbols
async function getClothes() {
    let response = await fetch("json/clothes.json");
    let data = await response.json();
    _clothes = data;
    appendClothes(data, "#main-clothes-container");
    load(false);
}

// append clothes to the DOM
function appendClothes(clothes, container) {
    console.log(clothes)
    let htmlTemplate = "";
    for (let cloth of clothes) {
        htmlTemplate += /*html*/ `
        <article class="symbols-category" onclick = "showDetailView('${cloth.id}')">
        <div class="symbol-image-container">
        <img src="${cloth.img}">
        </div>
        <h2>${cloth.name}</h2>
        </article>
    `;
    }
    document.querySelector(container).innerHTML = htmlTemplate;
}



//loader
const loader = document.querySelector('#loader');
const main = document.querySelector('main');

function load() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 2000);
}

load();