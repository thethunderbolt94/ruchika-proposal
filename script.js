/* ═══════════════════════════════════════════════════════
   Ruchika Tekkeveetil — Site Scripts
   Mouse parallax · Custom cursor · Scroll reveal · Nav
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Custom Cursor ──────────────────────── */
  const cursor = document.querySelector('.cursor');
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;
    let rafId;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      // Slight lag for smooth feel
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      cursor.style.left = cursorX + 'px';
      cursor.style.top  = cursorY + 'px';
      rafId = requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover state on interactive elements
    const hoverTargets = 'a, button, [data-hover], .card, .whatsapp-fab';
    document.querySelectorAll(hoverTargets).forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('cursor--hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--hover'));
    });

    document.addEventListener('mouseleave', () => cursor.classList.add('cursor--hidden'));
    document.addEventListener('mouseenter', () => cursor.classList.remove('cursor--hidden'));
  }

  /* ─── Hero Mouse Parallax ────────────────── */
  const heroParallax = document.querySelector('[data-parallax]');
  if (heroParallax && window.matchMedia('(pointer: fine)').matches) {
    let tX = 0, tY = 0, cX = 0, cY = 0;

    window.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      tX = (e.clientX - cx) / cx * 18;
      tY = (e.clientY - cy) / cy * 12;
    });

    function animateParallax() {
      cX += (tX - cX) * 0.06;
      cY += (tY - cY) * 0.06;
      heroParallax.style.transform = `translate(${cX}px, ${cY}px) scale(1.04)`;
      requestAnimationFrame(animateParallax);
    }
    animateParallax();
  }

  /* ─── Scroll Reveal ──────────────────────── */
  const reveals = document.querySelectorAll('.reveal, .section-enter');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ─── Nav Scroll State ───────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    function updateNav() {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ─── Mobile Nav Toggle ──────────────────── */
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav--open');
      const isOpen = nav.classList.contains('nav--open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    nav.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── Hero Text Line Reveal ──────────────── */
  const heroLines = document.querySelectorAll('.hero-line');
  heroLines.forEach((line, i) => {
    line.style.opacity = '0';
    line.style.transform = 'translateY(28px)';
    line.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`;
    requestAnimationFrame(() => {
      setTimeout(() => {
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
      }, 80 + i * 120);
    });
  });

  /* ─── Counter Animation ──────────────────── */
  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = target * ease;
      el.textContent = prefix + (Number.isInteger(target) ? Math.round(current) : current.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  /* ─── Smooth scroll for anchor links ─────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ─── FAQ Toggle ────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* ─── Form submission (email via mailto fallback) ─── */
  const forms = document.querySelectorAll('.intake-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      const subject = encodeURIComponent('Website Inquiry — ' + (data.inquiry_type || 'General'));
      const body = encodeURIComponent(
        Object.entries(data)
          .map(([k, v]) => `${k.replace(/_/g, ' ')}: ${v}`)
          .join('\n')
      );
      window.location.href = `mailto:contact@ruchikatekkeveetil.ca?subject=${subject}&body=${body}`;
      form.reset();

      // Show success message
      const msg = form.querySelector('.form-success');
      if (msg) { msg.style.display = 'block'; setTimeout(() => msg.style.display = 'none', 4000); }
    });
  });

})();
