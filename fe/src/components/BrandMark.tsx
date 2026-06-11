import logoSrc from '../img/brand/Aionix.png';

type BrandMarkProps = {
  variant?: 'header' | 'footer';
};

export function BrandMark({ variant = 'header' }: BrandMarkProps) {
  return (
    <a className={`brand brand--${variant}`} href="/" aria-label="AIONIX home">
      <span className="brand__symbol" aria-hidden="true">
        <img className="brand__img" src={logoSrc} alt="Aionix logo" />
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
