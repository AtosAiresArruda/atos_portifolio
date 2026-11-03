(function () {
  "use strict";
  const root = document.documentElement;
  root.classList.add("js");

  /* ---------- language ---------- */
  // each page carries its own titles; the inline <head> script already set html.lang to avoid a flash
  const titles = { "pt-BR": root.dataset.titlePt, en: root.dataset.titleEn };
  const langButtons = document.querySelectorAll("[data-set-lang]");

  function readStoredLang() {
    try { return localStorage.getItem("lang"); } catch (e) { return null; }
  }

  function setLang(lang, persist) {
    root.lang = lang;
    if (titles[lang]) document.title = titles[lang];
    langButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
    if (persist) {
      try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
    }
  }

  const initial = readStoredLang() || ((navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt-BR" : "en");
  setLang(initial, false);
  langButtons.forEach((b) => b.addEventListener("click", () => setLang(b.dataset.setLang, true)));

  /* ---------- session tabs: contact lights up when the footer is in view ---------- */
  const tabs = Array.from(document.querySelectorAll(".tabs a"));
  const pageTab = tabs.find((t) => t.classList.contains("is-active"));
  const contactTab = tabs.find((t) => t.hasAttribute("data-contact"));
  const contact = document.getElementById("contato");

  if (contact && contactTab) {
    new IntersectionObserver((entries) => {
      const inView = entries.some((e) => e.isIntersecting);
      contactTab.classList.toggle("is-active", inView);
      if (pageTab) pageTab.classList.toggle("is-active", !inView);
    }, { rootMargin: "0px 0px -35% 0px" }).observe(contact);
  }

  /* ---------- keyboard shortcuts 1–4 ---------- */
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
    const tab = tabs.find((t) => t.dataset.key === e.key);
    if (!tab) return;
    e.preventDefault();
    const href = tab.getAttribute("href");
    if (href.startsWith("#")) {
      document.querySelector(href).scrollIntoView({ block: "start" });
      history.replaceState(null, "", href);
    } else {
      window.location.href = tab.href;
    }
  });

  /* ---------- table of contents: scrollspy ---------- */
  const tocLinks = Array.from(document.querySelectorAll(".toc a"));
  if (tocLinks.length) {
    const visible = new Map();
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
      // the most specific visible target wins: a project inside a group beats the group itself
      let best = null, bestRatio = 0;
      tocLinks.forEach((a) => {
        const id = a.getAttribute("href").slice(1);
        const r = visible.get(id) || 0;
        if (r > 0 && (r >= bestRatio || a.closest(".toc__sub"))) { best = id; bestRatio = r; }
      });
      if (best) tocLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + best));
    }, { rootMargin: "-120px 0px -55% 0px", threshold: [0, .1, .25, .5, .75, 1] });
    tocLinks.forEach((a) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) spy.observe(target);
    });
  }

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

  /* ---------- build log (how-it-was-built page only) ---------- */
  const log = document.getElementById("build-log");
  const data = window.COMO_FOI_CRIADO;
  if (log && data) {
    const repo = "https://github.com/AtosAiresArruda/atos_portifolio/commit/";
    const slot = (name) => log.querySelector('[data-log="' + name + '"]');

    function el(tag, cls, text) {
      const node = document.createElement(tag);
      if (cls) node.className = cls;
      if (text != null) node.textContent = text;
      return node;
    }
    // a value is either one string or { pt, en }
    function bi(value) {
      const frag = document.createDocumentFragment();
      if (value == null || typeof value === "string") { frag.append(value || ""); return frag; }
      const pt = el("span", null, value.pt); pt.lang = "pt-BR";
      const en = el("span", null, value.en || value.pt); en.lang = "en";
      frag.append(pt, en);
      return frag;
    }
    function date(iso) {
      const [y, m, d] = iso.split("-");
      return bi({ pt: d + "/" + m + "/" + y, en: iso });
    }
    function fact(dl, label, value) {
      const row = el("div");
      const dt = el("dt"); dt.append(bi(label));
      const dd = el("dd"); dd.append(value instanceof Node ? value : bi(value));
      row.append(dt, dd);
      dl.append(row);
    }
    function commitLink(hash) {
      const a = el("a", null, hash);
      a.href = repo + hash;
      a.target = "_blank";
      a.rel = "noopener";
      const code = el("code");
      code.append(a);
      return code;
    }

    const a = data.agente;
    const agent = slot("agent");
    fact(agent, { pt: "Provedora", en: "Provider" }, a.provedora);
    fact(agent, { pt: "Agente de codificação", en: "Coding agent" }, a.agenteCodificacao);
    fact(agent, { pt: "Esforço", en: "Effort" }, a.esforco);
    fact(agent, { pt: "Ferramenta", en: "Tool" }, a.ferramenta);
    fact(agent, { pt: "Ambiente", en: "Environment" }, a.ambiente);
    fact(agent, { pt: "Modo", en: "Mode" }, a.modo);
    fact(agent, { pt: "Início", en: "Started" }, date(a.inicio));

    const skills = slot("skills");
    if (!data.skills.length) {
      const p = el("p", "log-empty");
      p.append(bi({ pt: "Nenhuma skill foi invocada até agora.", en: "No skills have been invoked so far." }));
      skills.append(p);
    } else {
      const dl = el("dl", "facts");
      data.skills.forEach((s) => {
        const desc = el("span");
        desc.append(bi(s.descricao));
        if (s.url) {
          const link = el("a", null, s.url.replace(/^https?:\/\/|\/$/g, ""));
          link.href = s.url;
          link.target = "_blank";
          link.rel = "noopener";
          desc.append(" ", link);
        }
        fact(dl, s.nome, desc);
      });
      skills.append(dl);
    }

    const list = slot("prompts");
    data.prompts.forEach((p, i) => {
      const n = String(i + 1);
      const item = el("li", "group prompt");
      item.id = "prompt-" + n;
      const head = el("header", "group__head");
      head.append(el("h3", "prompt__num", "#" + n));
      if (p.data) {
        const when = el("time", "group__when"); when.dateTime = p.data; when.append(date(p.data));
        head.append(when);
      }
      // no lang attribute here: the language toggle hides [lang] elements, and the prompt is always shown verbatim
      const text = el("blockquote", "prompt__text", p.prompt);
      const facts = el("dl", "facts");
      if (p.skills && p.skills.length) {
        const tags = el("ul", "tags tags--sm");
        p.skills.forEach((s) => tags.append(el("li", "tag tag--llm", s)));
        fact(facts, "Skills", tags);
      }
      if (p.resultado) fact(facts, { pt: "Resultado", en: "Result" }, p.resultado);
      const commit = !p.commit ? bi({ pt: "pendente", en: "pending" })
        : /^[0-9a-f]{7,40}$/.test(p.commit) ? commitLink(p.commit) : p.commit;
      fact(facts, "Commit", commit);
      item.append(head, text, facts);
      list.append(item);
    });

    const last = data.prompts[data.prompts.length - 1];
    const summary = slot("summary");
    fact(summary, "Prompts", String(data.prompts.length));
    fact(summary, "Skills", String(data.skills.length));
    if (last && last.data) fact(summary, { pt: "Último prompt", en: "Latest prompt" }, date(last.data));
  }

  /* ---------- OCR → JSON demo (case study page only) ---------- */
  const out = document.getElementById("demo-json");
  if (!out) return;
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
