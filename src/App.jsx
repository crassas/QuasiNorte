import { useEffect, useRef } from 'react'

const projects = [
  {
    name: 'Pentehouse Barbearia — Loja 20',
    meta: 'Website · Reservas · CRM · SEO local',
    text: 'Uma presença digital com identidade própria, preparada para reservas, gestão e crescimento local.',
    className: 'pentehouse',
  },
  {
    name: 'Best Pizza & Kebab',
    meta: 'Website · Menu digital · Conversão · SEO local',
    text: 'Uma experiência rápida e directa para transformar pesquisa local em pedidos e clientes.',
    className: 'pizza',
  },
  {
    name: 'Restaurante 2 Irmãos',
    meta: 'Website · Conteúdo · Presença local',
    text: 'Uma montra digital construída à volta da autenticidade do espaço e da comida portuguesa.',
    className: 'irmaos',
  },
]

const services = [
  ['Websites & Landing Pages', 'Sites rápidos, distintos e orientados ao negócio.'],
  ['Aplicações & CRM', 'Ferramentas à medida para gerir clientes, reservas e operação.'],
  ['SEO / AEO / GEO', 'Estrutura para pesquisa local, motores de resposta e IA.'],
  ['Automações', 'Menos tarefas repetidas. Mais tempo para o que cria valor.'],
  ['UX / UI', 'Interfaces claras, próprias e sem aspecto de template.'],
  ['Estratégia Digital', 'Decisões alinhadas com contexto, objectivos e crescimento.'],
]

const launchIncludes = [
  'Landing page personalizada',
  'Versão mobile',
  'Contacto directo por telefone, email ou WhatsApp',
  'SEO técnico e local de base',
  'Preparação para indexação no Google',
  '1 ronda de ajustes após publicação',
]

const launchExtras = [
  ['Página adicional', '+ 40 €'],
  ['Google Business Profile', '+ 35 €'],
  ['Manutenção mensal', 'desde 19 €/mês'],
]

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible')
      }),
      { threshold: 0.15 },
    )

    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

