import React, { useState, useEffect, useRef } from 'react'
import { X, Send, Sparkles } from 'lucide-react'

const suggestions = [
  'What projects has she built?',
  'Tell me about Fixora.',
  'What are her strongest skills?',
  'What technologies does she know?',
  'Tell me about her internships.',
  'What is her experience with AI?',
  'What API technologies has she used?',
  'How strong is she in DSA?',
  'What are her coding achievements?',
  'Tell me about her education.',
  'What certifications does she have?',
  'Tell me about her Recipe project.',
  'Tell me about her Squid Game project.',
  'Is she available for opportunities?'
]

const responses = {
  projects:
    "She has worked on several projects, including Fixora — an AI-powered Hostel Complaint Management System, a Recipe Collection Website, and a Squid Game-inspired interactive web experience developed during her VaultofCodes internship.",

  fixora:
    'Fixora is an AI-powered Hostel Complaint Management System built with Node.js, Express.js, MySQL, EJS, HTML, CSS, Bootstrap and JavaScript. It includes role-based authentication, complaint submission and tracking, image uploads, AI-powered complaint categorization, priority prediction and summary generation using the Groq API.',

  skills:
    'Her strongest areas include full-stack web development, JavaScript, React.js, Node.js, Express.js, database management, REST API integration, AI API integration and problem-solving through Data Structures and Algorithms.',

  technologies:
    'Her technical skills include Java, Python, JavaScript and C. Her web development stack includes HTML, CSS, React.js, Node.js, Express.js, Bootstrap and EJS. She also works with MySQL, MongoDB, Git, GitHub, VS Code, Figma, REST APIs and AI API integration.',

  internships:
    'She has gained practical experience through internships including VaultofCodes and a MERN Stack Internship under the APSCHE Student Internship Initiative offered through the Council for Skills and Competencies (CSC India).',

  ai:
    'She has explored AI through her Fixora project, where she integrated the Groq API for AI-powered complaint categorization, priority prediction and summary generation. She has also worked with TensorFlow and Scikit-learn.',

  api:
    'She has experience working with REST APIs and integrating external APIs. In Fixora, she integrated the Groq API to add AI-powered functionality to the complaint management workflow.',

  dsa:
    'She has a strong interest in Data Structures and Algorithms and has practiced arrays, strings, linked lists, stacks, queues, trees, binary search, sliding window, two pointers, recursion, sorting, greedy algorithms and dynamic programming.',

  coding:
    'She has solved 243+ coding problems across platforms, earned the LeetCode 100 Days Badge, and is a CodeChef 2-Star coder with a maximum rating of 1439.',

  education:
    "She is pursuing a B.Tech in Computer Science and Engineering at Vignan's Institute of Information Technology from 2023 to 2027, with a CGPA of 9.28.",

  certifications:
    'Her certifications and learning achievements include The Web Developer Bootcamp 2026 from Udemy, Java (Basic) from HackerRank, Java Full Stack from EduSkills Academy, Introduction to Figma, and JavaScript Essentials 1 from Cisco Networking Academy.',

  recipe:
    'The Recipe Collection Website was developed during her VaultofCodes internship using HTML5, CSS3 and JavaScript. It features Indian and international recipes with ingredients, servings and step-by-step preparation instructions. The project helped strengthen her frontend development and UI/UX fundamentals.',

  squid:
    'The Squid Game-inspired project was her final project during the VaultofCodes internship. It was built using HTML, CSS and JavaScript and features themed game-level layouts, animations, responsive design, hover effects and interactive section transitions.',

  mern:
    'She completed a MERN Stack Internship under the APSCHE Student Internship Initiative. During the internship, she gained hands-on experience with MongoDB, Express.js, React.js and Node.js and strengthened her understanding of modern full-stack web development.',

  java:
    'Java is one of her core programming languages. She has practiced Java extensively for problem-solving and DSA and has earned the Java (Basic) Certificate from HackerRank.',

  frontend:
    'Her frontend skills include HTML5, CSS3, JavaScript, React.js, Bootstrap and EJS. She also has an interest in UI/UX design and uses Figma for interface design and prototyping.',

  backend:
    'Her backend experience includes Node.js, Express.js, REST APIs, authentication, middleware and database integration with MySQL and MongoDB.',

  database:
    'She has worked with both relational and NoSQL databases, particularly MySQL and MongoDB, including database integration in full-stack applications.',

  opportunities:
    'She is interested in internships, software development opportunities, full-stack development roles and opportunities where she can apply her skills in web development, AI integration and problem-solving.'
}

