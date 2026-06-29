import { SectionKicker, sectionShell } from '../components/ui';
import AionixWhy from '../img/mainpage/AionixWhy.png';

const headingClass = 'mb-5 text-[28px] font-bold leading-[0.8] tracking-normal text-white md:text-[clamp(34px,4.8vw,44px)]';
const highlightClass = 'font-semibold text-[#35a3ff]';

export function WhyAionixSection() {
  return (
    <section className={`${sectionShell} snap-start`} id="why-aionix" aria-labelledby="why-aionix-title">
      <SectionKicker>Why Aionix</SectionKicker>

      <div className="mt-7 flex flex-col items-start gap-6 lg:flex-row lg:gap-[clamp(40px,6vw,80px)]">
        <div className="min-w-25 max-w-100">
          <h2 className={headingClass} id="why-aionix-title">The difference</h2>
          <h2 className={headingClass}>is in the</h2>
          <h2 className={`${headingClass} bg-[linear-gradient(90deg,#3170FB_50%,#7246ED_84%)] bg-clip-text text-transparent`}>
            architecture.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#e8eef8e6]">
            In a rapidly evolving tech landscape, businesses need a partner who understands
            both technology and business context â€” not just a vendor selling off-the-shelf
            solutions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#e8eef8e6]">
            What sets <span className={highlightClass}>AIONIX</span> apart is that{' '}
            <span className={highlightClass}>AI is the DNA</span> of every system we build â€” not a
            feature added later.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#e8eef8e6]">
            Every system is <span className={highlightClass}>custom-built</span> to match your actual
            workflow, never a one-size-fits-all template.
          </p>
        </div>

        <div className="relative flex min-h-90 items-start justify-center md:min-h-105 lg:min-h-120">
          <img
            className="h-auto w-[120%]"
            src={AionixWhy}
            alt="Diagram illustrating Aionix's AI-first, custom-built architecture approach."
          />
        </div>
      </div>
    </section>
  );
}
