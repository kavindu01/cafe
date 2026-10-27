/* ============================================================
   Lantern House — site script
   1. Loading screen (coffee pour)
   2. Shared header, footer, ticker
   3. Shared behaviour (theme, mobile menu, reveal, page transitions)
   4. Page-specific setup, chosen by <body data-page="...">
   Content comes from assets/js/config.js — edit that, not this.
   ============================================================ */
(function () {
  "use strict";
  const S = window.SITE;
  const page = document.body.dataset.page || "home";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const fmt = (t) => { let [h, m] = t.split(":").map(Number); const ap = h >= 12 ? "pm" : "am"; h = h % 12 || 12; return `${h}:${String(m).padStart(2, "0")}${ap}`; };
  const toMin = (t) => { const [a, b] = t.split(":").map(Number); return a * 60 + b; };
  const tel = S.phone.replace(/\s/g, "");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const store = {
    get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };

  /* ==========================================================
     1. LOADING SCREEN
     ========================================================== */
  function wavePath(width, depth) {
    // A repeating wave: surface at y=0, filled down to y=depth.
    let d = "M48 0";
    for (let x = 48; x < 48 + width; x += 24) d += " q6 -3.5 12 0 t12 0";
    return { line: d, fill: `${d} V${depth} H48 Z` };
  }

  /* Hides the loader and hands over to the page. Shared by both loaders. */
  function hideLoader(el, onDone, holdMs) {
    el.classList.add("is-done");
    setTimeout(() => {
      el.classList.add("is-hidden");
      document.body.classList.remove("is-loading");
      onDone();
      setTimeout(() => el.remove(), 750);
    }, reduceMotion ? 0 : holdMs);
  }

  /* Picks the loader: coffee pour on Home, bouncing bean everywhere else. */
  function runLoader(onDone) {
    const el = $("#loader");
    if (!el) { onDone(); return; }
    el.setAttribute("role", "status");
    if (page === "home") runPourLoader(el, onDone);
    else runBeanLoader(el, onDone);
  }

  /* ---------- Loader B: coffee bean bouncing around a ring (inner pages) ---------- */
  function runBeanLoader(el, onDone) {
    const label = (NAV.find(([id]) => id === page) || [, , "page"])[2];
    el.setAttribute("aria-label", `Loading ${label}`);
    el.classList.add("loader--bean");
    el.innerHTML = `
      <div class="loader-inner">
        <div class="bean-stage" aria-hidden="true">
          <svg class="bean-ring" viewBox="0 0 160 160"><circle cx="80" cy="80" r="56"/></svg>
          <div class="bean-center"><span class="logo-mark">✺</span></div>
          <div class="bean-orbit">
            <div class="bean-arm">
              <div class="bean-hop">
                <svg class="bean" viewBox="0 0 40 52">
                  <ellipse cx="20" cy="26" rx="16" ry="22"/>
                  <path d="M20 6 C10 18 30 34 20 46"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="loader-brand">${esc(S.name)}</div>
        <div class="loader-status">Loading ${esc(label)}<span class="dots"><i>.</i><i>.</i><i>.</i></span></div>
      </div>`;

    const minMs = reduceMotion ? 250 : S.loader.pageMs;
    const start = performance.now();
    let pageLoaded = document.readyState === "complete";
    const done = () => {
      const wait = Math.max(0, minMs - (performance.now() - start));
      setTimeout(() => hideLoader(el, onDone, 150), wait);
    };
    if (pageLoaded) done();
    else {
      let fired = false;
      const once = () => { if (!fired) { fired = true; done(); } };
      window.addEventListener("load", once);
      setTimeout(once, 6000); // never hang on a slow asset
    }
  }

  /* ---------- Loader A: coffee pour (Home page) ---------- */
  function runPourLoader(el, onDone) {
    const firstVisit = !store.get("lh-home-visited");
    store.set("lh-home-visited", "1");
    const duration = reduceMotion ? 250 : (firstVisit ? S.loader.homeFirstMs : S.loader.homeRepeatMs);
    const w = wavePath(168, 90);

    el.setAttribute("aria-label", `Loading ${S.name}`);
    el.innerHTML = `
      <div class="loader-inner">
        <svg class="pour-svg" viewBox="0 0 220 230" aria-hidden="true">
          <defs>
            <clipPath id="cupClip"><path d="M90 128 H174 L166 190 Q164 200 152 200 H112 Q100 200 98 190 Z"/></clipPath>
          </defs>
          <!-- steam (appears when the cup is full) -->
          <g class="steam">
            <path d="M116 118 q-6 -8 0 -16 t0 -16"/>
            <path d="M132 114 q-6 -8 0 -16 t0 -16"/>
            <path d="M148 118 q-6 -8 0 -16 t0 -16"/>
          </g>
          <!-- saucer -->
          <ellipse class="saucer" cx="132" cy="206" rx="62" ry="7"/>
          <!-- cup back + coffee -->
          <path class="cup-fill" d="M90 128 H174 L166 190 Q164 200 152 200 H112 Q100 200 98 190 Z"/>
          <g clip-path="url(#cupClip)">
            <g id="liquid" transform="translate(0 200)">
              <g class="wave">
                <path class="coffee" d="${w.fill}"/>
                <path d="${w.line}" fill="none" stroke="var(--crema)" stroke-width="4"/>
              </g>
            </g>
          </g>
          <!-- cup outline + handle -->
          <path class="stroke" d="M90 128 H174 L166 190 Q164 200 152 200 H112 Q100 200 98 190 Z"/>
          <path class="stroke" d="M171 142 Q194 144 190 164 Q186 180 168 178"/>
          <!-- pouring stream -->
          <g id="stream" opacity="0">
            <line class="stream" x1="132" y1="76" x2="132" y2="200"/>
            <line class="stream-flow" x1="132" y1="76" x2="132" y2="200"/>
          </g>
          <!-- kettle -->
          <g class="kettle">
            <path class="kettle-body stroke" d="M42 92 H96 Q102 92 100 84 L92 48 Q90 42 84 42 H54 Q48 42 46 48 L38 84 Q36 92 42 92 Z"/>
            <path class="stroke" d="M58 42 Q69 31 80 42"/>
            <circle class="stroke" cx="69" cy="32" r="3"/>
            <path class="stroke" d="M44 52 Q22 58 30 82"/>
            <path class="stroke" d="M98 80 Q118 78 116 58 Q115 46 124 48 L132 54"/>
          </g>
        </svg>
        <div class="loader-brand">${esc(S.name)}</div>
        <div class="loader-bar"><span id="loaderBar"></span></div>
        <div class="loader-status" id="loaderStatus">Grinding beans</div>
      </div>`;

    const liquid = $("#liquid", el), stream = $("#stream", el), lines = $$("#stream line", el);
    const bar = $("#loaderBar", el), status = $("#loaderStatus", el);
    const EMPTY = 200, FULL = 138, DELAY = reduceMotion ? 0 : 300;
    let pageLoaded = document.readyState === "complete";
    window.addEventListener("load", () => { pageLoaded = true; });
    const start = performance.now();
    const ease = (t) => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    function frame(now) {
      const elapsed = now - start;
      const t = Math.min(Math.max((elapsed - DELAY) / duration, 0), 1);
      const ready = pageLoaded || elapsed > 6000; // never hang on a slow asset
      const p = ease(t) * (ready ? 1 : 0.92);
      const level = EMPTY - p * (EMPTY - FULL);

      liquid.setAttribute("transform", `translate(0 ${level.toFixed(1)})`);
      lines.forEach((l) => l.setAttribute("y2", level.toFixed(1)));
      stream.setAttribute("opacity", elapsed > DELAY ? "1" : "0");
      bar.style.width = `${Math.round(p * 100)}%`;
      status.textContent = p < .25 ? "Grinding beans" : p < .85 ? `Pouring · ${Math.round(p * 100)}%` : p < 1 ? "Almost ready" : "Enjoy";

      if (t >= 1 && ready) finish();
      else requestAnimationFrame(frame);
    }

    function finish() {
      stream.style.transition = "opacity .25s"; stream.setAttribute("opacity", "0");
      hideLoader(el, onDone, firstVisit ? 700 : 250);
    }
    requestAnimationFrame(frame);
  }

  /* ==========================================================
     2. SHARED HEADER / FOOTER
     ========================================================== */
  const NAV = [
    ["home", "index.html", "Home"], ["menu", "menu.html", "Menu"], ["catering", "catering.html", "Catering"],
    ["rewards", "rewards.html", "Rewards"], ["contact", "contact.html", "Contact"]
  ];
  const navLinks = NAV.map(([id, href, label]) =>
    `<a href="${href}"${id === page ? ' aria-current="page"' : ""}>${label}</a>`);

  function groupedHours() {
    const order = [1, 2, 3, 4, 5, 6, 0], short = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], out = [];
    order.forEach((d) => {
      const h = S.hours[d], key = h ? h.join("-") : "closed", last = out[out.length - 1];
      if (last && last.key === key) last.to = d; else out.push({ key, from: d, to: d, h });
    });
    return out.map((g) => {
      const days = g.from === g.to ? short[g.from] : `${short[g.from]} – ${short[g.to]}`;
      return `${days}: ${g.h ? `${fmt(g.h[0])} – ${fmt(g.h[1])}` : "Closed"}`;
    });
  }

  function buildChrome() {
    const ticker = S.announcement.map((a) => `<span>${esc(a)}</span>`).join("");
    const header = $("#site-header");
    if (header) header.outerHTML = `
      <div class="ticker" aria-label="Announcements"><div class="ticker-track">${ticker}${ticker}</div></div>
      <header class="site-header">
        <div class="wrap nav">
          <a href="index.html" class="logo"><span class="logo-mark" aria-hidden="true">✺</span><span>${esc(S.name)}</span></a>
          <nav aria-label="Main"><ul class="nav-links">${navLinks.map((l) => `<li>${l}</li>`).join("")}</ul></nav>
          <div class="nav-actions">
            <button class="icon-btn" id="themeBtn" aria-label="Toggle dark mode">◐</button>
            <a href="contact.html" class="btn btn-primary">Find us</a>
            <button class="icon-btn menu-toggle" id="menuBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">☰</button>
          </div>
        </div>
        <nav class="mobile-menu" id="mobileMenu" aria-label="Mobile">${navLinks.join("")}</nav>
      </header>`;

    const footer = $("#site-footer");
    if (footer) footer.outerHTML = `
      <footer class="site-footer">
        <div class="wrap">
          <div class="foot-grid">
            <div>
              <a href="index.html" class="logo" style="color:#fff"><span class="logo-mark" aria-hidden="true">✺</span><span>${esc(S.name)}</span></a>
              <p style="margin-top:1rem;font-size:.92rem;max-width:300px">${esc(S.tagline)}. Walk-ins welcome, 7 days.</p>
            </div>
            <div><h4>Explore</h4><ul>${NAV.map(([, h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>
            <div><h4>Hours</h4><ul>${groupedHours().map((g) => `<li>${g}</li>`).join("")}</ul></div>
            <div><h4>Contact</h4><ul>
              <li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li>
              <li><a href="tel:${tel}">${esc(S.phone)}</a></li>
              <li>${esc(S.address)}</li>
              <li><a href="${esc(S.instagram)}" target="_blank" rel="noopener">${esc(S.instagramHandle)}</a></li>
            </ul></div>
          </div>
          <div class="foot-bottom">
            <span>© ${new Date().getFullYear()} ${esc(S.name)}. All rights reserved.</span>
            <span>Website by Arcane Technologies</span>
          </div>
        </div>
      </footer>
      <a class="chat-fab" href="sms:${tel}">💬 Text us</a>`;
  }

  /* ==========================================================
     3. SHARED BEHAVIOUR
     ========================================================== */
  function initTheme() {
    const root = document.documentElement;
    try { const t = localStorage.getItem("lh-theme"); if (t) root.dataset.theme = t; } catch (e) {}
    const btn = $("#themeBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("lh-theme", root.dataset.theme); } catch (e) {}
    });
  }

  function initMobileMenu() {
    const btn = $("#menuBtn"), menu = $("#mobileMenu");
    if (!btn || !menu) return;
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      btn.textContent = open ? "✕" : "☰";
    });
  }

  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: .12 });
    els.forEach((el) => io.observe(el));
  }

  function initPageTransitions() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const href = a.getAttribute("href") || "";
      if (a.target || !/\.html(#.*)?$/.test(href) || a.origin !== location.origin) return;
      if (a.pathname === location.pathname) return; // same page: let anchors work normally
      e.preventDefault();
      document.body.classList.add("page-leave");
      setTimeout(() => { location.href = a.href; }, reduceMotion ? 0 : 220);
    });
    window.addEventListener("pageshow", (e) => { if (e.persisted) document.body.classList.remove("page-leave", "is-loading"); });
  }

  /* ==========================================================
     4. PAGE SETUP
     ========================================================== */
  function openStatus() {
    const now = new Date(), today = now.getDay(), mins = now.getHours() * 60 + now.getMinutes(), h = S.hours[today];
    if (h && mins >= toMin(h[0]) && mins < toMin(h[1])) return { open: true, text: `Open now · until ${fmt(h[1])}` };
    if (h && mins < toMin(h[0])) return { open: false, text: `Closed · opens today ${fmt(h[0])}` };
    let n = 1; while (n < 8 && !S.hours[(today + n) % 7]) n++;
    const d = (today + n) % 7;
    return { open: false, text: S.hours[d] ? `Closed · opens ${n === 1 ? "tomorrow" : DAY[d]} ${fmt(S.hours[d][0])}` : "Closed" };
  }

  function renderStatus() {
    const st = openStatus();
    $$("[data-status]").forEach((el) => {
      $(".dot", el).classList.toggle("open", st.open);
      $(".status-text", el).textContent = st.text;
    });
  }

  function renderSpecials(target) {
    target.innerHTML = S.specials.map((s) => `
      <article class="card reveal">
        <div class="card-media"><div class="ph ${s.ph}">Photo</div></div>
        <div class="card-body"><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p>
          <div class="card-foot"><span class="price">${esc(s.price)}</span><span class="tag">${esc(s.tag)}</span></div>
        </div>
      </article>`).join("");
  }

  function renderReviews() {
    const track = $("#reviewTrack"), dotsWrap = $("#reviewDots");
    if (!track) return;
    track.innerHTML = S.reviews.map((r) => `
      <div class="review"><div class="review-inner"><div class="stars" aria-label="5 stars">★★★★★</div>
      <blockquote>${esc(r.text)}</blockquote><cite>${esc(r.who)}</cite></div></div>`).join("");
    dotsWrap.innerHTML = S.reviews.map((_, i) => `<button aria-label="Show review ${i + 1}"></button>`).join("");
    const dots = $$("button", dotsWrap);
    let i = 0, timer;
    const go = (n) => { i = n; track.style.transform = `translateX(-${n * 100}%)`; dots.forEach((d, j) => d.classList.toggle("active", j === n)); };
    const auto = () => { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => go((i + 1) % S.reviews.length), 6000); };
    dots.forEach((d, n) => d.addEventListener("click", () => { go(n); auto(); }));
    go(0); auto();
  }

  function renderHoursList(target) {
    const today = new Date().getDay();
    target.innerHTML = [1, 2, 3, 4, 5, 6, 0].map((d) => {
      const h = S.hours[d];
      return `<li class="${d === today ? "today" : ""}"><span>${DAY[d]}</span><span>${h ? `${fmt(h[0])} – ${fmt(h[1])}` : "Closed"}</span></li>`;
    }).join("");
  }

  function initForms() {
    $$("form[data-form]").forEach((form) => {
      const msg = $(".form-msg", form);
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const show = (text) => { msg.textContent = text; msg.classList.add("show"); };
        if (S.formEndpoint) {
          try {
            const res = await fetch(S.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
            if (!res.ok) throw new Error(res.status);
            form.reset();
            show("Thanks! We've received your message and will reply within one business day.");
          } catch (err) {
            show(`Sorry, that didn't send. Please email us at ${S.email}.`);
          }
          return;
        }
        // No endpoint set: open the visitor's email app with the details filled in.
        const lines = [];
        $$("[name]", form).forEach((f) => {
          const label = $(`label[for="${f.id}"]`, form);
          if (f.value) lines.push(`${label ? label.textContent : f.name}: ${f.value}`);
        });
        const subject = `${form.dataset.subject || "Website enquiry"} - ${data.get("name") || ""}`;
        location.href = `mailto:${S.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
        show("Your email app should open with your details filled in. Just press send.");
      });
    });
  }

  const pages = {
    home() {
      renderStatus();
      renderSpecials($("#specialsGrid"));
      $("#socialGrid").innerHTML = S.social.map((p) => `
        <a class="social-tile reveal" href="${esc(S.instagram)}" target="_blank" rel="noopener">
          <div class="ph ${p.ph}"></div><div class="overlay">${esc(p.cap)}</div></a>`).join("");
      $$("[data-insta]").forEach((a) => { a.href = S.instagram; a.textContent = S.instagramHandle; });
      renderReviews();
      const h = S.hours[new Date().getDay()];
      $("#todayHours").textContent = h ? `Today: ${fmt(h[0])} – ${fmt(h[1])}` : "Closed today";
    },

    menu() {
      const tabs = $("#menuTabs"), panel = $("#menuPanel"), search = $("#menuSearch"), empty = $("#menuEmpty");
      const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const diets = new Set();
      let active = "all";
      const fromHash = location.hash.slice(1);
      if (S.menu.some((c) => slug(c.category) === fromHash)) active = fromHash;

      tabs.innerHTML = [`<button class="tab" role="tab" data-cat="all">All</button>`]
        .concat(S.menu.map((c) => `<button class="tab" role="tab" data-cat="${slug(c.category)}">${esc(c.category)}</button>`)).join("");

      function render() {
        const q = search.value.trim().toLowerCase();
        let shown = 0;
        panel.innerHTML = S.menu.filter((c) => active === "all" || slug(c.category) === active).map((c) => {
          const items = c.items.filter((it) =>
            [...diets].every((d) => it.diet.includes(d)) &&
            (!q || `${it.name} ${it.desc}`.toLowerCase().includes(q)));
          shown += items.length;
          if (!items.length) return "";
          return `<div class="menu-panel reveal in" id="${slug(c.category)}" style="margin-bottom:48px">
            <h2>${esc(c.category)}</h2>${c.note ? `<p class="menu-note">${esc(c.note)}</p>` : ""}
            <div class="menu-list">${items.map((it) => `
              <div class="menu-item">
                <div class="menu-item-top"><h3>${esc(it.name)}${it.diet.length ? `<span class="diet">${it.diet.map((d) => `<span>${d}</span>`).join("")}</span>` : ""}</h3>
                <span class="leader"></span><span class="price">${esc(it.price)}</span></div>
                ${it.desc ? `<p>${esc(it.desc)}</p>` : ""}
              </div>`).join("")}</div></div>`;
        }).join("");
        empty.style.display = shown ? "none" : "block";
        $$(".tab", tabs).forEach((t) => t.setAttribute("aria-selected", t.dataset.cat === active));
      }

      tabs.addEventListener("click", (e) => {
        const b = e.target.closest(".tab"); if (!b) return;
        active = b.dataset.cat;
        history.replaceState(null, "", active === "all" ? location.pathname : `#${active}`);
        render();
      });
      $$(".chip").forEach((c) => c.addEventListener("click", () => {
        const d = c.dataset.diet, on = !diets.has(d);
        on ? diets.add(d) : diets.delete(d);
        c.setAttribute("aria-pressed", on);
        render();
      }));
      search.addEventListener("input", render);
      render();
    },

    catering() {
      $("#packages").innerHTML = S.catering.map((p) => `
        <div class="package reveal${p.featured ? " featured" : ""}">
          ${p.featured ? '<span class="badge">Most popular</span>' : ""}
          <h3>${esc(p.name)}</h3><div class="price">${esc(p.price)}</div><div class="serves">${esc(p.serves)}</div>
          <ul>${p.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
          <a href="#enquire" class="btn ${p.featured ? "btn-primary" : "btn-ghost"}" data-pick="${esc(p.name)}">Enquire about this</a>
        </div>`).join("");
      const select = $("#c-package");
      select.innerHTML = `<option value="">Not sure yet</option>` + S.catering.map((p) => `<option>${esc(p.name)}</option>`).join("");
      $$("[data-pick]").forEach((b) => b.addEventListener("click", () => { select.value = b.dataset.pick; }));
      const min = new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10); // 48h notice
      $("#c-date").min = min;
    },

    rewards() {
      $$("[data-join]").forEach((a) => { a.href = S.loyaltyLink; });
      const wrap = $("#stamps"), msg = $("#stampMsg");
      const update = () => {
        const c = $$(".stamp.on", wrap).length;
        msg.textContent = c === 9 ? "🎉 Your next coffee is on us!" : `${9 - c} more until your free coffee`;
      };
      for (let i = 0; i < 10; i++) {
        const b = document.createElement("button");
        b.className = "stamp" + (i === 9 ? " free" : "");
        b.textContent = i === 9 ? "FREE" : "☕";
        b.setAttribute("aria-label", i === 9 ? "Free coffee" : `Stamp ${i + 1}`);
        if (i < 9) b.addEventListener("click", () => { b.classList.toggle("on"); b.setAttribute("aria-pressed", b.classList.contains("on")); update(); });
        else b.disabled = true;
        wrap.appendChild(b);
      }
      update();
      $("#faq").innerHTML = S.faq.map((f) => `<details class="reveal"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join("");
    },

    contact() {
      renderStatus();
      const q = encodeURIComponent(S.address);
      $("#suburb").textContent = S.suburb;
      $("#addressText").textContent = S.address;
      renderHoursList($("#hoursList"));
      $("#directionsBtn").href = `https://www.google.com/maps/search/?api=1&query=${q}`;
      $("#mapFrame").src = `https://www.google.com/maps?q=${q}&output=embed`;
      $("#callBtn").href = `tel:${tel}`;
      $$("[data-email]").forEach((a) => { a.href = `mailto:${S.email}`; a.textContent = S.email; });
    }
  };

  /* ---------- Boot ---------- */
  document.title = document.title.replace("Lantern House", S.name);
  buildChrome();
  initTheme();
  initMobileMenu();
  initPageTransitions();
  initForms();
  if (pages[page]) pages[page]();
  runLoader(initReveal);
})();