function App() {
  const cubeRef = useRef(null)
  const cubeSrc = `${import.meta.env.BASE_URL}quasi-norte-cube.webp`
  useReveal()

  useEffect(() => {
    const cube = cubeRef.current
    if (!cube) return

    const handleMove = event => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      cube.style.setProperty('--mx', x.toFixed(3))
      cube.style.setProperty('--my', y.toFixed(3))
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Quasi Norte, início">
          <span>QUASI</span><strong>NORTE</strong>
          <small>Soluções Digitais</small>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#top">Início</a>
          <a href="#projetos">Projectos</a>
          <a href="#servicos">Serviços</a>
          <a href="#start">Começar</a>
          <a href="#processo">Processo</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href="#contacto">Pedir proposta <span>→</span></a>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy page-enter">
          <p className="eyebrow">IDEIAS COM DIRECÇÃO</p>
          <h1>Negócios reais.<br />Presença digital <em>com direcção.</em></h1>
          <p className="hero-lead">
            Websites, aplicações, automações, SEO / AEO / GEO e estratégia digital
            para negócios que querem crescer no mundo real.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contacto">Pedir proposta <span>→</span></a>
            <a className="button ghost" href="#projetos">Ver projectos</a>
          </div>
          <p className="hero-foot">Estratégia / tecnologia / resultados reais</p>
        </div>

        <div className="hero-object page-enter" ref={cubeRef}>
          <div className="cube-aura" />
          <div className="hero-cube-stage">
            <img
              className="hero-cube"
              src={cubeSrc}
              alt="Cubo Quasi Norte com Q e N"
              width="720"
              height="720"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero-object-copy" aria-hidden="true">
            <span>Mais do que websites.</span>
            <span>Soluções para o amanhã.</span>
          </div>
        </div>
      </section>

      <section className="manifest shell" data-reveal>
        <div>
          <p className="eyebrow">QUEM SOMOS</p>
          <h2>Transformamos ideias em soluções reais.</h2>
        </div>
        <div className="manifest-copy">
          <p>
            A Quasi Norte cria experiências digitais para negócios reais:
            presença, operação, conversão e crescimento.
          </p>
          <p className="manifest-note">Tecnologia com propósito. Design com intenção.</p>
        </div>
      </section>

      <section id="start" className="launch shell">
        <div className="launch-copy" data-reveal>
          <p className="eyebrow">QUASI NORTE START</p>
          <h2>O teu negócio online. Sem complicar.</h2>
          <p className="launch-lead">
            Uma presença digital profissional para negócios locais que precisam de começar bem:
            clara, rápida, preparada para telemóvel e construída para transformar visitas em contactos.
          </p>

          <div className="launch-audience">
            <span>Ideal para</span>
            <p>Barbearias · Cafés · Restaurantes · Lojas · Serviços locais · Profissionais independentes</p>
          </div>
        </div>

        <article className="launch-card" data-reveal>
          <div className="launch-card-top">
            <p>PRIMEIROS 3 PROJETOS</p>
            <span>Oferta de lançamento</span>
          </div>

          <div className="launch-price">
            <span>Preço de lançamento</span>
            <strong>99 €</strong>
          </div>

          <ul className="launch-list">
            {launchIncludes.map(item => <li key={item}>{item}</li>)}
          </ul>

          <a
            className="button primary launch-button"
            href="mailto:geral@quasinorte.pt?subject=Quasi%20Norte%20Start&body=Quero%20saber%20mais%20sobre%20o%20Quasi%20Norte%20Start."
          >
            Quero começar <span>→</span>
          </a>

          <p className="launch-note">
            Domínio e serviços externos não estão incluídos quando implicam custos de terceiros.
            Primeiro confirmamos o âmbito do projeto.
          </p>

          <div className="launch-extras" aria-label="Extras opcionais">
            <p>EXTRAS OPCIONAIS</p>
            {launchExtras.map(([name, price]) => (
              <div className="launch-extra" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section id="projetos" className="projects shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">PROJECTOS EM DESTAQUE</p>
            <h2>Três negócios. Três identidades.</h2>
          </div>
          <p>O mesmo princípio: cada solução tem de parecer que nasceu dentro daquele negócio.</p>
        </div>

        <div className="project-grid">
          {projects.map(project => (
            <article className="project-card" key={project.name} data-reveal>
              <div className={`project-art ${project.className}`}>
                <div className="project-screen">
                  <span className="project-brand-mark">{project.name.split(' ')[0]}</span>
                  <span className="project-screen-line" />
                  <span className="project-screen-line short" />
                </div>
              </div>
              <div className="project-content">
                <p className="project-meta">{project.meta}</p>
                <h3>{project.name}</h3>
                <p>{project.text}</p>
                <a href="#contacto">Ver projecto <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="servicos" className="services shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">O QUE FAZEMOS</p>
            <h2>Soluções digitais para crescimento real.</h2>
          </div>
          <p>Unimos estratégia, design e tecnologia sem transformar o negócio num template.</p>
        </div>

        <div className="service-grid">
          {services.map(([title, text]) => (
            <article className="service-card" key={title} data-reveal>
              <div className="service-glyph" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="processo" className="process shell">
        <div className="section-heading compact" data-reveal>
          <div>
            <p className="eyebrow">COMO TRABALHAMOS</p>
            <h2>Ouvir. Definir. Construir. Evoluir.</h2>
          </div>
          <p>Sem passos decorativos. Cada fase existe porque reduz erro e melhora o resultado final.</p>
        </div>

        <div className="process-track" data-reveal>
          <div className="process-line" />
          <div className="process-point">
            <span className="dot" />
            <strong>Escuta</strong>
            <p>Negócio, objectivos, contexto e problemas reais.</p>
          </div>
          <div className="process-point">
            <span className="dot" />
            <strong>Estratégia</strong>
            <p>Direcção, prioridades e arquitectura da solução.</p>
          </div>
          <div className="process-point">
            <span className="dot" />
            <strong>Criação</strong>
            <p>Design, desenvolvimento, conteúdo e integração.</p>
          </div>
          <div className="process-point">
            <span className="dot" />
            <strong>Crescimento</strong>
            <p>Medição, optimização e evolução contínua.</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="final-cta">
        <div className="final-glow" />
        <div className="shell final-inner" data-reveal>
          <div>
            <p className="eyebrow">VAMOS CONSTRUIR O PRÓXIMO PASSO</p>
            <h2>O teu negócio merece mais do que um simples site.</h2>
            <p>Conta-nos o que tens. Nós encontramos a direcção.</p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:geral@quasinorte.pt">Pedir proposta <span>→</span></a>
              <a className="button ghost" href="mailto:geral@quasinorte.pt">Enviar mensagem</a>
            </div>
          </div>

          <div className="final-cube-wrap" aria-hidden="true">
            <img src={cubeSrc} alt="" />
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand footer-brand">
          <span>QUASI</span><strong>NORTE</strong>
          <small>Soluções Digitais</small>
        </div>
        <div className="footer-links">
          <a href="#top">Início</a>
          <a href="#projetos">Projectos</a>
          <a href="#servicos">Serviços</a>
          <a href="#start">Começar</a>
          <a href="#processo">Processo</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="footer-contact">
          <a href="mailto:geral@quasinorte.pt">geral@quasinorte.pt</a>
          <span>Porto, Portugal</span>
        </div>
      </footer>
    </main>
  )
}

export default App
