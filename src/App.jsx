import './App.css'
import { useState, useEffect } from 'react'

const base = import.meta.env.BASE_URL

const runDukeimages = [
  { type: 'image', src: `${base}run-duke-img/run-duke1.png` },
  { type: 'image', src: `${base}run-duke-img/run-duke2.png` },
  { type: 'image', src: `${base}run-duke-img/run-duke3.png` },
  { type: 'image', src: `${base}run-duke-img/run-duke4.png` },
]
const greenGotchiMedia = [
  { type: 'image', src: `${base}greengotchi/greengotchi-app-layout.png` },
  { type: 'video', src: `${base}greengotchi/greengotchi-app-demo.webm` },
]

const rnsMedia = [
  { type: 'image', src: `${base}roots-and-shoots/Home.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/AboutUs.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/Projects.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/Projects-Australia.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/Projects-SouthAmerica.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/Project-AmazonRainforest.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/LeaderboardPage.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/LeaderboardPageExtended.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/Donation.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/DonationThanks.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/ContactUs.png`, portrait: true },
  { type: 'image', src: `${base}roots-and-shoots/SignUp.png`, portrait: true }
]

function Carousel({media}) {
  const [current,setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval (() => {
      setCurrent(prev => (prev + 1) % media.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [media])

  const prev = () => setCurrent(prev => (prev - 1 + media.length) % media.length)
  const next = () => setCurrent(prev => (prev + 1) % media.length)

  const current_item = media[current]

  return (
    <div className="carousel">
      {current_item.type === 'image' ? (
        <img 
          src={current_item.src} 
          alt={`screenshot ${current + 1}`} 
          className={`carousel-img ${current_item.portrait ? 'portrait' : ''}`}
        />
      ) : (
        <video
          key={current_item.src}
          className="carousel-img"
          controls
          autoPlay
          muted
          loop
        >
          <source src={current_item.src} type="video/mp4" />
        </video>
      )}
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev}>‹</button>
        <div className="carousel-dots">
          {media.map((_, i) => (
            <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
        <button className="carousel-btn" onClick={next}>›</button>
      </div>
    </div>
  )

}

function App() {

  return (
    <>
      <nav>
        <img src={`${base}favicon-long1.png`} alt="Ana Paula" className="nav-logo" />
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#skills">skills</a>
          <a href="#contact">contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-glow"></div>
        <p className="eyebrow">Software Engineer & Game Developer</p>
        <h1 className="hero-name">
          Hi, I'm <em>Ana Paula.</em><br />
          I build things that <br />
          feel as good as they look.
        </h1>
        <p className="hero-tagline">
          I like to build things that feel good to use - with a particular love for{' '}
          <strong>frontend design</strong> and <strong>game development</strong>{' '}- from stealth survival games to polished web experiences. <br />
          Currently finishing my <strong>Bachelor of Software Engineering</strong> at {' '}
          <strong>UNSW</strong>. Based in Adelaide, open to remote and relocation.

        </p>
        <div className="hero-tags">
          <span className="tag gold">Unreal Engine 5</span>
          <span className="tag">React</span>
          <span className="tag">Game Design</span>
          <span className="tag">Frontend</span>
          <span className="tag">Health Tech</span>
        </div>
      </section>

      <section id="about">
    <p className="section-label">About</p>
      <div className="about-grid">
        <div className="about-left">
          <p className="about-text">
            I care about how things look and feel, not just how they work. My favourite
            projects sit at the intersection of <strong>design and technology</strong>{' '}
            — whether that's a stealth game with an emotional twist or a web experience
            that actually delights someone.
            <br /><br />
            Outside of code, I work as a phlebotomist, which has taught me more about
            staying calm and focused under pressure than any class has. I'm also
            training for a 12km race, crocheting more than I probably should, and
            slowly building the life I've been planning.
            <br /><br />
            I started in nursing before finding my way to software engineering, which means I bring a rare combination of healthcare domain knowledge and technical skills.
          </p>
          <p className="about-quote">"where code meets something people actually feel"</p>
        </div>

        <div className="education">
          <p className="section-label">Education</p>
          <div className="edu-list">
            <div className="edu-item">
              <p className="edu-degree">Bachelor of Software Engineering</p>
              <p className="edu-school">University of New South Wales</p>
            </div>
            <div className="edu-item">
              <p className="edu-degree">Engineering Pathway</p>
              <p className="edu-school">University of Adelaide</p>
            </div>
            <div className="edu-item">
              <p className="edu-degree">Bachelor of Nursing</p>
              <p className="edu-school">University of Adelaide</p>
            </div>
            <div className="edu-item">
              <p className="edu-degree">SACE</p>
              <p className="edu-school">Sacred Heart College Marcellin Campus</p>
            </div>
          </div>
        </div>
        <div className='education-logo'>
          <a 
            href="https://www.unsw.edu.au/study/undergraduate/bachelor-of-engineering-honours-software" 
            target="_blank" 
            rel="noopener noreferrer"
          > 
            <img 
              style={{width:'100%',height:'auto', maxWidth: '90px', margin:'0.5rem'}} 
              src={`${base}UNSW-logo.png`} 
              alt="UNSW logo" 
            />
          </a>
          <a
            href="https://calendar.adelaide.edu.au/aprcw/2023/behep_behengpath" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              style={{width:'100%',height:'auto', maxWidth: '90px', margin:'0.5rem'}} 
              src={`${base}UoA-logo.png`}
              alt="The University of Adelaide logo"             
            />
          </a>
          <a
            href="https://shc.sa.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img 
              style={{width:'100%',height:'auto', maxWidth: '90px', margin:'0.5rem'}} 
              src={`${base}shc-logo.webp`}
              alt="Sacred Heart College logo" 
            />
          </a>
        </div>

      </div>
    </section>

      <section id="projects">
        <p className="section-label">Projects</p>
        <div className="projects-grid">

          <div className="proj-card featured">
            <div className="proj-left">
              <span className="featured-badge">Featured Project</span>
              <p className="proj-type">Game Development · Unreal Engine 5</p>
              <h2 className="proj-title"><em>"Run Duke!"</em> - One level interactive game play</h2>
              <p className="proj-desc">
                A stealth survival game with an emotional core. You navigate a zombie
                apocalypse not with weapons, but with your dog — Duke — who follows
                commands like stay, follow, and quiet, but has a stress meter that
                depletes faster when he's scared. Zombies react to sound and movement.
                Keeping Duke calm isn't just sweet, it's survival strategy. Named after
                my late German Shepherd.
              </p>
              <div className="proj-tags">
                <span className="ptag gold">Unreal Engine 5</span>
                <span className="ptag gold">AI Behaviour</span>
                <span className="ptag">Game Design</span>
                <span className="ptag">C++</span>
                <span className="ptag">Original IP</span>
              </div>
              <Carousel media={runDukeimages}/>
            </div>
            <div className="proj-right">
              <a className="doc-link" href={`${base}comp3421report.pdf`} target="_blank" rel="noopener noreferrer">📄 Design doc</a>
              <a className="doc-link" href="https://polabear23.itch.io/run-duke" target="_blank" rel="noopener noreferrer">▶ itch.io</a>
            </div>
          </div>

          <div className="proj-card"> 
            <div className="proj-left">
              <p className="proj-type">Research · HCI & UX</p>
              <h2 className="proj-title">Persona Development & LPA</h2>
              <p className="proj-desc">
                An empirical comparison of clustering approaches for data-driven user
                persona development. Investigated Latent Profile Analysis as a 
                probabilistic alternative to hard-clustering methods like k-means,
                evaluating behavioural granularity, interpretability, and practical
                usability across three datasets. Awarded High Distinction - HD.
              </p>

              <div className="proj-tags">
                <span className="ptag gold">HCI</span>
                <span className="ptag gold">UX Research</span>
                <span className="ptag">Data Analysis</span>
                <span className="ptag">Clusteting Methods</span>
                <span className="ptag">Latent Profile Analysis (LPA)</span>
                <span className="ptag">K-means</span>
                <span className="ptag">Agglomerative Hierarchical</span>
              </div>
            </div>
            <div className="proj-right">
              <p style={{fontSize: '12px', color: '#a07840', marginTop: '0.75rem', fontStyle: 'italic', textAlign: 'right'}}>
                Interested in the written thesis pages, check out this PDF ↓
              </p>
              <a className="doc-link" style={{marginTop: '1rem', display: 'inline-flex'}} href={`${base}ThesisReport.pdf`}  target="_blank" rel="noopener noreferrer">📄 Thesis doc</a>
            </div>
          </div>
          
          <div className="proj-card">
            <p className="proj-type">Web Development</p>
            <h2 className="proj-title">This portfolio website </h2>
            <p className="proj-desc">Built in React. Designed to feel intentional, not templated.
              Also included light logo design work.
            </p>
            <div className="proj-tags">
              <span className="ptag gold">React</span>
              <span className="ptag">CSS</span>
              <span className="ptag">Design</span>
            </div>
            <div style={{margin: '2rem 0'}}>
              <img style={{width:'100%',height:'auto', maxWidth: '140px'}} src={`${base}favicon.png`} alt="Ana Paula logo initials" className="nav-logo" />
              <img style={{width:'100%',height:'auto' , maxWidth: '400px'}} src={`${base}favicon-long1.png`} alt="Ana Yupanqui logo" className="nav-logo" />
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-left">
              <p className="proj-type">UX Design · HCI</p>
              <h2 className="proj-title">Roots & Shoots Foundation</h2>
              <p className="proj-desc">
                A full user-centred design project for a non-profit tree conservation 
                organisation. Conducted user interviews, developed personas and context 
                scenarios, defined functional and non-functional requirements, built 
                original and revised Figma prototypes, and ran usability evaluations 
                with 8 participants — identifying and resolving 16 usability issues 
                across accessibility, navigation and interaction design.
              </p>
              
              <div className="proj-tags">
                <span className="ptag gold">Figma</span>
                <span className="ptag gold">UX Research</span>
                <span className="ptag">Usability Testing</span>
                <span className="ptag">Accessibility</span>
                <span className="ptag">WCAG 2.1</span>
                <span className="ptag">Prototyping</span>
              </div>

              <Carousel media={rnsMedia} />
            </div>
            <div className="proj-right">
              <p style={{fontSize: '12px', color: '#a07840', marginTop: '0.75rem', fontStyle: 'italic', textAlign: 'right'}}>
                Explore more pages and interactivity in the Figma prototype ↓
              </p>
              
              <div style={{marginTop: '1rem', display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                <a className="doc-link" href="https://www.figma.com/proto/vyRlWmC2Jj8carRe4L0uk5/Roots-And-Shoots-Foundation-Website-Demo?node-id=251-991&t=EbM3o5CTB1mBEOBv-1" target="_blank" rel="noopener noreferrer">▶ Live Prototype</a>
                <a className="doc-link" href="https://www.figma.com/design/vyRlWmC2Jj8carRe4L0uk5/Roots-And-Shoots-Foundation-Website-Demo?node-id=251-991&t=EbM3o5CTB1mBEOBv-1" target="_blank" rel="noopener noreferrer">🎨 Figma Design</a>
              </div>
            </div>
          </div>

          <div className="proj-card">
            <div className="proj-left">
              <p className="proj-type">Mobile App · Full Stack</p>
              <h2 className="proj-title">GreenGotchi</h2>
              <p className="proj-desc">
                A gamified mobile app encouraging sustainable commuting across NSW. 
                Commuters earn credits for eco-friendly travel choices to grow virtual 
                tree companions. I originated the concept, led UI/UX design in Figma, 
                built the React Native frontend, developed Python APIs on AWS Lambda 
                processing Transport NSW data, and implemented the CI/CD pipeline 
                using GitHub Actions with unit, integration and end-to-end testing.
              </p>
              <div className="proj-tags">
                <span className="ptag gold">React Native</span>
                <span className="ptag gold">TypeScript</span>
                <span className="ptag">Python</span>
                <span className="ptag">AWS Lambda</span>
                <span className="ptag">CI/CD</span>
                <span className="ptag">Figma</span>
              </div>
              <div className="media-pair">
                <img src={`${base}greengotchi/greengotchi-app-layout.png`} alt="GreenGotchi app layout" className="media-pair-img layout" />
                <video className="media-pair-img demo" controls muted loop>
                  <source src={`${base}greengotchi/greengotchi-app-demo.webm`} type="video/webm" />
                </video>
              </div>
            </div>
            <div className="proj-right">
              <p style={{fontSize: '12px', color: '#a07840', marginTop: '0.75rem', fontStyle: 'italic', textAlign: 'right' }}>
                Explore more pages and interactivity in the Figma prototype ↓
              </p>

              <div style={{marginTop: '1rem', display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                <a className="doc-link" href="https://www.figma.com/proto/ZZsJLM0Q6wrklx1NcMTfLj/Greengotchi-Demo?node-id=0-1&t=YDXVNo1fdUQ27qIl-1" target="_blank" rel="noopener noreferrer">▶ Live Prototype</a>
                <a className="doc-link" href="https://www.figma.com/design/ZZsJLM0Q6wrklx1NcMTfLj/Greengotchi-Demo?node-id=0-1&t=YDXVNo1fdUQ27qIl-1" target="_blank" rel="noopener noreferrer">🎨 Figma Design</a>
              </div>
            </div>
          </div>

          <div className="proj-card">
            <p className="proj-type">Coming soon</p>
            <h2 className="proj-title">More projects</h2>
            <p className="proj-desc">Refreshing older uni work to add here. Watch this space.</p>
            <div className="proj-tags">
              <span className="ptag">In progress</span>
            </div>
          </div>

        </div>
      </section>

      <section id="skills">
        <p className="section-label">Skills</p>
        <div className="skills-grid">
          <div className="skill-group">
            <h4>Languages</h4>
            <p className="skill-list">JavaScript / TypeScript<br />C++ (Unreal)<br />HTML & CSS<br />Python</p>
          </div>
          <div className="skill-group">
            <h4>Tools & Frameworks</h4>
            <p className="skill-list">React<br />Unreal Engine 5<br />Git & GitHub<br />Figma</p>
          </div>
          <div className="skill-group">
            <h4>Other experience</h4>
            <p className="skill-list">Game design & ideation<br />Technical documentation<br />Healthcare (phlebotomy)<br />Cross-functional teamwork</p>
          </div>
          <div className="skill-group">
            <h4>Interests</h4>
            <p className="skill-list">Health tech<br />Frontend design<br />Indie game dev<br />Creative tech</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <p className="section-label">Contact</p>
        <div className="contact-block">
          <h2 className="contact-heading">Let's work together.</h2>
          <p>Open to internships in frontend, game development, or health tech.<br />Adelaide-based, open to remote.</p>
          <div className='buttons'>
            <a className="contact-btn" href="mailto:ana.yupanquipdl@gmail.com">Get in touch</a>
            <a className="contact-btn secondary" href="https://www.linkedin.com/in/ana-yupanqui-ponce-de-leon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="contact-btn secondary" href="https://github.com/AnaYupanqui23" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="contact-btn" href={`${base}Resume.pdf`} target="_blank" rel="noopener noreferrer">📄 Resume PDF</a>
          </div>
        </div>
      </section>
    </>

  )
}

export default App
