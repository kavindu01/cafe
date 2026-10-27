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
3. Photos: each grey-gradient block is a `.ph` placeholder. Replace it with
   `<img src="assets/img/your-photo.jpg" alt="..." style="width:100%;height:100%;object-fit:cover">`.
4. Page titles: update the `<title>` and `<meta name="description">` in each HTML file.
5. Reviews in `config.js` are sample text. Use genuine reviews with permission, or embed a Google Reviews widget.

## Forms

Without setup, the catering and contact forms open the visitor's email app with their details filled in.
To receive submissions directly, create a free form at a service such as Formspree, and paste its endpoint URL into `formEndpoint` in `config.js`.

## Loading screen

- Full pour (2.4 s) on the first page of a visit, quick pour (0.9 s) on later pages. Change `loader` in `config.js`.
- Waits for the page to finish loading, but never longer than 6 s.
- Respects the visitor's "reduce motion" setting, and hides itself if JavaScript is off.

## Deploying to GitHub Pages

Push the folder contents to a repo, then Settings → Pages → deploy from the `main` branch root.
