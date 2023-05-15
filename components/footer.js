class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <div class="cs-footer">
                <div class="cs-footer-social-links">
                    <a href="https://open.spotify.com/" target="_blank" title="logo spotify"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-spotify.svg" title="logo spotify" alt="logo spotify"></a>
                    <a href="https://www.facebook.com/" target="_blank" title="logo facebook"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-facebook-1.svg" title="logo facebook" alt="logo facebook"></a>
                    <a href="https://www.pinterest.com/" target="_blank" title="logo pinterest"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-pinterest.svg" title="logo pinterest" alt="logo pinterest"></a>
                    <a href="https://www.instagram.com/" target="_blank" title="logo instagram"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-instagram-1.svg" title="logo instagram" alt="logo instagram"></a>
                    <a href="https://www.youtube.com/" target="_blank" title="logo youtube"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-youtube.svg" title="logo youtube" alt="logo youtube"></a>
                    <a href="https://twitter.com/" target="_blank" title="logo twitter"><img class="cs-footer-social-icon" src="../assets/icons/socialMedia/icon-twitter.svg" title="logo twitter" alt="logo twitter"></a>
                </div>
                <div class="cs-footer-faq-list">
                    <a href="#" title="aviso de privacidad">Aviso de Privacidad</button>
                    <a href="#" title="terminos de uso">Terminos de uso</a>
                    <a href="#" title="configuracion de cookies">Configuracion de Cookies</a>
                </div>

                <p class="cs-footer-copyright">&#169 2023 Todos los derechos reservados</p>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);

