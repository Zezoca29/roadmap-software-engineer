/* =====================================================================
   STARK ENGINEERING HUD — script.js
   Vanilla JS only. Modular, self-contained, motion-aware.
   ===================================================================== */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* -------------------------------------------------------------------
     BOOT SEQUENCE — simulated system initialization
     ------------------------------------------------------------------- */
  const Boot = (() => {
    const lines = [
      "INITIALIZING NEURAL CORE ...... <b>OK</b>",
      "MOUNTING ARCHITECTURE MODULES . <b>OK</b>",
      "CALIBRATING DISTRIBUTED MESH .. <b>OK</b>",
      "LOADING OBSERVABILITY STACK ... <b>OK</b>",
      "ENGAGING HUD INTERFACE ........ <b>OK</b>",
      "SYSTEM ONLINE."
    ];
    function run() {
      const boot = $("#boot");
      const log  = $("#boot-log");
      const bar  = $("#boot-bar");
      if (!boot) return;

      if (reduceMotion) { log.innerHTML = lines.join("<br>"); bar.style.width = "100%"; finish(boot, 350); return; }

      let i = 0;
      const step = () => {
        if (i < lines.length) {
          log.innerHTML += (i ? "<br>" : "") + lines[i];
          bar.style.width = ((i + 1) / lines.length * 100) + "%";
          i++;
          setTimeout(step, 240 + Math.random() * 120);
        } else {
          finish(boot, 480);
        }
      };
      setTimeout(step, 280);
    }
    function finish(boot, delay) {
      setTimeout(() => {
        boot.classList.add("done");
        document.body.classList.add("booted");
        setTimeout(() => boot.remove(), 800);
      }, delay);
    }
    return { run };
  })();

  /* -------------------------------------------------------------------
     PARTICLE NETWORK — nodes + proximity links (the "neural mesh")
     ------------------------------------------------------------------- */
  const Particles = (() => {
    const canvas = $("#particles");
    if (!canvas || reduceMotion) return { init() {} };
    const ctx = canvas.getContext("2d");
    let w, h, nodes = [], raf;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const target = Math.min(90, Math.floor((w * h) / 22000));
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 229, 255, 0.55)";
        ctx.fill();
      }
      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 17000) {
            const o = (1 - d2 / 17000) * 0.28;
            ctx.strokeStyle = `rgba(64, 168, 255, ${o})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        // link to cursor
        const a = nodes[i];
        const mdx = a.x - mouse.x, mdy = a.y - mouse.y;
        const md2 = mdx * mdx + mdy * mdy;
        if (md2 < 26000) {
          const o = (1 - md2 / 26000) * 0.5;
          ctx.strokeStyle = `rgba(0, 229, 255, ${o})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    }
    function init() {
      resize(); draw();
      window.addEventListener("resize", resize);
      window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
      window.addEventListener("mouseout", () => { mouse.x = -9999; mouse.y = -9999; });
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) cancelAnimationFrame(raf); else draw();
      });
    }
    return { init };
  })();

  /* -------------------------------------------------------------------
     CURSOR GLOW
     ------------------------------------------------------------------- */
  const CursorGlow = () => {
    const glow = $(".cursor-glow");
    if (!glow || reduceMotion || matchMedia("(pointer: coarse)").matches) return;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove", e => { tx = e.clientX; ty = e.clientY; glow.style.opacity = "1"; });
    (function lerp() {
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      requestAnimationFrame(lerp);
    })();
  };

  /* -------------------------------------------------------------------
     NAVBAR — shrink on scroll + mobile toggle + active section
     ------------------------------------------------------------------- */
  const Nav = () => {
    const nav = $(".nav");
    const links = $(".nav-links");
    const toggle = $(".nav-toggle");
    window.addEventListener("scroll", () => {
      nav.classList.toggle("shrink", window.scrollY > 40);
    }, { passive: true });
    toggle?.addEventListener("click", () => links.classList.toggle("open"));
    $$(".nav-links a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  };

  /* -------------------------------------------------------------------
     SCROLL REVEAL
     ------------------------------------------------------------------- */
  const Reveal = () => {
    const els = $$(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in")); return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    els.forEach(e => io.observe(e));
  };

  /* -------------------------------------------------------------------
     STAT COUNTERS
     ------------------------------------------------------------------- */
  const Counters = () => {
    const nums = $$("[data-count]");
    if (!nums.length) return;
    const animate = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      if (reduceMotion) { el.firstChild.textContent = target + ""; return; }
      let cur = 0; const dur = 1400, t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.firstChild.textContent = Math.round(target * eased) + "";
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    nums.forEach(n => io.observe(n));
  };

  /* -------------------------------------------------------------------
     LIVE CLOCK in navbar status
     ------------------------------------------------------------------- */
  const Clock = () => {
    const el = $("#sys-clock");
    if (!el) return;
    const tick = () => {
      const d = new Date();
      el.textContent = d.toTimeString().slice(0, 8);
    };
    tick(); setInterval(tick, 1000);
  };

  /* -------------------------------------------------------------------
     STUDY MODAL — opens when clicking a .topic tag
     ------------------------------------------------------------------- */
  const StudyModal = (() => {
    const TAB_ICONS = { links: "🌐", videos: "▶", books: "📖", blogs: "✍" };
    let currentData = null;

    function open(topicKey) {
      const data = (window.STUDY_DATA || {})[topicKey];
      if (!data) return;
      currentData = data;

      document.getElementById("study-phase-tag").textContent  = data.phase;
      document.getElementById("study-topic-title").textContent = topicKey;
      document.getElementById("study-topic-desc").textContent  = data.description;

      /* focus / hot tags */
      const focusEl = document.getElementById("study-focus-tags");
      focusEl.innerHTML = "";
      if (data.hot2026) {
        const hot = document.createElement("span");
        hot.className = "study-hot-badge";
        hot.textContent = "🔥 HOT 2026";
        focusEl.appendChild(hot);
      }
      (data.focus || []).forEach(f => {
        const tag = document.createElement("span");
        tag.className = "study-focus-tag";
        tag.textContent = f;
        focusEl.appendChild(tag);
      });

      /* reset to first tab */
      document.querySelectorAll(".study-tab").forEach(t => t.classList.remove("active"));
      const firstTab = document.querySelector(".study-tab[data-tab='links']");
      if (firstTab) firstTab.classList.add("active");
      renderTab("links");

      const overlay = document.getElementById("study-overlay");
      overlay.setAttribute("aria-hidden", "false");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";

      /* focus trap start */
      document.getElementById("study-close").focus();
    }

    function close() {
      const overlay = document.getElementById("study-overlay");
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      currentData = null;
    }

    function renderTab(tab) {
      const content = document.getElementById("study-content");
      const items   = (currentData || {})[tab] || [];
      const icon    = TAB_ICONS[tab] || "📌";

      if (!items.length) {
        content.innerHTML = `<div class="study-empty">// Sem recursos para esta categoria ainda.</div>`;
        return;
      }

      content.innerHTML = items.map(item => {
        const badge  = item.badge  ? `<span class="resource-badge">${item.badge}</span>` : "";
        const author = item.author ? `<span class="resource-author">— ${item.author}</span>` : "";
        return `
          <a class="resource-card" href="${item.url}" target="_blank" rel="noopener noreferrer">
            <div class="resource-icon">${icon}</div>
            <div class="resource-body">
              <div class="resource-meta">
                <span class="resource-title">${item.title}</span>
                ${badge}
                ${author}
              </div>
              <p class="resource-desc">${item.desc}</p>
              <span class="resource-link-arrow">Acessar →</span>
            </div>
          </a>`;
      }).join("");
    }

    function init() {
      /* topic click */
      document.querySelectorAll(".topic").forEach(el => {
        el.addEventListener("click", () => open(el.textContent.trim()));
        el.setAttribute("role", "button");
        el.setAttribute("tabindex", "0");
        el.addEventListener("keydown", e => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(el.textContent.trim()); }
        });
      });

      /* tab switch */
      document.querySelectorAll(".study-tab").forEach(tab => {
        tab.addEventListener("click", () => {
          document.querySelectorAll(".study-tab").forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          renderTab(tab.dataset.tab);
        });
      });

      /* close button */
      document.getElementById("study-close").addEventListener("click", close);

      /* click outside panel */
      document.getElementById("study-overlay").addEventListener("click", e => {
        if (e.target === e.currentTarget) close();
      });

      /* Escape */
      document.addEventListener("keydown", e => {
        if (e.key === "Escape" && document.getElementById("study-overlay").classList.contains("open")) close();
      });
    }

    return { init };
  })();

  /* -------------------------------------------------------------------
     BOOT EVERYTHING
     ------------------------------------------------------------------- */
  window.addEventListener("DOMContentLoaded", () => {
    Boot.run();
    Particles.init();
    CursorGlow();
    Nav();
    Reveal();
    Counters();
    Clock();
    StudyModal.init();
  });
})();
