---
layout: default
title: "Projects — Priya Ranjan Sahu"
---

## 🚀 All Projects

### Flagship

| Project | Description | Stack |
| :--- | :--- | :--- |
| **[multi-cloud-automation-scripts](https://github.com/priyaranjan-sahu/multi-cloud-automation-scripts)** | Read-only storage security audit toolkit for Azure, AWS & GCP — public access, encryption & hardening checks, with CI-tested compliance matrices. | Python, Bash, PowerShell, KQL, GitHub Actions |
| **[multi-cloud-finops](https://github.com/priyaranjan-sahu/multi-cloud-finops)** | AI-powered cost intelligence platform — real-time multi-cloud spend, anomaly detection, 30/90-day forecasting, rightsizing & spot optimization. | Python, FastAPI, scikit-learn, Docker, Terraform, KEDA, Grafana |

### DevOps & Security Portfolio

| Project | Description | Stack |
| :--- | :--- | :--- |
| **[multi-cloud-devops-portfolio](https://github.com/priyaranjan-sahu/multi-cloud-devops-portfolio)** | Hands-on DevOps & Security portfolio — IaC, GitOps/ArgoCD, OPA policies, Jenkins & GitHub Actions pipelines, cost automation. | Terraform, Ansible, Helm, ArgoCD, Jenkins |

### AWS Automation

| Project | Description | Stack |
| :--- | :--- | :--- |
| **[aws-stepfunctions-ssh-execution](https://github.com/priyaranjan-sahu/aws-stepfunctions-ssh-execution)** | Run SSH commands at scale through AWS Step Functions state machines. | Python, AWS Step Functions |
| **[aws-stepfunction-iam-remotecommand-execution](https://github.com/priyaranjan-sahu/aws-stepfunction-iam-remotecommand-execution)** | IAM-guarded remote command execution via Step Functions — secure automation for fleets. | Python, AWS IAM, Step Functions |

### Starter Templates

| Project | Description | Stack |
| :--- | :--- | :--- |
| **[helloworlddb-docker](https://github.com/priyaranjan-sahu/helloworlddb-docker)** | Minimal Python + PostgreSQL hello-world container — a clean Docker Compose starter. | Python, Docker, PostgreSQL |

---

## 📋 Project Details

### multi-cloud-automation-scripts
**Purpose:** Unified storage security auditing across all three major clouds.

**Capabilities:**
- **Azure:** Private Endpoint auditing (with/without), KQL + PowerShell + Bash
- **AWS S3:** Public bucket detection (ACL, policy, Public Access Block), security config compliance matrix
- **GCP Storage:** Public bucket IAM binding detection, uniform bucket-level access compliance

**CI/CD:** PSScriptAnalyzer, ShellCheck, ruff, pytest, Pester, markdownlint, yamllint, structure validation

---

### multi-cloud-finops
**Purpose:** Production-grade, AI-powered multi-cloud cost intelligence platform built to FOCUS 1.0 standards.

**Capabilities:**
- Real-time multi-cloud spend visibility (AWS Cost Explorer, GCP Billing API, Azure Cost Management)
- Dual-engine anomaly detection (IsolationForest + Z-Score) with root-cause attribution
- 30/60/90-day cost forecasting with 95% confidence intervals
- Rightsizing engine (5 waste vectors: Idle VMs, Unattached Storage, Unused IPs, K8s over-allocation, RI gaps)
- Spot instance optimization (AWS/GCP/Azure preemptible/spot workload migration)
- Prometheus + Grafana observability stack

**Architecture:** FastAPI REST API, Terraform multi-cloud infra, KEDA event-driven autoscaling, Docker Compose 1-click deploy

---

### multi-cloud-devops-portfolio
**Purpose:** Demonstrate hands-on multi-cloud DevOps & Security expertise.

**Modules:**
1. **Multi-Cloud IaC** — Terraform modules for AWS, Azure, GCP (VPC, compute, storage)
2. **Kubernetes GitOps** — Helm charts, ArgoCD Application, OPA security policies
3. **CI/CD Pipelines** — Jenkinsfile, GitHub Actions workflows, Dockerfiles
4. **Cloud Security** — Terraform security hardening, GuardDuty, CIS Benchmark compliance
5. **Cost Automation** — Lambda cost analysis, Cost Explorer API, optimization reports

---

## 🛠️ Tech Stack Overview

| Category | Technologies |
| :--- | :--- |
| **Cloud** | AWS, Azure, GCP |
| **Languages** | Python, Bash, PowerShell, KQL, HCL, Go, YAML |
| **IaC** | Terraform, Ansible, CloudFormation |
| **Containers** | Docker, Kubernetes, KEDA, Helm |
| **CI/CD** | GitHub Actions, Jenkins, ArgoCD |
| **Observability** | Prometheus, Grafana, CloudWatch, Azure Monitor |
| **Security** | OPA, GuardDuty, CIS Benchmarks, least-privilege IAM |
| **FinOps** | FOCUS 1.0, scikit-learn, Cost Explorer APIs |