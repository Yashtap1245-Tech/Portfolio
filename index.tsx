import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- STATIC DATA ---
const userImage = "/data/profile-pic.png";

const portfolioData = {
  name: "Yash Tapadiya",
  title: "Full-Stack Software Engineer",
  bio: "I build scalable microservices and AI-powered features across cloud platforms like Azure and AWS. With a proven success in improving system efficiency and a passion for secure, user-centric applications, I turn complex challenges into robust digital solutions.",
  contact: {
    email: "yashtap1245@gmail.com",
    phone: "2065327602",
    github: "https://github.com/Yashtap1245-Tech",
    linkedin: "https://www.linkedin.com/in/yashTapadiya",
  },
  journey: [
    {
      year: "2024 - 2026",
      title: "Master of Science, Computer Science",
      company: "Seattle University",
      description: "Focusing on Artificial Intelligence, Distributed Systems, Software Architecture, and Cloud Computing.",
    },
    {
      year: "2023 - 2024",
      title: "Software Development Engineer I",
      company: "Avaya",
      description: "Refactored authentication logic, reducing user-reported issues by 30%. Built a high-throughput Spring Boot microservice, improving efficiency by 20%.",
    },
    {
        year: "Jan - Jun 2023",
        title: "Software Development Intern",
        company: "Avaya",
        description: "Benchmarked Neo4j, improving query performance by 40%. Developed a scalable web app using Reactive Programming, Spring Boot, and React.",
    },
    {
      year: "2019 - 2023",
      title: "Bachelor of Engineering, Computer Science",
      company: "Vishwakarma Institute of Information Technology",
      description: "Graduated with a GPA of 9.68/10. Key courses: Operating Systems, OOP, DBMS, Data Structures and Algorithms.",
    },
    {
        year: "Jun - Aug 2022",
        title: "Backend Intern",
        company: "Persistent Systems",
        description: "Enhanced an internal automation tool using Java and Selenium. Optimized automation processes, reducing task completion time by 20%.",
    },
  ],
  projects: [
    {
      title: "Movie Review & Rating Website",
      description: "Developed a sentiment-aware movie review website using NLP to enhance content personalization, improving user engagement by 15%.",
      technologies: [".NET", "C#", "Azure NLP"],
      link: "#",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
    {
      title: "Admin Panel for Adbrew",
      description: "Engineered a scalable admin platform with data visualization, improving operational efficiency and increasing user engagement by 40%.",
      technologies: ["Python", "React", "Django"],
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
        title: "Secure Password Verification",
        description: "Implemented a secure authentication system using MD5 hashing for over 1,000 accounts, reducing security breaches by 30%.",
        technologies: ["Java", "MySQL", "Hashing"],
        link: "#",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['Java', 'React', 'Angular', 'JavaScript', 'TypeScript', 'Python', 'Kotlin', 'Dart', 'HTML', 'CSS', 'C#']
    },
    {
      category: 'Frameworks & Cloud',
      items: ['Spring Webflux', 'Django', '.NET', 'NodeJS', 'JUnit', 'Jest', 'Flutter', 'S3', 'AWS', 'Azure BLOB', 'Microservices']
    },
    {
      category: 'Tools & Datastores',
      items: ['Kafka', 'Kubernetes', 'Docker', 'GIT', 'MongoDB', 'MySQL', 'PostMan', 'Datadog', 'CosmosDB', 'DynamoDB', 'Google Cloud Firestore', 'Neo4j', 'PostgreSQL']
    }
  ],
};


const GlobalStyles = () => (
  <style>{`
    :root {
      --bg-color: #121212;
      --primary-color: #1a1a1a;
      --secondary-color: #242424;
      --accent-color: #646cff;
      --accent-hover: #535bf2;
      --text-color: rgba(255, 255, 255, 0.87);
      --text-muted: rgba(255, 255, 255, 0.6);
      --font-family: 'Poppins', sans-serif;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
      background-color: var(--bg-color);
      color: var(--text-color);
      font-family: var(--font-family);
      line-height: 1.6;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }
    
    .container {
        width: 90%;
        max-width: 1100px;
        margin: 0 auto;
        padding: 4rem 0;
    }

    section {
        border-bottom: 1px solid var(--secondary-color);
    }
    section:last-of-type {
        border-bottom: none;
    }

    h1, h2, h3 {
        font-weight: 600;
        line-height: 1.2;
    }

    h1 { font-size: 3.2em; }
    h2 { font-size: 2.5em; color: var(--accent-color); margin-bottom: 2rem; text-align: center; }

    a {
      color: var(--accent-color);
      text-decoration: none;
      transition: color 0.25s;
    }
    a:hover {
      color: var(--accent-hover);
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeIn 0.8s forwards;
    }
    
    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @media (max-width: 768px) {
        h1 { font-size: 2.5em; }
        h2 { font-size: 2em; }
        .container { padding: 3rem 0; }
    }
  `}</style>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '1rem 5%',
      zIndex: 1000,
      background: scrolled ? 'rgba(18, 18, 18, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out',
      borderBottom: scrolled ? `1px solid var(--secondary-color)` : '1px solid transparent',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-color)' }}>{portfolioData.name}</a>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem' }}>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Hero = () => (
  <section style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  }}>
    <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '2rem',
        paddingTop: '0', 
        paddingBottom: '0'
    }}>
        <div style={{ flex: '1 1 500px', textAlign: 'left' }}>
             <h1 className="fade-in" style={{ animationDelay: '0.2s', marginBottom: '1rem' }}>{portfolioData.title}</h1>
             <p className="fade-in" style={{ animationDelay: '0.4s', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem', color: 'var(--text-muted)' }}>{portfolioData.bio}</p>
             <a className="fade-in" href="#projects" style={{
                animationDelay: '0.6s',
                display: 'inline-block',
                padding: '0.8rem 2rem',
                background: 'var(--accent-color)',
                color: '#fff',
                borderRadius: '8px',
                fontWeight: '600',
                transition: 'background 0.25s',
            }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'} onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}>
                View My Work
            </a>
        </div>
        <div className="fade-in" style={{ 
            flex: '0 1 400px', 
            animationDelay: '0.3s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img src={userImage} alt={portfolioData.name} style={{
                maxWidth: '350px',
                width: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                border: `3px solid var(--secondary-color)`,
                boxShadow: '0 0 30px rgba(100, 108, 255, 0.3)',
            }} />
        </div>
    </div>
  </section>
);


const Journey = () => (
    <section id="journey" className="container">
        <h2 className="fade-in">My Journey</h2>
        <div className="fade-in" style={{ 
            position: 'relative', 
            maxWidth: '800px', 
            margin: '0 auto', 
        }}>
            <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '3px',
                backgroundColor: 'var(--secondary-color)',
                marginLeft: '-1.5px',
            }}></div>
            {portfolioData.journey.map((item, index) => (
                <div key={index} style={{
                    padding: '10px 40px',
                    position: 'relative',
                    width: '50%',
                    textAlign: index % 2 === 0 ? 'right' : 'left',
                    left: index % 2 === 0 ? '0' : '50%',
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '22px',
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-color)',
                        border: '3px solid var(--bg-color)',
                        zIndex: 1,
                        right: index % 2 === 0 ? '-8.5px' : 'auto',
                        left: index % 2 !== 0 ? '-8.5px' : 'auto',
                    }}></div>
                    <div style={{
                        padding: '20px 30px',
                        background: 'var(--primary-color)',
                        position: 'relative',
                        borderRadius: '6px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    }}>
                        <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-color)' }}>{item.title}</h3>
                        <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{item.company}</p>
                        <small style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>{item.year}</small>
                        <p style={{color: 'var(--text-muted)'}}>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const Projects = () => (
  <section id="projects" className="container">
    <h2 className="fade-in">Featured Projects</h2>
    <div className="fade-in" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    }}>
      {portfolioData.projects.map((project, index) => (
        <div key={index} style={{
          background: 'var(--primary-color)',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
        }}
        onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '1.5rem' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{project.description}</p>
            <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map(tech => (
                <span key={tech} style={{
                  background: 'var(--secondary-color)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                }}>{tech}</span>
              ))}
            </div>
            <a href={project.link}>View Project &rarr;</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// small mapping to show an emoji / logo-like glyph for common skills
const getSkillIcon = (skill: string) => {
  const map: Record<string, string> = {
    Java: '☕',
    React: '⚛️',
    Angular: '🅰️',
    JavaScript: '🟨',
    TypeScript: '🔷',
    Python: '🐍',
    Kotlin: '🔷',
    Dart: '🎯',
    HTML: '🌐',
    CSS: '🎨',
    'C#': '♯',
    'Spring Webflux': '🌱',
    Django: '🟩',
    '.NET': '⬛',
    NodeJS: '🟩',
    JUnit: '🧪',
    Jest: '🧪',
    Flutter: '🦋',
    S3: '🟦',
    AWS: '☁️',
    'Azure BLOB': '☁️',
    Microservices: '🧩',
    Kafka: '🔶',
    Kubernetes: '☸️',
    Docker: '🐳',
    GIT: '🔧',
    MongoDB: '🍃',
    MySQL: '🐬',
    PostMan: '📮',
    Datadog: '🐶',
    CosmosDB: '🪐',
    DynamoDB: '⚡',
    'Google Cloud Firestore': '🔥',
    Neo4j: '🧠',
    PostgreSQL: '🐘'
  };
  return map[skill] || skill.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase();
};

const Skills = () => (
  <section id="skills" className="container fade-in">
    <h2>Skills</h2>
    <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>A quick overview of languages, frameworks, cloud and tools I work with.</p>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '1.5rem',
      marginTop: '1.25rem'
    }}>
      {portfolioData.skills.map((group, idx) => (
        <div key={idx} style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',
          padding: '1rem 1.25rem',
          borderRadius: '10px',
          boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
          border: '1px solid rgba(255,255,255,0.03)'
        }}>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.75rem' }}>{group.category}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
            {group.items.map(item => (
              <div key={item} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'var(--secondary-color)',
                padding: '0.5rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.9rem',
                color: 'var(--text-color)',
                transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                cursor: 'default'
              }}
              onMouseOver={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 22px rgba(0,0,0,0.35)'; }}
              onMouseOut={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(100,108,255,0.12), rgba(100,108,255,0.06))',
                  fontSize: '16px'
                }}>{getSkillIcon(item)}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="container fade-in" style={{textAlign: 'center'}}>
    <h2>Get In Touch</h2>
    <p style={{maxWidth: '600px', margin: '0 auto 1rem auto', color: 'var(--text-muted)'}}>
      I'm currently open to new opportunities and actively seeking full-time roles starting June 2026. Feel free to reach out if you have a project in mind or just want to connect.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
      <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
        <div><strong>Email:</strong> <a href={`mailto:${portfolioData.contact.email}`} style={{ color: 'var(--accent-color)' }}>{portfolioData.contact.email}</a></div>
        <div style={{ marginTop: '0.25rem' }}><strong>Phone:</strong> <a href={`tel:+1${portfolioData.contact.phone}`} style={{ color: 'var(--accent-color)' }}>{portfolioData.contact.phone}</a></div>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
      <a href={`mailto:${portfolioData.contact.email}`} style={{
        display: 'inline-block',
        padding: '0.8rem 1.6rem',
        border: `1px solid var(--accent-color)`,
        color: 'var(--accent-color)',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'background 0.25s, color 0.25s',
      }}
      onMouseOver={e => {
        e.currentTarget.style.backgroundColor = 'var(--accent-color)';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseOut={e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = 'var(--accent-color)';
      }}>Email Me</a>

      <a href={`tel:+1${portfolioData.contact.phone}`} style={{
        display: 'inline-block',
        padding: '0.8rem 1.6rem',
        border: `1px solid rgba(255,255,255,0.06)`,
        color: 'var(--text-color)',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'background 0.25s, color 0.25s',
      }}
      onMouseOver={e => {
        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
      }}>Call</a>
    </div>
  </section>
);

const Footer = () => (
    <footer style={{ padding: '2rem 0', textAlign: 'center', background: 'var(--primary-color)' }}>
        <div style={{ marginBottom: '1rem' }}>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>GitHub</a>
      <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem' }}>LinkedIn</a>
      <a href={`mailto:${portfolioData.contact.email}`} style={{ margin: '0 1rem' }}>{portfolioData.contact.email}</a>
      <a href={`tel:+1${portfolioData.contact.phone}`} style={{ margin: '0 1rem' }}>{portfolioData.contact.phone}</a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
        </p>
    </footer>
);

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <main>
      <Hero />
      <Journey />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);