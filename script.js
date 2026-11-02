(function () {
  "use strict";
  const root = document.documentElement;
  root.classList.add("js");

  /* ---------- language ---------- */
  const titles = {
    "pt-BR": "Atos Aires Arruda · LLM & Visão Computacional",
    en: "Atos Aires Arruda · LLM & Computer Vision",
  };
  const langButtons = document.querySelectorAll("[data-set-lang]");

  function readStoredLang() {
    try { return localStorage.getItem("lang"); } catch (e) { return null; }
  }

  function setLang(lang, persist) {
    root.lang = lang;
    document.title = titles[lang];
    langButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
    if (persist) {
      try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
    }
  }

  const initial = readStoredLang() || ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt-BR" : "en");
  setLang(initial, false);
  langButtons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.setLang, true)));

  /* ---------- tabs: scrollspy + keyboard shortcuts ---------- */
  const tabs = Array.from(document.querySelectorAll(".tabs a"));
  const sections = tabs.map((t) => document.querySelector(t.getAttribute("href")));

  function markActive(id) {
    tabs.forEach((t) => t.setAttribute("aria-current", String(t.getAttribute("href") === "#" + id)));
  }

  const visible = new Map();
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
    // "Intended use" sits right above contact and shares its tab
    let best = null, bestRatio = 0;
    visible.forEach((ratio, id) => { if (ratio > bestRatio) { best = id; bestRatio = ratio; } });
    if (best) markActive(best === "uso" ? "contato" : best);
  }, { rootMargin: "-120px 0px -45% 0px", threshold: [0, .1, .25, .5, .75, 1] });
  sections.concat(document.getElementById("uso")).forEach((s) => s && spy.observe(s));

  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
    const tab = tabs.find((t) => t.dataset.key === e.key);
    if (!tab) return;
    e.preventDefault();
    const target = document.querySelector(tab.getAttribute("href"));
    target.scrollIntoView({ block: "start" });
    history.replaceState(null, "", tab.getAttribute("href"));
  });

  /* ---------- copy buttons ---------- */
  document.querySelectorAll("[data-copy]").forEach((btn) => {
    const label = btn.querySelector(".copy-label");
    const original = label.innerHTML;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        btn.classList.add("is-copied");
        label.innerHTML = '<span lang="pt-BR">Copiado!</span><span lang="en">Copied!</span>';
        setTimeout(() => { btn.classList.remove("is-copied"); label.innerHTML = original; }, 1800);
      } catch (e) {
        window.location.href = "mailto:" + btn.dataset.copy;
      }
    });
  });

  /* ---------- OCR → JSON demo ---------- */
  const out = document.getElementById("demo-json");
  const replay = document.getElementById("demo-replay");
  const fields = [
    ["document_type", "s", "receipt"],
    ["issuer", "s", "Papelaria Exemplo Ltda."],
    ["date", "s", "2026-03-14"],
    ["description", "s", "Material de escritório"],
    ["total", "n", "248.90"],
  ];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let runId = 0;

  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const fieldEl = (key) => document.querySelector('[data-field="' + key + '"]');

  function line(key, kind, value, last) {
    const v = kind === "s" ? '<span class="s">"' + esc(value) + '"</span>' : '<span class="n">' + value + "</span>";
    return '  <span class="k">"' + key + '"</span>: ' + v + (last ? "" : ",");
  }

  function renderFinal() {
    const body = fields.map((f, i) => line(f[0], f[1], f[2], i === fields.length - 1)).join("\n");
    out.innerHTML = "{\n" + body + "\n}";
    fields.forEach((f) => { const el = fieldEl(f[0]); el.classList.remove("is-hit"); el.classList.add("is-done"); });
  }

  async function play() {
    const id = ++runId;
    fields.forEach((f) => fieldEl(f[0]).classList.remove("is-hit", "is-done"));
    if (reduceMotion) { renderFinal(); return; }
    let done = "{\n";
    out.innerHTML = done + '<span class="caret"></span>';
    await sleep(500);
    for (let i = 0; i < fields.length; i++) {
      const [key, kind, value] = fields[i];
      const el = fieldEl(key);
      el.classList.add("is-hit");
      await sleep(380);
      if (id !== runId) return;
      const full = line(key, kind, value, i === fields.length - 1);
      // type the value character by character; markup is revealed with it
      const plain = full.replace(/<[^>]+>/g, "");
      for (let c = 1; c <= plain.length; c += 2) {
        if (id !== runId) return;
        out.innerHTML = done + esc(plain.slice(0, c)) + '<span class="caret"></span>';
        await sleep(16);
      }
      done += full + "\n";
      out.innerHTML = done + '<span class="caret"></span>';
      el.classList.remove("is-hit");
      el.classList.add("is-done");
      await sleep(160);
    }
    if (id !== runId) return;
    out.innerHTML = done + "}";
  }

  renderFinal();
  const demo = document.querySelector(".demo");
  const once = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) { once.disconnect(); play(); }
  }, { threshold: .4 });
  once.observe(demo);
  replay.addEventListener("click", play);
})();
