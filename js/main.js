let _symbols = [];
let _selectedMovieId;

async function init() {
    initRouter();
    await getSymbols();
}
init();

// fetch all movies from WP
async function getSymbols() {
    let response = await fetch("json/symbols.json");
    let data = await response.json();
    _symbols = data;
    appendSymbols(data, "#main-symbols-container");
    showLoader(false);
}

// append movies to the DOM
function appendSymbols(symbols, container) {
    let htmlTemplate = "";
    for (let symbol of symbols) {
        htmlTemplate += /*html*/ `
        <article onclick="showDetailView('${symbol.id}')">
        <img src="${symbol.img}">
        <h2>${symbol.name.rendered}</h2>
        </article>
    `;
    }
    document.querySelector(container).innerHTML = htmlTemplate;
}




//loader
const loader = document.querySelector('#loader');
const main = document.querySelector('main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
    }, 2000);
}

init();