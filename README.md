# Emmanuel Kasuba — Personal Site

**Last major update: 30 May 2026**

Hi, I'm Emmanuel 🇿🇲 — a cybersecurity student at **Zambia University College of Technology (ZUT)**. I specialize in **cybersecurity and web application security**, and build full-stack with **React** and modern web tools.

This repository is my **minimalist portfolio website**: silver & black, typography-first, no card UI — just text, motion, and clear sections.

**Stack:** static HTML · CSS · vanilla JavaScript (no build step).

---

## Site map

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, identity, journey, ventures, testimonials, contact (single page) |
| Thoughts | `my-essays.html` | Essay index → `essay-*.html` in **reading mode** |
| Testimonials | `testimonials.html` | Testimonial index → `testimonial-*.html` in **reading mode** |

`identity.html`, `journey.html`, and `contact.html` redirect to `index.html#identity`, `#journey`, and `#contact`.

Shared: `styles.css` · `script.js` · `site.js` (footer) · `assets/` (favicons) · `IMG_.jpg` (favicon source only).

Docs: [`SITE-PLAN.md`](SITE-PLAN.md) · [`UX-REVIEW.md`](UX-REVIEW.md)

---

## How it used to look (before May 2026 redesign)

| Area | Before | Now |
|------|--------|-----|
| **Colors** | Mixed bright accents, rounded “card” blocks | Silver `#c0c0c0` + black `#0a0a0a` only |
| **UI** | Boxes, buttons, heavy borders | Typography + underlined text links, light rules |
| **Hero** | Photo in hero on every page | Text-only heroes; photo → favicon + small logo only |
| **Home title** | Centered, moderate size | Left-aligned **Emmanuel Kasuba**, very large (`hero--home`) |
| **Thoughts** | Missing or placeholder `#` links | Real index + published essay reading pages |
| **Testimonials** | Long quotes on one page only | Same pattern as Thoughts: index + detail pages |
| **Nav** | Manual `active` classes | `data-page` on `<body>` + `data-nav` on links (`script.js`) |
| **Footer** | Duplicated per HTML file | Injected once via `site.js` (projects, ZUT A+, socials) |
| **Layout bugs** | — | Fixed: global `header { position: fixed }` had pulled list labels and article titles into the nav bar |
| **Reading** | N/A | Dedicated read view: fluid type, lead paragraph, full-width black footer band |
| **Skills** | Included Rust, Go, PHP, Docker | Trimmed to stack actually used on site |

---

## What we built (30 May 2026)

### Visual & layout
- **Oswald** font, silver/black palette, no rectangles.
- **Fixed type scale** via CSS variables (`--type-title-home`, `--type-title-page`, `--type-read-*`).
- **Home:** `hero--home` only (full viewport, huge name).
- **Other pages:** standard `.hero` (stable padding, no conflicting `min-height: 100vh` on list pages).
- **Black bands** (`.section-band`): larger vertical padding and bigger type than silver sections.
- **Favicons** from `IMG_.jpg`: `favicon.ico`, `assets/favicon-*.png`, `apple-touch-icon.png`, `site.webmanifest`.

### Thoughts & testimonials (same system)
1. **Index page** — `my-essays.html` or `testimonials.html` with `.content-index` / `.content-entry` list.
2. **Detail page** — `essay-*.html` or `testimonial-*.html` with:
   - `body.page-reading` + `data-page="thoughts"` or `data-page="testimonials"`
   - Top bar: **← Back to thoughts/testimonials** + Home
   - Article typography (large fluid body, lead paragraph, section headings)
   - **Black footer band** on the article (links + attribution)

### Navigation & scripts
- Active nav + footer highlighting from `data-page`.
- Mobile drawer, backdrop, Escape to close, safe areas.
- Skip link, focus-visible, reduced-motion support.

