import { Moon } from 'lucide-react';
import { navItems } from '../data/home';
import { BrandMark } from './BrandMark';
import { buttons, cx } from './ui';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-t-3 border-[#1599ff] bg-[#030a17f0] backdrop-blur-lg">
      <div className="mx-auto grid min-h-15.5 w-[min(1068px,calc(100%-28px))] grid-cols-1 items-center gap-3.5 py-2.5 min-[520px]:grid-cols-[auto_auto] md:h-14.5 md:min-h-0 md:w-[min(1068px,calc(100%-40px))] md:grid-cols-[auto_1fr_auto] md:gap-8 md:py-0">
        <BrandMark />

        <nav
          className="order-3 col-span-full flex justify-start gap-4.5 overflow-x-auto pb-1 md:order-none md:col-auto md:justify-center md:gap-8.5 md:overflow-visible md:pb-0"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              className="text-sm font-bold text-[#f4f7fb] transition duration-150 hover:-translate-y-px hover:text-[#35a3ff]"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-start gap-2.5 md:justify-end md:gap-4">
          <button className="grid h-7 w-7 cursor-pointer place-items-center border-0 bg-transparent text-[#f7fbff]" type="button" aria-label="Switch theme">
            <Moon size={20} strokeWidth={2.2} />
          </button>
          <button className="grid h-7 w-7 cursor-pointer place-items-center border-0 bg-transparent text-sm font-bold text-[#f4f7fb]" type="button">
            EN
          </button>
          <a className={cx(buttons.primary, buttons.compact)} href="#signin">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
