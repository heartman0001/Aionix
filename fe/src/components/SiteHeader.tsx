import { Moon } from 'lucide-react';
import { navItems } from '../data/home';
import { BrandMark } from './BrandMark';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <BrandMark />

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className="site-actions">
          <button className="icon-button" type="button" aria-label="Switch theme">
            <Moon size={20} strokeWidth={2.2} />
          </button>
          <button className="language-button" type="button">
            EN
          </button>
          <a className="button button--primary button--compact" href="#signin">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
