import { whyAionixFeatures } from '../data/home';
import AionixWhy from '../img/mainpage/AionixWhy.png';

export function WhyAionixSection() {
  return (
    <section className="why-aionix page-slide" id="why-aionix" aria-labelledby="why-aionix-title">
      <div className="section-kicker">
        <span aria-hidden="true" />
        Why Aionix
      </div>

      <div className="why-aionix__content">
        <div className="why-aionix__text">
          <h2 id="why-aionix-title">The difference</h2>
          <h2 id="why-aionix-title">is in the</h2>
          <h2 id="why-aionix-aa">architecture.</h2>

          <p>
            In a rapidly evolving tech landscape, businesses need a partner who understands
            both technology and business context — not just a vendor selling off-the-shelf
            solutions.
          </p>
          <p>
            What sets <span className="highlight">AIONIX</span> apart is that{' '}
            <span className="highlight">AI is the DNA</span> of every system we build — not a
            feature added later.
          </p>
          <p>
            Every system is <span className="highlight">custom-built</span> to match your actual
            workflow, never a one-size-fits-all template.
          </p>
        </div>

        <div className="why-aionix__diagram">
            <img
              src={AionixWhy}
              alt="Diagram illustrating Aionix's AI-first, custom-built architecture approach."
            />
        </div>
      </div>
    </section>
  );
}
