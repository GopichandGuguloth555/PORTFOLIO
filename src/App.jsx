import { useEffect, useState } from "react";

const links = {
  github: "https://github.com/GopichandGuguloth555",
  leetcode: "https://leetcode.com/u/Coder-555/",
  linkedin: "https://linkedin.com/in/guguloth-gopichand",
  email: "gopichandguguloth.123@gmail.com",
  resume: "/Gopichand-Guguloth-Resume.pdf",
};

const projects = [
  {
    name: "Nexora",
    category: "AI product",
    number: "01",
    description:
      "An academic-focused product concept for bringing useful study workflows into one clear, easy-to-use experience.",
    details:
      "Nexora is one of Gopichand’s featured product builds. The project is presented here as an academic-focused web experience; visit GitHub for the implementation and current project details.",
    highlights: ["Academic workflows", "Product-focused UI", "Full-stack development"],
    stack: ["React", "TypeScript", "Node.js"],
    code: "https://github.com/search?q=user%3AGopichandGuguloth555+Nexora&type=repositories",
    codeLabel: "Nexora repository search",
    visual: "nexora",
  },
  {
    name: "AcademicRAG",
    category: "Generative AI",
    number: "02",
    description:
      "A document-grounded question-answering workflow that makes course material easier to search and understand.",
    details:
      "An end-to-end retrieval-augmented generation workflow: documents are ingested and chunked, embeddings are created, and relevant context is retrieved before an LLM responds.",
    highlights: ["Document ingestion and chunking", "Semantic retrieval", "Grounded LLM responses"],
    stack: ["LangChain", "ChromaDB", "Hugging Face"],
    code: "https://github.com/search?q=user%3AGopichandGuguloth555+AcademicRAG&type=repositories",
    codeLabel: "AcademicRAG repository search",
    visual: "academic",
  },
  {
    name: "FinTrack",
    category: "Full-stack product",
    number: "03",
    description:
      "A personal finance platform for tracking income, expenses, budgets, and monthly financial summaries.",
    details:
      "FinTrack includes JWT authentication, complete CRUD workflows, CSV import and export, and MongoDB aggregation pipelines for category-wise analysis and monthly summaries.",
    highlights: ["Income and expense tracking", "Budget and category analytics", "CSV import and export"],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    code: "https://github.com/GopichandGuguloth555/FIN_TRACK_WEBSITE",
    codeLabel: "FinTrack repository",
    visual: "fintrack",
  },
  {
    name: "Second Brain",
    category: "Backend engineering",
    number: "04",
    description:
      "A knowledge management backend for securely saving, organizing, and sharing useful digital content.",
    details:
      "A REST API built with JWT-based authentication and Mongoose data models for users and content. Public sharing is supported through unique, hash-based links.",
    highlights: ["Secure content storage", "JWT authentication", "Shareable links"],
    stack: ["Node.js", "Express", "TypeScript", "MongoDB"],
    code: "https://github.com/GopichandGuguloth555/Second_Brain_Website",
    codeLabel: "Second Brain repository",
    visual: "second-brain",
  },
  {
    name: "CodeSprint",
    category: "Developer tools",
    number: "05",
    description:
      "A browser-based coding platform to explore programming problems, write solutions, and track progress.",
    details:
      "The resume describes a full-stack coding platform with a Monaco Editor, test-case validation, authentication, progress tracking, and responsive interfaces.",
    highlights: ["Monaco coding editor", "Test-case validation", "Authentication and progress tracking"],
    stack: ["Next.js", "TypeScript", "Firebase", "Monaco"],
    code: "https://github.com/GopichandGuguloth555/LEETCODE-CLONE",
    codeLabel: "Coding platform repository",
    visual: "codesprint",
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: "01",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "C"],
  },
  {
    title: "Web development",
    icon: "02",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Backend & data",
    icon: "03",
    skills: ["REST APIs", "MongoDB", "Mongoose", "SQL", "Supabase"],
  },
  {
    title: "AI & data science",
    icon: "04",
    skills: ["LLMs", "RAG", "LangChain", "ChromaDB", "Pandas", "NumPy"],
  },
  {
    title: "Tools & platforms",
    icon: "05",
    skills: ["Git", "Docker", "Postman", "Vercel", "Render", "Streamlit"],
  },
  {
    title: "Computer science",
    icon: "06",
    skills: ["Data structures", "Algorithms", "DBMS", "Operating systems", "Networks"],
  },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-brand">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.76 1.8 3.22 1.3.1-.72.4-1.21.69-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.16-3.01-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.42 3.04-1.15 3.04-1.15.61 1.55.23 2.7.12 2.98.72.79 1.15 1.8 1.15 3.01 0 4.3-2.62 5.24-5.11 5.52.4.34.74 1 .74 2.02v3c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-brand">
      <path d="M5.2 3.3a2 2 0 1 1-.02 4.02 2 2 0 0 1 .02-4.02ZM3.5 9h3.4v11.5H3.5V9Zm5.6 0h3.25v1.57h.05a3.57 3.57 0 0 1 3.2-1.76c3.43 0 4.06 2.26 4.06 5.2v6.49h-3.39v-5.75c0-1.37-.02-3.13-1.91-3.13s-2.2 1.5-2.2 3.03v5.85H9.1V9Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 5.5L19.5 7" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon">
      <path d="M10 2.75v9m0 0 3.5-3.5M10 11.75l-3.5-3.5M3.75 14v2.25h12.5V14" />
    </svg>
  );
}

