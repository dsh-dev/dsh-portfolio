import React, { useState } from 'react'

const certifications = [
  {
    title: 'The Web Developer Bootcamp 2026',
    org: 'Udemy',
    year: '2026',
    desc: 'Completed comprehensive training in modern web development, covering HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, SQL, Git, and REST APIs.',
    link: 'https://www.linkedin.com/posts/kalaga-dimple-sai-harikha-9405a62a2_certificate-activity-7481934906718048256--lrd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkO88AB78XUSRcRF5fV1ryA_TCjQ3XKE1g',
    icon: '💻'
  },

  {
    title: 'Java (Basic) Certificate',
    org: 'HackerRank',
    year: '2025',
    desc: 'Validated foundational Java skills including object-oriented programming, problem-solving, and core programming concepts.',
    link: 'https://www.linkedin.com/posts/kalaga-dimple-sai-harikha-9405a62a2_java-basic-certificate-activity-7437845405385764865-7kcB?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkO88AB78XUSRcRF5fV1ryA_TCjQ3XKE1g',
    icon: '☕'
  },

  {
    title: 'Java Full Stack Certification',
    org: 'EduSkills Academy',
    year: '2024',
    desc: 'Completed Java Full Stack training, strengthening skills in full-stack development and preparing for real-world software development projects.',
    link: 'https://www.linkedin.com/posts/kalaga-dimple-sai-harikha-9405a62a2_java-full-stack-virtual-internship-certificate-activity-7279804885498306560-zqE2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkO88AB78XUSRcRF5fV1ryA_TCjQ3XKE1g',
    icon: '🚀'
  },

  {
    title: 'Introduction to Figma',
    org: 'Figma',
    year: '2025',
    desc: 'Completed foundational training in interface design, prototyping, and design thinking for UI/UX development.',
    link: 'https://www.linkedin.com/posts/kalaga-dimple-sai-harikha-9405a62a2_introduction-to-figma-activity-7434615394604281857-9brG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkO88AB78XUSRcRF5fV1ryA_TCjQ3XKE1g',
    icon: '🎨'
  },

  {
    title: 'JavaScript Essentials 1',
    org: 'Cisco Networking Academy',
    year: '2025',
    desc: 'Completed foundational training in JavaScript programming and problem-solving through Cisco Networking Academy.',
    link: 'https://www.linkedin.com/posts/kalaga-dimple-sai-harikha-9405a62a2_certificate-activity-7306377912687960064-kzdi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEkO88AB78XUSRcRF5fV1ryA_TCjQ3XKE1g',
    icon: '📜'
  }
]

export default function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications" style={{
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
            06 / Certifications
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 5vw, 60px)',
            fontWeight: 700,
            marginTop: '24px',
            marginBottom: '16px'
          }}>CERTIFICATIONS</h2>
          <p style={{ color: '#A6A9AF', fontSize: '16px', marginBottom: '40px', maxWidth: '500px' }}>
            Click on any certification to view details
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px'
        }} className="certs-grid">
          {certifications.map((cert, i) => (
            <div 
              key={i}
              className="reveal"
              style={{
                animationDelay: `${i * 0.1}s`
              }}
            >
              <div 
                onClick={() => setSelected(cert)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  background: '#15191F',
                  padding: '24px 28px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.04)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(94,215,232,0.3)'
                  e.currentTarget.style.transform = 'translateX(10px)'
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  fontSize: '36px',
                  lineHeight: 1,
                  flexShrink: 0
                }}>
                  {cert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    fontSize: '16px', 
                    fontWeight: 600,
                    color: '#F5F5F5'
                  }}>
                    {cert.title}
                  </h4>
                  <p style={{ 
                    color: '#5ED7E8', 
                    fontSize: '13px',
                    fontWeight: 500
                  }}>
                    {cert.org} • {cert.year}
                  </p>
                </div>
                <div style={{
                  color: '#6F747C',
                  fontSize: '18px',
                  transition: 'all 0.3s'
                }}>
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Detail Modal */}
      {selected && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(8,10,13,0.92)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          animation: 'fadeInModal 0.3s ease'
        }} onClick={() => setSelected(null)}>
          <div style={{
            background: '#15191F',
            maxWidth: '550px',
            width: '100%',
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            animation: 'slideUp 0.3s ease',
            position: 'relative'
          }} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={() => setSelected(null)} 
              style={{
                position: 'absolute',
                top: '16px',
                right: '20px',
                background: 'rgba(255,255,255,0.05)',
                border: 'none',
                color: '#A6A9AF',
                cursor: 'pointer',
                fontSize: '20px',
                padding: '6px 12px',
                borderRadius: '8px',
                transition: 'all 0.3s',
                fontFamily: 'inherit'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)'
                e.target.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.05)'
                e.target.style.color = '#A6A9AF'
              }}
            >
              ✕
            </button>

            {/* Certification Icon */}
            <div style={{
              fontSize: '64px',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              {selected.icon}
            </div>

            {/* Title */}
            <h3 style={{
              fontSize: '24px',
              fontWeight: 700,
              color: '#F5F5F5',
              textAlign: 'center',
              marginBottom: '8px'
            }}>
              {selected.title}
            </h3>

            {/* Organization & Year */}
            <p style={{
              color: '#5ED7E8',
              fontSize: '16px',
              fontWeight: 500,
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              {selected.org} • {selected.year}
            </p>

            {/* Description */}
            <p style={{
              color: '#A6A9AF',
              fontSize: '15px',
              lineHeight: 1.7,
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              {selected.desc}
            </p>

            {/* View Certificate Button */}
            <a 
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #5ED7E8, #4bc4d4)',
                color: '#080A0D',
                fontWeight: 600,
                padding: '14px 32px',
                borderRadius: '999px',
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 20px rgba(94,215,232,0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.03)'
                e.target.style.boxShadow = '0 8px 30px rgba(94,215,232,0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'
                e.target.style.boxShadow = '0 4px 20px rgba(94,215,232,0.2)'
              }}
            >
              View Certificate →
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  )
}