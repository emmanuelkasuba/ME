function getCurrentPageId() {
    const fromBody = document.body.dataset.page;
    if (fromBody) return fromBody;

    const file = window.location.pathname.split('/').pop() || 'index.html';
    if (file === '' || file === 'index.html') return 'home';
    return file.replace('.html', '');
}

function setActiveNav() {
    const current = getCurrentPageId();

    document.querySelectorAll('nav a[data-nav]').forEach((link) => {
        const active = link.dataset.nav === current;
        link.classList.toggle('active', active);
        if (active) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });
}

function setActiveFooterLinks() {
    const current = getCurrentPageId();
    const fileMap = {
        home: 'index.html',
        thoughts: 'my-essays.html',
        testimonials: 'testimonials.html',
    };
    const currentFile = fileMap[current] || `${current}.html`;

    document.querySelectorAll('.footer-links a[href]').forEach((link) => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('mailto')) return;
        const linkFile = href.split('/').pop().split('#')[0];
        const active =
            (current === 'home' && (linkFile === 'index.html' || linkFile === '')) ||
            linkFile === currentFile;
        link.classList.toggle('is-current', active);
    });
}

let mobileMenuReady = false;

function initMobileMenu() {
    if (mobileMenuReady) return;

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    const closeMenu = document.querySelector('.close-menu');
    const navBackdrop = document.getElementById('navBackdrop');
    const navLinks = document.querySelectorAll('nav a');

    if (!navMenu || !mobileMenuBtn) return;

    function setMenuOpen(open) {
        navMenu.classList.toggle('show-menu', open);
        navBackdrop?.classList.toggle('is-visible', open);
        document.body.style.overflow = open ? 'hidden' : '';
        mobileMenuBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    mobileMenuBtn?.addEventListener('click', () => {
        setMenuOpen(!navMenu.classList.contains('show-menu'));
    });

    closeMenu?.addEventListener('click', () => setMenuOpen(false));
    navBackdrop?.addEventListener('click', () => setMenuOpen(false));

    navLinks.forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
            setMenuOpen(false);
        }
    });

    mobileMenuReady = true;
}

function initSiteChrome() {
    setActiveNav();
    initMobileMenu();

    const siteFooter = document.getElementById('site-footer');
    if (siteFooter) setActiveFooterLinks();
}

window.initSiteChrome = initSiteChrome;

const footerObserver = new MutationObserver(() => {
    setActiveFooterLinks();
});
const siteFooterEl = document.getElementById('site-footer');
if (siteFooterEl) {
    footerObserver.observe(siteFooterEl, { childList: true, subtree: true });
}

initSiteChrome();

const siteHeader = document.getElementById('site-header');
window.addEventListener('scroll', () => {
    if (!siteHeader) return;
    siteHeader.classList.toggle('header--scrolled', window.scrollY > 8);
}, { passive: true });

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will respond as soon as possible.');
    e.target.reset();
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
