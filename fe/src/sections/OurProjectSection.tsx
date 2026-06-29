import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { buttons, cx, SectionKicker, sectionShell } from '../components/ui';
import TestImg from '../img/mainpage/Test.png';
import TestImg2 from '../img/mainpage/Test2.png';

const filters = ['All', 'POS', 'ERP', 'CRM', 'Dashboard'];

type ProjectCardProps = {
  badge: string;
  image: string;
  title: string;
};

function ProjectCard({ badge, image, title }: ProjectCardProps) {
  return (
    <article className="relative flex min-h-55 flex-col justify-between overflow-hidden rounded-xl border border-[#73a6e82e] bg-[linear-gradient(180deg,rgba(21,38,70,0.72),rgba(8,18,38,0.9))] p-2 shadow-[0_18px_40px_rgba(6,20,48,0.6)] transition duration-200 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(6,20,48,0.72)] min-[640px]:min-h-70">
      <div className="absolute top-3.5 left-3.5 z-[4] rounded-lg bg-[#0F2857] px-4.5 py-0.75 text-xs font-semibold text-white">
        {badge}
      </div>
      <div className="flex h-40 w-full items-center justify-center rounded-[3px] font-extrabold tracking-normal text-[#050c18]" aria-hidden="true">
        <div className="h-[98%] w-[98%]">
          <img className="h-full w-full rounded-md object-cover" src={image} alt="Project mock" />
        </div>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <h3 className="m-0 text-base font-black text-white">{title}</h3>
        <p className="m-0 text-[13px] leading-[1.35] text-white/85">
          In a rapidly evolving tech landscape, businesses need a partner that combines product, engineering, and design to ship quickly.
        </p>
        <div className="mt-2 self-start">
          <button className={cx(buttons.card, buttons.compact)}>
            View Case Study <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function OurProjectSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <section className={`${sectionShell} snap-start`} id="products" aria-labelledby="our-projects-title">
      <SectionKicker>OUR PROJECTS</SectionKicker>

      <div className="mt-7">
        <div>
          <h2 className="mb-5 text-[clamp(34px,4.8vw,44px)] font-bold leading-[0.8] tracking-normal text-white" id="our-projects-title">
            Projects That drive
          </h2>
          <h2 className="mb-5 bg-[linear-gradient(90deg,#3170FB_50%,#7246ED_84%)] bg-clip-text text-[clamp(34px,4.8vw,44px)] font-bold leading-[0.8] tracking-normal text-transparent">
            Real business outcomes
          </h2>
        </div>

        <div className="mt-4.5 flex items-center gap-2.5">
          {filters.map((filter) => (
            <button
              key={filter}
              className={cx(
                'cursor-pointer rounded-[9px] border border-white/5 px-4.5 py-1.5 text-[13px] font-bold text-white',
                activeFilter === filter
                  ? 'bg-[linear-gradient(90deg,#1d6df2_0%,#35a3ff_100%)] shadow-[0_8px_24px_rgba(29,109,242,0.18)]'
                  : 'bg-white/5',
              )}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5.5 min-[640px]:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProjectCard badge="ERP" image={TestImg2} title="He mha" key={i} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5.5 min-[640px]:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProjectCard badge="POS" image={TestImg} title="BI MALA" key={i} />
          ))}
        </div>

        <div className="mt-5.5 grid justify-items-center">
          <button className={cx(buttons.card, buttons.compact)}>
            View All Projects <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
