import {
  BrainCircuit,
  BriefcaseBusiness,
  ClipboardList,
  Cloud,
  Goal,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { SectionKicker, sectionShell } from '../components/ui';
import { solutions, type SolutionIcon } from '../data/home';

const solutionIcons: Record<SolutionIcon, LucideIcon> = {
  infrastructure: BriefcaseBusiness,
  development: Sparkles,
  automation: ClipboardList,
  llm: BrainCircuit,
  cloud: Cloud,
  custom: Goal,
};

export function SolutionsSection() {
  return (
    <section className={`${sectionShell} snap-start`} id="solutions" aria-labelledby="solutions-title">
      <SectionKicker>Solutions</SectionKicker>

      <div className="mt-5 max-w-200">
        <h2 className="m-0 text-[clamp(34px,4.8vw,44px)] font-black leading-[1.05] tracking-normal text-white" id="solutions-title">
          Built for every operation
        </h2>
        <p className="mt-1.5 max-w-196 text-[clamp(18px,2vw,22px)] leading-[1.08] text-[#e8eef8e6]">
          From intelligent automation to enterprise platforms â€” we engineer
          modern digital systems that transform organizations.
        </p>
      </div>

      <div className="mt-4.5 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-3 lg:gap-x-7">
        {solutions.map((solution) => {
          const Icon = solutionIcons[solution.icon];

          return (
            <article
              className="min-h-0 rounded-xl border border-[#73a6e857] border-r-[#6b4cff] border-b-[#6b4cff] bg-[linear-gradient(180deg,rgba(28,64,126,0.72),rgba(21,50,101,0.92)),#142f61] p-4.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_16px_40px_rgba(0,0,0,0.16)] min-[520px]:min-h-52.5 md:min-h-54"
              key={solution.title}
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-[linear-gradient(135deg,#7D53F4_0%,#0E377B_58%,#030C1B_100%)] text-white shadow-[0_12px_30px_rgba(9,22,55,0.36)]" aria-hidden="true">
                <Icon size={34} strokeWidth={2.2} />
              </div>
              <h3 className="mt-3 mb-0.5 text-[21px] font-black leading-[1.1] tracking-normal text-white">{solution.title}</h3>
              <p className="m-0 text-[19px] leading-[1.08] text-white/95 min-[520px]:text-[21px]">{solution.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
