const services = [
  {
    title: "Frontend Engineering",
    body: "Building clean, responsive interfaces with HTML5, CSS3, JavaScript, React, and Next.js.",
  },
  {
    title: "Backend & Database",
    body: "Creating practical backend foundations with Node.js, Python, APIs, and MySQL data layers.",
  },
  {
    title: "DevOps & Cloud",
    body: "Learning reliable deployment workflows with Linux, Docker, AWS, Git, and GitHub.",
  },
  {
    title: "Linux Administration",
    body: "Practicing Ubuntu and Red Hat server basics, shell workflows, permissions, and services.",
  },
  {
    title: "Networking Practice",
    body: "Working with CCNA basics, Cisco Packet Tracer, subnetting, routing, and troubleshooting.",
  },
  {
    title: "Automation Mindset",
    body: "Exploring CI/CD concepts and better ways to connect development with stable operations.",
  },
];

const learningNotes = [
  {
    title: "CI/CD Automation",
    body: "Currently diving deeper into GitHub Actions and automated deployment pipelines.",
  },
  {
    title: "Kubernetes",
    body: "Learning container orchestration concepts for scalable and resilient infrastructure.",
  },
  {
    title: "Advanced API Security",
    body: "Exploring secure backend architecture, safer APIs, and production-ready practices.",
  },
];

const aboutFocus = [
  {
    title: "Containerization",
    body: "Packaging applications cleanly using Docker to ensure seamless and consistent environments from development to production.",
  },
  {
    title: "Cloud & Systems",
    body: "Provisioning secure cloud setups on AWS and mastering Linux server administration and networking concepts.",
  },
  {
    title: "Automation",
    body: "Streamlining development workflows and learning to bridge the gap between software development and stable system operations.",
  },
  {
    title: "Continuous Learning",
    body: "Actively expanding my horizons by diving deeper into CI/CD pipelines, automation tools, and advanced backend architecture.",
  },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mita365",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maya-akter-mita-0a0227184/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/search/top?q=Maya%20Mita",
    icon: "facebook",
  },
  {
    label: "Email",
    href: "mailto:mayamita.1143@gmail.com",
    icon: "mail",
  },
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
          <a href="#services">Services</a>
          <a href="#learning">Learning</a>
          <a href="#resume">Resume</a>
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
            I&apos;m a Web Developer, DevOps Learner, and Cloud Enthusiast.
          </p>
          <div className="social-row" aria-label="Social links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <Icon name={link.icon} />
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
                Hi! I&apos;m Maya Akter Mita. I design clean code on the
                frontend and manage the backend infrastructure that keeps it
                running.
              </h4>
              <p>
                As a Computer Science student at Southeast University, I
                don&apos;t just want to build websites-I want to master the
                entire ecosystem behind them. My technical toolkit spans
                JavaScript, Node.js, Python, and MySQL, alongside core DevOps
                essentials like Linux, Docker, and AWS. I thrive on
                problem-solving and am constantly looking for opportunities to
                deploy reliable, secure, and scalable web solutions.
              </p>
              <h5>What I enjoy doing as a DevOps & Infrastructure Learner:</h5>
              <div className="about-focus-grid">
                {aboutFocus.map((item) => (
                  <article key={item.title} className="about-focus-card">
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="content-section">
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

        <section id="learning" className="content-section">
          <p className="section-kicker">What I&apos;m currently exploring</p>
          <h2>Learning Roadmap</h2>
          <p className="section-lede">
            Current Tech Focus: I am actively diving deeper into CI/CD
            Automation, Kubernetes, and Advanced API Security Architecture.
          </p>
          <div className="blog-grid">
            {learningNotes.map((item) => (
              <article className="blog-card" key={item.title}>
                <span>Current Focus</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="content-section resume-download-section">
          <p className="section-kicker">Check out my resume</p>
          <h2>Resume</h2>
          <a
            className="primary-button"
            href="/Maya_Akter_Mita_DevOps_Resume.pdf"
            download
          >
            <Icon name="download" />
            Download Resume
          </a>
        </section>

        <section id="contact" className="content-section contact-section">
          <p className="section-kicker">Feel free to contact me anytime</p>
          <h2>Get in Touch</h2>
          <div className="contact-panel">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>
                Available for portfolio work, web projects, learning
                collaboration, DevOps practice, and IT support opportunities.
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
              <div className="contact-socials" aria-label="Social links">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <Icon name={link.icon} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Icon({ name }: { name: string }) {
  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.46c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1.03 2.13 2.13 0 0 0 2.91.83 2.14 2.14 0 0 1 .63-1.34c-2.22-.25-4.55-1.11-4.55-4.94a3.87 3.87 0 0 1 1.03-2.68 3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.46 9.46 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64a3.85 3.85 0 0 1 1.03 2.68c0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.94 8.98H3.74V20h3.2V8.98ZM5.34 4a1.86 1.86 0 1 0 0 3.72 1.86 1.86 0 0 0 0-3.72ZM20.26 13.88c0-3.03-1.62-4.44-3.78-4.44a3.25 3.25 0 0 0-2.95 1.62h-.04V8.98h-3.06V20h3.19v-5.45c0-1.44.27-2.83 2.05-2.83 1.75 0 1.77 1.64 1.77 2.92V20h3.2l-.38-6.12Z" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 8.3V6.78c0-.73.49-.9.83-.9h2.11V2.64L14.24 2.63c-3.22 0-3.95 2.41-3.95 3.95V8.3H7.85v3.34h2.44V21h3.91v-9.36h2.64l.35-3.34H14.2Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 7.15L4.7 7H4v.73l8 5.65 8-5.65V7h-.7L12 12.15Z" />
      </svg>
    );
  }

  if (name === "download") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11 3h2v9.18l3.6-3.6L18 10l-6 6-6-6 1.4-1.42 3.6 3.6V3Zm-6 15h14v2H5v-2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  );
}
