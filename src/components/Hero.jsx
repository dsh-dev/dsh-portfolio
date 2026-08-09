import React from 'react'

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: '#080A0D',
      padding: '0 32px'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: 'url(https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=1600&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.12
      }} />
      
      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: 'linear-gradient(to right, #080A0D 0%, rgba(8,10,13,0.7) 50%, transparent 100%)'
      }} />

      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '80px 0',
        width: '100%'
      }}>
        {/* Name Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(94,215,232,0.08)',
          border: '1px solid rgba(94,215,232,0.15)',
          padding: '8px 20px 8px 16px',
          borderRadius: '999px',
          marginBottom: '24px'
        }}>
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            background: '#5ED7E8',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }} />
          <span style={{
            fontSize: '13px',
            color: '#5ED7E8',
            fontWeight: 500,
            letterSpacing: '0.05em'
          }}>
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Name / Title */}
        <div style={{
          marginBottom: '8px'
        }}>
          <span style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            fontWeight: 400,
            color: '#A6A9AF',
            letterSpacing: '0.15em',
            textTransform: 'uppercase'
          }}>
            Hello, I'm
          </span>
        </div>

        {/* Your Name */}
        <h1 style={{
          fontSize: 'clamp(42px, 6vw, 72px)',
          fontWeight: 700,
          color: '#F5F5F5',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '8px'
        }}>
          KALAGA DIMPLE SAI HARIKHA
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(20px, 2.5vw, 32px)',
          fontWeight: 500,
          color: '#5ED7E8',
          marginBottom: '24px',
          letterSpacing: '-0.01em'
        }}>
          Full Stack Developer
        </p>

        {/* Description */}
        <p style={{
          maxWidth: '550px',
          color: '#A6A9AF',
          fontSize: 'clamp(15px, 1.2vw, 18px)',
          lineHeight: 1.8,
          marginBottom: '32px'
        }}>
          Computer Science student passionate about building scalable full-stack applications, 
          solving complex problems, and exploring AI-powered solutions.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <button 
            onClick={() => {
              const el = document.getElementById('projects')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              background: '#5ED7E8',
              color: '#080A0D',
              fontWeight: 600,
              padding: '14px 36px',
              borderRadius: '999px',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#4bc4d4'
              e.target.style.transform = 'scale(1.04)'
              e.target.style.boxShadow = '0 10px 30px rgba(94,215,232,0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#5ED7E8'
              e.target.style.transform = 'scale(1)'
              e.target.style.boxShadow = 'none'
            }}
          >
            VIEW MY WORK →
          </button>
          
          <button 
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '14px 36px',
              borderRadius: '999px',
              fontSize: '14px',
              background: 'transparent',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.05)'
              e.target.style.borderColor = 'rgba(255,255,255,0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
          >
            CONTACT ME
          </button>
        </div>

        {/* Social & Coding Profiles */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          marginTop: '40px',
          color: '#A6A9AF',
          alignItems: 'center'
        }}>
          {/* GitHub */}
          <a 
            href="https://github.com/dsh-dev" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#A6A9AF',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.04)'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#5ED7E8'
              e.target.style.background = 'rgba(94,215,232,0.08)'
              e.target.style.borderColor = 'rgba(94,215,232,0.15)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#A6A9AF'
              e.target.style.background = 'rgba(255,255,255,0.03)'
              e.target.style.borderColor = 'rgba(255,255,255,0.04)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/kalaga-dimple-sai-harikha-9405a62a2/" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#A6A9AF',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.04)'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#5ED7E8'
              e.target.style.background = 'rgba(94,215,232,0.08)'
              e.target.style.borderColor = 'rgba(94,215,232,0.15)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#A6A9AF'
              e.target.style.background = 'rgba(255,255,255,0.03)'
              e.target.style.borderColor = 'rgba(255,255,255,0.04)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>

          {/* Email */}
          <a 
            href="mailto:dimplesaiharika@gmail.com" 
            style={{
              color: '#A6A9AF',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.04)'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#5ED7E8'
              e.target.style.background = 'rgba(94,215,232,0.08)'
              e.target.style.borderColor = 'rgba(94,215,232,0.15)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#A6A9AF'
              e.target.style.background = 'rgba(255,255,255,0.03)'
              e.target.style.borderColor = 'rgba(255,255,255,0.04)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Email
          </a>

          {/* Divider */}
          <span style={{
            width: '1px',
            height: '30px',
            background: 'rgba(255,255,255,0.06)'
          }} />

          {/* LeetCode */}
          <a 
            href="https://leetcode.com/u/dimplesai26/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#A6A9AF',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(255,215,0,0.05)',
              border: '1px solid rgba(255,215,0,0.08)'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#FFA116'
              e.target.style.background = 'rgba(255,215,0,0.1)'
              e.target.style.borderColor = 'rgba(255,215,0,0.2)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#A6A9AF'
              e.target.style.background = 'rgba(255,215,0,0.05)'
              e.target.style.borderColor = 'rgba(255,215,0,0.08)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017c.123.312.27.615.462.903l.035.051a5.785 5.785 0 0 0 1.014 1.12l3.284 2.892a1.374 1.374 0 0 0 .972.386c.365 0 .715-.146.974-.406l.029-.029 3.834-4.124 3.854-4.126a5.266 5.266 0 0 0 1.209-2.104 5.35 5.35 0 0 0 .125-.513 5.527 5.527 0 0 0-.062-2.362 5.83 5.83 0 0 0-.349-1.017 5.938 5.938 0 0 0-.462-.903l-.035-.051a5.785 5.785 0 0 0-1.014-1.12L14.456.438A1.374 1.374 0 0 0 13.483 0zm-1.012 6.273l2.616 2.616-1.593 1.712-1.969-1.969 1.969-1.969zm-2.358 2.358l1.593-1.712 2.616 2.616-1.593 1.712-2.616-2.616zm3.378 3.378l1.969 1.969-1.969 1.969-1.969-1.969 1.969-1.969zm2.358 2.358l-1.593 1.712-2.616-2.616 1.593-1.712 2.616 2.616z"/>
            </svg>
            LeetCode
          </a>

          {/* CodeChef */}
          <a 
            href="https://www.codechef.com/users/dimplesai26" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#A6A9AF',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '8px',
              background: 'rgba(178, 102, 49, 0.05)',
              border: '1px solid rgba(178, 102, 49, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#B26631'
              e.target.style.background = 'rgba(178, 102, 49, 0.1)'
              e.target.style.borderColor = 'rgba(178, 102, 49, 0.2)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#A6A9AF'
              e.target.style.background = 'rgba(178, 102, 49, 0.05)'
              e.target.style.borderColor = 'rgba(178, 102, 49, 0.08)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.844 17.641c-.383.383-.898.575-1.543.575h-6.602c-.645 0-1.16-.192-1.543-.575-.383-.383-.575-.898-.575-1.543v-8.196c0-.645.192-1.16.575-1.543.383-.383.898-.575 1.543-.575h6.602c.645 0 1.16.192 1.543.575.383.383.575.898.575 1.543v8.196c0 .645-.192 1.16-.575 1.543z"/>
            </svg>
            CodeChef
          </a>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#6F747C',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em'
        }}>
          <span>Scroll to explore</span>
          <div style={{ 
            marginTop: '8px',
            animation: 'bounce 2s infinite',
            fontSize: '18px'
          }}>
            ↓
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}