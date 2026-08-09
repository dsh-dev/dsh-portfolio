import React from 'react'

const experiences = [
  {
    company: 'VaultofCodes',
    role: 'Web Development Intern',
    duration: 'Internship',
    description:
      'Worked on web development projects and developed Squid-Pentathlon, gaining hands-on experience in building responsive and interactive web applications.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: '💼'
  },
  {
    company: 'Council for Skills and Competencies (CSC India)',
    role: 'MERN Stack Intern',
    duration: 'APSCHE – Student Internship Initiative',
    description:
      'Gained hands-on experience in full-stack web development by working with MongoDB, Express.js, React.js, and Node.js, while strengthening problem-solving skills and practical application development.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    icon: '🚀'
  }
]

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '100px 32px',
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
            03 / Experience
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 5vw, 60px)',
            fontWeight: 700,
            marginTop: '24px',
            marginBottom: '16px'
          }}>WORK <span style={{ color: '#5ED7E8' }}>EXPERIENCE</span></h2>
          <p style={{ color: '#A6A9AF', fontSize: '16px', marginBottom: '40px', maxWidth: '500px' }}>
            Where I've applied my skills and learned from real-world projects
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
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="reveal"
              style={{
                position: 'relative',
                animationDelay: `${idx * 0.2}s`
              }}
            >
              <div style={{
                position: 'absolute',
                left: '-39px',
                top: '6px',
                width: '14px',
                height: '14px',
                background: '#5ED7E8',
                borderRadius: '50%',
                border: '3px solid #080A0D',
                boxShadow: '0 0 20px rgba(94,215,232,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '8px'
              }} />
              
              {idx < experiences.length - 1 && (
                <div style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '20px',
                  bottom: '-20px',
                  width: '2px',
                  background: 'rgba(94,215,232,0.08)'
                }} />
              )}

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
                      <span style={{ fontSize: '24px' }}>{exp.icon}</span>
                      {exp.company}
                    </h4>
                    <p style={{ 
                      color: '#5ED7E8', 
                      fontSize: '15px',
                      fontWeight: 500,
                      marginTop: '4px'
                    }}>
                      {exp.role}
                    </p>
                  </div>
                  <span style={{
                    background: 'rgba(94,215,232,0.08)',
                    color: '#5ED7E8',
                    padding: '4px 16px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    border: '1px solid rgba(94,215,232,0.1)'
                  }}>
                    📅 {exp.duration}
                  </span>
                </div>

                <p style={{
                  color: '#A6A9AF',
                  fontSize: '14px',
                  marginTop: '12px',
                  lineHeight: 1.7
                }}>
                  {exp.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '16px'
                }}>
                  {exp.tech.map(t => (
                    <span key={t} style={{
                      background: '#101318',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      color: '#A6A9AF',
                      border: '1px solid rgba(255,255,255,0.04)',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#5ED7E8'
                      e.target.style.borderColor = 'rgba(94,215,232,0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#A6A9AF'
                      e.target.style.borderColor = 'rgba(255,255,255,0.04)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}