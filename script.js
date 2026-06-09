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
  });
})();
