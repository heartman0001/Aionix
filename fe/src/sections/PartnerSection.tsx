import { useState } from 'react';
import { cx, sectionShell } from '../components/ui';
import partner_img from '../img/mainpage/next_co.png';
import partner_img2 from '../img/mainpage/inet_co.png';

const PARTNER_IMAGES = [
  partner_img,
  partner_img2,
  partner_img2,
  partner_img2,
  partner_img2,
  partner_img2,
];

export function PartnerSection() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(PARTNER_IMAGES.length / itemsPerPage);
  const visiblePartners = PARTNER_IMAGES.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section className={sectionShell}>
      <div className="flex items-center justify-center">
        <h2 className="m-0 text-[clamp(34px,4.8vw,44px)] font-bold leading-[0.8] tracking-normal text-white">Partners</h2>
      </div>
      <div className="mt-12.5 flex flex-wrap justify-center gap-6">
        {visiblePartners.map((logo, index) => (
          <div className="min-w-30 max-w-40 flex-[0_1_calc((100%-96px)/5)]" key={`${logo}-${index}`}>
            <img className="block h-auto w-full" src={logo} alt={`Partner logo ${index + 1}`} />
          </div>
        ))}
      </div>
      {pageCount > 1 && (
        <div className="mt-8.75 flex items-center justify-center gap-4">
          <button
            className="grid h-7.5 w-7.5 cursor-pointer place-items-center rounded-full border-0 bg-white/10 p-0 text-base leading-none text-white transition duration-150 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-35"
            type="button"
            onClick={() => setPage((current) => Math.max(0, current - 1))}
            disabled={page === 0}
            aria-label="Previous page"
          >
            {'<'}
          </button>
          <div className="flex gap-2.5">
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <button
                key={pageIndex}
                className={cx(
                  'h-3 w-3 cursor-pointer rounded-full border-0 p-0 text-transparent transition duration-150',
                  page === pageIndex
                    ? 'scale-110 bg-[linear-gradient(90deg,#1d6df2_0%,#35a3ff_100%)]'
                    : 'bg-white/20',
                )}
                type="button"
                onClick={() => setPage(pageIndex)}
                aria-label={`Go to page ${pageIndex + 1}`}
              />
            ))}
          </div>
          <button
            className="grid h-7.5 w-7.5 cursor-pointer place-items-center rounded-full border-0 bg-white/10 p-0 text-base leading-none text-white transition duration-150 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-35"
            type="button"
            onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}
            disabled={page === pageCount - 1}
            aria-label="Next page"
          >
            {'>'}
          </button>
        </div>
      )}
    </section>
  );
}
