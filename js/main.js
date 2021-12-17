let _allSymbols = [];
/*
Fetches json data from the file symbols.json
*/

async function fetchSymbols() {
    let response = await fetch('json/symbols.json');
    let data = await response.json();
    _allSymbols = data;
    appendSymbols(_allSymbols);
}

fetchSymbols();

/*
Appends json data to the DOM
*/
function appendSymbols(symbols) {
    let htmlTemplate = "";
    for (let symbol of symbols) {
        htmlTemplate += /*html*/ `
        <div id="symbols-category">
            <a href="">
                <div class="img_container">
                     <img src="${symbol.img}">
                </div>
            </a>
        </div>
    `;
    }
    document.querySelector("#symbols_set").innerHTML = htmlTemplate;
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