const services = [
  'Full Stack Development',
  'AI Integration',
  'System Architecture',
  'Automation Engineering',
  'API Development',
  'Dashboard & Admin Systems',
  'Database Systems',
  'DevOps & Deployment',
  'Maintenance & Support',
];

export function ServicesSection() {
  return (
    <section className="services page-slide" id="services" aria-labelledby="services-title">
      <div className="section-kicker">
        <span aria-hidden="true" />
        Services
      </div>

      <div className="services__heading">
        <h2 id="services-title">End-to-End Technology Solutions</h2>
        <p>
          A focused engineering team building business systems and AI automation —
          from workflow design to production deployment.
        </p>
      </div>

      <div className="services__grid">
        {services.map((service) => (
          <article className="service-card" key={service}>
            <span>{service}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
