const features = [
  {
    number: '01',
    title: 'Clear direction',
    description: 'Turn ambitious ideas into a focused path forward with simple, considered decisions.',
  },
  {
    number: '02',
    title: 'Thoughtful craft',
    description: 'Every detail is made to feel useful, natural, and quietly memorable.',
  },
  {
    number: '03',
    title: 'Built to last',
    description: 'Create a strong foundation that grows with your people, product, and purpose.',
  },
]

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Northstar home">
          northstar<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="eyebrow"><span className="eyebrow-dot" />A better way forward</div>
        <h1 id="hero-title">Make space for<br /><em>what matters.</em></h1>
        <p className="hero-copy">Northstar is a small strategy and design studio for people building what comes next. We help thoughtful teams shape clear ideas into meaningful work — with less noise and more momentum.</p>
        <a className="primary-button" href="#about">Explore our approach <span aria-hidden="true">↗</span></a>
        <div className="hero-note" aria-hidden="true"><span />Scroll to discover</div>
      </section>

      <section className="feature-section" id="about" aria-labelledby="feature-title">
        <div className="section-intro">
          <p className="section-label">What we believe</p>
          <h2 id="feature-title">Small shifts.<br />Lasting impact.</h2>
          <p className="section-context">Good work rarely comes from doing more. It comes from knowing what deserves your attention, then creating the clarity and confidence to move it forward.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <p className="feature-number">{feature.number}</p>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <p>Have a good idea?</p>
        <a href="mailto:hello@northstar.studio">hello@northstar.studio <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  )
}

