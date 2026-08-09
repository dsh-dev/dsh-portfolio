import React from 'react'

const topics = [
  'Arrays & Strings',
  'Hashing',
  'Linked Lists',
  'Stacks & Queues',
  'Binary Search',
  'Two Pointers',
  'Sliding Window',
  'Sorting',
  'Trees & BST',
  'Heaps & Priority Queues',
  'Graphs',
  'Greedy Algorithms',
  'Backtracking',
  'Dynamic Programming',
  'Bit Manipulation'
]

export default function CodingStats() {
  return (
    <section id="coding" style={{
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
            05 / Coding
          </span>
          <h2 style={{
            fontSize: 'clamp(40px, 5vw, 60px)',
            fontWeight: 700,
            marginTop: '24px',
            marginBottom: '16px'
          }}>PROBLEM <span style={{ color: '#5ED7E8' }}>SOLVING</span></h2>
          <p style={{ color: '#A6A9AF', fontSize: '16px', marginBottom: '40px', maxWidth: '500px' }}>
            DSA practice and competitive programming achievements
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '32px'
        }} className="coding-grid">
          <div className="reveal" style={{
            background: '#15191F',
            padding: '32px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.04)',
            transition: 'all 0.4s ease',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(94,215,232,0.2)'
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
              <span style={{ fontSize: '40px' }}>📊</span>
              <div>
                <div style={{ fontSize: '48px', fontWeight: 700, color: '#5ED7E8' }}>550+</div>
                <p style={{ color: '#A6A9AF', fontSize: '14px' }}>Problems Solved</p>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.05)', 
                paddingBottom: '10px' 
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>💻</span> LeetCode
                </span>
                <span style={{ color: '#A6A9AF', fontFamily: 'monospace' }}>Max Rating: 1649</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.05)', 
                paddingBottom: '10px' 
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🏆</span> CodeChef
                </span>
                <span style={{ color: '#A6A9AF', fontFamily: 'monospace' }}>2 Star · 1439</span>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>⭐</span> LeetCode
                </span>
                <span style={{ color: '#A6A9AF', fontFamily: 'monospace' }}>100 Days Badge</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <a 
                href="https://leetcode.com/u/dimplesai26/" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#5ED7E8',
                  color: '#080A0D',
                  fontWeight: 600,
                  padding: '8px 20px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#4bc4d4'
                  e.target.style.transform = 'scale(1.04)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#5ED7E8'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                LeetCode →
              </a>
              <a 
                href="https://www.codechef.com/users/dimplesai26"  
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '8px 20px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  background: 'transparent',
                  color: '#A6A9AF',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.05)'
                  e.target.style.color = 'white'
                  e.target.style.borderColor = 'rgba(255,255,255,0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#A6A9AF'
                  e.target.style.borderColor = 'rgba(255,255,255,0.2)'
                }}
              >
                CodeChef →
              </a>
            </div>
          </div>

          <div className="reveal" style={{
            background: '#15191F',
            padding: '32px',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.04)',
            transition: 'all 0.4s ease',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(94,215,232,0.2)'
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'
          }}>
            <h4 style={{
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#5ED7E8',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>📚</span> DSA Topics
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {topics.map(t => (
                <span key={t} style={{
                  background: '#101318',
                  padding: '6px 16px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  color: '#A6A9AF',
                  border: '1px solid rgba(255,255,255,0.04)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#5ED7E8'
                  e.target.style.borderColor = 'rgba(94,215,232,0.2)'
                  e.target.style.transform = 'scale(1.04)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#A6A9AF'
                  e.target.style.borderColor = 'rgba(255,255,255,0.04)'
                  e.target.style.transform = 'scale(1)'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .coding-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}