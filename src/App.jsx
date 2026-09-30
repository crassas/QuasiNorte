const services = [
  ['Sites & Landing Pages', 'Presença digital rápida, clara e construída para converter.'],
  ['Aplicações & CRM', 'Fluxos de reserva, gestão e relação com clientes.'],
  ['SEO / AEO / GEO', 'Estrutura técnica e conteúdo pensado para pesquisa local e IA.'],
  ['Automações', 'Menos tarefas manuais e mais tempo para o negócio.'],
  ['UX / UI', 'Interfaces com identidade própria, sem aspecto de template.'],
  ['Estratégia Digital', 'Decisões baseadas no negócio, no contexto e nos resultados.'],
]

const projects = [
  ['Pentehouse Barbearia — Loja 20', 'Website · Reservas · CRM · SEO local'],
  ['Best Pizza & Kebab', 'Website · Menu · Conversão · SEO local'],
  ['Restaurante 2 Irmãos', 'Website · Conteúdo · Presença local'],
]

function App() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Quasi Norte, início">
          <span>QUASI</span><strong>NORTE</strong>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projectos</a>
          <a href="#processo">Processo</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href="#contacto">Falar connosco</a>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">SOLUÇÕES DIGITAIS PARA NEGÓCIOS REAIS</p>
          <h1>Ideias que deixam de ser ideia.</h1>
          <p className="hero-lead">Criamos sites, aplicações, sistemas e experiências digitais com identidade, estratégia e intenção comercial.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">Ver trabalhos</a>
            <a className="button secondary" href="#contacto">Pedir proposta</a>
          </div>
          <div className="hero-signals" aria-label="Princípios Quasi Norte">
            <span>Identidade</span><span>Conversão</span><span>Crescimento</span>
          </div>
        </div>

        <div className="cube-stage" aria-label="Área reservada para o cubo interactivo Quasi Norte">
          <div className="north-line"><span>N</span></div>
          <div className="cube-placeholder">
            <span>QN</span>
          </div>
          <p className="offset-mark">13,13°</p>
          <p className="stage-note">O cubo interactivo entra aqui.</p>
        </div>
      </section>

      <section id="servicos" className="section shell">
        <div className="section-heading">
          <p className="eyebrow">O QUE FAZEMOS</p>
          <h2>Do primeiro clique ao sistema que fica.</h2>
          <p>Não vendemos peças isoladas. Construímos a presença e a infraestrutura digital de cada negócio à medida do que precisa.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, text], i) => (
            <article className="service-card" key={title}>
              <span className="index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projetos" className="section shell projects-section">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">TRABALHO REAL</p>
            <h2>Negócios diferentes. Soluções que pertencem a cada um.</h2>
          </div>
          <p>O portefólio é a prova: cada projecto tem a sua linguagem, o seu contexto e o seu objectivo.</p>
        </div>
        <div className="project-grid">
          {projects.map(([title, meta], i) => (
            <article className="project-card" key={title}>
              <div className="project-visual"><span>0{i + 1}</span></div>
              <div className="project-copy">
                <h3>{title}</h3>
                <p>{meta}</p>
                <span className="project-link">Caso de estudo ↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="processo" className="section shell process-section">
        <div className="section-heading">
          <p className="eyebrow">COMO TRABALHAMOS</p>
          <h2>Perceber primeiro. Construir depois.</h2>
        </div>
        <ol className="process-list">
          <li><span>01</span><strong>Diagnóstico</strong><p>Negócio, clientes, contexto, concorrência e objectivo.</p></li>
          <li><span>02</span><strong>Direcção</strong><p>Estratégia, estrutura, identidade e prioridades.</p></li>
          <li><span>03</span><strong>Construção</strong><p>Design, desenvolvimento, conteúdo e integração.</p></li>
          <li><span>04</span><strong>Evolução</strong><p>Medição, optimização e crescimento contínuo.</p></li>
        </ol>
      </section>

      <section id="contacto" className="contact shell">
        <p className="eyebrow">QUASE NORTE. NUNCA GENÉRICO.</p>
        <h2>Se o teu negócio merece uma presença própria, começamos por aqui.</h2>
        <a className="button primary" href="mailto:geral@quasinorte.pt">Falar connosco</a>
      </section>

      <footer className="footer shell">
        <div className="brand footer-brand"><span>QUASI</span><strong>NORTE</strong></div>
        <p>Soluções Digitais.</p>
        <p>Porto, Portugal</p>
      </footer>
    </main>
  )
}

export default App
