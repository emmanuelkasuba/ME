(function () {
    const year = new Date().getFullYear();

    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
        document.head.appendChild(fa);
    }

    const SOCIAL_LINKS = [
        { href: 'https://bsky.app/profile/emmanuelkasuba.bsky.social', label: 'Bluesky', icon: 'fa-brands fa-bluesky' },
        { href: 'https://x.com/emmanuelka71332', label: 'X', icon: 'fa-brands fa-x-twitter' },
        { href: 'https://www.linkedin.com/in/emmanuel-kasuba-706949353', label: 'LinkedIn', icon: 'fa-brands fa-linkedin-in' },
        { href: 'https://www.instagram.com/unoffically_b.i.geeee/', label: 'Instagram', icon: 'fa-brands fa-instagram' },
        { href: 'https://pin.it/hN1DoKaCJ', label: 'Pinterest', icon: 'fa-brands fa-pinterest' },
        { href: 'https://substack.com/@emmanuelkasuba', label: 'Substack', icon: 'fa-brands fa-substack' },
        { href: 'https://github.com/emmanuelkasuba', label: 'GitHub', icon: 'fa-brands fa-github' },
    ];

    const NAV_LINKS = [
        { href: 'index.html#identity', label: 'About', dataNav: 'home' },
        { href: 'my-essays.html', label: 'Thoughts', dataNav: 'thoughts' },
        { href: 'testimonials.html', label: 'Testimonials', dataNav: 'testimonials' },
        { href: 'index.html#contact', label: 'Contact', dataNav: 'home' },
        { href: 'https://zut-a.vercel.app', label: 'ZUT A+', external: true },
        { href: 'https://smart-digital-care-13.vercel.app', label: 'SHD AI', external: true },
        { href: 'https://volante-2be24.web.app/', label: "Volante'", external: true },
    ];

    function renderHeroSocial() {
        const mount = document.getElementById('hero-social-mount');
        if (!mount) return;

        mount.innerHTML = SOCIAL_LINKS.map(
            (s) =>
                `<a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}"><i class="${s.icon}" aria-hidden="true"></i></a>`
        ).join('');
    }

    function renderSiteNav() {
        const mount = document.getElementById('site-nav-mount');
        if (!mount) return;

        const items = NAV_LINKS.map((link) => {
            const external = link.external
                ? ' class="nav-external" target="_blank" rel="noopener noreferrer"'
                : '';
            const dataNav = link.dataNav ? ` data-nav="${link.dataNav}"` : '';
            return `<li><a href="${link.href}"${dataNav}${external}>${link.label}</a></li>`;
        }).join('');

        mount.innerHTML = `
            <nav aria-label="Main">
                <button class="mobile-menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navMenu"><i class="fas fa-bars"></i></button>
                <ul id="navMenu">
                    ${items}
                    <li><button class="close-menu" type="button" aria-label="Close menu"><i class="fas fa-times"></i></button></li>
                </ul>
            </nav>
        `;
    }

    function renderFooter() {
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
                    <li><a href="index.html#identity">Identity</a></li>
                    <li><a href="index.html#journey">Journey</a></li>
                    <li><a href="index.html#contact">Contact</a></li>
                    <li><a href="my-essays.html">Thoughts</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 class="footer-heading">Projects</h4>
                <ul class="footer-links">
                    <li><a href="https://zut-a.vercel.app" target="_blank" rel="noopener noreferrer">ZUT A+ Club</a></li>
                    <li><a href="https://smart-digital-care-13.vercel.app" target="_blank" rel="noopener noreferrer">Smart Health Digital AI</a></li>
                    <li><a href="https://volante-2be24.web.app/" target="_blank" rel="noopener noreferrer">Volante'</a></li>
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
                    ${SOCIAL_LINKS.map(
                        (s) =>
                            `<a href="${s.href}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}"><i class="${s.icon}" aria-hidden="true"></i></a>`
                    ).join('')}
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Building platforms that empower youth through technology grounded in faith and purpose.</p>
            <p class="footer-copy">© ${year} Emmanuel Kasuba. All rights reserved.</p>
        </div>
    `;
    }

    renderSiteNav();
    renderHeroSocial();
    renderFooter();

    if (typeof window.initSiteChrome === 'function') {
        window.initSiteChrome();
    }
})();
