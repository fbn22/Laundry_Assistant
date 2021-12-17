class Navigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
  <nav class = "navigation navigation--inline">
     <ul>
     <li>
     <a href = "#home">
     <i class = "lni lni-home"> </i> <span class = "invisible">Home</span> </a></li > <li>
     <a href = "#symbols">
     <i class = "lni lni-shopping-basket"> </i> <span class = "invisible">Symbols</span> </a></li> <li>
     <a href = "#clothes">
     <i class = "lni lni-tshirt"> </i> <span class = "invisible">Clothes</span> </a> </li > <li>
     <a href = "#alarm">
     <i class = "lni lni-timer"> </i> <span class = "invisible">Alarm</span> </a> </li> <li>
     <a href = "#camera">
     <i class = "lni lni-camera"> </i> <span class = "invisible">Scan label</span></a></li ></ul>
     </nav>
    `;
    }
}

customElements.define('header-component', Navigation);