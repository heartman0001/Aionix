import { ArrowRight } from 'lucide-react';
import { heroMetrics, trustBadges } from '../data/home';

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <h1 id="hero-title">
          Powering the Future of
          <span>Enterprise Technology</span>
        </h1>

        <p className="hero__lead">
          AI Systems, Software, Automation, and Infrastructure engineered for
          organizations ready to lead. We build the backbone of tomorrow's
          enterprise.
        </p>

        <div className="hero__actions" aria-label="Hero actions">
          <a className="button button--primary" href="#start">
            Start Building
          </a>
          <a className="button button--secondary" href="#products">
            See To Products
            <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>

        <div className="trust-badges" aria-label="Delivery highlights">
          {trustBadges.map((badge) => (
            <span className="trust-badge" key={badge}>
              <span aria-hidden="true" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      <dl className="hero-metrics">
        {heroMetrics.map((metric) => (
          <div className="hero-metric" key={metric.label}>
            <dt>{metric.label}</dt>
            <dd>
              <strong>{metric.value}</strong>
              <span>{metric.detail}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
