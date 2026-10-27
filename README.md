# Lantern House — café website template

Five-page static site with a coffee-pour loading screen. No build step: open `index.html` in a browser, or upload the folder to any static host (GitHub Pages, Netlify, Cloudflare Pages, cPanel).

## Files

```
index.html        Home: hero, open-now badge, explore tiles, specials, social grid, reviews
menu.html         Full menu with category tabs, dietary filters and search
catering.html     Packages, how it works, enquiry form
rewards.html      Perks, stamp-card demo, how it works, FAQ
contact.html      Hours, map, directions, contact form, careers
assets/css/styles.css   All styling (colours are the :root tokens at the top)
assets/js/config.js     ALL content: name, address, hours, menu, packages, reviews, FAQ
assets/js/main.js       Loader, shared header/footer, page behaviour (no need to edit)
assets/img/             Put your photos here
```

## Rebranding checklist

1. Edit `assets/js/config.js` — search for `REPLACE`. The header, footer, hours and every page update from this one file.
2. Colours: change `--brand`, `--accent`, `--coffee` and `--crema` in `styles.css` (light block and both dark blocks).
3. Photos: see the Photos section below.
4. Page titles: update the `<title>` and `<meta name="description">` in each HTML file.
5. Reviews in `config.js` are sample text. Use genuine reviews with permission, or embed a Google Reviews widget.

## Photos

All photos come from Unsplash and are free to use under the Unsplash License: commercial use is allowed and credit is not required (the footer shows credits anyway, under "Photo credits"). Paid "Unsplash+" photos were deliberately not used.

- Every photo is listed once in `PHOTOS` at the top of `config.js`, with its photographer and Unsplash page.
- Menu items, specials, catering packages and social tiles pick a photo with `img: "key"`.
- The home hero, explore tiles and page headers are set in `PAGE_PHOTOS`.
- Images load straight from Unsplash's image server, sized for each spot (with a sharper version for retina screens).
- If a photo ever fails to load, the coloured gradient placeholder shows instead, so the layout never breaks.

**To use your own photo:** put the file in `assets/img/`, then point the entry at it, e.g.
`hero: { id: "assets/img/our-latte.jpg" }`. Once the café has its own food photos, swap them in. Real photos of the real dishes sell better than stock.

## Forms

Without setup, the catering and contact forms open the visitor's email app with their details filled in.
To receive submissions directly, create a free form at a service such as Formspree, and paste its endpoint URL into `formEndpoint` in `config.js`.

## Loading screens

- **Home (`index.html`): coffee pour.** Full pour (2.4 s) on the first Home load of a visit, quick pour (0.9 s) when you return to Home.
- **Menu, Catering, Rewards, Contact: bouncing coffee bean** that orbits a ring around the logo (1.1 s minimum).
- Change any of these times in `loader` in `config.js`.
- Both wait for the page to finish loading, but never longer than 6 s.
- Respects the visitor's "reduce motion" setting, and hides itself if JavaScript is off.

## Deploying to GitHub Pages

Push the folder contents to a repo, then Settings → Pages → deploy from the `main` branch root.
