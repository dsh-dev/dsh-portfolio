import React from 'react'

const skillsData = [
  {
    category: 'PROGRAMMING',
    icon: '⌘',
    skills: ['Java', 'Python', 'JavaScript', 'C']
  },
  {
    category: 'FRONTEND',
    icon: '◈',
    skills: ['HTML', 'CSS', 'React.js', 'Bootstrap', 'EJS']
  },
  {
    category: 'BACKEND & APIs',
    icon: '◇',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'API Integration']
  },
  {
    category: 'DATABASES',
    icon: '▣',
    skills: ['MySQL', 'MongoDB']
  },
  {
    category: 'TOOLS & DESIGN',
    icon: '⚙',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma']
  }
]

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '100px 32px',
      background: '#101318',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    }}>
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute',
        left: '-200px',
        bottom: '-200px',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(94,215,232,0.02) 0%, transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%'
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="reveal">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px'
          }}>
            <span style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.35em',
              color: '#6F747C',
              borderBottom: '1px solid rgba(94,215,232,0.25)',
              paddingBottom: '8px',
              display: 'inline-block'
            }}>
              02 / Skills
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(36px, 4.5vw, 52px)',
            fontWeight: 700,
            marginTop: '16px',
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            TECHNICAL <span style={{ color: '#5ED7E8' }}>SKILLS</span>
          </h2>
          <p style={{ 
            color: '#A6A9AF', 
            fontSize: '16px', 
            marginBottom: '48px', 
            maxWidth: '500px',
            lineHeight: 1.7
          }}>
            Technologies and tools I work with regularly
          </p>
        </div>

        {/* 3-Column Grid for Desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px'
        }} className="skills-grid">
          {skillsData.map((col, idx) => (
            <div 
              key={idx} 
              className="reveal"
              style={{
                background: '#15191F',
                padding: '28px 32px 32px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(94,215,232,0.25)'
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              {/* Subtle gradient accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(94,215,232,0.3), transparent)',
                opacity: 0.6
              }} />

              <h4 style={{
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#5ED7E8',
                marginBottom: '20px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255,255,255,0.04)'
              }}>
                <span style={{ 
                  fontSize: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  background: 'rgba(94,215,232,0.06)',
                  borderRadius: '8px',
                  border: '1px solid rgba(94,215,232,0.06)'
                }}>
                  {col.icon}
                </span>
                {col.category}
              </h4>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                {col.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      padding: '7px 18px',
                      borderRadius: '20px',
                      fontSize: '13px',
                      color: '#E8E8E8',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      fontWeight: 400,
                      letterSpacing: '0.01em',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(94,215,232,0.12)'
                      e.currentTarget.style.borderColor = 'rgba(94,215,232,0.25)'
                      e.currentTarget.style.color = '#5ED7E8'
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(94,215,232,0.12)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.color = '#E8E8E8'
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .skills-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}