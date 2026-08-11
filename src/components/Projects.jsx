import React, { useState } from 'react'
import fixoraImage from '../assets/projects/hostelpic.png'
import recipeImage from '../assets/projects/recipe.png'
import squidImage from '../assets/projects/squid.png'
const projects = [
  {
  id: 1,
  title: 'FIXORA',
  desc: 'AI-Powered Hostel Complaint Management System',

  problem:
    'Managing hostel complaints manually can make it difficult for students to track issues and for wardens to efficiently organize and resolve complaints.',

  solution:
    'A full-stack complaint management platform that allows students to submit and track complaints while providing wardens with a dedicated dashboard for managing and resolving them.',

  features: [
    'Role-based authentication',
    'Student complaint submission',
    'Image-based complaints',
    'Complaint tracking',
    'AI complaint categorization',
    'Priority prediction',
    'AI-generated summaries',
    'Complaint status management',
    'Warden dashboard'
  ],

  tech: [
    'Node.js',
    'Express.js',
    'MySQL',
    'EJS',
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'Groq API',
    'JWT',
    'Git',
    'GitHub'
  ],

  repo: 'https://github.com/dsh-dev/Fixora',
  live: 'YOUR_LIVE_URL',
  image: fixoraImage,
  icon: '🏢'
},
    {
  id: 2,
  title: 'SQUID-PENTATHLON',
  desc: 'Interactive Squid Game-Inspired Web Experience',

  problem:
    'Create an engaging and visually immersive web experience using modern frontend techniques.',

  solution:
    'Designed and developed a multi-section interactive website inspired by the visual style and structure of Squid Game, featuring themed layouts, animations, transitions, and responsive interactions.',

  features: [
    'Multi-section themed layout',
    'Game-inspired UI',
    'Custom animations',
    'Hover interactions',
    'Section transitions',
    'Responsive design',
    'Mobile-friendly interface'
  ],

  tech: [
    'HTML',
    'CSS',
    'JavaScript',
    'CSS Animations',
    'Responsive Design'
  ],

  repo: 'https://github.com/dsh-dev/squid-pentathlon',
  live: 'https://squid-pentathlon.vercel.app/',
  image: squidImage,
  icon: '🎮'
},
  {
  id: 3,
  title: 'RECIPE COLLECTION',
  desc: 'Responsive Recipe Collection Website',

  problem:
    'Recipe information can become difficult to browse when ingredients and preparation steps are not organized clearly.',

  solution:
    'A clean and responsive recipe website that presents Indian and international recipes with ingredients, servings, and step-by-step preparation instructions.',

  features: [
    'Recipe collection',
    'Recipe cards',
    'Ingredients and servings',
    'Step-by-step instructions',
    'Responsive design',
    'Indian and international recipes'
  ],

  tech: [
    'HTML5',
    'CSS3',
    'JavaScript'
  ],

  repo: 'https://github.com/dsh-dev/recipe-collection',
  live: 'https://dshrecipe-collection.netlify.app/',
  image: recipeImage,
  icon: '🍛'
}
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" style={{
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
            04 / Projects
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 5vw, 60px)',
            fontWeight: 700,
            marginTop: '24px',
            marginBottom: '16px'
          }}>SELECTED <span style={{ color: '#5ED7E8' }}>WORK</span></h2>
          <p style={{ color: '#A6A9AF', fontSize: '16px', marginBottom: '40px', maxWidth: '500px' }}>
            Click on any project to view details, repository, and live demo
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px'
        }} className="projects-grid">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              className="reveal"
              style={{
                animationDelay: `${idx * 0.1}s`
              }}
              onClick={() => setSelected(p)}
            >
              <div style={{
                background: '#15191F',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.04)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(94,215,232,0.3)'
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
              }}>
                <div style={{
                  height: '200px',
                  background: `url(${p.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative'
                }}>
                  {p.status && (
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      background: 'rgba(94,215,232,0.9)',
                      color: '#080A0D',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      fontWeight: 600,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                    }}>{p.status}</span>
                  )}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60%',
                    background: 'linear-gradient(transparent, #15191F)'
                  }} />
                </div>

                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ 
                      color: '#5ED7E8', 
                      fontSize: '12px', 
                      fontFamily: 'monospace',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{ fontSize: '18px' }}>{p.icon}</span>
                      0{p.id}
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    marginTop: '8px',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#5ED7E8'}
                  onMouseLeave={(e) => e.target.style.color = '#F5F5F5'}>
                    {p.title}
                  </h3>
                  <p style={{ color: '#A6A9AF', fontSize: '14px', marginTop: '4px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} style={{
                        background: '#101318',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        fontSize: '11px',
                        color: '#A6A9AF',
                        border: '1px solid rgba(255,255,255,0.04)'
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(8,10,13,0.92)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          animation: 'fadeInModal 0.3s ease'
        }} onClick={() => setSelected(null)}>
          <div style={{
            background: '#15191F',
            maxWidth: '700px',
            width: '100%',
            borderRadius: '20px',
            padding: '40px',
            maxHeight: '90vh',
            overflowY: 'auto',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            animation: 'slideUp 0.3s ease'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ 
                  color: '#5ED7E8', 
                  fontSize: '12px', 
                  fontFamily: 'monospace',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '24px' }}>{selected.icon}</span>
                  0{selected.id}
                </span>
                <h3 style={{ fontSize: '28px', fontWeight: 700, marginTop: '4px' }}>{selected.title}</h3>
              </div>
              <button 
                onClick={() => setSelected(null)} 
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  color: '#A6A9AF',
                  cursor: 'pointer',
                  fontSize: '20px',
                  padding: '8px 14px',
                  borderRadius: '10px',
                  transition: 'all 0.3s'
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
            </div>
            
            <p style={{ color: '#A6A9AF', marginTop: '12px', fontSize: '15px' }}>{selected.desc}</p>

            {selected.problem && (
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#5ED7E8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>⚠️ Problem</h4>
                <p style={{ color: '#A6A9AF', fontSize: '14px', marginTop: '4px' }}>{selected.problem}</p>
              </div>
            )}

            {selected.solution && (
              <div style={{ marginTop: '16px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#5ED7E8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>💡 Solution</h4>
                <p style={{ color: '#A6A9AF', fontSize: '14px', marginTop: '4px' }}>{selected.solution}</p>
              </div>
            )}

            {selected.features && (
              <div style={{ marginTop: '16px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#5ED7E8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>✨ Features</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                  {selected.features.map(f => (
                    <span key={f} style={{
                      background: '#101318',
                      padding: '4px 14px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      color: '#A6A9AF',
                      border: '1px solid rgba(255,255,255,0.04)'
                    }}>{f}</span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#5ED7E8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🛠️ Tech Stack</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
                {selected.tech.map(t => (
                  <span key={t} style={{
                    background: '#101318',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    color: '#A6A9AF',
                    border: '1px solid rgba(255,255,255,0.04)'
                  }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '32px' }}>
              <a 
                href={selected.repo || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#5ED7E8',
                  color: '#080A0D',
                  fontWeight: 600,
                  padding: '12px 28px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 16px rgba(94,215,232,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#4bc4d4'
                  e.target.style.transform = 'scale(1.04)'
                  e.target.style.boxShadow = '0 8px 30px rgba(94,215,232,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#5ED7E8'
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = '0 4px 16px rgba(94,215,232,0.2)'
                }}
              >
                📦 View Repository
              </a>
              {selected.live && selected.live !== '#' && (
                <a 
                  href={selected.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: '1px solid rgba(255,255,255,0.2)',
                    padding: '12px 28px',
                    borderRadius: '999px',
                    fontSize: '14px',
                    background: 'transparent',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255,255,255,0.05)'
                    e.target.style.borderColor = 'rgba(255,255,255,0.4)'
                    e.target.style.transform = 'scale(1.04)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent'
                    e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.target.style.transform = 'scale(1)'
                  }}
                >
                  🚀 Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .projects-grid {
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
