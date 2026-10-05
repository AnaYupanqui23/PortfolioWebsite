import { useState, useEffect } from 'react'
import { useCardHover } from './useCardHover';

import { useCardTilt } from './useCardTilt';

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



export default function Projects(){
  useCardHover('.proj-card');
  //useCardTilt('.proj-card');
  
  return (
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
                  <span className="tag tag--sm gold">Unreal Engine 5</span>
                  <span className="tag tag--sm ">AI Behaviour</span>
                  <span className="tag tag--sm ">Game Design</span>
                  <span className="tag tag--sm ">C++</span>
                  <span className="tag tag--sm ">Original IP</span>
              </div>
              <Carousel media={runDukeimages}/>
              </div>
              <div className="proj-right">
              <a className="doc-link" href={`${base}reports/comp3421report.pdf`} target="_blank" rel="noopener noreferrer">📄 Design doc</a>
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
                  <span className="tag tag--sm gold">HCI</span>
                  <span className="tag tag--sm gold">UX Research</span>
                  <span className="tag tag--sm">Data Analysis</span>
                  <span className="tag tag--sm">Clusteting Methods</span>
                  <span className="tag tag--sm">Latent Profile Analysis (LPA)</span>
                  <span className="tag tag--sm">K-means</span>
                  <span className="tag tag--sm">Agglomerative Hierarchical</span>
              </div>
              </div>
              <div className="proj-right">
              <p style={{fontSize: '12px', color: '#a07840', marginTop: '0.75rem', fontStyle: 'italic', textAlign: 'right'}}>
                  Interested in the written thesis pages, check out this PDF ↓
              </p>
              <a className="doc-link" style={{marginTop: '1rem', display: 'inline-flex'}} href={`${base}reports/ThesisReport.pdf`}  target="_blank" rel="noopener noreferrer">📄 Thesis doc</a>
              </div>
          </div>
          
          <div className="proj-card">
              <p className="proj-type">Web Development</p>
              <h2 className="proj-title">This portfolio website </h2>
              <p className="proj-desc">Built in React. Designed to feel intentional, not templated.
              Also included light logo design work.
              </p>
              <div className="proj-tags">
              <span className="tag tag--sm gold">React</span>
              <span className="tag tag--sm">CSS</span>
              <span className="tag tag--sm">Design</span>
              </div>
              <div style={{margin: '2rem 0'}}>
              <img style={{width:'100%',height:'auto', maxWidth: '140px'}} src={`${base}website-logos/favicon.png`} alt="Ana Paula logo initials" className="nav-logo" />
              <img style={{width:'100%',height:'auto' , maxWidth: '400px'}} src={`${base}website-logos/favicon-long1.png`} alt="Ana Yupanqui logo" className="nav-logo" />
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
                  <span className="tag tag--sm gold">Figma</span>
                  <span className="tag tag--sm gold">UX Research</span>
                  <span className="tag tag--sm">Usability Testing</span>
                  <span className="tag tag--sm">Accessibility</span>
                  <span className="tag tag--sm">WCAG 2.1</span>
                  <span className="tag tag--sm">Prototyping</span>
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
                  <span className="tag tag--sm gold">React Native</span>
                  <span className="tag tag--sm gold">TypeScript</span>
                  <span className="tag tag--sm">Python</span>
                  <span className="tag tag--sm">AWS Lambda</span>
                  <span className="tag tag--sm">CI/CD</span>
                  <span className="tag tag--sm">Figma</span>
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
              <span className="tag tag--sm">In progress</span>
              </div>
          </div>

          </div>
      </section>

  );
}