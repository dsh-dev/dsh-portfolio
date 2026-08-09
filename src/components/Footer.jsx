import React from 'react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: '#080A0D',
      borderTop: '1px solid rgba(255,255,255,0.04)',
      padding: '40px 32px 24px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Main Footer Content */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          paddingBottom: '24px',
          borderBottom: '1px solid rgba(255,255,255,0.04)'
        }}>
          {/* Left - Brand */}
          <div>
            <div style={{ 
              fontSize: '28px', 
              fontWeight: 700, 
              color: 'white',
              letterSpacing: '-0.02em'
            }}>
              DSH
            </div>
            <p style={{
              fontSize: '12px',
              color: '#6F747C',
              marginTop: '4px',
              letterSpacing: '0.05em'
            }}>
              Full Stack Developer
            </p>
          </div>

          {/* Right - Social Icons */}
          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <a 
              href="https://github.com/dsh-dev" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: '#15191F',
                borderRadius: '50%',
                color: '#A6A9AF',
                textDecoration: 'none',
                transition: 'all 0.3s',
                border: '1px solid rgba(255,255,255,0.04)',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#5ED7E8'
                e.target.style.color = '#080A0D'
                e.target.style.borderColor = '#5ED7E8'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#15191F'
                e.target.style.color = '#A6A9AF'
                e.target.style.borderColor = 'rgba(255,255,255,0.04)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              🐙
            </a>
            <a 
              href="https://www.linkedin.com/in/kalaga-dimple-sai-harikha-9405a62a2/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: '#15191F',
                borderRadius: '50%',
                color: '#A6A9AF',
                textDecoration: 'none',
                transition: 'all 0.3s',
                border: '1px solid rgba(255,255,255,0.04)',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#5ED7E8'
                e.target.style.color = '#080A0D'
                e.target.style.borderColor = '#5ED7E8'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#15191F'
                e.target.style.color = '#A6A9AF'
                e.target.style.borderColor = 'rgba(255,255,255,0.04)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              🔗
            </a>
            <a 
              href="mailto:dimplesaiharika@gmail.com" 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: '#15191F',
                borderRadius: '50%',
                color: '#A6A9AF',
                textDecoration: 'none',
                transition: 'all 0.3s',
                border: '1px solid rgba(255,255,255,0.04)',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#5ED7E8'
                e.target.style.color = '#080A0D'
                e.target.style.borderColor = '#5ED7E8'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#15191F'
                e.target.style.color = '#A6A9AF'
                e.target.style.borderColor = 'rgba(255,255,255,0.04)'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              ✉
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
            <span>© 2026 DSH. All rights reserved.</span>
            <span style={{ 
              width: '4px', 
              height: '4px', 
              background: '#6F747C', 
              borderRadius: '50%',
              display: 'inline-block'
            }} />
            <span style={{ fontSize: '12px' }}>
              Built with React • Vite
            </span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: '#6F747C',
              cursor: 'pointer',
              fontSize: '13px',
              transition: 'all 0.3s',
              padding: '8px 16px',
              borderRadius: '999px',
              fontFamily: 'inherit'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'white'
              e.target.style.background = 'rgba(255,255,255,0.05)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6F747C'
              e.target.style.background = 'transparent'
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