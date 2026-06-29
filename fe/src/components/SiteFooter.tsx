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
    <footer className="snap-end border-t border-sky-400/55 bg-[#020915]" aria-labelledby="footer-title" id="about">
      <div className="mx-auto grid w-[min(1068px,calc(100%-28px))] grid-cols-1 gap-7 py-8.5 pb-6.5 min-[520px]:grid-cols-2 md:w-[min(1068px,calc(100%-40px))] md:gap-9 md:pt-10.5 lg:grid-cols-[minmax(220px,1.35fr)_2.2fr_minmax(170px,0.95fr)] lg:gap-x-18">
        <div className="grid content-start gap-5">
          <BrandMark variant="footer" />
          <p className="max-w-65 text-[13px] leading-[1.3] text-[#e6eef8d6]" id="footer-title">
            AIONIX builds AI systems, automation platforms and scalable
            infrastructure for modern enterprise teams.
          </p>
        </div>

        <nav className="order-3 grid grid-cols-1 gap-5.5 min-[520px]:col-span-full min-[520px]:grid-cols-3 min-[520px]:gap-6 lg:order-none lg:col-auto lg:grid-cols-3 lg:gap-13" aria-label="Footer navigation">
          {footerColumns.map((column) => (
            <div className="grid content-start gap-2" key={column.title}>
              <h2 className="mb-1 text-[13px] font-black leading-none text-white">{column.title}</h2>
              {column.links.map((link) => (
                <a
                  className="text-xs leading-[1.2] text-[#e6eef8d1] transition-colors duration-150 hover:text-sky-400"
                  href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                  key={link}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <div className="grid content-start gap-2 min-[520px]:justify-self-end lg:justify-self-auto">
          <h2 className="mb-1 text-[13px] font-black leading-none text-white">Customer Support</h2>
          <a className="text-xs leading-[1.2] text-[#e6eef8d1] transition-colors duration-150 hover:text-sky-400" href="mailto:contact@aionixth.com">contact@aionixth.com</a>
          <span className="mt-1.5 text-xs font-extrabold leading-[1.2] text-white">Follow Us</span>
          <div className="mt-0.5 flex gap-3" aria-label="Social links">
            <a className="h-5 w-5 rounded-full bg-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.16)] hover:bg-sky-400" href="#linkedin" aria-label="LinkedIn" />
            <a className="h-5 w-5 rounded-full bg-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.16)] hover:bg-sky-400" href="#x" aria-label="X" />
            <a className="h-5 w-5 rounded-full bg-white/85 shadow-[0_0_0_1px_rgba(255,255,255,0.16)] hover:bg-sky-400" href="#github" aria-label="GitHub" />
          </div>
        </div>

        <div className="order-4 col-span-full mt-1 flex flex-col gap-4.5 border-t border-white/60 pt-5 text-xs leading-[1.2] text-[#e6eef8d1] min-[520px]:mt-4 min-[520px]:flex-row min-[520px]:justify-between lg:mt-13.5">
          <span>Â© 2026 AIONIX Â· all rights reserved</span>
          <span>â€¢ AI systems operational</span>
        </div>
      </div>
    </footer>
  );
}
