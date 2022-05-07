class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header>
            <div class="logos">
                <img class="img" src="img/RITAmx-LOGO.png" alt="RITA LOGO" />
                <img src="img/Rabies-LOGO.png" alt="Rabies LOGO" />
            </div>

            <div class="idiomas">
                <label for="banderas">Selecciona un idioma</label>
                <div class="banderas">
                    <a href="">
                        <img id="espaniol" src="img/flag-mexico1.png" alt="espaniol" />
                    </a>
                    <a href="">
                        <img id="ingles" src="img/flag-usa.png" alt="espaniol" />
                    </a>
                    <a href="">
                        <img id="portugues" src="img/flag-francia.png" alt="espaniol" />
                    </a>
                    <a href="">
                        <img id="frances" src="img/flag-brasil.png" alt="espaniol" />
                    </a>
                </div>
            </div>

            <div class="opciones">
                <div class="op-inicio"> 
                    <button id="menu-option-btn"> <a href="index.html">INICIO</a></button>

                    
                    <div class="inner-menu-options">
                        <div class="inner-menu-arrow"></div>
                        <a href="acercaDe.html">Acerca De</a>
                        <a href="#comite-internacional">Comité Directivo Internacional</a>
                        <a href="#comite-local">Comité Local Organizador</a>
                        <a href="patrocinadores.html">Patrocinadores</a>
                    </div>
                </div>

                <a href="sede.html">
                    <div class="op-sede">SEDE</div>
                </a>

                <div class="op-premios"> 
                    <button id="menu-option-btn"> <a href="">PREMIOS</a></button>

                    
                    <div class="inner-menu-options">
                        <div class="inner-menu-arrow"></div>
                        <a href="premio_gmb.html">Premio George M. Baer</a>
                        <a href="premio_ivanette.html">Premio Ivanette</a>
                    </div>
                </div>
                
                <a href="programa.html">
                    <div class="op-premios">PROGRAMA</div>
                </a>
                <a href="concurso.html">
                    <div class="op-concurso">CONCURSO</div>
                </a>
                <a href="inscripcion.html">
                    <div class="op-inscripcion">INSCRIPCIÓN</div>
                </a>
            </div>
            </header>
        `;
    }
}

window.customElements.define("crear-header", Header);