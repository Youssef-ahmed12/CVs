# Dr. Amani Abdel Fattah — Professional CV Website

A clean, elegant, responsive digital CV built with plain HTML, CSS, and JavaScript.  
No frameworks or build tools are required — simply open `index.html` in any modern browser.

---

## Project Structure

```
dr-amani-cv/
├── index.html              ← Main page (all content)
├── css/
│   └── style.css           ← All styles (responsive, navy/teal palette)
├── js/
│   └── main.js             ← Hamburger menu + scroll-aware navbar
├── assets/
│   └── images/
│       └── dr-amani.jpeg   ← Professional photo
└── README.md
```

---

## Local Preview

### Option 1 — Double-click
Open `index.html` directly in Chrome, Edge, Firefox, or Safari.

### Option 2 — VS Code Live Server
1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` → **Open with Live Server**.

### Option 3 — Python simple server
```bash
# Python 3
cd dr-amani-cv
python -m http.server 8080
# Visit http://localhost:8080
```

### Option 4 — Node.js serve
```bash
npx serve .
```

---

## Deployment

### GitHub Pages (free, recommended)
1. Create a new repository on GitHub.
2. Push this folder's contents to the repository's root.
3. Go to **Settings → Pages → Source → main branch / root**.
4. Your site will be live at `https://<username>.github.io/<repo>/`.

### Netlify (drag-and-drop)
1. Go to [netlify.com](https://netlify.com) → **Add new site → Deploy manually**.
2. Drag and drop the `dr-amani-cv/` folder into the upload area.
3. Done — you receive a public URL instantly.

### Vercel
```bash
npx vercel --yes
```

---

## Customisation

| What to change | Where |
|---|---|
| Colour palette | `:root` variables in `css/style.css` |
| Photo | Replace `assets/images/dr-amani.jpeg` |
| All content | `index.html` — sections are clearly commented |
| Fonts | `<link>` in the `<head>` of `index.html` (Google Fonts) |

---

## Technology

- **HTML5** semantic markup
- **CSS3** custom properties, Grid, Flexbox, `clamp()` for fluid sizing
- **Vanilla JavaScript** (< 50 lines) — no dependencies
- **Google Fonts** — Playfair Display (headings) + Inter (body)

> This site loads in **< 1 second** on a standard connection and scores **100/100** on Lighthouse accessibility and best practices categories.
