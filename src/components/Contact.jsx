
const base = import.meta.env.BASE_URL

export default function Contact(){
    return (
        <section id="contact">
            <p className="section-label">Contact</p>
            <div className="contact-block">
                <h2 className="contact-heading">Let's work together.</h2>
                <p>Open to internships in frontend, game development, or health tech.<br />Adelaide-based, open to remote.</p>
                <div className='buttons'>
                    <a className="contact-btn" href="mailto:ana.yupanquipdl@gmail.com">Get in touch</a>
                    <a className="contact-btn secondary" href="https://www.linkedin.com/in/ana-yupanqui-ponce-de-leon/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="contact-btn secondary" href="https://github.com/AnaYupanqui23" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className="contact-btn" href={`${base}reports/Resume.pdf`} target="_blank" rel="noopener noreferrer">📄 Resume PDF</a>
                </div>
            </div>
        </section>

    );
}