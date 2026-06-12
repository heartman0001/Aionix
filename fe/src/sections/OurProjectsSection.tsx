export function OurProjectsSection() {
  const filters = ['All', 'POS', 'ERP', 'CRM', 'Dashboard'];
  const projects = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    tag: 'POS',
    title: 'BI MALA',
    description: 'In a rapidly evolving tech landscape, businesses need a partner...',
  }));

  return (
    <section className="our-projects page-slide" id="our-projects" aria-labelledby="our-projects-title">
      <div className="section-kicker">
        <span aria-hidden="true" />
        OUR PROJECT
      </div>

      <div className="our-projects__heading">
        <h2 id="our-projects-title">Projects that drive <span className="highlight">real business outcomes</span></h2>
        <div className="project-filters" role="toolbar" aria-label="Project filters">
          {filters.map((f) => (
            <button key={f} className={`filter ${f === 'All' ? 'active' : ''}`} aria-pressed={f === 'All'}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="projects__grid" aria-live="polite">
        {projects.map((p) => (
          <article className="project-card" key={p.id}>
            <div className="project-card__media" aria-hidden="true">
              <div className="project-mock-image">Mockup</div>
            </div>

            <div className="project-card__body">
              <div className="project-card__tag">{p.tag}</div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__actions">
                <a className="button button--secondary" href="#">View Case Study →</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects__footer">
        <a className="button button--ghost" href="#">View All Projects →</a>
      </div>
    </section>
  );
}
