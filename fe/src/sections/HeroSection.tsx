import { ArrowRight } from 'lucide-react';
import { heroMetrics, trustBadges } from '../data/home';
import { buttons } from '../components/ui';

export function HeroSection() {
  return (
    <section
      className="relative mx-auto min-h-auto w-[min(1068px,calc(100%-28px))] snap-start pt-[62px] pb-12 md:min-h-[calc(100vh-61px)] md:w-[min(1068px,calc(100%-40px))] md:pt-[clamp(76px,12vh,112px)] md:pb-16"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute bottom-14 left-1/2 h-42.5 w-[min(620px,72vw)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(35,100,220,0.44),transparent_67%)] blur-[22px]"
        aria-hidden="true"
      />

      <div className="relative z-[1] grid justify-items-center text-center">
        <h1
          className="m-0 max-w-210 text-[clamp(40px,12vw,58px)] font-black leading-[1.2] tracking-normal text-white md:text-[clamp(44px,7vw,72px)]"
          id="hero-title"
        >
          Powering the Future of
          <span className="mt-3 block bg-[linear-gradient(90deg,#d8efff_0%,#35a3ff_82%)] bg-clip-text text-transparent">
            Enterprise Technology
          </span>
        </h1>

        <p className="mt-6 max-w-193 text-[clamp(18px,2.3vw,22px)] leading-[1.3] text-white/90">
          AI Systems, Software, Automation, and Infrastructure engineered for
          organizations ready to lead. We build the backbone of tomorrow's
          enterprise.
        </p>

        <div className="mt-7 flex w-full flex-wrap justify-center gap-3 min-[520px]:w-auto md:gap-5" aria-label="Hero actions">
          <a className={`${buttons.primary} w-full min-[520px]:w-auto`} href="#start">
            Start Building
          </a>
          <a className={`${buttons.secondary} w-full min-[520px]:w-auto`} href="#products">
            See To Products
            <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-4.5 flex flex-wrap justify-center gap-3" aria-label="Delivery highlights">
          {trustBadges.map((badge) => (
            <span
              className="inline-flex min-h-6.25 items-center gap-2 rounded-full border border-[#deebf82e] bg-white/10 px-3 pl-2.5 text-[11px] text-white/90"
              key={badge}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#e6eef6e0]" aria-hidden="true" />
              {badge}
            </span>
          ))}
        </div>
      </div>

      <dl className="relative z-[1] mt-9.5 grid grid-cols-1 gap-8.5 border-t border-[#cde1f533] pt-10.5 min-[520px]:grid-cols-2 md:grid-cols-4 md:gap-6.5 md:pt-19">
        {heroMetrics.map((metric) => (
          <div className="grid justify-items-center text-center" key={metric.label}>
            <dt className="text-[clamp(18px,2vw,24px)] leading-[1.1] text-white/90">{metric.label}</dt>
            <dd className="mt-2 grid gap-px">
              <strong className="text-[clamp(34px,4vw,44px)] font-black leading-[0.94] text-white">{metric.value}</strong>
              <span className="text-[clamp(17px,2vw,22px)] leading-[1.1] text-white/90">{metric.detail}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
