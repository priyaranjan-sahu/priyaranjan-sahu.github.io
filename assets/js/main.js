// ============================================================================
// MAIN JAVASCRIPT — Priya Ranjan Sahu Portfolio
// ============================================================================

(function() {
  'use strict';

  // ============================================================================
  // UTILITIES
  // ============================================================================

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

  const debounce = (fn, wait = 150) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), wait);
    };
  };

  const throttle = (fn, limit = 150) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        fn(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================================================
  // THEME MANAGEMENT
  // ============================================================================

  const ThemeManager = {
    init() {
      this.themeToggle = $('#theme-toggle');
      this.themeContainer = $('#theme-toggle-container');
      this.html = document.documentElement;

      if (!this.themeToggle) return;

      // Load saved theme
      const savedTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      this.setTheme(savedTheme);

      this.themeToggle.addEventListener('click', () => this.toggle());
      this.themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggle();
        }
      });

      // Listen for system theme changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    },

    setTheme(theme) {
      this.html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      this.updateIcons(theme);
    },

    toggle() {
      const current = this.html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      this.setTheme(next);
    },

    updateIcons(theme) {
      const sunIcon = this.themeToggle.querySelector('.icon-sun');
      const moonIcon = this.themeToggle.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        sunIcon.style.display = theme === 'light' ? 'block' : 'none';
        moonIcon.style.display = theme === 'dark' ? 'block' : 'none';
      }
      this.themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      this.themeToggle.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    }
  };

  // ============================================================================
  // NAVIGATION
  // ============================================================================

  const Navigation = {
    init() {
      this.navToggle = $('.nav-toggle');
      this.navMenu = $('#nav-menu');
      this.navLinks = $$('.nav-link');
      this.header = $('.site-header');

      if (this.navToggle && this.navMenu) {
        this.navToggle.addEventListener('click', () => this.toggle());
      }

      this.navLinks.forEach(link => {
        link.addEventListener('click', () => this.close());
        // Active link highlighting
        if (link.href === window.location.href) {
          link.classList.add('is-active');
        }
      });

      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });

      // Scroll effect on header
      this.handleScroll = throttle(() => this.onScroll(), 50);
      window.addEventListener('scroll', this.handleScroll, { passive: true });
    },

    toggle() {
      const isOpen = this.navMenu.classList.toggle('is-open');
      this.navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    },

    close() {
      this.navMenu.classList.remove('is-open');
      this.navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    },

    onScroll() {
      if (window.scrollY > 20) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    }
  };

  // ============================================================================
  // SCROLL PROGRESS BAR
  // ============================================================================

  const ScrollProgress = {
    init() {
      this.bar = $('.scroll-progress');
      if (!this.bar) return;
      this.update = throttle(() => this.updateBar(), 16);
      window.addEventListener('scroll', this.update, { passive: true });
    },

    updateBar() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      this.bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      this.bar.setAttribute('aria-valuenow', Math.round(progress));
    }
  };

  // ============================================================================
  // SMOOTH SCROLL
  // ============================================================================

  const SmoothScroll = {
    init() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = $(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: prefersReducedMotion() ? 'auto' : 'smooth'
          });

          // Update URL without scroll
          history.pushState(null, '', href);

          // Focus target for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    }
  };

  // ============================================================================
  // INTERSECTION OBSERVER - REVEAL ANIMATIONS
  // ============================================================================

  const RevealObserver = {
    init() {
      if (prefersReducedMotion()) {
        // Show all immediately
        $$('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
          el.classList.add('is-visible');
        });
        return;
      }

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      $$('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el, index) => {
        el.style.setProperty('--stagger-index', index % 8);
        this.observer.observe(el);
      });
    }
  };

  // ============================================================================
  // HERO PARTICLES
  // ============================================================================

  const HeroParticles = {
    init() {
      if (prefersReducedMotion()) return;

      const hero = $('.hero');
      if (!hero) return;

      const canvas = document.createElement('canvas');
      canvas.className = 'hero-particles';
      canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:0;';
      hero.insertBefore(canvas, hero.firstChild);

      this.ctx = canvas.getContext('2d');
      this.particles = [];
      this.resize();
      this.createParticles(30);
      this.animate();

      window.addEventListener('resize', () => this.resize());
    },

    resize() {
      const hero = $('.hero');
      if (!hero) return;
      this.canvas.width = hero.offsetWidth;
      this.canvas.height = hero.offsetHeight;
    },

    createParticles(count) {
      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: Math.random() * 2 + 1,
          speedY: Math.random() * 0.5 + 0.2,
          speedX: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          drift: (Math.random() - 0.5) * 100
        });
      }
    },

    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.particles.forEach(p => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = this.canvas.height + 10;
          p.x = Math.random() * this.canvas.width;
        }

        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(88, 166, 255, ${p.opacity})`;
        this.ctx.fill();
      });

      requestAnimationFrame(() => this.animate());
    }
  };

  // ============================================================================
  // SCROLL REVEAL FOR HERO CONTENT
  // ============================================================================

  const HeroAnimations = {
    init() {
      const heroContent = $('.hero-content');
      if (!heroContent) return;

      // Add reveal classes to hero children
      const children = heroContent.children;
      Array.from(children).forEach((child, index) => {
        child.classList.add('reveal');
        child.style.setProperty('--stagger-index', index);
      });

      // Hero scroll indicator click
      const scrollIndicator = $('.hero-scroll');
      if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
          const nextSection = $('.section');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
          }
        });
      }
    }
  };

  // ============================================================================
  // PROJECT FILTERING
  // ============================================================================

  const ProjectFilter = {
    init() {
      this.filterButtons = $$('.filter-btn');
      this.projectCards = $$('.project-card');

      if (!this.filterButtons.length) return;

      this.filterButtons.forEach(btn => {
        btn.addEventListener('click', () => this.filter(btn.dataset.filter));
      });
    },

    filter(category) {
      // Update active button
      this.filterButtons.forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.filter === category);
      });

      // Filter cards with animation
      this.projectCards.forEach((card, index) => {
        const matches = category === 'all' || card.dataset.category === category;

        if (matches) {
          card.style.display = '';
          card.style.animation = `fade-in-up 0.4s ease-out ${index * 50}ms both`;
        } else {
          card.style.animation = 'fade-out 0.2s ease-out forwards';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    }
  };

  // ============================================================================
  // PROJECT MODAL
  // ============================================================================

  const ProjectModal = {
    init() {
      this.modal = $('.project-modal');
      if (!this.modal) return;

      this.closeBtn = this.modal.querySelector('.modal-close');
      this.content = this.modal.querySelector('.modal-content');

      // Open modal from project cards
      $$('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
          // Don't open if clicking link/button
          if (e.target.closest('a, button')) return;
          this.open(card);
        });
      });

      // Close handlers
      this.closeBtn?.addEventListener('click', () => this.close());
      this.modal.querySelector('.modal-backdrop')?.addEventListener('click', () => this.close());

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('is-open')) {
          this.close();
        }
      });
    },

    open(card) {
      const data = {
        title: card.querySelector('.card-title')?.textContent || '',
        description: card.querySelector('.card-description')?.textContent || '',
        tech: Array.from(card.querySelectorAll('.tech-tag')).map(t => t.textContent),
        category: card.querySelector('.card-category')?.textContent || '',
        link: card.querySelector('.card-link')?.href || '#',
        image: card.querySelector('.card-image')?.src || ''
      };

      this.populate(data);
      this.modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';

      // Focus trap
      setTimeout(() => this.modal.querySelector('.modal-close')?.focus(), 100);
    },

    close() {
      this.modal.classList.remove('is-open');
      document.body.style.overflow = '';
    },

    populate(data) {
      this.modal.querySelector('.modal-title').textContent = data.title;
      this.modal.querySelector('.modal-description').textContent = data.description;

      // Meta
      const metaContainer = this.modal.querySelector('.modal-meta');
      if (metaContainer) {
        metaContainer.innerHTML = `
          <span class="filter-btn is-active">${data.category}</span>
        `;
      }

      // Tech tags
      const techContainer = this.modal.querySelector('.modal-tech');
      if (techContainer) {
        techContainer.innerHTML = data.tech.map(t =>
          `<span class="tech-tag">${t}</span>`
        ).join('');
      }

      // Links
      const linksContainer = this.modal.querySelector('.modal-links');
      if (linksContainer && data.link) {
        linksContainer.innerHTML = `
          <a href="${data.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        `;
      }

      // Image
      if (data.image) {
        const header = this.modal.querySelector('.modal-header');
        if (header) {
          header.style.backgroundImage = `url(${data.image})`;
          header.style.backgroundSize = 'cover';
          header.style.backgroundPosition = 'center';
        }
      }
    }
  };

  // ============================================================================
  // ACTIVE NAV HIGHLIGHTING
  // ============================================================================

  const ActiveNav = {
    init() {
      this.sections = $$('section[id]');
      this.navLinks = $$('.nav-link[href^="#"]');

      if (!this.sections.length) return;

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            this.navLinks.forEach(link => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      }, {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1
      });

      this.sections.forEach(section => this.observer.observe(section));
    }
  };

  // ============================================================================
  // COPY EMAIL
  // ============================================================================

  const CopyEmail = {
    init() {
      $$('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', (e) => {
          const email = link.href.replace('mailto:', '');
          if (navigator.clipboard && navigator.clipboard.writeText) {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
              this.showToast(`Copied ${email}!`);
            });
          }
        });
      });
    },

    showToast(message) {
      // Remove existing
      const existing = $('.toast');
      if (existing) existing.remove();

      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        padding: 12px 24px;
        background: var(--color-bg-elevated);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        color: var(--color-text-primary);
        font-size: 14px;
        font-weight: 500;
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        animation: slide-up 0.3s ease-out;
      `;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.animation = 'fade-out 0.3s ease-out forwards';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }
  };

  // ============================================================================
  // LAZY LOAD IMAGES
  // ============================================================================

  const LazyImages = {
    init() {
      if (!('IntersectionObserver' in window)) return;

      const images = $$('img[loading="lazy"]');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            img.removeAttribute('loading');
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '100px' });

      images.forEach(img => observer.observe(img));
    }
  };

  // ============================================================================
  // COPY CODE BLOCKS
  // ============================================================================

  const CodeCopy = {
    init() {
      $$('pre').forEach(pre => {
        const btn = document.createElement('button');
        btn.className = 'code-copy-btn';
        btn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        `;
        btn.setAttribute('aria-label', 'Copy code');
        btn.style.cssText = `
          position: absolute;
          top: 8px;
          right: 8px;
          padding: 6px;
          background: var(--color-bg-tertiary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-text-muted);
          opacity: 0;
          transition: opacity var(--transition-fast);
          cursor: pointer;
        `;
        pre.style.position = 'relative';
        pre.appendChild(btn);

        pre.addEventListener('mouseenter', () => btn.style.opacity = '1');
        pre.addEventListener('mouseleave', () => btn.style.opacity = '0');

        btn.addEventListener('click', async () => {
          const code = pre.querySelector('code').textContent;
          await navigator.clipboard.writeText(code);
          btn.innerHTML = '✓';
          btn.style.color = 'var(--color-accent-tertiary)';
          setTimeout(() => {
            btn.innerHTML = btn.dataset.original || btn.innerHTML;
            btn.style.color = '';
          }, 2000);
        });
        btn.dataset.original = btn.innerHTML;
      });
    }
  };

  // ============================================================================
  // INITIALIZATION
  // ============================================================================

  function init() {
    // Core
    ThemeManager.init();
    Navigation.init();
    ScrollProgress.init();
    SmoothScroll.init();
    RevealObserver.init();
    HeroAnimations.init();
    ActiveNav.init();
    CopyEmail.init();
    LazyImages.init();
    CodeCopy.init();

    // Page-specific
    if ($('.hero')) HeroParticles.init();
    if ($('.filter-btn')) ProjectFilter.init();
    if ($('.project-modal')) ProjectModal.init();
  }

  // DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for debugging
  window.PRS = {
    ThemeManager,
    Navigation,
    ScrollProgress,
    ProjectFilter,
    ProjectModal
  };
})();