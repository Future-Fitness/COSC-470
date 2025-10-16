# 🩺 Medical Reference System — Monorepo

## 📘 Overview

**Medical Reference (Medical-Ref)** is a **cross-platform medical information system** built to organize, manage, and deliver verified medical reference documents (guides, notes, and drug monographs) across **Android, iOS, and Web**.

The system allows medical professionals, editors, and administrators to:
- Upload and manage **Word/PDF documents**.
- Convert and serve content in both **PDF Mode** (exact layout) and **Reading Mode** (adjustable, mobile-friendly).
- Organize data into **Sections → Subsections → Documents**.
- Access, search, and download content **offline**.
- Synchronize updates via **manifest versioning** (content updates without app redeployment).
- Store all PDFs, images, and HTML bundles securely in **MinIO** (S3-compatible object storage).
- Manage everything from an **Admin Dashboard (Next.js)**.
- Consume the content through a **Mobile App (React Native)**.

---

## 🎯 Project Objectives

### **Primary Goals**
1. **Centralize and structure** over 100+ Word/PDF-based medical guides.
2. **Automate ingestion and conversion** of Word documents into PDFs and sectioned HTML/JSON.
3. **Deliver consistent user experience** across platforms (web and mobile).
4. **Provide two reading modes:**
   - **PDF Mode:** preserves exact original layout for tables and indentation.
   - **Reading Mode:** adjustable typography, collapsible sections, and responsive formatting.
5. **Enable offline access** with delta-based content updates through versioned manifests.
6. **Separate app version from content version** to allow updates without redeployments.
7. **Ensure scalability** — new documents and categories can be added easily.
8. **Guarantee security** and controlled access with roles (Admin, Editor, Viewer).
9. **Maintain a complete audit trail** of edits, uploads, and publishes.

---

## 🏗️ System Architecture

### **Stack Overview**
| Layer | Technology | Description |
|-------|-------------|-------------|
| **Backend (API)** | Node.js + Express + Mongoose | REST API with content ingestion, publishing, and manifest generation. |
| **Database** | MongoDB | Stores Sections, Subsections, Documents, Users, and Manifest metadata. |
| **Object Storage** | MinIO | Holds PDFs, images, and converted HTML/JSON bundles. |
| **Admin Panel** | Next.js + React | Web-based CMS to upload, organize, and publish medical content. |
| **Mobile App** | React Native (Expo) | User-facing app for clinicians to read, search, and download documents. |
| **Package Management** | pnpm Monorepo | Shared packages for Typescript types and utilities. |
| **Containerization** | Docker Compose | Local setup for MongoDB and MinIO. |

---

## 🧩 Monorepo Structure




---

## 🧠 Core Concepts

### **Data Model Hierarchy**
- **Section** → Top-level category (e.g., “Pharmacology”)
- **Subsection** → Subcategory within a section (e.g., “Antibiotics”)
- **Document** → Actual content (e.g., “Amoxicillin Guide”)
- **Manifest** → Versioned list of all published content (used for sync)
- **Assets** → PDF files, figures, tables, images, and HTML bundles stored in MinIO.

### **Content Lifecycle**
1. **Upload:** Editor uploads `.docx` or `.pdf` via Admin.
2. **Convert:** Backend converts `.docx` to `.pdf` + `.json` (Reading Mode).
3. **Preview:** Editor reviews both views for formatting issues.
4. **Publish:** Admin approves and releases the document.
5. **Manifest Update:** A new content manifest version is generated.
6. **Sync:** Mobile and web apps download new/updated documents automatically.

---

## ⚙️ Local Setup

### **Prerequisites**
- Node.js (>= 18)
- pnpm (>= 9)
- Docker Desktop
- Xcode or Android Studio (for mobile build)
- Git

### **1️⃣ Clone & Install**
```bash
git clone <repo_url>
cd medical-ref
pnpm install


pnpm infra:up
# MongoDB: mongodb://localhost:27017
# MinIO Console: http://localhost:9001 (minioadmin / minioadmin123)
