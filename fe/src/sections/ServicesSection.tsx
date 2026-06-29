import { SectionKicker, sectionShell } from '../components/ui';

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
    <section className={`${sectionShell} snap-start`} id="services" aria-labelledby="services-title">
      <SectionKicker>Services</SectionKicker>

      <div className="mt-5 max-w-205">
        <h2 className="m-0 text-[clamp(34px,4.8vw,44px)] font-black leading-[1.05] tracking-normal text-white" id="services-title">
          End-to-End Technology Solutions
        </h2>
        <p className="mt-1.5 max-w-190 text-[clamp(18px,2vw,22px)] leading-normal text-[#e8eef8e6]">
          A focused engineering team building business systems and AI automation â€”
          from workflow design to production deployment.
        </p>
      </div>

      <div className="mt-5.5 grid grid-cols-1 gap-4 min-[640px]:grid-cols-2 lg:grid-cols-3 lg:gap-x-4.5">
        {services.map((service) => (
          <article
            className="grid min-h-16 place-items-center rounded-2xl border border-white/15 border-r-[#6b4cff] border-b-[#6b4cff] bg-[linear-gradient(180deg,rgba(28,64,126,0.72),rgba(21,50,101,0.92)),#142f61] p-5 text-center text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_26px_rgba(0,0,0,0.18)]"
            key={service}
          >
            <span>{service}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
