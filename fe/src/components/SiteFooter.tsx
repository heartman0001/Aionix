import { BrandMark } from './BrandMark';

const footerColumns = [
  {
    title: 'Solutions',
    links: ['AI Automation', 'Internal Platforms', 'Analytics', 'Infrastructure'],
  },
  {
    title: 'Platform',
    links: ['AI Automation', 'Internal Platforms', 'Analytics', 'Infrastructure'],
  },
  {
    title: 'Company',
    links: ['AI Automation', 'Internal Platforms', 'Analytics', 'Infrastructure'],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-labelledby="footer-title" id="about">
      <div className="site-footer__inner">
        <div className="footer-brand">
          <BrandMark variant="footer" />
          <p id="footer-title">
            AIONIX builds AI systems, automation platforms and scalable
            infrastructure for modern enterprise teams.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h2>{column.title}</h2>
              {column.links.map((link) => (
                <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <div className="footer-support">
          <h2>Customer Support</h2>
          <a href="mailto:contact@aionixth.com">contact@aionixth.com</a>
          <span>Follow Us</span>
          <div className="footer-socials" aria-label="Social links">
            <a href="#linkedin" aria-label="LinkedIn" />
            <a href="#x" aria-label="X" />
            <a href="#github" aria-label="GitHub" />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AIONIX · all rights reserved</span>
          <span>• AI systems operational</span>
        </div>
      </div>
    </footer>
  );
}
