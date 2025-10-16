'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <main>
      <div className="container">
        <div className="hero">
          <h1>Knebel Knotes</h1>
          <p>Medical Reference Platform</p>
          <p style={{fontSize: '1.1rem', marginTop: '0.5rem'}}>
            A unified, intelligent platform for managing and delivering trusted medical information across
            <strong> Web, Android, and iOS</strong> — designed for hospitals, clinicians, and researchers.
          </p>
        </div>

        <div className="main-content">
          {/* Login/Register Card */}
          <div className="card">
            <h2>Access Control</h2>
            <div className="tabs">
              <button
                className={`tab ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`tab ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>

            {activeTab === 'login' ? (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="admin@knebelknotes.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn">Sign In</button>
                <button type="button" className="btn btn-secondary">Forgot Password?</button>
              </form>
            ) : (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Dr. John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-email">Email</label>
                  <input type="email" id="reg-email" placeholder="you@hospital.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="reg-password">Password</label>
                  <input type="password" id="reg-password" placeholder="Create a strong password" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input type="password" id="confirm-password" placeholder="Re-enter password" />
                </div>
                <button type="submit" className="btn">Create Account</button>
              </form>
            )}
          </div>

          {/* Mobile App Control */}
          <div className="card">
            <h2>Mobile App Control</h2>

            <div className="control-section">
              <h3>App Status</h3>
              <div className="control-buttons">
                <button className="control-btn">Push Update</button>
                <button className="control-btn">Force Refresh</button>
                <button className="control-btn">Enable Maintenance</button>
                <button className="control-btn">View Analytics</button>
              </div>
            </div>

            <div className="control-section">
              <h3>Content Management</h3>
              <div className="control-buttons">
                <button className="control-btn">Sync Sections</button>
                <button className="control-btn">Update Manifests</button>
                <button className="control-btn">Clear Cache</button>
                <button className="control-btn">Rollback Version</button>
              </div>
            </div>

         
          </div>

          {/* About Section */}
          <div className="card full-width">
            <h2>About the Project</h2>
            <div className="story-content" style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
              <p style={{marginBottom: '1rem'}}>
                The <strong>Medical Reference System</strong> is a <strong>cross-platform medical knowledge hub</strong> that
                digitizes and structures medical documents, guidelines, and reference notes into an easily searchable,
                mobile-friendly experience.
              </p>
              <p>
                Built to empower healthcare professionals, the system brings together <strong>hundreds of medical Word
                and PDF documents</strong> into a seamless digital library — making critical information
                <strong> readable, accessible, and offline-ready</strong> anywhere.
              </p>
            </div>
          </div>

          {/* Core Objectives */}
          <div className="card full-width">
            <h2>Core Objectives</h2>
            <div className="stories">
              <div className="story-card">
                <div className="story-header">
                  <h4>Centralized Knowledge Base</h4>
                </div>
                <div className="story-content">
                  Convert and store over 100+ medical Word/PDF documents in one secure system.
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Dual Reading Modes</h4>
                </div>
                <div className="story-content">
                  Access each document in <strong>PDF Mode</strong> (preserving the original layout) or
                  <strong> Reading Mode</strong> (adjustable font, reflowable content).
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Cross-Platform Access</h4>
                </div>
                <div className="story-content">
                  Available on <strong>mobile (React Native)</strong> and <strong>web (Next.js)</strong> with real-time sync.
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Versioned Content Updates</h4>
                </div>
                <div className="story-content">
                  Deliver updates instantly without redeploying apps via <strong>content manifests</strong>.
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Secure Cloud Storage</h4>
                </div>
                <div className="story-content">
                  Host all PDFs, assets, and bundles using <strong>MinIO (S3-compatible)</strong> object storage.
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Smart Search & Navigation</h4>
                </div>
                <div className="story-content">
                  Instantly find drugs, conditions, or procedures across all content.
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Role-Based Management</h4>
                </div>
                <div className="story-content">
                  Admins and editors can upload, edit, publish, and audit changes in a powerful
                  <strong> Next.js Admin Dashboard</strong>.
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Offline Mode</h4>
                </div>
                <div className="story-content">
                  Download complete sections or guides for offline viewing in low-connectivity environments.
                </div>
              </div>
            </div>
          </div>

          {/* System Overview */}
          <div className="card full-width">
            <h2>System Overview</h2>
            <div className="stories">
              <div className="story-card">
                <div className="story-header">
                  <h4>Admin Dashboard</h4>
                </div>
                <div className="story-content">
                  Manage sections, subsections, and content. Upload Word/PDF files and publish updates.
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>API Server</h4>
                </div>
                <div className="story-content">
                  Handles ingestion, conversion (DOCX → PDF + JSON), and versioned manifest generation.
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Mobile App</h4>
                </div>
                <div className="story-content">
                  Enables reading, searching, and offline access on Android & iOS.
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Database (MongoDB)</h4>
                </div>
                <div className="story-content">
                  Stores structure and metadata (Sections, Subsections, Documents).
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Object Storage (MinIO)</h4>
                </div>
                <div className="story-content">
                  Stores PDFs, images, and HTML bundles securely.
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="card full-width">
            <h2>Key Features</h2>
            <div style={{overflowX: 'auto'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
                <thead>
                  <tr style={{background: '#f3f4f6', textAlign: 'left'}}>
                    <th style={{padding: '0.75rem', borderBottom: '2px solid #e5e7eb'}}>Feature</th>
                    <th style={{padding: '0.75rem', borderBottom: '2px solid #e5e7eb'}}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}><strong>Upload & Convert</strong></td>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}>Upload DOCX/PDF, auto-convert to PDF + reflowable JSON bundle.</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}><strong>Admin Management</strong></td>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}>Manage sections, subsections, and documents in one dashboard.</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}><strong>Reading Experience</strong></td>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}>Adjustable fonts, dark/light themes, responsive tables.</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}><strong>Offline Ready</strong></td>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}>Download and cache for use without internet.</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}><strong>Content Versioning</strong></td>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}>Updates synced automatically via manifest.</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}><strong>Secure Access</strong></td>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}>Role-based permissions with JWT authentication.</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}><strong>Analytics</strong></td>
                    <td style={{padding: '0.75rem', borderBottom: '1px solid #e5e7eb'}}>Monitor top-searched and most-read topics.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="card full-width">
            <h2>Tech Stack</h2>
            <div className="stories">
              <div className="story-card">
                <div className="story-header">
                  <h4>Frontend</h4>
                </div>
                <div className="story-content">
                  <strong>Next.js 14</strong> (Admin Panel) • <strong>React Native (Expo)</strong> (Mobile App) •
                  TypeScript • Tailwind CSS
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Backend</h4>
                </div>
                <div className="story-content">
                  <strong>Node.js + Express</strong> • <strong>MongoDB + Mongoose</strong> •
                  <strong>MinIO (S3)</strong> • Zod Validation
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>DevOps & Tools</h4>
                </div>
                <div className="story-content">
                  <strong>Docker & Docker Compose</strong> • <strong>PNPM Workspaces</strong> (monorepo) •
                  GitHub Actions • Vercel • Expo EAS
                </div>
              </div>

              <div className="story-card">
                <div className="story-header">
                  <h4>Standards</h4>
                </div>
                <div className="story-content">
                  TypeScript (strict mode) • ESLint + Prettier • EditorConfig • Conventional Commits
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="card full-width">
            <h2>Project Vision</h2>
            <div className="story-content" style={{fontSize: '1.05rem', lineHeight: '1.8'}}>
              <p>
                To create a <strong>scalable digital library for medical professionals</strong>, blending the accuracy
                of PDFs with the flexibility of reflowable text. A tool that ensures no clinician is limited by
                connectivity or format — where <strong>information flows as freely as knowledge itself.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