export default function AIChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  const endRef = useRef(null)

  // Initial chatbot message
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          from: 'bot',
          text: "Hi! I'm DSH's portfolio assistant. Ask me about her projects, skills, internships, certifications, coding achievements, or education."
        }
      ])
    }
  }, [open, messages.length])

  // Scroll to latest message
  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages, typing])

  const getResponse = (text) => {
    const lower = text.toLowerCase()

    // Fixora
    if (
      lower.includes('fixora') ||
      lower.includes('hostel complaint') ||
      lower.includes('complaint management')
    ) {
      return responses.fixora
    }

    // Projects
    if (
      lower.includes('project') ||
      lower.includes('built') ||
      lower.includes('portfolio project')
    ) {
      return responses.projects
    }

    // Recipe project
    if (
      lower.includes('recipe') ||
      lower.includes('food project')
    ) {
      return responses.recipe
    }

    // Squid Game project
    if (
      lower.includes('squid') ||
      lower.includes('squid game')
    ) {
      return responses.squid
    }

    // Skills
    if (
      lower.includes('skill') ||
      lower.includes('strongest') ||
      lower.includes('strength')
    ) {
      return responses.skills
    }

    // Technologies
    if (
      lower.includes('technolog') ||
      lower.includes('tech stack') ||
      lower.includes('stack')
    ) {
      return responses.technologies
    }

    // Internship
    if (
      lower.includes('internship') ||
      lower.includes('intern')
    ) {
      return responses.internships
    }

    // AI / ML
    if (
      lower.includes('ai') ||
      lower.includes('artificial intelligence') ||
      lower.includes('machine learning') ||
      lower.includes('ml')
    ) {
      return responses.ai
    }

    // API
    if (
      lower.includes('api') ||
      lower.includes('groq') ||
      lower.includes('rest api') ||
      lower.includes('restful')
    ) {
      return responses.api
    }

    // DSA
    if (
      lower.includes('dsa') ||
      lower.includes('data structure') ||
      lower.includes('algorithm') ||
      lower.includes('problem solving')
    ) {
      return responses.dsa
    }

    // Coding achievements
    if (
      lower.includes('leetcode') ||
      lower.includes('codechef') ||
      lower.includes('coding') ||
      lower.includes('rating') ||
      lower.includes('problems solved')
    ) {
      return responses.coding
    }

    // Education
    if (
      lower.includes('education') ||
      lower.includes('college') ||
      lower.includes('university') ||
      lower.includes('cgpa') ||
      lower.includes('degree') ||
      lower.includes('b.tech')
    ) {
      return responses.education
    }

    // Certifications
    if (
      lower.includes('certification') ||
      lower.includes('certificate') ||
      lower.includes('certified')
    ) {
      return responses.certifications
    }

    // MERN
    if (
      lower.includes('mern') ||
      lower.includes('mongodb express react node')
    ) {
      return responses.mern
    }

    // Java
    if (
      lower.includes('java') ||
      lower.includes('hacker rank')
    ) {
      return responses.java
    }

    // Frontend
    if (
      lower.includes('frontend') ||
      lower.includes('front end') ||
      lower.includes('ui')
    ) {
      return responses.frontend
    }

    // Backend
    if (
      lower.includes('backend') ||
      lower.includes('back end') ||
      lower.includes('server side')
    ) {
      return responses.backend
    }

    // Database
    if (
      lower.includes('database') ||
      lower.includes('mysql') ||
      lower.includes('mongodb')
    ) {
      return responses.database
    }

    // Opportunities
    if (
      lower.includes('opportunit') ||
      lower.includes('available') ||
      lower.includes('hire') ||
      lower.includes('hiring') ||
      lower.includes('job') ||
      lower.includes('intern')
    ) {
      return responses.opportunities
    }

    return "I can answer questions about DSH's portfolio, including her projects, skills, internships, education, certifications, DSA experience and AI work. Try one of the suggested questions!"
  }

  const handleSend = (text) => {
    if (!text.trim() || typing) return

    const userMessage = text.trim()

    setMessages((prev) => [
      ...prev,
      {
        from: 'user',
        text: userMessage
      }
    ])

    setInput('')
    setTyping(true)

    setTimeout(() => {
      const reply = getResponse(userMessage)

      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: reply
        }
      ])

      setTyping(false)
    }, 700)
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open portfolio assistant"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 50,
            background: '#5ED7E8',
            color: '#080A0D',
            padding: '12px 18px',
            borderRadius: '999px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            fontFamily: 'inherit'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow =
              '0 20px 60px rgba(94,215,232,0.25)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow =
              '0 20px 60px rgba(0,0,0,0.5)'
          }}
        >
          <Sparkles size={17} />

          <span
            style={{
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            ASK MY PORTFOLIO
          </span>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 50,
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            background: '#15191F',
            borderRadius: '18px',
            border: '1px solid rgba(94,215,232,0.15)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.65)',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 18px',
              borderBottom:
                '1px solid rgba(255,255,255,0.06)',
              background: '#101318'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(94,215,232,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Sparkles
                  size={17}
                  style={{ color: '#5ED7E8' }}
                />
              </div>

              <div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '14px',
                    color: '#F5F5F5'
                  }}
                >
                  Portfolio Assistant
                </div>

                <div
                  style={{
                    fontSize: '11px',
                    color: '#6F747C',
                    marginTop: '2px'
                  }}
                >
                  Ask about DSH
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{
                background: 'none',
                border: 'none',
                color: '#A6A9AF',
                cursor: 'pointer',
                display: 'flex',
                padding: '4px'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              height: '300px',
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              fontSize: '14px'
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent:
                    msg.from === 'user'
                      ? 'flex-end'
                      : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '82%',
                    padding: '10px 14px',
                    borderRadius: '14px',
                    background:
                      msg.from === 'user'
                        ? '#5ED7E8'
                        : '#101318',
                    color:
                      msg.from === 'user'
                        ? '#080A0D'
                        : '#F5F5F5',
                    lineHeight: 1.5,
                    border:
                      msg.from === 'bot'
                        ? '1px solid rgba(255,255,255,0.04)'
                        : 'none'
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}
              >
                <div
                  style={{
                    background: '#101318',
                    padding: '10px 16px',
                    borderRadius: '14px',
                    color: '#A6A9AF'
                  }}
                >
                  <span className="typing-dot">•</span>
                  <span className="typing-dot">•</span>
                  <span className="typing-dot">•</span>
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Suggestions */}
          <div
            style={{
              padding: '12px',
              borderTop:
                '1px solid rgba(255,255,255,0.06)',
              maxHeight: '115px',
              overflowY: 'auto',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '7px'
            }}
          >
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSend(suggestion)}
                disabled={typing}
                style={{
                  background: '#101318',
                  padding: '6px 11px',
                  borderRadius: '999px',
                  fontSize: '10px',
                  color: '#A6A9AF',
                  border:
                    '1px solid rgba(255,255,255,0.05)',
                  cursor: typing ? 'not-allowed' : 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s',
                  opacity: typing ? 0.5 : 1,
                  fontFamily: 'inherit'
                }}
                onMouseEnter={(e) => {
                  if (!typing) {
                    e.currentTarget.style.background =
                      'rgba(94,215,232,0.08)'
                    e.currentTarget.style.color = '#5ED7E8'
                    e.currentTarget.style.borderColor =
                      'rgba(94,215,232,0.2)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#101318'
                  e.currentTarget.style.color = '#A6A9AF'
                  e.currentTarget.style.borderColor =
                    'rgba(255,255,255,0.05)'
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px',
              borderTop:
                '1px solid rgba(255,255,255,0.06)'
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSend(input)
                }
              }}
              placeholder="Ask about projects, skills..."
              disabled={typing}
              style={{
                flex: 1,
                minWidth: 0,
                background: '#101318',
                padding: '10px 14px',
                borderRadius: '12px',
                fontSize: '13px',
                border:
                  '1px solid rgba(255,255,255,0.06)',
                outline: 'none',
                color: 'white',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(94,215,232,0.4)'
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255,255,255,0.06)'
              }}
            />

            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim() || typing}
              aria-label="Send message"
              style={{
                background:
                  !input.trim() || typing
                    ? '#2b3438'
                    : '#5ED7E8',
                color:
                  !input.trim() || typing
                    ? '#6F747C'
                    : '#080A0D',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                border: 'none',
                cursor:
                  !input.trim() || typing
                    ? 'not-allowed'
                    : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.25s'
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .typing-dot {
          display: inline-block;
          margin: 0 2px;
          animation: typing 1.2s infinite;
        }

        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            opacity: 0.3;
          }

          30% {
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .portfolio-chat {
            right: 16px;
            bottom: 16px;
          }
        }
      `}</style>
    </>
  )
}