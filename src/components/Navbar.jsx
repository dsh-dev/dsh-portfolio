import React, { useState, useEffect } from 'react'

const navItems = ['HOME', 'ABOUT', 'SKILLS', 'EXPERIENCE', 'PROJECTS', 'CODING', 'CERTIFICATIONS', 'EDUCATION', 'CONTACT']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('HOME')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)

      const sections = navItems.map(item => item.toLowerCase())
      let current = 'HOME'
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            current = id.toUpperCase()
          }
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) {
      const navbarHeight = 80
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setActive(id)
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActive('HOME')
    setIsOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: scrolled ? '92%' : '94%',
        maxWidth: '1300px',
        zIndex: 9999,
        padding: '10px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled 
          ? 'rgba(8, 10, 13, 0.85)' 
          : 'rgba(8, 10, 13, 0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '16px',
        boxShadow: scrolled 
          ? '0 20px 60px rgba(0,0,0,0.5)' 
          : '0 10px 40px rgba(0,0,0,0.3)'
      }}>
        {/* Logo */}
        <button 
          onClick={scrollToTop}
          style={{
            fontSize: '22px',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-0.02em',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#5ED7E8'
            e.currentTarget.style.transform = 'scale(1.03)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'white'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            background: '#5ED7E8',
            borderRadius: '50%',
            animation: 'pulseGlow 2s infinite',
            boxShadow: '0 0 20px rgba(94,215,232,0.3)'
          }} />
          DSH
          <span style={{
            fontSize: '10px',
            color: '#5ED7E8',
            fontWeight: 400,
            letterSpacing: '0.1em',
            opacity: 0.7
          }}>
            dev
          </span>
        </button>

        {/* Desktop Navigation - Aligned to Right */}
        <ul style={{
          display: 'none',
          gap: '6px',
          listStyle: 'none',
          alignItems: 'center',
          marginLeft: 'auto'
        }} className="md-flex">
          {navItems.map(item => {
            const isActive = active === item
            return (
              <li key={item}>
                <button 
                  onClick={() => scrollTo(item)} 
                  style={{
                    background: isActive ? 'rgba(94,215,232,0.12)' : 'transparent',
                    border: 'none',
                    color: isActive ? '#5ED7E8' : '#A6A9AF',
                    cursor: 'pointer',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: isActive ? 600 : 400,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    fontFamily: 'inherit',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'white'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#A6A9AF'
                      e.currentTarget.style.background = 'transparent'
                    }
                  }}
                >
                  {item}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '0px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '16px',
                      height: '2px',
                      background: '#5ED7E8',
                      borderRadius: '2px',
                      boxShadow: '0 0 20px rgba(94,215,232,0.3)',
                      animation: 'fadeIn 0.3s ease'
                    }} />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button - No "Let's Talk" */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{
            display: 'block',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.06)',
            color: 'white',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '10px',
            fontSize: '20px',
            transition: 'all 0.3s',
            fontFamily: 'inherit'
          }} 
          className="md-none"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9998,
          background: 'rgba(8,10,13,0.92)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          animation: 'fadeIn 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px'
        }} onClick={() => setIsOpen(false)}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: '100%',
            maxWidth: '400px',
            padding: '32px',
            background: 'rgba(21,25,31,0.6)',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.06)',
            animation: 'slideDown 0.3s ease'
          }} onClick={(e) => e.stopPropagation()}>
            {/* Logo in mobile menu */}
            <div style={{
              fontSize: '28px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              <span style={{ color: '#5ED7E8' }}>DSH</span>
              <span style={{ fontSize: '14px', color: '#6F747C', fontWeight: 400, marginLeft: '8px' }}>dev</span>
            </div>

            {navItems.map(item => {
              const isActive = active === item
              return (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item)} 
                  style={{
                    background: isActive ? 'rgba(94,215,232,0.1)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(94,215,232,0.2)' : 'rgba(255,255,255,0.03)',
                    color: isActive ? '#5ED7E8' : '#A6A9AF',
                    cursor: 'pointer',
                    fontSize: '15px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    textAlign: 'center',
                    padding: '14px 20px',
                    borderRadius: '12px',
                    transition: 'all 0.3s',
                    fontFamily: 'inherit',
                    fontWeight: isActive ? 600 : 400
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                      e.currentTarget.style.color = 'white'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#A6A9AF'
                    }
                  }}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .md-flex { display: flex !important; }
          .md-none { display: none !important; }
        }
        @media (max-width: 991px) {
          .md-flex { display: none !important; }
          .md-none { display: block !important; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { 
            opacity: 1;
            box-shadow: 0 0 20px rgba(94,215,232,0.3);
          }
          50% { 
            opacity: 0.5;
            box-shadow: 0 0 40px rgba(94,215,232,0.5);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}