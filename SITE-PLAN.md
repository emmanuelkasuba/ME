# Site architecture plan — Emmanuel Kasuba

Silver/black, Oswald, full-width sections, image-integrated heroes. Profile image: `IMG_.jpg` (also used for favicons in `assets/`).

---

## Global (every page)

| Element | Purpose |
|--------|---------|
| **Header** | Full width. Logo (photo thumb + name) → `index.html`. Nav: Identity, Journey, My Essays, Testimonials, Contact, Volante' (external). Mobile drawer. |
| **Favicon** | `assets/favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png` from `IMG_.jpg`. |
| **Footer** | 4-column grid: Brand + tagline + values · Site links · Projects (README) · Connect (email, socials, ZUT). Bottom bar: quote + © year. |
| **Scripts** | `site.js` (shared footer), `script.js` (menu). |

---

## `index.html` — Home

| # | Section | Width | Content |
|---|---------|-------|---------|
| 1 | **Hero (full)** | 100vw | 50/50 split: left = full-height `IMG_.jpg` (cover); right = tagline, H1, bio, CTAs (Journey, Contact, Essays). |
| 2 | **Statement band** | 100vw | Black band, silver text: README tagline — *"Secure tech that actually serves people."* |
| 3 | **Core identity** | 100vw | 2 cards: Spiritual Compass, Technical Prowess → `identity.html`. |
| 4 | **Ventures** | 100vw | 6 project blocks from README (Genesis Secure AI, SHD AI, Hair Do, RushLink, Hot-Taks, Volante'). |
| 5 | **Testimonials preview** | 100vw | 3 quote cards → link to full page. |
| 6 | **Footer** | 100vw | Shared component. |

---

## `identity.html` — Who I am

| # | Section | Width | Content |
|---|---------|-------|---------|
| 1 | **Page hero** | 100vw | Image panel + title "Core Identity" + subtitle. |
| 2 | **Pillars** | 100vw | 2 cards: Spiritual Compass (bullets), Technical Prowess (bullets + skill tags). |
| 3 | **Expertise band** | 100vw | Black band: cybersecurity, web app security, React, threat hunting (README). |
| 4 | **Tech stack** | 100vw | C++, Python, SQL, JS, React, React Native, Next.js, Linux, Git. |
| 5 | **Core values** | 100vw | Faith · Security · Craft · Community. |
| 6 | **Footer** | 100vw | Shared. |

---

## `journey.html` — Path forward

| # | Section | Width | Content |
|---|---------|-------|---------|
| 1 | **Page hero** | 100vw | Image + "Forward Journey". |
| 2 | **Vision** | 100vw | Short-term vs long-term cards (existing copy). |
| 3 | **Learning band** | 100vw | ZUT Semester 2: Data Comms, C++, Fundamentals of Data Security. |
| 4 | **Milestones** | 100vw | Horizontal list: MVPs → Pilots → Funding → Team. |
| 5 | **Footer** | 100vw | Shared. |

---

## `testimonials.html` — Social proof

| # | Section | Width | Content |
|---|---------|-------|---------|
| 1 | **Page hero** | 100vw | Image + "Testimonials". |
| 2 | **Quotes** | 100vw | Full-width 2-column grid: Patrick, Simeon, Chiyamiko (full text). |
| 3 | **Footer** | 100vw | Shared. |

---

## `my-essays.html` — Thoughts on tech

| # | Section | Width | Content |
|---|---------|-------|---------|
| 1 | **Page hero** | 100vw | Image + "My Essays" + subtitle on tech, security, Africa, faith. |
| 2 | **Featured essay** | 100vw | Lead block: cybersecurity in emerging markets. |
| 3 | **Essay list** | 100vw | Cards: AI & auth, web security hygiene, building for Zambia, faith + engineering. |
| 4 | **CTA band** | 100vw | Collaborate → `contact.html`. |
| 5 | **Footer** | 100vw | Shared. |

---

## `contact.html` — Connect

| # | Section | Width | Content |
|---|---------|-------|---------|
| 1 | **Page hero** | 100vw | Image + "Get In Touch". |
| 2 | **Contact grid** | 100vw | Info card (email, phones, ZUT) + email actions (mailto, Gmail). |
| 3 | **Collaboration band** | 100vw | README: open to secure AI, React apps, web app security. |
| 4 | **Footer** | 100vw | Shared. |

---

## Footer data (from README + site)

**Projects:** Genesis Secure AI · SHD AI · Hair Do · RushLink · Hot-Taks · [Volante'](https://volante-2be24.web.app/)

**Connect:** [emmanuelkasuba2005@gmail.com](mailto:emmanuelkasuba2005@gmail.com) · ZUT, Zambia

**Social:** GitHub · X · LinkedIn · Instagram (existing URLs)

**Values:** Faith · Security · Craft · Community

---

## File map

```
ME/
├── SITE-PLAN.md          ← this document
├── index.html
├── identity.html
├── journey.html
├── testimonials.html
├── my-essays.html        ← new
├── contact.html
├── styles.css
├── site.js               ← shared footer
├── script.js
├── IMG_.jpg
└── assets/
    ├── favicon-16.png
    ├── favicon-32.png
    ├── favicon-48.png
    └── apple-touch-icon.png
```
