# UI/UX review & implemented fixes

## Review summary

| Area | Finding | Action taken |
|------|---------|--------------|
| **Favicon** | PNG links only; no root `favicon.ico`, manifest, or theme color | Full favicon stack + `site.webmanifest` |
| **Accessibility** | No skip link, weak focus states, empty logo `alt` | Skip link, `:focus-visible`, logo alt, `<main>` landmark |
| **Navigation** | Many items; mobile menu no backdrop; external links same as internal | Backdrop overlay, Escape to close, external link styling |
| **Visual hierarchy** | Section rhythm OK; footer hover dims links (confusing) | Footer hover brightens; list rows subtle hover |
| **Mobile** | Blog grid rule accidentally applied to `.text-list > li` | Fixed responsive selectors |
| **Motion** | Animations always on | `prefers-reduced-motion` respected |
| **Header** | Fixed bar identical when scrolling | `header--scrolled` subtle shadow |
| **Blog** | Entries lack hover affordance | Row hover + title feedback |
| **SEO** | Missing meta descriptions | Per-page `description` meta |

## Essay reading mode (added)

- Dedicated article page: `essay-security-first-product-design.html`
- Reading header with **← Back to thoughts** (no full nav distraction)
- Draft posts on index no longer use broken `#` links

## Remaining opportunities (future)

- Open Graph images for social previews
- More published essay pages as drafts are finished
