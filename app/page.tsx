const services = [
  {
    title: "Frontend Development",
    body: "Clean, responsive interfaces using HTML, CSS, JavaScript, React, and Next.js.",
  },
  {
    title: "Backend Foundations",
    body: "Node.js, API basics, database design, and practical MySQL workflows.",
  },
  {
    title: "Cloud And DevOps",
    body: "Docker, AWS fundamentals, GitHub workflows, Linux server basics, and deployment.",
  },
  {
    title: "Networking Support",
    body: "CCNA knowledge for IP addressing, routing, switching, and troubleshooting.",
  },
  {
    title: "Linux Administration",
    body: "Red Hat and Linux command-line skills for system setup and everyday operations.",
  },
  {
    title: "Portfolio Websites",
    body: "Personal, student, and professional portfolio pages with fast-loading layouts.",
  },
];

const education = [
  {
    title: "B.Sc. Student",
    meta: "Southeast University / Running 3rd Semester",
    body: "Building a strong base in programming, networking, databases, and modern web technologies.",
  },
  {
    title: "Continuous Learning",
    meta: "Web, Cloud, Linux, and Networking",
    body: "Practicing real projects while learning tools used in professional software and IT work.",
  },
];

const certificates = [
  {
    title: "CCNA",
    meta: "Cisco Networking",
    body: "Networking fundamentals, routing, switching, IP services, and troubleshooting concepts.",
  },
  {
    title: "Red Hat",
    meta: "Linux Administration",
    body: "Hands-on Linux server administration, shell commands, and system management basics.",
  },
  {
    title: "Linux",
    meta: "Operating Systems",
    body: "Command-line workflow, file systems, permissions, services, and terminal productivity.",
  },
];

const skills = [
  ["HTML", "94%"],
  ["CSS", "90%"],
  ["JavaScript", "82%"],
  ["Node.js", "76%"],
  ["Python", "80%"],
  ["MySQL", "78%"],
  ["Docker", "74%"],
  ["AWS", "70%"],
  ["GitHub", "84%"],
  ["Linux", "86%"],
];

const portfolio = [
  {
    title: "Responsive Portfolio",
    tag: "HTML / CSS / JS",
    body: "A personal portfolio layout with sections for profile, skills, projects, and contact.",
  },
  {
    title: "Student Dashboard",
    tag: "React / Next.js",
    body: "A concept dashboard for organizing semester tasks, resources, and academic progress.",
  },
  {
    title: "Dockerized API Setup",
    tag: "Node.js / Docker",
    body: "A backend practice project focused on containerized development and repeatable setup.",
  },
  {
    title: "Database Practice",
    tag: "MySQL",
    body: "Schema design and query practice for storing user, project, and contact information.",
  },
  {
    title: "AWS Deployment Lab",
    tag: "AWS / Linux",
    body: "Cloud hosting practice using Linux server basics and deployment-oriented workflows.",
  },
  {
    title: "Network Lab Notes",
    tag: "CCNA",
    body: "Routing, switching, subnetting, and troubleshooting notes from networking practice.",
  },
];

const learningNotes = [
  ["Frontend", "HTML, CSS, JavaScript, React, and Next.js"],
  ["Backend", "Node.js, APIs, Python, and MySQL"],
  ["Infrastructure", "Docker, AWS, Linux, GitHub, CCNA"],
];

