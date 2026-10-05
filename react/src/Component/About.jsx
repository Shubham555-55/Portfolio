import "./About.css";

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-main">
          <h2 className="section-title">About me</h2>

          <p className="about-text">
            I'm a final-year B.Tech (CSE) student at SHEAT College of
            Engineering, Varanasi. I enjoy turning ideas into working websites,
            and I've spent the last year building projects with the MERN stack.
          </p>

          <a
            href="#"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Download resume
          </a>
        </div>

        <ul className="about-facts">
          <li>
            <span className="fact-label">Location</span>
            <span>Varanasi, India</span>
          </li>

          <li>
            <span className="fact-label">Email</span>
            <a href="mailto:shubhammishra23082004@gmail.com">
              shubhammishra23082004@gmail.com
            </a>
          </li>

          <li>
            <span className="fact-label">GitHub</span>
            <a
              href="https://github.com/Shubham555-55/"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Shubham555-55
            </a>
          </li>

          <li>
            <span className="fact-label">LinkedIn</span>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/Shubhammishra
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;