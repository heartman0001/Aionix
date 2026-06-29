import type { ReactNode } from 'react';

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const buttonBase =
  'inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-xl border border-transparent px-7 text-sm font-extrabold transition duration-150 hover:-translate-y-px';

export const buttons = {
  primary: cx(buttonBase, 'border-[#1d6df2] bg-[#1d6df2] text-white shadow-[0_12px_32px_rgba(29,109,242,0.32)]'),
  secondary: cx(buttonBase, 'gap-2 border-[#484F5B] bg-[#1E2835] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'),
  card: cx(buttonBase, 'border-[#1d6df2] bg-transparent text-white'),
  compact: 'min-h-8 rounded-[5px] px-4.5 md:px-6.5',
};

export const sectionShell =
  'mx-auto w-[min(1068px,calc(100%-28px))] py-[clamp(42px,6vh,58px)] pb-17 md:w-[min(1068px,calc(100%-40px))]';

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/90 border-r-[#6b4cff] border-b-[#6b4cff] px-4 text-[22px] font-black uppercase leading-none text-white md:min-h-11 md:text-[26px]">
      <span className="h-4 w-4 rounded-full bg-[#7a55d8]" aria-hidden="true" />
      {children}
    </div>
  );
}
