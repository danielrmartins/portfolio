const STACK = [
  "TypeScript",
  "JavaScript",
  "React",
  "React Native",
  "Node.js",
  "Fastify",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Vite",
  "Vercel",
];

const PROJECTS = [
  {
    name: "Corre que é Dado",
    desc: "Dashboard de performance para corredores integrado com a API do Strava. Exibe métricas como VO2 máx estimado, progressão semanal de volume, zonas de frequência cardíaca e detecção de overtraining via ACWR.",
    tags: ["React", "TypeScript", "Node.js", "Fastify", "Strava API", "Vercel"],
    demo: "https://corre-e-dado.vercel.app",
    github: "https://github.com/danielrmartins/strava-api-dashboard",
    image: "/corre-que-e-dado.png",
  },
  {
    name: "instachecker",
    desc: "Ferramenta que analisa os arquivos de exportação do Instagram e identifica quem você segue mas não te segue de volta. Funciona 100% no browser — nenhum dado sai da máquina do usuário.",
    tags: ["React", "TypeScript", "Vite", "Vercel"],
    demo: "https://insta-checker-orpin.vercel.app",
    github: "https://github.com/danielrmartins/insta-checker",
    image: "/instachecker.png",
  },
];

export default function App() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <span className="nav-logo">
            daniel<span>.</span>
          </span>
          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <div className="container">
          <div className="hero">
            <div className="hero-eyebrow">Porto Alegre, RS</div>
            <h1>Daniel Martins</h1>
            <p>
              Desenvolvedor Full Stack com 6 anos de experiência, trabalhei em
              empresas como GFT e Vakinha construindo produtos digitais
              robustos. Gosto de criar apps que considero interessantes.
            </p>
            <div className="hero-links">
              <a
                className="btn btn-linkedin"
                href="https://www.linkedin.com/in/omartinsdaniel/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-github"
                href="https://github.com/danielrmartins"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Stack */}
        <section id="sobre">
          <div className="container">
            <div className="section-label">Stack</div>
            <div className="stack-grid">
              {STACK.map((s) => (
                <span key={s} className="stack-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projetos">
          <div className="container">
            <div className="section-label">Projetos</div>
            <div className="projects-list">
              {PROJECTS.map((p) => (
                <div key={p.name} className="project-card">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="project-image-link">
                    <img src={p.image} alt={p.name} className="project-image" />
                  </a>
                  <div className="project-top">
                    <span className="project-name">{p.name}</span>
                    <div className="project-links">
                      <a
                        className="project-link"
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo ↗
                      </a>
                      <a
                        className="project-link github-link"
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          height="13"
                          width="13"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contato">
          <div className="container">
            <div className="section-label">Contato</div>
            <div className="contact-links">
              <a
                className="contact-item"
                href="mailto:danielmartins10@gmail.com"
              >
                <span className="contact-label">Email</span>
                danielmartins10@gmail.com
              </a>
              <a
                className="contact-item"
                href="https://www.linkedin.com/in/omartinsdaniel/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">LinkedIn</span>
                /in/omartinsdaniel
              </a>
              <a
                className="contact-item"
                href="https://github.com/danielrmartins"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">GitHub</span>
                /danielrmartins
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          Daniel Martins · {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}
