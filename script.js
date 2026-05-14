/* ═══════════════════════════════════════════════════════
   Ruchika Tekkeveetil — Site Scripts
   Nav · Mobile menu · Smooth scroll · FAQ · Intake form
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── Scroll Reveal (subtle, near-instant) ─── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ─── Nav Scroll State ─── */
  const nav = document.querySelector('.nav');
  if (nav) {
    function updateNav() {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  /* ─── Mobile Nav Toggle ─── */
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('nav--open');
      const isOpen = nav.classList.contains('nav--open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    nav.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── Smooth scroll for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navH = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ─── FAQ Toggle ─── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item.is-open').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* ─── Intake form (mailto fallback) ─── */
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
      window.location.href = `mailto:ruchika@sellingabusiness.ca?subject=${subject}&body=${body}`;
      form.reset();
      const msg = form.querySelector('.form-success');
      if (msg) { msg.style.display = 'block'; setTimeout(() => msg.style.display = 'none', 4000); }
    });
  });

})();
