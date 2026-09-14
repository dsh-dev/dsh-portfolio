
import React, { useState, useEffect, useRef } from 'react'
import { X, Send, Sparkles } from 'lucide-react'

const suggestions = [
  'What projects has she built?',
  'Tell me about Fixora.',
  'Tell me about Netflix and Drill.',
  'What did she build for the internship assessment?',
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
    "She has built several projects, including Fixora — an AI-powered Hostel Complaint Management System, Netflix and Drill — a Netflix-inspired workout product landing page, a Recipe Collection Website, and Squid Pentathlon — an interactive Squid Game-inspired web experience.",

  fixora:
    'Fixora is an AI-powered Hostel Complaint Management System built with Node.js, Express.js, MySQL, EJS, HTML, CSS, Bootstrap and JavaScript. It allows students to register, log in, submit complaints with images, track complaint status, view complaint history and manage complaints. It also includes an admin/warden dashboard and AI-powered complaint categorization, priority prediction and summary generation using the Groq API.',

  netflix:
    'Netflix and Drill is a Next.js single-page workout product landing page created as part of a Front-End Development Internship assessment. The assignment required reimagining a well-known brand as a completely different product. Netflix was reimagined as a workout and fitness brand. The project combines Netflix-inspired visual design with workout and product cards, interactive modals, an introductory video experience, animations, responsive design and cart functionality.',

  internshipAssessment:
    'Netflix and Drill was created for a Front-End Development Internship assessment. The assignment required a single landing page built with Next.js, where a well-known brand had to be reimagined as a completely different product. The goal was to create an attractive, convincing and responsive product-selling experience. The project was also required to be deployed and maintained in a public GitHub repository.',

  skills:
    'Her strongest areas include full-stack web development, Java, JavaScript, React.js, Next.js, Node.js, Express.js, database management, REST API integration, frontend development and problem-solving through Data Structures and Algorithms.',

  technologies:
    'Her programming languages include Java, Python, JavaScript and C. Her web development technologies include HTML5, CSS3, React.js, Next.js, Node.js, Express.js, Bootstrap and EJS. She has worked with MySQL and MongoDB and uses tools such as Git, GitHub, VS Code and Figma. She also has experience integrating REST APIs and external APIs.',

  internships:
    'She has gained practical experience through a Web Development Internship at VaultofCodes, where she worked on projects including Recipe Collection and Squid Pentathlon. She also completed a MERN Stack Internship under the APSCHE Student Internship Initiative through the Council for Skills and Competencies (CSC India) from May 2026 to June 2026. Netflix and Drill was created as part of a Front-End Development Internship assessment.',

  ai:
    'She has explored AI integration through her Fixora project, where she integrated the Groq API to provide AI-powered complaint categorization, priority prediction and summary generation.',

  api:
    'She has experience working with REST APIs and external API integration. In Fixora, she integrated the Groq API to add AI-powered functionality such as complaint categorization, priority prediction and summary generation.',

  dsa:
    'She has strong problem-solving experience in Data Structures and Algorithms. She has practiced arrays, strings, linked lists, stacks, queues, trees, binary search, sorting, two pointers, sliding window, recursion, greedy algorithms and dynamic programming. She regularly practices coding problems on platforms such as LeetCode and CodeChef.',

  coding:
    'She has solved 500+ problems across LeetCode and CodeChef. She has earned the LeetCode 100 Days Badge and is a CodeChef 2-Star coder with a maximum rating of 1439. Her maximum LeetCode rating is 1649.',

  education:
    "She is pursuing a B.Tech in Computer Science and Engineering at Vignan's Institute of Information Technology from 2023 to 2027, with a CGPA of 9.28.",

  certifications:
    'Her certifications and learning achievements include Cisco Python, Cisco JavaScript Essentials 1, HackerRank Java (Basic), and other web development and technical training programs.',

  recipe:
    'The Recipe Collection Website is a responsive frontend project built using HTML5, CSS3 and JavaScript. It presents Indian and international recipes with ingredients, servings and step-by-step preparation instructions. The project helped strengthen her frontend development and UI/UX skills.',

  squid:
    'Squid Pentathlon is an interactive Squid Game-inspired web experience developed using HTML, CSS and JavaScript. It features a multi-section themed layout, game-inspired UI, custom animations, hover interactions, section transitions and responsive design. It was developed during her VaultofCodes Web Development Internship.',

  mern:
    'She completed a MERN Stack Internship under the APSCHE Student Internship Initiative through the Council for Skills and Competencies (CSC India) from May 2026 to June 2026. During the internship, she gained hands-on experience with MongoDB, Express.js, React.js and Node.js and strengthened her understanding of full-stack web development.',

  java:
    'Java is one of her core programming languages. She uses Java for problem-solving and Data Structures and Algorithms practice and has earned the Java (Basic) certification from HackerRank.',

  frontend:
    'Her frontend skills include HTML5, CSS3, JavaScript, React.js, Next.js, Bootstrap and EJS. She also has experience with responsive design, animations and UI/UX design using Figma.',

  backend:
    'Her backend experience includes Node.js, Express.js, REST APIs, authentication, middleware and database integration with MySQL and MongoDB.',

  database:
    'She has worked with both relational and NoSQL databases, particularly MySQL and MongoDB, including database integration in full-stack applications.',

  opportunities:
    'She is interested in software development internships, full-stack development opportunities and frontend development roles where she can apply her skills in web development, problem-solving, APIs and modern JavaScript technologies.'
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
          text: "Hi! I'm DSH's portfolio assistant. Ask me about her projects, skills, internships, education, certifications or coding achievements."
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

    // Netflix and Drill / Internship Assessment
    if (
      lower.includes('netflix') ||
      lower.includes('drill') ||
      lower.includes('workout project') ||
      lower.includes('fitness project')
    ) {
      return responses.netflix
    }

    if (
      lower.includes('internship assessment') ||
      lower.includes('assessment project') ||
      lower.includes('internship assignment') ||
      lower.includes('assessment')
    ) {
      return responses.internshipAssessment
    }

    // Fixora
    if (
      lower.includes('fixora') ||
      lower.includes('hostel complaint') ||
      lower.includes('complaint management')
    ) {
      return responses.fixora
    }

    // Recipe
    if (
      lower.includes('recipe') ||
      lower.includes('food project')
    ) {
      return responses.recipe
    }

    // Squid Pentathlon
    if (
      lower.includes('squid') ||
      lower.includes('squid game') ||
      lower.includes('pentathlon')
    ) {
      return responses.squid
    }

    // Projects
    if (
      lower.includes('project') ||
      lower.includes('built') ||
      lower.includes('portfolio project')
    ) {
      return responses.projects
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
      lower.includes('stack') ||
      lower.includes('tech skills')
    ) {
      return responses.technologies
    }

    // Internship
    if (
      lower.includes('internship') ||
      lower.includes('intern') ||
      lower.includes('experience')
    ) {
      return responses.internships
    }

    // AI
    if (
      lower.includes('artificial intelligence') ||
      lower.includes('machine learning') ||
      lower.includes(' ai ') ||
      lower.startsWith('ai') ||
      lower.endsWith('ai')
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
      lower.includes('problems solved') ||
      lower.includes('achievements')
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
      lower.includes('b.tech') ||
      lower.includes('graduation')
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
      lower.includes('hacker rank') ||
      lower.includes('hackerrank')
    ) {
      return responses.java
    }

    // Frontend
    if (
      lower.includes('frontend') ||
      lower.includes('front end') ||
      lower.includes('ui') ||
      lower.includes('next.js') ||
      lower.includes('nextjs') ||
      lower.includes('react')
    ) {
      return responses.frontend
    }

    // Backend
    if (
      lower.includes('backend') ||
      lower.includes('back end') ||
      lower.includes('server side') ||
      lower.includes('node.js') ||
      lower.includes('nodejs') ||
      lower.includes('express')
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
      lower.includes('career')
    ) {
      return responses.opportunities
    }

    return "I can answer questions about DSH's portfolio, including her projects, skills, internships, education, certifications, DSA experience, coding achievements and AI work. Try one of the suggested questions!"
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
              borderBottom: '1px solid rgba(255,255,255,0.06)',
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
              borderTop: '1px solid rgba(255,255,255,0.06)',
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
                  border: '1px solid rgba(255,255,255,0.05)',
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
              borderTop: '1px solid rgba(255,255,255,0.06)'
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
                border: '1px solid rgba(255,255,255,0.06)',
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
