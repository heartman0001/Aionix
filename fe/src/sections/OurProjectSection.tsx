import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import TestImg from '../img/mainpage/Test.png';
import TestImg2 from '../img/mainpage/Test2.png';

export function OurProjectSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'POS', 'ERP', 'CRM', 'Dashboard'];

  return (
    <section className="why-aionix page-slide" id="products" aria-labelledby="our-projects-title">
      <div className="section-kicker">
        <span aria-hidden="true" />
        OUR PROJECTS
      </div>

      <div className="our-projects__content">
        <div className="our-projects__text">
          <h2 id="our-projects-title">Projects That drive</h2>
          <h2 id="our-projects-aa">Real business outcomes</h2>
        </div>
        
        <div className="our-projects__filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${activeFilter === filter ? 'filter-pill--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
{/* Mock--Up เด้อสู */}
        <div className="projects-grid" aria-live="polite">
          {Array.from({ length: 3 }).map((_, i) => (
            <article className="project-card" key={i}>
              <div className="project-badge">ERP</div>
              <div className="project-card__mockup" aria-hidden="true">
                <div className="mock-screen">
                  <img src={TestImg2} alt="Project mock" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />
                </div>
              </div>

              <div className="project-card__meta">
                <h3>He mha</h3>
                <p>In a rapidly evolving tech landscape, businesses need a partner that combines product, engineering, and design to ship quickly.</p>
                <div className="cta">
                  <button className="button button--card button--compact">View Case Study <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" /></button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-grid" aria-live="polite">
          {Array.from({ length: 3 }).map((_, i) => (
            <article className="project-card" key={i}>
              <div className="project-badge">POS</div>
              <div className="project-card__mockup" aria-hidden="true">
                <div className="mock-screen">
                  <img src={TestImg} alt="Project mock" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />
                </div>

              </div>

              <div className="project-card__meta">
                <h3>BI MALA</h3>
                <p>In a rapidly evolving tech landscape, businesses need a partner that combines product, engineering, and design to ship quickly.</p>
                <div className="cta">
                  <button className="button button--card button--compact">View Case Study <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" /></button>
                </div>
              </div>
            </article>
          ))}
        </div>
{/* End Mock--Up เด้อสู */}

        <div className="view-all-projects-button">
          <button className="button button--card button--compact">View All Projects <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" /></button>
        </div>
      </div>

    

    </section>
  );
}
