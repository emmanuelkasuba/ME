(function () {
    const year = new Date().getFullYear();
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    footer.innerHTML = `
        <div class="footer-grid">
            <div class="footer-col footer-brand">
                <a href="index.html" class="logo footer-logo">
                    <img src="assets/favicon-48.png" alt="Emmanuel Kasuba" width="40" height="40">
                    Emmanuel Kasuba
                </a>
                <p class="footer-tagline">Cybersecurity &amp; web application security · ZUT 🇿🇲</p>
                <p class="footer-values">Faith · Security · Craft · Community</p>
                <blockquote class="footer-quote">"Secure tech that actually serves people."</blockquote>
            </div>
            <div class="footer-col">
                <h4 class="footer-heading">Pages</h4>
                <ul class="footer-links" role="list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="identity.html">Identity</a></li>
                    <li><a href="journey.html">Journey</a></li>
                    <li><a href="my-essays.html">Thoughts</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="https://zut-a.vercel.app" target="_blank" rel="noopener">ZUT A+ Club</a></li>
                    <li><a href="https://volante-2be24.web.app/" target="_blank" rel="noopener">Volante'</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 class="footer-heading">Projects</h4>
                <ul class="footer-links">
                    <li><a href="https://zut-a.vercel.app" target="_blank" rel="noopener">ZUT A+ Club</a></li>
                    <li>Genesis Secure AI</li>
                    <li>SHD AI</li>
                    <li>Hair Do</li>
                    <li>RushLink</li>
                    <li>Hot-Taks</li>
                    <li><a href="https://volante-2be24.web.app/" target="_blank" rel="noopener">Volante'</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 class="footer-heading">Connect</h4>
                <ul class="footer-links footer-connect">
                    <li><a href="mailto:emmanuelkasuba2005@gmail.com">emmanuelkasuba2005@gmail.com</a></li>
                    <li>Zambia University College of Technology</li>
                    <li>Open to secure AI, React apps &amp; web security work</li>
                </ul>
                <div class="social-links footer-social">
                    <a href="https://github.com/emmanuelkasuba" target="_blank" rel="noopener" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    <a href="https://x.com/emmanuelka71332" target="_blank" rel="noopener" aria-label="X"><i class="fab fa-x-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/emmanuel-kasuba-706949353" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/b.ig.e_/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Building platforms that empower youth through technology grounded in faith and purpose.</p>
            <p class="footer-copy">© ${year} Emmanuel Kasuba. All rights reserved.</p>
        </div>
    `;
})();
