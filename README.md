# Manish Kumar — Portfolio Website

A one-page portfolio built with plain **HTML, CSS, and JavaScript** (no build tools,
no frameworks) — glassmorphism design, fully responsive, sections generated from
the resume content.

## Folder structure

```
manish-portfolio/
├── index.html          → all page content/sections
├── css/
│   └── style.css       → design system + layout + glass effect
├── js/
│   └── script.js       → nav menu, scroll-spy, back-to-top, contact form
├── assets/
│   ├── Manish_Kumar_Resume.pdf   → served by the "Download Resume" buttons
│   └── favicon.svg
└── README.md
```

## 1. Open it in VS Code

1. Unzip this folder anywhere on your computer.
2. Open VS Code → `File > Open Folder...` → select the `manish-portfolio` folder.
3. Install the **Live Server** extension (by Ritwick Dey) from the Extensions
   tab if you don't already have it.
4. Right-click `index.html` in the file explorer → **"Open with Live Server"**.
   Your browser opens the site at something like `http://127.0.0.1:5500`.

No `npm install` or build step needed — it's plain static files.

## 2. Customize

- **Content** — all text lives directly in `index.html`, section by section
  (Hero, About, Skills, Projects, Education, Certifications, Contact).
- **Colors / fonts** — edit the CSS variables at the top of `css/style.css`
  under `:root`.
- **Resume file** — replace `assets/Manish_Kumar_Resume.pdf` with an updated
  version any time; keep the same filename or update the `href` in
  `index.html` (search for `Manish_Kumar_Resume.pdf`, three places).
- **Contact form** — it currently opens the visitor's email app with the
  message pre-filled (no backend/server needed). If you want messages to land
  directly in an inbox without opening an email app, connect the `<form>` in
  `index.html` to a free service like [Formspree](https://formspree.io) or
  [Web3Forms](https://web3forms.com) later.

## 3. Deploy it (all free)

### Option A — Netlify (easiest, drag & drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `manish-portfolio` folder onto the page.
3. Netlify gives you a live URL in seconds. (Optional: add a custom domain
   later from the site settings.)

### Option B — Vercel
1. Push this folder to a GitHub repository (see below).
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo →
   Framework Preset: **Other** → Deploy.

### Option C — GitHub Pages (free, ties into your GitHub profile)
```bash
cd manish-portfolio
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/ManishKr16/portfolio.git
git push -u origin main
```
Then on GitHub: **Settings → Pages → Source: `main` branch, `/` (root)** →
Save. Your site will be live at `https://manishkr16.github.io/portfolio/`.

## Notes

- Icons load from Font Awesome and fonts from Google Fonts via CDN links in
  `index.html` — an internet connection is needed for those (they're already
  wired up, nothing to install).
- The "Weakness" list from the resume was left off the public site on
  purpose — that kind of self-assessment isn't something recruiters expect
  to see on a portfolio. Everything else from the resume (Objective,
  Education, Projects, Skills, Certifications, Strengths, Interests, Contact)
  is included.
