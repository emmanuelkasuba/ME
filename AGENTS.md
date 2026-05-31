# AGENTS.md — Emmanuel Kasuba portfolio

Guide for AI agents and contributors working on this repository.

## Project summary

Static personal site: **HTML + CSS + vanilla JS** (no build step). Silver/black, Oswald, typography-first — no cards or heavy UI.

| Page | File | Role |
|------|------|------|
| Home | `index.html` | Single scroll: identity, journey, ventures, testimonials preview, contact |
| Thoughts | `my-essays.html` | Essay index |
| Reading | `essay-*.html`, `testimonial-*.html` | Back bar only (no main nav) |
| Redirects | `identity.html`, `journey.html`, `contact.html` | → `index.html#…` |

Live projects only in Ventures/footer: [ZUT A+](https://zut-a.vercel.app), [SHD AI](https://smart-digital-care-13.vercel.app), [Volante'](https://volante-2be24.web.app/).

---

## Do not break

1. **Shared chrome** — Nav is injected by `site.js` into `#site-nav-mount`. Footer into `#site-footer`. Do not duplicate nav HTML on multiple pages by hand.
2. **Header selector** — Use `#site-header` for fixed chrome only. Never `header { position: fixed }` (breaks article/index headers).
3. **List pages** — Use `<div class="content-index-header">`, not `<header>`, for index labels.
4. **Reading pages** — `body.page-reading`, `data-page="thoughts"` or `testimonials`, `.header-reading` with back link.
5. **Content honesty** — No draft essays or projects without real URLs on the site.

---

## File responsibilities

| File | Purpose |
|------|---------|
| `site.js` | Injects **one** global nav + footer; calls `window.initSiteChrome()` if defined |
| `script.js` | Active nav/footer, mobile menu, reveal, scroll header — `initSiteChrome()` |
| `styles.css` | Design tokens, layout, desktop-oriented components |
| `mobile.css` | **Mobile-first** typography and single-column defaults; load after `styles.css` |
| `index.html` | Full about content; use `.prose-snippet` short paragraphs, not bullet lists |

---

## Navigation (canonical)

Injected links (see `NAV_LINKS` in `site.js`):

- About → `index.html#identity` (`data-nav="home"`)
- Thoughts → `my-essays.html` (`data-nav="thoughts"`)
- Testimonials → `testimonials.html` (`data-nav="testimonials"`)
- Contact → `index.html#contact` (`data-nav="home"`)
- ZUT A+, SHD AI, Volante' → external

Pages with `#site-nav-mount`: `index.html`, `my-essays.html`, `testimonials.html` only.

---

## Adding content

### New essay

1. Copy `essay-security-first-product-design.html`.
2. Add row to `my-essays.html` `.content-index` (only if file exists).
3. Keep `data-page="thoughts"` on reading page.

### New testimonial

1. Copy `testimonial-patrick-mulenga.html`.
2. Add row to `testimonials.html`.

### New linked venture

1. Add `<li>` under Ventures in `index.html` (title must be a real URL).
2. Add link in `site.js` footer Projects block and optionally `NAV_LINKS` if it belongs in nav.

---

## Copy style

- **Short paragraphs** (`.prose-snippet`) on home — avoid `<ul>` for identity/journey blurbs.
- Section headings: `h2` in `.section-intro`, `h3` in `.text-block`.
- Links: `.text-link` (underlined uppercase), not buttons.

---

## CSS conventions

- Tokens in `:root` (`--silver`, `--black`, `--type-*`, `--section-band-pad-y`).
- Anchors: `#identity`, `#journey`, `#contact` with `scroll-margin-top` via `.page-section`.
- Mobile: prefer editing `mobile.css` for small-screen typography; use `@media (min-width: 769px)` there for upgrades.

---

## Scripts load order

```html
<script src="site.js"></script>
<script src="script.js"></script>
```

Styles:

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="mobile.css">
```

Reading pages: Font Awesome is auto-loaded by `site.js` for footer social icons; index/thoughts/testimonials also link FA 6.5+ for the menu. Social URLs live in `SOCIAL_LINKS` inside `site.js`.

---

## Testing checklist

- [ ] Nav identical on Home, Thoughts, Testimonials
- [ ] Mobile menu opens/closes; Escape closes
- [ ] `identity.html` / `journey.html` / `contact.html` redirect to anchors
- [ ] Reading pages: back link works; no duplicate fixed headers
- [ ] Only published essays and linked ventures appear

---

## Docs

- `README.md` — human overview, history, how-tos
- `SITE-PLAN.md` — section map for `index.html`

When changing architecture, update **this file** and `README.md` together.
