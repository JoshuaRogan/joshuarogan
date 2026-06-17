# joshuarogan.com

My personal website — rebuilt as a single, dependency-free static page.

Everything lives in [`index.html`](index.html): markup, CSS, and a little JavaScript,
with fonts loaded from Google Fonts. No build step, no framework.

## Run locally

Open `index.html` directly in a browser, or serve it:

```sh
npm start        # runs `npx serve .`
# or
python3 -m http.server
```

## Deploy

It's a static site — publish the repo root. The included
[`netlify.toml`](netlify.toml) sets `publish = "."` with no build command, so Netlify
(or any static host) serves `index.html` as-is.

## Structure

- `index.html` — the whole site (hero, projects, work experience, skills, footer)
- `netlify.toml` — static deploy config
- `package.json` — convenience `start`/`dev` scripts only