### Integrations
- [ZUT A+ Club](https://zut-a.vercel.app) and [Volante'](https://volante-2be24.web.app/) in nav/footer/content.
- README projects on Home and in footer.

---

## How to add a new essay (Thoughts)

### 1. Create the reading page

Copy `essay-security-first-product-design.html` to a new file, e.g. `essay-my-new-topic.html`.

Update:
- `<title>` and `<meta name="description">`
- `data-page="thoughts"` on `<body>` (keep this)
- Back link → `my-essays.html`
- `.article-meta` (date, category, read time)
- `h1`, `.article-dek`, and `.article-content` (paragraphs + `h2` sections)
- `.article-footer` links

### 2. Add a row on the index

In `my-essays.html`, add a new `<li class="content-entry">` inside `<ol class="content-index">`:

```html
<li class="content-entry">
    <article>
        <div class="content-entry__meta">
            <time datetime="2026-06-01">1 Jun 2026</time>
            <span>Category</span>
        </div>
        <div class="content-entry__content">
            <h2 class="content-entry__title">
                <a href="essay-my-new-topic.html">Your essay title</a>
            </h2>
            <p class="content-entry__dek">Short summary for the list.</p>
            <footer class="content-entry__footer">
                <span class="content-entry__read-time">5 min read</span>
                <a href="essay-my-new-topic.html" class="text-link">Read essay</a>
            </footer>
        </div>
    </article>
</li>
```

- Use `content-entry--featured` on the newest post if you want it emphasized.
- Only list essays that have a published `essay-*.html` page.

### 3. Optional: home preview

Link to the new essay from `index.html` if you want it on the home page.

**Do not** use `<header>` for article or list labels — use `<div class="article-header">` and `<div class="content-index-header">` so they are not treated as fixed site chrome.

---

## How to add a new testimonial

### 1. Create the reading page

Copy `testimonial-patrick-mulenga.html` to e.g. `testimonial-jane-doe.html`.

Update:
- `<title>` / meta description
- `data-page="testimonials"` on `<body>`
- Back link → `testimonials.html`
- `.article-meta` (name · role)
- `h1` (short headline), `.article-content` (quote + supporting paragraphs)
- Footer: name, role, phone `tel:` link, nav links

### 2. Add a row on the index

In `testimonials.html`, add inside `<ol class="content-index">`:

```html
<li class="content-entry">
    <article>
        <div class="content-entry__meta">
            <strong>Jane Doe</strong>
            <span>Role</span>
        </div>
        <div class="content-entry__content">
            <h2 class="content-entry__title">
                <a href="testimonial-jane-doe.html">On working together</a>
            </h2>
            <p class="content-entry__dek">One-line preview for the list.</p>
            <footer class="content-entry__footer">
                <a href="testimonial-jane-doe.html" class="text-link">Read full</a>
            </footer>
        </div>
    </article>
</li>
```

### 3. Optional: home preview

In `index.html`, add or update a `.quote-item` with a link to `testimonial-jane-doe.html`.

Nav/footer stay automatic via `data-page="testimonials"` — no `script.js` changes needed.

---

## Design tokens (reference)

Defined in `styles.css` `:root`:

| Token | Use |
|-------|-----|
| `--silver` / `--black` | Backgrounds & text |
| `--type-title-home` | Home name only |
| `--type-title-page` | Inner page heroes |
| `--type-read-body`, `--type-read-title`, … | Essay/testimonial reading |
| `--section-pad-y` | Silver sections |
| `--section-band-pad-y` | Black sections (taller) |
| `--max-read` | Article column width |

---

## Tech stack (on site)

`C++` · `Python` · `SQL` · `JavaScript` · `React` · `React Native` · `Next.js` · `Linux` · `Git` · Web security testing tools

---

## Projects & ventures

- **[ZUT A+ Club](https://zut-a.vercel.app)** — AI & programming at ZUT
- **[Smart Health Digital AI](https://smart-digital-care-13.vercel.app)** — digital hospital assistant (IMCI, diagnostics, voice AI)
- **[Volante'](https://volante-2be24.web.app/)** — community through technology

---

## Connect

- **Email:** [emmanuelkasuba2005@gmail.com](mailto:emmanuelkasuba2005@gmail.com)
- **GitHub:** [emmanuelkasuba](https://github.com/emmanuelkasuba)
- **X:** [@emmanuelka71332](https://x.com/emmanuelka71332)
- **LinkedIn:** [emmanuel-kasuba](https://www.linkedin.com/in/emmanuel-kasuba-706949353)
- **Instagram:** [@b.ig.e_](https://www.instagram.com/b.ig.e_/)

---

## Run locally

```bash
cd /path/to/ME
python3 -m http.server 8080
# Open http://localhost:8080/index.html
```

Or open `index.html` directly (footer still loads via `site.js`).

---

## File reference

```
ME/
├── index.html              # identity, journey, contact (sections + anchors)
├── identity.html           # → redirect to index.html#identity
├── journey.html            # → redirect to index.html#journey
├── contact.html            # → redirect to index.html#contact
├── my-essays.html
├── essay-zambias-human-compute.html
├── essay-security-first-product-design.html   # template for new essays
├── testimonials.html
├── testimonial-patrick-mulenga.html           # template for new testimonials
├── testimonial-simeon-muyangwa.html
├── testimonial-chiyamiko-chibwana.html
├── contact.html
├── styles.css
├── script.js
├── site.js
├── SITE-PLAN.md
├── UX-REVIEW.md
├── site.webmanifest
├── favicon.ico
├── IMG_.jpg
└── assets/
    └── favicon-*.png, apple-touch-icon.png, icon-192.png
```

---

> “Secure tech that actually serves people.”
