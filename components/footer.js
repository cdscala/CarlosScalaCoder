class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div class="cs-footer">
                <div class="cs-footer-social-links">
                    <a href="#"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-spotify.svg" alt="logo sitio"></a>
                    <a href="#"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-facebook-1.svg" alt="logo sitio"></a>
                    <a href="#"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-pinterest.svg" alt="logo sitio"></a>
                    <a href="#"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-instagram-1.svg" alt="logo sitio"></a>
                    <a href="#"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-youtube.svg" alt="logo sitio"></a>
                    <a href="#"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-twitter.svg" alt="logo sitio"></a>
                </div>
                <div class="cs-footer-faq-list">
                    <a href="#">Aviso de Privacidad</a>
                    <a href="#">Terminos de uso</a>
                    <a href="#">Configuracion de Cookies</a>
                </div>
                <p class="cs-footer-copyright">&#169 2023 Todos los derechos reservados</p>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);