const socials = [
  ["Gh", "GitHub", "https://github.com/mita365"],
  ["In", "LinkedIn", "https://www.linkedin.com/in/maya-akter-mita-0a0227184/"],
  ["Fb", "Facebook", "https://www.facebook.com/search/top?q=Maya%20Mita"],
  ["Em", "Email", "mailto:mayamita.1143@gmail.com"],
];

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="side-nav" aria-label="Primary navigation">
        <a href="#home" className="brand-mark" aria-label="Maya Akter Mita home">
          MM
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#learning">Learning</a>
          <a href="#contact">Contact</a>
        </nav>
      </aside>

      <section id="home" className="hero-section">
        <div className="language-switch" aria-label="Portfolio highlights">
          <span>ENG</span>
          <span>BD</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Personal Portfolio</p>
          <h1>Maya Akter Mita</h1>
          <p className="hero-subtitle">
            I&apos;m a Web Developer, Networking Learner, and Cloud Enthusiast
          </p>
          <div className="social-row" aria-label="Social links">
            {socials.map(([label, name, href]) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <a href="#about" className="scroll-link">
          Get to know me
        </a>
      </section>

      <div className="content-wrap">
        <section id="about" className="content-section">
          <p className="section-kicker">Get to know me</p>
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="portrait-panel" aria-label="Maya Akter Mita profile initials">
              <span>MM</span>
            </div>
            <div>
              <h3>Who am I?</h3>
              <h4>
                I&apos;m Maya Akter Mita, a Southeast University student focused
                on web development, networking, Linux, and cloud technologies.
              </h4>
              <p>
                I am currently running my 3rd semester and building practical
                skills with HTML, CSS, JavaScript, Node.js, Python, MySQL,
                Docker, AWS, Linux, and GitHub. My goal is to grow into a
                confident developer who can build clean websites and understand
                the systems that run them.
              </p>
              <dl className="info-list">
                <div>
                  <dt>Name:</dt>
                  <dd>Maya Akter Mita</dd>
                </div>
                <div>
                  <dt>Email:</dt>
                  <dd>
                    <a href="mailto:mayamita.1143@gmail.com">
                      mayamita.1143@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>University:</dt>
                  <dd>Southeast University</dd>
                </div>
                <div>
                  <dt>From:</dt>
                  <dd>Mohammadpur, Dhaka</dd>
                </div>
              </dl>
              <a className="primary-button" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section className="content-section">
          <p className="section-kicker">What I can work on</p>
          <h2>My Services</h2>
          <div className="card-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="content-section">
          <p className="section-kicker">Check out my resume</p>
          <h2>Resume</h2>
          <div className="resume-grid">
            <Timeline title="Education" items={education} />
            <Timeline title="Certificates" items={certificates} />
          </div>
          <div className="skills-grid" aria-label="Skills">
            {skills.map(([skill, value]) => (
              <div className="skill" key={skill}>
                <div>
                  <span>{skill}</span>
                  <span>{value}</span>
                </div>
                <div className="skill-track">
                  <span style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="content-section">
          <p className="section-kicker">Showcasing practical work ideas</p>
          <h2>Portfolio</h2>
          <div className="filter-row" aria-label="Portfolio categories">
            <button>All</button>
            <button>Web</button>
            <button>Cloud</button>
            <button>Network</button>
          </div>
          <div className="portfolio-grid">
            {portfolio.map((item, index) => (
              <article className="work-card" key={item.title}>
                <span>0{index + 1} / {item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="learning" className="content-section">
          <p className="section-kicker">Technologies I am growing with</p>
          <h2>Learning Focus</h2>
          <div className="blog-grid">
            {learningNotes.map(([area, detail]) => (
              <article className="blog-card" key={area}>
                <span>{area}</span>
                <h3>{detail}</h3>
                <p>
                  I keep practicing these topics through small projects, labs,
                  documentation, and hands-on problem solving.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <p className="section-kicker">Feel free to contact me anytime</p>
          <h2>Get in Touch</h2>
          <div className="contact-grid">
            <form className="contact-form">
              <h3>Message Me</h3>
              <input aria-label="Name" placeholder="Name" />
              <input aria-label="Email" placeholder="Email" />
              <textarea aria-label="Message" placeholder="Message" rows={5} />
              <a className="primary-button" href="mailto:mayamita.1143@gmail.com">
                Send Message
              </a>
            </form>
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>
                Available for portfolio work, web projects, learning
                collaboration, and IT support practice opportunities.
              </p>
              <p>
                <strong>Name</strong>
                Maya Akter Mita
              </p>
              <p>
                <strong>Location</strong>
                16A/2, Ring Road, Mohammadpur, Dhaka.
              </p>
              <p>
                <strong>Call Me</strong>
                <a href="tel:01301371143">01301371143</a>
              </p>
              <p>
                <strong>Email Me</strong>
                <a href="mailto:mayamita.1143@gmail.com">mayamita.1143@gmail.com</a>
              </p>
              <p>
                <strong>Profiles</strong>
                <a href="https://github.com/mita365" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                {" / "}
                <a
                  href="https://www.linkedin.com/in/maya-akter-mita-0a0227184/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Timeline({
  title,
  items,
}: {
  title: string;
  items: { title: string; meta: string; body: string }[];
}) {
  return (
    <div className="timeline">
      <h3>{title}</h3>
      {items.map((item) => (
        <article key={item.title}>
          <h4>{item.title}</h4>
          <span>{item.meta}</span>
          <p>{item.body}</p>
        </article>
      ))}
    </div>
  );
}
