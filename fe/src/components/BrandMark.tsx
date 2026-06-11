type BrandMarkProps = {
  variant?: 'header' | 'footer';
};

export function BrandMark({ variant = 'header' }: BrandMarkProps) {
  return (
    <a className={`brand brand--${variant}`} href="/" aria-label="AIONIX home">
      <span className="brand__symbol" aria-hidden="true">
        <span className="brand__bar brand__bar--left" />
        <span className="brand__bar brand__bar--right" />
        <span className="brand__cut" />
      </span>
      <span className="brand__copy">
        <strong>AIONIX</strong>
        <span>
          {variant === 'footer'
            ? 'AI SYSTEMS · AUTOMATION · INFRASTRUCTURE'
            : 'AI SYSTEMS'}
        </span>
      </span>
    </a>
  );
}
