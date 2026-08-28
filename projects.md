---
layout: default
title: Projects
---

<section class="section projects-hero">
  <div class="container">
    <h1 class="projects-hero-title reveal">Projects</h1>
    <p class="projects-hero-subtitle reveal delay-1">Open source tools, infrastructure automation, and cloud solutions</p>
  </div>
</section>

<section class="section" id="project-filters">
  <div class="container">
    <div class="projects-filter reveal">
      <button class="filter-btn is-active" data-filter="all">All Projects</button>
      <button class="filter-btn" data-filter="cloud">Cloud Infrastructure</button>
      <button class="filter-btn" data-filter="devops">CI/CD & DevOps</button>
      <button class="filter-btn" data-filter="monitoring">Monitoring</button>
      <button class="filter-btn" data-filter="security">Security</button>
      <button class="filter-btn" data-filter="automation">Automation</button>
    </div>

    <div class="projects-grid">

      <div class="project-card reveal" data-category="cloud">
        <div class="card-header">
          <div class="card-tier tier-enterprise">Enterprise</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
            Cloud Infrastructure
          </span>
          <h3 class="card-title">GCP Landing Zone</h3>
          <p class="card-description">Production-ready GCP landing zone with organizational policies, IAM, networking, and security controls for enterprise workloads.</p>
          <div class="card-tech">
            <span class="tech-tag">Terraform</span>
            <span class="tech-tag">GCP</span>
            <span class="tech-tag">Cloud Build</span>
            <span class="tech-tag">Organization Policy</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              42
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              15
            </span>
          </div>
        </div>
      </div>

      <div class="project-card reveal" data-category="devops">
        <div class="card-header">
          <div class="card-tier tier-professional">Professional</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            CI/CD Pipeline
          </span>
          <h3 class="card-title">GitHub Actions Starter Kit</h3>
          <p class="card-description">Production-ready GitHub Actions workflows for multi-cloud deployments with security scanning, testing, and automated rollbacks.</p>
          <div class="card-tech">
            <span class="tech-tag">GitHub Actions</span>
            <span class="tech-tag">Terraform</span>
            <span class="tech-tag">Docker</span>
            <span class="tech-tag">Trivy</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              38
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              12
            </span>
          </div>
        </div>
      </div>

      <div class="project-card reveal" data-category="monitoring">
        <div class="card-header">
          <div class="card-tier tier-professional">Professional</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Monitoring Stack
          </span>
          <h3 class="card-title">Kubernetes Observability</h3>
          <p class="card-description">Complete observability stack for Kubernetes with Prometheus, Grafana, Loki, and custom alerting rules for production workloads.</p>
          <div class="card-tech">
            <span class="tech-tag">Kubernetes</span>
            <span class="tech-tag">Prometheus</span>
            <span class="tech-tag">Grafana</span>
            <span class="tech-tag">Loki</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              56
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              21
            </span>
          </div>
        </div>
      </div>

      <div class="project-card reveal" data-category="security">
        <div class="card-header">
          <div class="card-tier tier-community">Community</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Security
          </span>
          <h3 class="card-title">CIS Benchmark Toolkit</h3>
          <p class="card-description">Automated CIS benchmark compliance checks for GCP and AWS environments with remediation scripts and reporting dashboards.</p>
          <div class="card-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">GCP</span>
            <span class="tech-tag">AWS</span>
            <span class="tech-tag">Security</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              28
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              9
            </span>
          </div>
        </div>
      </div>

      <div class="project-card reveal" data-category="automation">
        <div class="card-header">
          <div class="card-tier tier-professional">Professional</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Automation
          </span>
          <h3 class="card-title">Cloud Cost Optimizer</h3>
          <p class="card-description">Automated cloud cost analysis and optimization tool that identifies unused resources, recommends right-sizing, and schedules scaling.</p>
          <div class="card-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">GCP</span>
            <span class="tech-tag">AWS</span>
            <span class="tech-tag">BigQuery</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              45
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              18
            </span>
          </div>
        </div>
      </div>

      <div class="project-card reveal" data-category="cloud">
        <div class="card-header">
          <div class="card-tier tier-enterprise">Enterprise</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
            Cloud Migration
          </span>
          <h3 class="card-title">Multi-Cloud Migration Framework</h3>
          <p class="card-description">Phased migration framework for moving workloads from on-premises to GCP/AWS with zero-downtime strategies and rollback capabilities.</p>
          <div class="card-tech">
            <span class="tech-tag">Terraform</span>
            <span class="tech-tag">Kubernetes</span>
            <span class="tech-tag">GCP</span>
            <span class="tech-tag">AWS</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              63
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              24
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>