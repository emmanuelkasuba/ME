# Site architecture plan — Emmanuel Kasuba

Silver/black, Oswald, full-width sections, text-only heroes. Favicons from `IMG_.jpg` in `assets/`.

---

## Global (every page)

| Element | Purpose |
|--------|---------|
| **Header** | Logo → `index.html`. Nav: About (`#identity`), Thoughts, Testimonials, Contact (`#contact`), ZUT A+, Volante'. Mobile drawer. |
| **Favicon** | `favicon.ico`, `assets/favicon-*.png`, `apple-touch-icon.png`. |
| **Footer** | Injected via `site.js`: brand, home anchors, Thoughts, Testimonials, projects, connect. |
| **Scripts** | `site.js`, `script.js`. |

---

## `index.html` — Home (all-in-one)

| # | Section | Anchor | Content |
|---|---------|--------|---------|
| 1 | **Hero** | — | Large left name, ZUT A+ lead, links to #identity, #journey, Thoughts, #contact |
| 2 | **Statement band** | — | *Secure tech that actually serves people.* |
| 3 | **Identity** | `#identity` | Spiritual compass, technical prowess |
| 4 | **Expertise band** | — | Cybersecurity, web security, React, threat hunting |
| 5 | **Tech stack** | — | C++, Python, SQL, JS, React, etc. |
| 6 | **Journey** | `#journey` | Short-term / long-term vision |
| 7 | **Learning band** | — | ZUT Semester 1 2026: BIT 2261, SEC 2201, SEC 2210, SEC 2230; ZUT A+ link |
| 8 | **Milestones** | — | MVPs, pilots, funding, core team |
| 9 | **Values band** | — | Faith · Security · Craft · Community |
| 10 | **Ventures** | — | ZUT A+ Club, Smart Health Digital AI, Volante' (live links only) |
| 11 | **Testimonials preview** | — | 3 quotes → detail pages |
| 12 | **Contact** | `#contact` | Email, phone, ZUT |
| 13 | **Collaboration band** | — | Email CTA |
| 14 | **Footer** | — | Shared |

---

## `my-essays.html` — Thoughts

Index (`.content-index`) → `essay-*.html` reading pages with back bar.

---

## `testimonials.html` — Testimonials

Index → `testimonial-*.html` reading pages.

---

## Redirects

| Old file | Target |
|----------|--------|
| `identity.html` | `index.html#identity` |
| `journey.html` | `index.html#journey` |
| `contact.html` | `index.html#contact` |

---

## File tree

```
ME/
├── index.html
├── my-essays.html
├── testimonials.html
├── essay-*.html
├── testimonial-*.html
├── identity.html          (redirect)
├── journey.html           (redirect)
├── contact.html           (redirect)
├── styles.css
├── script.js
├── site.js
└── assets/
```
