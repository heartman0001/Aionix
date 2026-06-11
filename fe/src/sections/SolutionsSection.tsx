import {
  BrainCircuit,
  BriefcaseBusiness,
  ClipboardList,
  Cloud,
  Goal,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
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
    <section className="solutions page-slide" id="solutions" aria-labelledby="solutions-title">
      <div className="section-kicker">
        <span aria-hidden="true" />
        Solutions
      </div>

      <div className="solutions__heading">
        <h2 id="solutions-title">Built for every operation</h2>
        <p>
          From intelligent automation to enterprise platforms — we engineer
          modern digital systems that transform organizations.
        </p>
      </div>

      <div className="solutions__grid">
        {solutions.map((solution) => {
          const Icon = solutionIcons[solution.icon];

          return (
            <article className="solution-card" key={solution.title}>
              <div className="solution-card__icon" aria-hidden="true">
                <Icon size={34} strokeWidth={2.2} />
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
