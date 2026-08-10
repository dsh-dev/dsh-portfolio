import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSent(true)
      setTimeout(() => setSent(false), 3000)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id="contact" style={{
      padding: '80px 32px',
      background: '#080A0D',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div className="reveal">
          <span style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            color: '#6F747C',
            borderBottom: '1px solid rgba(94,215,232,0.25)',
            paddingBottom: '8px',
            display: 'inline-block'
          }}>
            09 / Contact
          </span>
          
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: '24px',
            marginBottom: '16px'
          }}>
            LET'S BUILD<br />
            <span style={{ color: '#5ED7E8' }}>SOMETHING GREAT.</span>
          </h2>
          
          <p style={{ 
            color: '#A6A9AF', 
            maxWidth: '450px',
            fontSize: '16px',
            marginBottom: '40px'
          }}>
            Interested in collaborating, discussing a project, or exploring opportunities?
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px'
        }} className="contact-grid">
          
          {/* Contact Info */}
          <div className="reveal" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px'
          }}>
            {/* Email */}
            <a 
              href="mailto:dimplesaiharika@gmail.com"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                color: '#A6A9AF',
                padding: '14px 20px',
                background: '#15191F',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'all 0.3s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(94,215,232,0.3)'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.transform = 'translateX(6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.color = '#A6A9AF'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <span style={{ 
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'rgba(94,215,232,0.08)',
                borderRadius: '10px',
                flexShrink: 0
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div>
                <div style={{ fontSize: '11px', color: '#6F747C', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                <div style={{ fontSize: '14px' }}>dimplesaiharika@gmail.com</div>
              </div>
            </a>
            
            {/* GitHub */}
            <a 
              href="https://github.com/dsh-dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                color: '#A6A9AF',
                padding: '14px 20px',
                background: '#15191F',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'all 0.3s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(94,215,232,0.3)'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.transform = 'translateX(6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.color = '#A6A9AF'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <span style={{ 
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'rgba(94,215,232,0.08)',
                borderRadius: '10px',
                flexShrink: 0
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </span>
              <div>
                <div style={{ fontSize: '11px', color: '#6F747C', textTransform: 'uppercase', letterSpacing: '0.05em' }}>GitHub</div>
                <div style={{ fontSize: '14px' }}>github.com/dsh-dev</div>
              </div>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/kalaga-dimple-sai-harikha-9405a62a2/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                color: '#A6A9AF',
                padding: '14px 20px',
                background: '#15191F',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'all 0.3s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(94,215,232,0.3)'
                e.currentTarget.style.color = 'white'
                e.currentTarget.style.transform = 'translateX(6px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.color = '#A6A9AF'
                e.currentTarget.style.transform = 'translateX(0)'
              }}
            >
              <span style={{ 
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'rgba(94,215,232,0.08)',
                borderRadius: '10px',
                flexShrink: 0
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <div>
                <div style={{ fontSize: '11px', color: '#6F747C', textTransform: 'uppercase', letterSpacing: '0.05em' }}>LinkedIn</div>
                <div style={{ fontSize: '14px' }}>linkedin.com/in/kalaga-dimple</div>
              </div>
            </a>

            {/* Status Message */}
            <div style={{
              marginTop: '8px',
              padding: '16px 20px',
              background: 'rgba(94,215,232,0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(94,215,232,0.08)'
            }}>
              <p style={{ 
                color: '#A6A9AF', 
                fontSize: '14px',
                lineHeight: 1.6,
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px'
              }}>
                <span style={{ color: '#5ED7E8', fontSize: '18px' }}>💡</span>
                <span>Currently open to internships, freelance projects, and full-time opportunities.</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="reveal" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px'
          }}>
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '12px', 
                color: '#A6A9AF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '6px',
                fontWeight: 500
              }}>
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={{
                  width: '100%',
                  background: '#101318',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  fontSize: '14px',
                  color: 'white',
                  outline: 'none',
                  transition: 'all 0.3s',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#5ED7E8'
                  e.target.style.boxShadow = '0 0 0 4px rgba(94,215,232,0.05)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.target.style.boxShadow = 'none'
                }}
                required
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '12px', 
                color: '#A6A9AF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '6px',
                fontWeight: 500
              }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="dimplesaiharika@gmail.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={{
                  width: '100%',
                  background: '#101318',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  fontSize: '14px',
                  color: 'white',
                  outline: 'none',
                  transition: 'all 0.3s',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#5ED7E8'
                  e.target.style.boxShadow = '0 0 0 4px rgba(94,215,232,0.05)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.target.style.boxShadow = 'none'
                }}
                required
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '12px', 
                color: '#A6A9AF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '6px',
                fontWeight: 500
              }}>
                Message
              </label>
              <textarea
                placeholder="Share your message, idea, or opportunity..."
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{
                  width: '100%',
                  background: '#101318',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  fontSize: '14px',
                  color: 'white',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#5ED7E8'
                  e.target.style.boxShadow = '0 0 0 4px rgba(94,215,232,0.05)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.target.style.boxShadow = 'none'
                }}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #5ED7E8, #4bc4d4)',
                color: '#080A0D',
                fontWeight: 600,
                padding: '14px 36px',
                borderRadius: '999px',
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'all 0.3s',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(94,215,232,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.04)'
                e.target.style.boxShadow = '0 8px 30px rgba(94,215,232,0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = '0 4px 20px rgba(94,215,232,0.2)'
              }}
            >
              SEND MESSAGE →
            </button>

            {sent && (
              <div style={{
                color: '#5ED7E8',
                fontSize: '14px',
                padding: '12px 18px',
                background: 'rgba(94,215,232,0.08)',
                borderRadius: '12px',
                border: '1px solid rgba(94,215,232,0.15)',
                animation: 'fadeIn 0.5s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '18px' }}>✅</span>
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}