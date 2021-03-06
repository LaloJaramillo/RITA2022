class Footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
            <footer>
                <div class="footer-top">
                    <div class="contacto">
                        <div class="title5">Contacto</div>

                        Información e inscripciones:
                        <ul>
                            <li>contacto@cc-eventos.com.mx</li>
                        </ul>
                        Teléfonos de contacto de la agencia
                        <ul>
                            <li>+52 55 5532 8240</li>
                        </ul>
                        <ul>
                            <li>+52 55 5532 7964</li>
                        </ul>
                    </div>

                    <img src="img/logoUAQ.png" alt="" />
                </div>
                <p>RITA 2022, Querétaro, México</p>
            </footer>
        `;
    }
}

window.customElements.define("crear-footer", Footer);