function ThemeIcon({ theme }) {
  return theme === "dark" ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon theme-icon">
      <circle cx="10" cy="10" r="3.5" />
      <path d="M10 1.75v2M10 16.25v2M18.25 10h-2M3.75 10h-2m14.08-5.83-1.42 1.42M5.59 14.41l-1.42 1.42m11.66 0-1.42-1.42M5.59 5.59 4.17 4.17" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="icon theme-icon">
      <path d="M16.8 12.25A7.25 7.25 0 0 1 7.75 3.2a7.5 7.5 0 1 0 9.05 9.05Z" />
    </svg>
  );
}

function RoleTypewriter() {
  const roles = ["Software Engineer", "AI Builder", "Full-stack Developer"];
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let roleIndex = 0;
    let position = roles[0].length;
    let deleting = true;
    let timeout;

    function tick() {
      const role = roles[roleIndex];
      if (deleting) {
        position -= 1;
        setText(role.slice(0, position));
        if (position === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timeout = window.setTimeout(tick, 220);
          return;
        }
        timeout = window.setTimeout(tick, 48);
        return;
      }

      position += 1;
      setText(roles[roleIndex].slice(0, position));
      if (position === roles[roleIndex].length) {
        deleting = true;
        timeout = window.setTimeout(tick, 1500);
        return;
      }
      timeout = window.setTimeout(tick, 82);
    }

    timeout = window.setTimeout(tick, 1800);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <span className="typed-role" aria-label="Software Engineer, AI Builder, Full-stack Developer">
      <span aria-hidden="true">{text}</span>
      <span className="typed-caret" aria-hidden="true" />
    </span>
  );
}

function GithubActivity() {
  const [failed, setFailed] = useState(false);
  return (
    <a className="activity-card github-activity" href={links.github} target="_blank" rel="noreferrer">
      <div className="activity-heading">
        <span className="activity-icon github-mark"><GithubIcon /></span>
        <div>
          <p className="eyebrow">Open source</p>
          <h3>GitHub contributions</h3>
        </div>
        <span className="activity-arrow"><ArrowIcon diagonal /></span>
      </div>
      {!failed ? (
        <img
          className="contribution-chart"
          src="https://ghchart.rshah.org/10B981/GopichandGuguloth555"
          alt="GitHub contribution calendar for Gopichand Guguloth"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="activity-fallback">
          <span className="activity-unavailable">Contribution calendar could not load.</span>
          <span>Open GitHub to see current activity</span>
        </div>
      )}
      <span className="activity-footnote">A year of commits, projects, and steady progress</span>
    </a>
  );
}

