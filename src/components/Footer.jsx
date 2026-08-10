import React from 'react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: '#101318',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 32px 28px',
      marginTop: '0'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Main Footer Content */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          paddingBottom: '28px',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>
          {/* Left - Brand */}
          <div>
            <div style={{ 
              fontSize: '28px', 
              fontWeight: 700, 
              color: '#F5F5F5',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              DSH
              <span style={{
                fontSize: '10px',
                color: '#5ED7E8',
                fontWeight: 400,
                letterSpacing: '0.1em',
                opacity: 0.8
              }}>
                dev
              </span>
            </div>
            <p style={{
              fontSize: '13px',
              color: '#A6A9AF',
              marginTop: '4px',
              letterSpacing: '0.05em'
            }}>
              Full Stack Developer 
            </p>
          </div>

          {/* Right - Social Icons */}
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <a 
              href="https://github.com/dsh-dev" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '50%',
                color: '#A6A9AF',
                textDecoration: 'none',
                transition: 'all 0.3s',
                border: '1px solid rgba(255,255,255,0.06)',
                fontSize: '18px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#5ED7E8'
                e.target.style.color = '#080A0D'
                e.target.style.borderColor = '#5ED7E8'
                e.target.style.transform = 'translateY(-3px) scale(1.05)'
                e.target.style.boxShadow = '0 8px 25px rgba(94,215,232,0.25)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.04)'
                e.target.style.color = '#A6A9AF'
                e.target.style.borderColor = 'rgba(255,255,255,0.06)'
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/kalaga-dimple-sai-harikha-9405a62a2/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '50%',
                color: '#A6A9AF',
                textDecoration: 'none',
                transition: 'all 0.3s',
                border: '1px solid rgba(255,255,255,0.06)',
                fontSize: '18px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#5ED7E8'
                e.target.style.color = '#080A0D'
                e.target.style.borderColor = '#5ED7E8'
                e.target.style.transform = 'translateY(-3px) scale(1.05)'
                e.target.style.boxShadow = '0 8px 25px rgba(94,215,232,0.25)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.04)'
                e.target.style.color = '#A6A9AF'
                e.target.style.borderColor = 'rgba(255,255,255,0.06)'
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:dimplesaiharika@gmail.com" 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '50%',
                color: '#A6A9AF',
                textDecoration: 'none',
                transition: 'all 0.3s',
                border: '1px solid rgba(255,255,255,0.06)',
                fontSize: '18px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#5ED7E8'
                e.target.style.color = '#080A0D'
                e.target.style.borderColor = '#5ED7E8'
                e.target.style.transform = 'translateY(-3px) scale(1.05)'
                e.target.style.boxShadow = '0 8px 25px rgba(94,215,232,0.25)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.04)'
                e.target.style.color = '#A6A9AF'
                e.target.style.borderColor = 'rgba(255,255,255,0.06)'
                e.target.style.transform = 'translateY(0) scale(1)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '24px',
          gap: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: '13px',
            color: '#6F747C'
          }}>
            <span>© 2026 <span style={{ color: '#F5F5F5' }}>DSH</span>. All rights reserved.</span>
            <span style={{ 
              width: '3px', 
              height: '3px', 
              background: '#6F747C', 
              borderRadius: '50%',
              display: 'inline-block'
            }} />
            <span style={{ fontSize: '12px' }}>
              Built with <span style={{ color: '#5ED7E8' }}>React</span> • Vite
            </span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#A6A9AF',
              cursor: 'pointer',
              fontSize: '12px',
              transition: 'all 0.3s',
              padding: '8px 18px',
              borderRadius: '999px',
              fontFamily: 'inherit'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'white'
              e.target.style.background = 'rgba(94,215,232,0.1)'
              e.target.style.borderColor = 'rgba(94,215,232,0.2)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#A6A9AF'
              e.target.style.background = 'rgba(255,255,255,0.04)'
              e.target.style.borderColor = 'rgba(255,255,255,0.06)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <span style={{ fontSize: '16px' }}>↑</span>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}