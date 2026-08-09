import React from 'react'

const educationData = [
  {
    year: '2023 — 2027',
    title: 'B.Tech in Computer Science & Engineering',
    institution: "Vignan's Institute of Information Technology",
    description: 'CGPA: 9.28',
    icon: '🎓'
  },
  {
    year: '2021 — 2023',
    title: 'Intermediate — MPC',
    institution: 'Narayana Junior College',
    description: 'Percentage: 97.5%',
    icon: '📚'
  },
  {
    year: '2020 — 2021',
    title: 'Secondary Education — Class X',
    institution: 'Jubilee English Medium School',
    description: 'Percentage: 100%',
    icon: '🏫'
  }
]

export default function Education() {
  return (
    <section id="education" style={{
      padding: '100px 32px',
      background: '#101318',
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
            07 / Education
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 5vw, 60px)',
            fontWeight: 700,
            marginTop: '24px',
            marginBottom: '16px'
          }}>EDUCATION <span style={{ color: '#5ED7E8' }}>TIMELINE</span></h2>
          <p style={{ 
            color: '#A6A9AF', 
            fontSize: '16px', 
            marginBottom: '40px', 
            maxWidth: '500px' 
          }}>
            My academic journey from school to university
          </p>
        </div>

        <div style={{
          position: 'relative',
          paddingLeft: '32px',
          borderLeft: '2px solid rgba(94,215,232,0.15)',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          {educationData.map((edu, idx) => (
            <div 
              key={idx} 
              className="reveal"
              style={{
                position: 'relative',
                animationDelay: `${idx * 0.15}s`
              }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '-39px',
                top: '6px',
                width: '14px',
                height: '14px',
                background: '#5ED7E8',
                borderRadius: '50%',
                border: '3px solid #101318',
                boxShadow: '0 0 20px rgba(94,215,232,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px'
              }} />
              
              {/* Timeline Line Connector */}
              {idx < educationData.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '20px',
                  bottom: '-20px',
                  width: '2px',
                  background: 'rgba(94,215,232,0.08)'
                }} />
              )}

              {/* Education Card */}
              <div style={{
                background: '#15191F',
                padding: '28px 32px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'all 0.4s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(94,215,232,0.2)'
                e.currentTarget.style.transform = 'translateX(8px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
              }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div>
                    <h4 style={{ 
                      fontSize: '20px', 
                      fontWeight: 700,
                      color: '#F5F5F5',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{ fontSize: '22px' }}>{edu.icon}</span>
                      {edu.title}
                    </h4>
                    <p style={{ 
                      color: '#5ED7E8', 
                      fontSize: '15px',
                      fontWeight: 500,
                      marginTop: '4px'
                    }}>
                      {edu.institution}
                    </p>
                  </div>
                  <span style={{
                    background: 'rgba(94,215,232,0.08)',
                    color: '#5ED7E8',
                    padding: '4px 16px',
                    borderRadius: '999px',
                    fontSize: '13px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    border: '1px solid rgba(94,215,232,0.06)'
                  }}>
                    {edu.year}
                  </span>
                </div>

                <p style={{
                  color: '#A6A9AF',
                  fontSize: '14px',
                  marginTop: '12px',
                  lineHeight: 1.6
                }}>
                  {edu.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '16px'
                }}>
                  {edu.courses && edu.courses.map((course) => (
                    <span key={course} style={{
                      background: '#101318',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      color: '#A6A9AF',
                      border: '1px solid rgba(255,255,255,0.04)',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#5ED7E8'
                      e.currentTarget.style.borderColor = 'rgba(94,215,232,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#A6A9AF'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                    }}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}