function LeetCodeActivity({ theme }) {
  const [failed, setFailed] = useState(false);
  return (
    <a className="activity-card leetcode-activity" href={links.leetcode} target="_blank" rel="noreferrer">
      <div className="activity-heading">
        <span className="activity-icon leetcode-mark">LC</span>
        <div>
          <p className="eyebrow">Practice & consistency</p>
          <h3>LeetCode activity</h3>
        </div>
        <span className="activity-arrow"><ArrowIcon diagonal /></span>
      </div>
      {!failed ? (
        <img
          className="leetcode-chart"
          src={`https://leetcard.jacoblin.cool/Coder-555?theme=${theme}&font=Inter&ext=heatmap`}
          alt="Live LeetCode profile statistics and activity heatmap"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="activity-fallback leetcode-fallback">
          <span className="activity-unavailable">Activity card could not load.</span>
          <span>Open LeetCode to see current streaks and activity</span>
        </div>
      )}
      <span className="activity-footnote">500+ problems solved across LeetCode and GeeksforGeeks</span>
    </a>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("modal-open");
    };
  }, [onClose]);

  const subject = encodeURIComponent("Demo request: " + project.name);
  const body = encodeURIComponent("Hi Gopichand,\n\nI would like to see a demo of " + project.name + ".\n");
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close project preview">×</button>
        <p className="eyebrow">{project.category} · Project preview</p>
        <h2 id="modal-title">{project.name}</h2>
        <p className="modal-description">{project.details}</p>
        <h3>What it includes</h3>
        <ul className="modal-highlights">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <div className="tag-list modal-tags">
          {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
        </div>
        <div className="modal-actions">
          <a className="button button-primary" href={"mailto:" + links.email + "?subject=" + subject + "&body=" + body}>
            Request a live demo <ArrowIcon />
          </a>
          <a className="button button-light" href={project.code} target="_blank" rel="noreferrer">
            <GithubIcon /> View code
          </a>
        </div>
        <p className="modal-note">Want to see this in action? Send a note to request a walkthrough.</p>
      </section>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem("gopichand-portfolio-theme-v2") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#050505" : "#ffffff");
    try {
      window.localStorage.setItem("gopichand-portfolio-theme-v2", theme);
    } catch {
      // Keep the selected theme for this visit even when storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    function closeMenuOnResize() {
      if (window.innerWidth > 760) setMenuOpen(false);
    }
    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".section-heading, .about-story, .fact-card, .skill-card, .project-card, .activity-card, .timeline-entry, .contact-copy, .contact-form, .trust-items > span",
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    targets.forEach((target) => target.classList.add("scroll-reveal"));
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -48px 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);
    setFormSent(true);
    window.location.href = "mailto:" + links.email + "?subject=" + subject + "&body=" + body;
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="wordmark" href="#home" aria-label="Gopichand Guguloth, home">
            <span className="wordmark-icon">GG</span>
            <span>Gopichand<span className="wordmark-period">.</span></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <nav className={menuOpen ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#journey" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button
            className="theme-toggle"
            type="button"
            aria-label="Light color theme"
            aria-pressed={theme === "light"}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
          >
            <ThemeIcon theme={theme} />
          </button>
          <a className="nav-contact" href={links.resume} download="Gopichand-Guguloth-Resume.pdf" aria-label="Download resume"><DownloadIcon /><span className="resume-label">Resume</span></a>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-inner section-wrap">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> Computer Science undergraduate · IIIT Kottayam</div>
            <p className="hero-kicker">SOFTWARE ENGINEERING · AI SYSTEMS · PRODUCT BUILDING</p>
            <h1>Hi, I’m <span>Gopichand.</span></h1>
            <h2 className="hero-role-line">I’m a <RoleTypewriter /></h2>
            <p className="hero-lede">
              I build thoughtful full-stack products, backend systems, and AI-powered applications. I enjoy turning complex ideas into reliable software people can use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Hire me <ArrowIcon diagonal /></a>
              <a className="button button-resume" href={links.resume} download="Gopichand-Guguloth-Resume.pdf"><DownloadIcon /> Download resume</a>
            </div>
            <div className="hero-links" aria-label="Social profiles">
              <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon /></a>
              <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GithubIcon /></a>
              <a href={links.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" title="LeetCode"><span className="social-lc">LC</span></a>
            </div>
            <div className="hero-proof">
              <span><strong>500+</strong> coding problems</span>
              <i />
              <span><strong>IIIT Kottayam</strong> · CSE ’27</span>
              <i />
              <span><strong>Infosys DSE</strong> · HackWithInfy</span>
            </div>
          </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Areas of focus">
          <div className="section-wrap trust-inner">
            <span>Currently working with</span>
            <div className="trust-items"><span>React</span><i /><span>TypeScript</span><i /><span>Node.js</span><i /><span>LLMs + RAG</span><i /><span>MongoDB</span></div>
          </div>
        </section>

        <section className="section-wrap about-section section-space" id="about">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</p>
            <h2>Good software starts with <span>good questions.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-story">
              <p className="large-copy">I like understanding how things work, then turning that understanding into software people can actually use.</p>
              <p>As a Computer Science undergraduate at IIIT Kottayam, I’ve built full-stack applications, backend APIs, and retrieval-augmented AI workflows. I care about clean interfaces, thoughtful data models, and the details that make a product dependable.</p>
              <p>Outside of building projects, I sharpen my fundamentals through problem solving and keep exploring how AI can make information easier to find and use.</p>
              <a className="text-link" href={links.resume} download="Gopichand-Guguloth-Resume.pdf"><DownloadIcon /> Download resume</a>
            </div>
            <div className="about-facts">
              <div className="fact-card fact-green"><span className="fact-number">500<span>+</span></span><span className="fact-caption">problems solved across LeetCode & GeeksforGeeks</span><a href={links.leetcode} target="_blank" rel="noreferrer">See coding profile <ArrowIcon diagonal /></a></div>
              <div className="fact-card"><span className="fact-icon">↗</span><h3>Selected for Infosys DSE</h3><p>Selected for the Digital Specialist Engineer role through HackWithInfy.</p></div>
              <div className="fact-card"><span className="fact-icon">⌂</span><h3>Based in Telangana, India</h3><p>Studying Computer Science and Engineering at IIIT Kottayam.</p></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-space" id="skills">
          <div className="section-wrap">
            <div className="section-heading heading-centered">
              <p className="eyebrow"><span className="eyebrow-line" /> THE TOOLKIT</p>
              <h2>Tools to take an idea <span>all the way.</span></h2>
              <p className="section-subtitle">A practical stack for building, shipping, and learning across the full product lifecycle.</p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-index">{group.icon}</span>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap projects-section section-space" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</p>
              <h2>Things I’ve <span>been building.</span></h2>
            </div>
            <p className="projects-intro">A mix of AI experiments, full-stack products, and backend systems. Pick a project to see more.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={"project-card project-" + project.visual} key={project.name}>
                <div className="project-art">
                  <span className="project-number">{project.number} / 05</span>
                  <ProjectArtwork kind={project.visual} />
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-content">
                  <div className="project-title-row"><h3>{project.name}</h3><span className="project-arrow"><ArrowIcon diagonal /></span></div>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.stack.slice(0, 4).map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                  <div className="project-actions">
                    <a className="project-code" href={project.code} target="_blank" rel="noreferrer" title={"Open " + project.codeLabel}>
                      <GithubIcon /> Code
                    </a>
                    <button className="project-demo" type="button" onClick={() => setActiveProject(project)}>Demo <ArrowIcon diagonal /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="activity-section section-space" id="activity">
          <div className="section-wrap">
            <div className="activity-top">
              <div className="section-heading">
                <p className="eyebrow"><span className="eyebrow-line" /> CONSISTENCY OVER TIME</p>
                <h2>Small steps. <span>Every day.</span></h2>
              </div>
              <p className="activity-intro">I believe steady practice is part of becoming a better engineer. Follow my coding activity and open-source work.</p>
            </div>
            <div className="activity-grid">
              <GithubActivity />
              <LeetCodeActivity theme={theme} />
            </div>
          </div>
        </section>

        <section className="section-wrap journey-section section-space" id="journey">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> THE JOURNEY SO FAR</p>
            <h2>Learning by <span>building.</span></h2>
          </div>
          <div className="journey-grid">
            <div className="journey-column">
              <p className="journey-label">EDUCATION</p>
              <article className="timeline-entry">
                <span className="timeline-dot" />
                <div className="timeline-date">AUG 2023 — MAY 2027</div>
                <h3>B.Tech, Computer Science & Engineering</h3>
                <p className="timeline-org">Indian Institute of Information Technology, Kottayam</p>
                <p>Relevant coursework: Data Structures & Algorithms, OOP, Operating Systems, DBMS, and Computer Networks.</p>
              </article>
            </div>
            <div className="journey-column">
              <p className="journey-label">ENGINEERING EXPERIENCE</p>
              <article className="timeline-entry">
                <span className="timeline-dot" />
                <div className="timeline-date">AI / ENGINEERING</div>
                <h3>Building retrieval-augmented AI workflows</h3>
                <p className="timeline-org">Independent project work</p>
                <p>Worked across document ingestion, chunking, embeddings, vector storage, and semantic retrieval with LangChain, ChromaDB, Hugging Face embeddings, and LLM APIs.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-grid">
            <div className="contact-copy">
              <p className="eyebrow"><span className="eyebrow-line" /> HAVE A PROJECT IN MIND?</p>
              <h2>Let’s make something <span>meaningful.</span></h2>
              <p>I’m always happy to talk about software, AI, internships, or a good problem to solve.</p>
              <a className="contact-email" href={"mailto:" + links.email}><MailIcon /> {links.email} <ArrowIcon diagonal /></a>
              <div className="contact-socials">
                <a href={links.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn <ArrowIcon diagonal /></a>
                <a href={links.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub <ArrowIcon diagonal /></a>
                <a href={links.leetcode} target="_blank" rel="noreferrer"><span className="social-lc">LC</span> LeetCode <ArrowIcon diagonal /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <p className="form-heading">Send a note</p>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" type="text" placeholder="Jane Smith" required />
              <label htmlFor="contact-email">Email address</label>
              <input id="contact-email" name="email" type="email" placeholder="jane@example.com" required />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about it..." required />
              <button className="button button-primary form-submit" type="submit">Send message <ArrowIcon /></button>
              <p className="form-note">{formSent ? "Your email app should open with the message ready to send." : "This opens your email app with your message filled in."}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-icon">GG</span><span>Gopichand<span className="wordmark-period">.</span></span></a>
          <p>Designed & built with care · © {new Date().getFullYear()} Gopichand Guguloth</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>
      </footer>
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  );
}

function ProjectArtwork({ kind }) {
  if (kind === "nexora") {
    return <div className="art-nexora"><div className="nexora-window"><span /><span /><span /><div className="nexora-card"><b>N</b><i /><i /><i /></div></div><span className="art-orb" /></div>;
  }
  if (kind === "academic") {
    return <div className="art-academic"><div className="book-stack"><span /><span /><span /></div><div className="search-orb"><span /><i /></div><div className="academic-lines"><i /><i /><i /></div></div>;
  }
  if (kind === "fintrack") {
    return <div className="art-fintrack"><div className="chart-panel"><div className="chart-label"><i /><i /></div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-base" /></div><span className="finance-orb">$</span></div>;
  }
  if (kind === "second-brain") {
    return <div className="art-brain"><div className="brain-node node-a">✦</div><div className="brain-node node-b">⌘</div><div className="brain-node node-c">↗</div><div className="brain-node node-d">✎</div><span className="brain-line line-a" /><span className="brain-line line-b" /><span className="brain-line line-c" /><span className="brain-line line-d" /></div>;
  }
  return <div className="art-code"><div className="code-editor"><span className="editor-header"><i /><i /><i /></span><p><b>01</b> <i>function</i> <em>solve</em>() {"{"}</p><p><b>02</b> &nbsp; <span>const</span> answer = [];</p><p><b>03</b> &nbsp; <span>return</span> answer;</p><p><b>04</b> {"}"}</p></div><span className="code-cursor" /></div>;
}

export default App;
