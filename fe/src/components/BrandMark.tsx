import logoSrc from '../img/brand/Aionix.png';
import { cx } from './ui';

type BrandMarkProps = {
  variant?: 'header' | 'footer';
};

export function BrandMark({ variant = 'header' }: BrandMarkProps) {
  const isFooter = variant === 'footer';

  return (
    <a
      className={cx(
        'inline-flex items-center gap-2.5',
        isFooter ? 'min-w-0 items-start' : 'min-w-36.5',
      )}
      href="/"
      aria-label="AIONIX home"
    >
      <span
        className={cx('relative inline-block', isFooter ? 'h-9.75 w-8.5' : 'h-7.5 w-6.5')}
        aria-hidden="true"
      >
        <img className={cx('mt-0.75 h-auto', isFooter ? 'w-8.5' : 'w-6.5')} src={logoSrc} alt="Aionix logo" />
      </span>
      <span className={cx('grid leading-none', isFooter ? 'gap-1.25 pt-0.5' : 'gap-px')}>
        <strong className={cx('font-extrabold tracking-normal', isFooter ? 'text-lg' : 'text-sm')}>AIONIX</strong>
        <span className={cx('font-medium', isFooter ? 'text-[9px] text-[#e7eef8bd] md:whitespace-nowrap' : 'text-[8px] text-[#b9c5d3]')}>
          {isFooter ? 'AI SYSTEMS Â· AUTOMATION Â· INFRASTRUCTURE' : 'AI SYSTEMS'}
        </span>
      </span>
    </a>
  );
}
