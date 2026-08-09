import React from 'react'

export default function About() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      padding: '100px 32px',
      display: 'flex',
      alignItems: 'center',
      background: '#080A0D'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '60px',
        alignItems: 'center'
      }} className="about-grid">
        <div>
          <span style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.35em',
            color: '#6F747C',
            borderBottom: '1px solid rgba(94,215,232,0.25)',
            paddingBottom: '8px',
            display: 'inline-block'
          }}>
            01 / About
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 5vw, 60px)',
            fontWeight: 700,
            marginTop: '24px',
            marginBottom: '16px'
          }}>ABOUT ME</h2>
          
          {/* IMPROVED PARAGRAPH STYLES */}
          <div style={{
            color: '#A6A9AF',
            fontSize: '16px',
            lineHeight: 2,
            maxWidth: '540px'
          }}>
            <p style={{ 
              marginBottom: '16px',
              paddingLeft: '4px',
              borderLeft: '3px solid rgba(94,215,232,0.3)',
              paddingLeft: '16px'
            }}>
              I'm a <span style={{ color: '#F5F5F5', fontWeight: 500 }}>Computer Science Engineering</span> student passionate about building meaningful digital experiences and solving real-world problems through technology.
            </p>
            <p style={{ 
              marginBottom: '16px',
              paddingLeft: '4px'
            }}>
              I enjoy turning ideas into practical, user-focused applications and constantly improving my ability to write <span style={{ color: '#5ED7E8', fontWeight: 500 }}>clean, efficient, and maintainable</span> code.
            </p>
            <p style={{ 
              paddingLeft: '4px'
            }}>
              I'm a curious learner who enjoys exploring new technologies, working on challenging projects, and strengthening my problem-solving skills through coding. I'm always looking for opportunities to learn, build, and grow as a developer.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
            <span style={{ background: '#15191F', padding: '8px 16px', borderRadius: '999px', fontSize: '12px', color: '#A6A9AF', border: '1px solid rgba(255,255,255,0.05)' }}>Full-stack</span>
            <span style={{ background: '#15191F', padding: '8px 16px', borderRadius: '999px', fontSize: '12px', color: '#A6A9AF', border: '1px solid rgba(255,255,255,0.05)' }}>DSA</span>
            <span style={{ background: '#15191F', padding: '8px 16px', borderRadius: '999px', fontSize: '12px', color: '#A6A9AF', border: '1px solid rgba(255,255,255,0.05)' }}>UI/UX</span>
          </div>
        </div>

        {/* Professional Image */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '420px',
            aspectRatio: '1/1',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid rgba(94,215,232,0.15)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #15191F 0%, #1a2030 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              color: '#A6A9AF',
              fontSize: '14px',
              position: 'relative'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face" 
                alt="Professional headshot"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.9
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '20px',
                background: 'linear-gradient(transparent, rgba(8,10,13,0.9))',
                color: 'white',
                textAlign: 'center'
              }}>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: 600,
                  color: '#5ED7E8'
                }}>
                  Full Stack Developer
                </div>
                <div style={{ fontSize: '12px', color: '#A6A9AF' }}>
                  Building the future, one line at a time
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}