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
            FinOps & Cost Optimization
          </span>
          <h3 class="card-title">multi-cloud-finops</h3>
          <p class="card-description">Multi-cloud cost optimization and anomaly detection (FOCUS 1.0) for AWS, GCP & Azure — spend aggregation, forecasting, rightsizing, Prometheus/Grafana monitoring, and KEDA autoscaling.</p>
          <div class="card-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">FastAPI</span>
            <span class="tech-tag">Terraform</span>
            <span class="tech-tag">Kubernetes</span>
            <span class="tech-tag">Prometheus</span>
            <span class="tech-tag">Grafana</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu/multi-cloud-finops" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              1
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              0
            </span>
          </div>
        </div>
      </div>

      <div class="project-card reveal" data-category="security">
        <div class="card-header">
          <div class="card-tier tier-professional">Professional</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Security & Compliance
          </span>
          <h3 class="card-title">multi-cloud-automation-scripts</h3>
          <p class="card-description">Read-only storage security audit scripts for Azure, AWS, and GCP — public access, encryption, and hardening checks with CI testing.</p>
          <div class="card-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Bash</span>
            <span class="tech-tag">PowerShell</span>
            <span class="tech-tag">KQL</span>
            <span class="tech-tag">GitHub Actions</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu/multi-cloud-automation-scripts" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              1
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              0
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
            DevOps Portfolio
          </span>
          <h3 class="card-title">multi-cloud-devops-portfolio</h3>
          <p class="card-description">Real-world DevOps & Security portfolio — Terraform, Ansible, ArgoCD GitOps, OPA policies & CI/CD across AWS, Azure and GCP.</p>
          <div class="card-tech">
            <span class="tech-tag">Terraform</span>
            <span class="tech-tag">Ansible</span>
            <span class="tech-tag">ArgoCD</span>
            <span class="tech-tag">Helm</span>
            <span class="tech-tag">OPA</span>
            <span class="tech-tag">Jenkins</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu/multi-cloud-devops-portfolio" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              0
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              0
            </span>
          </div>
        </div>
      </div>

      <div class="project-card reveal" data-category="automation">
        <div class="card-header">
          <div class="card-tier tier-community">Community</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            AWS Automation
          </span>
          <h3 class="card-title">aws-stepfunctions-ssh-execution</h3>
          <p class="card-description">Execute SSH commands at scale on EC2 via AWS Step Functions state machines.</p>
          <div class="card-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">AWS Step Functions</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu/aws-stepfunctions-ssh-execution" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              0
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              0
            </span>
          </div>
        </div>
      </div>

      <div class="project-card reveal" data-category="automation">
        <div class="card-header">
          <div class="card-tier tier-community">Community</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            AWS IAM Automation
          </span>
          <h3 class="card-title">aws-stepfunction-iam-remotecommand-execution</h3>
          <p class="card-description">Run IAM-guarded remote commands across EC2 fleets with AWS Step Functions.</p>
          <div class="card-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">AWS IAM</span>
            <span class="tech-tag">Step Functions</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu/aws-stepfunction-iam-remotecommand-execution" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              0
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              0
            </span>
          </div>
        </div>
      </div>

      <div class="project-card reveal" data-category="devops">
        <div class="card-header">
          <div class="card-tier tier-community">Community</div>
        </div>
        <div class="card-content">
          <span class="card-category">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Docker
          </span>
          <h3 class="card-title">helloworlddb-docker</h3>
          <p class="card-description">Python + PostgreSQL starter app in Docker Compose — clean, minimal, ready to build on.</p>
          <div class="card-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Docker</span>
            <span class="tech-tag">PostgreSQL</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/priyaranjan-sahu/helloworlddb-docker" class="card-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <div class="card-meta">
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              0
            </span>
            <span class="meta-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3v12"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
              0
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>