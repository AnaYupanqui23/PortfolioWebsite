
const base = import.meta.env.BASE_URL


export default function About() {

    return (
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
                    I started in nursing before finding my way to software engineering, which means I bring a rare combination of healthcare knowledge, people skills, and enginering technical skill.
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

            <div className='education-logos'>
                <a 
                    href="https://www.unsw.edu.au/study/undergraduate/bachelor-of-engineering-honours-software" 
                    target="_blank" 
                    rel="noopener noreferrer"
                > 
                    <img className="school-logo"
                    src={`${base}schooling-logos/UNSW-logo.png`} 
                    alt="UNSW logo" 
                    />
                </a>
                <a
                    href="https://calendar.adelaide.edu.au/aprcw/2023/behep_behengpath" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img className="school-logo"
                    src={`${base}schooling-logos/UoA-logo.png`}
                    alt="The University of Adelaide logo"             
                    />
                </a>
                <a
                    href="https://shc.sa.edu.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="school-logo"
                    src={`${base}schooling-logos/shc-logo.webp`}
                    alt="Sacred Heart College logo" 
                    />
                </a>
            </div>

            <div className="education">
                <p className="section-label">Work Experience</p>
                <div className="edu-list">
                    <div className="edu-item">
                        <p className="edu-degree">Workplace Technology Support Intern </p>
                        <p className="edu-school">BHP · Adelaide · Nov 2026 – present</p>
                    </div>
                    <div className="edu-item">
                        <p className="edu-degree">Phlebotomist </p>
                        <p className="edu-school">Clinpath Pathology · Adelaide · March 2025 – present</p>
                    </div>
                </div>
            </div>

            <div className='education-logos'>
                <a 
                    href="https://www.bhp.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                > 
                    <img className="school-logo"
                    src={`${base}schooling-logos/BHP_logo.webp`} 
                    alt="BHP logo" 
                    />
                </a>
                <a
                    href="https://www.clinpath.com.au/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img className="school-logo"
                    src={`${base}schooling-logos/clinpath-logo.png`}
                    alt="Clinpath Pathology logo"             
                    />
                </a>
            </div>

        </div>
        </section>
    )
}